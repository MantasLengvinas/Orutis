import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Background from "../background/Background";
import MyHeader from "../header/MyHeader";
import TextStyles  from "../styles/Text";

export default function ({ navigation, route }) {
  let hours = new Date().getHours();
  let dabarOrai = route.params.Days[0].Timeframes[Math.trunc(((hours + 23) % 24) / 3)];

  console.log(dabarOrai.feelslike_c);
  console.log(dabarOrai.cloudtotal_pct);

  // naudok dabarOrai
  // dabarOrai.feelslike_c // dabar temp
  var virsus;
  if(dabarOrai.feelslike_c < 3){
    virsus = 'Žieminė striukė';
  } else if (dabarOrai.feelslike_c > 3 && dabarOrai.feelslike_c < 10 ){
    virsus = 'Rudeninė striukė/liemenė';
  } else if (dabarOrai.feelslike_c > 10 && dabarOrai.feelslike_c <15){
    virsus = 'Džemperis';
  } else {
    virsus = 'Marškinėliai';
  }

  var apacia;
  if(dabarOrai.feelslike_c < 10){
    apacia = 'Šiltos kelnės';
  }  else if (dabarOrai.feelslike_c > 10 && dabarOrai.feelslike_c < 18){
    apacia = 'Plonos kelnės';
  } else {
    apacia = 'Šortai';
  }

  var avalynė;
  if(dabarOrai.feelslike_c < 3){
    avalynė = 'Žieminiai batai';
  } else if (dabarOrai.feelslike_c > 3 && dabarOrai.feelslike_c < 8 ){
    avalynė = 'Šiltesni batai';
  } else if (dabarOrai.feelslike_c > 8 && dabarOrai.feelslike_c < 20){
    avalynė = 'Laisvalaikio batai';
  } else {
    avalynė = 'Kroksai';
  }

  var akseksuarai;
  if(dabarOrai.cloudtotal_pct < 20) {
    akseksuarai = 'Akiniai nuo saulės'
  } else if (dabarOrai.cloudtotal_pct > 20 && dabarOrai.cloudtotal_pct < 50){
    akseksuarai = 'Xuj znaet'
  } else {
    akseksuarai = "Skėtis"
  }
  return (
    <Background>
      <MyHeader navigation={navigation} goBack={true}/>
        <Text style={[TextStyles.general, {marginTop: 30}]}> Aprangos pasiūlymai </Text>
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
            <Text style={styles.txt}>{'\u2022' + " "}{virsus}</Text>
            <Text style={styles.txt}>{'\u2022' + " "}{apacia}</Text>
            <Text style={styles.txt}>{'\u2022' + " "}{avalynė}</Text>
            <Text style={styles.txt}>{'\u2022' + " "}{akseksuarai}</Text>
        </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontWeight: "bold",
    fontSize: 20
  }
});