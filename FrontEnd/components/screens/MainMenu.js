import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Background from "../background/Background";
import TextStyles from "../styles/Text";
import InputStyles from "../styles/Input";
import MyHeader from "../header/MyHeader";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../buttons/StyledButton";
import * as Location from "expo-location";

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

export default function ({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [upd, doUpdate] = useState(null);

  let weather = <></>;

  //Get Location================
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      else{
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      }
    })();
  }, []);
  //=================

  //get weather data=======
  if (location && !upd) {
    const lat = Math.round(location.coords.latitude*100)/100;
    const lon = Math.round(location.coords.longitude*100)/100;
    console.log(lat +" " +lon);
    
    fetch("http://api.weatherunlocked.com/api/forecast/"+lat+","+lon+"?app_id=b188c162&app_key=62fd3d2f66c74f7b9d1064538c497646").then((response) => {
      //console.log(response);
      response.json().then((data) => {
        global.weather = data;
        doUpdate(data.Days[0].date);
      });
    });
  }

  if (errorMsg) {
  weather=<Text>{errorMsg}</Text>;
  }
  if(upd){
    console.log(global.weather);
    weather=<Text>weather</Text>;
  }
  //===========

  return (
    <Background style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MyHeader navigation={navigation} goBack={false} />
      <Text style={[TextStyles.general, { marginTop: 40 }]}>Šiandienos orų prognozė</Text>

      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
        {weather}
      </View>
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
});
