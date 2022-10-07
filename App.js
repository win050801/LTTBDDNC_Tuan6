import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,FlatList,Alert } from 'react-native';
const DATA = [
  {
    id: "1",
    text: "Text1",
   
  
  }, 
  {
    id: "2",
    text: "Text2",
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  
  <View style={styles.container}>
    
    <View style={{flexDirection:'row',alignItems:'center',height:70,justifyContent:'space-between',padding:10,borderBottomWidth:0.5,backgroundColor:'white'}}>
      <Text>{item.id}</Text>
      <Text>{item.text}</Text>
      <TouchableOpacity style={styles.btnDone}><Text>DONE</Text></TouchableOpacity>
    </View>
  </View>
  
);


export default function App() {
  
  
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };
  
  const[textip,setText]=useState()
  // const chaneText = () => {
  //   this.setText()
  // }
  console.log(textip);
  const onPress = () => {
  DATA.push({id:DATA.length+1,text:textip})
 
  // Alert.alert(textip)
}


  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex:1 , flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',padding:50}}>
          <TextInput style={styles.textinput} placeholder='Text' onChangeText={(text) => setText(text)}></TextInput>
          <TouchableOpacity style={styles.btnAdd} onPress={onPress} >
            <Image style={{width:30,height:30}} source={require('./image/cong.png')}></Image>
          </TouchableOpacity>
        </View>
      </View >
      <View style={styles.body}>
      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    
  },
  header:{
    flex:1,
    backgroundColor:'white'
    
  },
  body:{
    flex:4,
    
  },
  footer:{
    flex:1
  },
  textinput:{
    borderWidth:1,
    height:40,
    width:250,
    borderRadius:5,
    
  },
  btnAdd:{
    width:40,
    height:40,
    borderWidth:1,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  },
  btnDone:{
    width:70,
    height:40,
    borderWidth:1,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
  },
});
