import React from "react";
import { SafeAreaView,View,Text,FlatList, StyleSheet, ScrollView, Image, Dimensions, TextInput,numColumns } from "react-native";
import StoreCard from "./components/StoreCard";
import patikaStore_data from './patikaStore_data.json'

function App(){

  const renderItems = ({item}) => <StoreCard items = {item} />; 

  return(
  
  <SafeAreaView style={styles.container}>
    
    <Text style={styles.header}>PATIKASTORE</Text>
    <TextInput style={styles.text_input} placeholder="ARA..."></TextInput>
    
    <FlatList
    numColumns={2}
    data={patikaStore_data}
    renderItem ={renderItems}
    
    />

  </SafeAreaView>

  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ffff',
  },
  header: {
    fontSize: 25,
    color: '#8a2be2',
    fontWeight: 'bold',
    margin: 10,
  },
  text_input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  }
})

export default App;
