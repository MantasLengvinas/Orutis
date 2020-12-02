import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

import Background from "../background/Background";
import TextStyles from "../styles/Text";
import InputStyles from "../styles/Input";
import MyHeader from "../header/MyHeader";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../buttons/StyledButton";
import * as Location from "expo-location";
import ImgData from "../data/ImageSources";

// import DebLiet from "../../assets/raster/WeatherIcons/DebesisLietus.png";
// import DebLietSnieg from "../../assets/raster/WeatherIcons/DebesisLietusSniegas.png";
// import DebSnieg from "../../assets/raster/WeatherIcons/DebesisSniegas.png";
// import DebVejasLiet from "../../assets/raster/WeatherIcons/DebesisVejasLietus.png";
// import Saul from "../../assets/raster/WeatherIcons/Saule.png";
// import SaulDeb from "../../assets/raster/WeatherIcons/SauleDebesis.png";
// import SaulDebLiet from "../../assets/raster/WeatherIcons/SauleDebesisLietus.png";
// import SaulDebSnieg from "../../assets/raster/WeatherIcons/SauleDebesisSniegas.png";
// import SaulDebSniegVejas from "../../assets/raster/WeatherIcons/SauleDebesisSniegasVejas.png";
// import SaulDebVejas from "../../assets/raster/WeatherIcons/SauleDebesisVejas.png";
// import SaulDebVejasLiet from "../../assets/raster/WeatherIcons/SauleDebesisVejasLietus.png";

let globa = {};

function Orai() {
  let hours = new Date().getHours();
  //console.log(Math.trunc(((hours+23)%24)/3));
  let nowWeather = globa.Days[0].Timeframes[Math.trunc(((hours + 23) % 24) / 3)];
  let iconId = nowWeather.wx_icon;
  //let img = <></>;

  //globa;
  //console.log(ImgData);
  try {
    //return <></>;
    return (
      <>
        <Image style={styles.icon} source={ImgData[iconId]} />
        <Text style={{ fontSize: 70 }}>{nowWeather.feelslike_c}°C</Text>
      </>
    );
  } catch {
    return <Text>No such image in image library: {iconId}</Text>;
  }
}

export default function ({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [hasWeather, updateWeather] = useState(null);

  let weather = <></>;

  //Get Location================

  useEffect(() => {
    //let hours = new Date().getHours();
    //console.log(Math.trunc(((hours+23)%24)/3));
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      } else {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      }
    })();
  }, []);

  //=================

  //get weather data=======
  if (location && !hasWeather) {
    const lat = Math.round(location.coords.latitude * 100) / 100;
    const lon = Math.round(location.coords.longitude * 100) / 100;
    //console.log(lat +" " +lon);

    fetch("http://api.weatherunlocked.com/api/forecast/" + lat + "," + lon + "?app_id=b188c162&app_key=62fd3d2f66c74f7b9d1064538c497646")
      .then((response) => {
        //console.log(response);
        response.json().then((data) => {
          globa = data;
          updateWeather(data.Days[0].date);
        });
      })
      .catch((err) => setErrorMsg("Error when connecting to weather api"));
  }

  if (errorMsg) {
    weather = <Text>{errorMsg}</Text>;
  }
  if (hasWeather) {
    //console.log(globa);
    //weather = <Text>weather</Text>;
    weather = Orai();
  }
  //===========

  return (
    <Background style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MyHeader navigation={navigation} goBack={false} />
      <Text style={[TextStyles.general, { marginTop: 40 }]}>Šiandienos orų prognozė</Text>

      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>{weather}</View>
    </Background>
  );
}

const styles = StyleSheet.create({
  privacy: {
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    width: 225,
    marginTop: 20,
    fontSize: 17,
  },
  icon: {
    width: 180,
    height: 180,
    marginBottom: 30,
  },
});
