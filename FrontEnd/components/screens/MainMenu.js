import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Background from "../background/Background";
import TextStyles from "../styles/Text";
import InputStyles from "../styles/Input";
import MyHeader from "../header/MyHeader";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../buttons/StyledButton";
import { cos } from "react-native-reanimated";

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

    //const [orai, updateOrus] = useState({});
    const [upd, doUpdate] = useState("waiting");

    //global.weather = "cring";
   // let imag = <Image style={styles.icon} source={require("../../assets/raster/WeatherIcons/SauleDebesisVejasLietus.png")} />;
   //console.log(global.weather);

   fetch("http://api.weatherunlocked.com/api/forecast/51.50,-0.12?app_id=b188c162&app_key=62fd3d2f66c74f7b9d1064538c497646")
   .then(response=> {
        //console.log(response);
        response.json().then(data=>{global.weather=data;doUpdate(data.Days[0].date)});
   })

   let weather =<></>;
   if(upd !=="waiting")
   {
        console.log(global.weather);
   }
   

    return (
            <Background style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <MyHeader navigation={navigation} goBack={false} />
                <Text style={[TextStyles.general, { marginTop: 40 }]}>Šiandienos orų prognozė</Text>

                <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                    <Text>{upd}</Text>  
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
