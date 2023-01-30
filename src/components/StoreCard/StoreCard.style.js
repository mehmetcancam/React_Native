import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#f8f8ff',
        margin: 10,
        borderRadius: 10,
    },

    image: {
        flex:1,
        height: Dimensions.get('window').height / 3, borderRadius: 5,
        margin: 15,
        resizeMode: 'contain',
        
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },

    price: {
        fontSize: 15,
    },

    inner_container: {
        padding: 3,
        
    },

    stock_control: {
        color: '#dc3535',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

})