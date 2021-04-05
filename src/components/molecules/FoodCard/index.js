import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import {FoodDummy1, IcStarOff, IcStarOn} from '../../../assets'; 
import Rating from '../Rating';

const FoodCard = ({image}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.text} >Cherry Healty</Text>
            <View style={styles.ratingcontainer}>
                <View style={styles.starcontainer}>
                    <Rating/>
                </View>
                <Text>4.5</Text>
            </View>
        </View>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    container:{
        width:200,
        backgroundColor:'white',
        borderRadius:8,
        shadowColor:'black',
        shadowOffset:{width:0, height:7},
        shadowOpacity:10,
        elevation:14,
        
        overflow:'hidden',
        marginRight:24
    },
    text:{
        fontSize:16,
        fontFamily:'Poppins-Regular',
        color:'#020202'
    },
    starcontainer:{
        flexDirection:'row'
    },

    ratingcontainer:{
        flexDirection:'row',
        
    },
    image:{
        width:200,
        height:140,
        resizeMode:'cover'
    }
})
