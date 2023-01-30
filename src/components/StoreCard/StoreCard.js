import React, {Component} from "react";
import { View,Text,Image, StyleSheet } from "react-native";
import styles from './StoreCard.style';







const StoreCard = ({items}) => {

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: items.imgURL}}></Image> 
            <View style={styles.inner_container}>
                <Text style={styles.title}>{items.title}</Text>
                <Text style={styles.price}>{items.price}</Text>
                <Text style={styles.stock_control}>{items.inStock ? " " : "STOKTA YOK"}</Text>
            </View>



        </View>


    );



};

export default StoreCard;  