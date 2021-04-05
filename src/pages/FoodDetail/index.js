import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {FoodDummy6, IcBackWhite} from '../../assets'
import {Button, Counter, Rating} from '../../components'

const FoodDetail = ({navigation}) => {
    return (
        <View style={styles.page} >
            <ImageBackground source={FoodDummy6} style={styles.cover} >
                <TouchableOpacity style={styles.back} >
                    <IcBackWhite/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content} >
                <View style={styles.mainContaint}>
                <View style={styles.ProductContainer}>
                    <View>
                        <Text style={styles.title} > Chery Healty</Text>
                        <Rating/>
                    </View>
                    <Counter/>
                </View>
                <Text style={styles.desc} >
                    Makanan Khas daeralkdjf aldkfjads adlfkadjf aladfja dflakdfjaldfj left: 
                    adfjadlf adlfkajdf 
                    adfjladkfja df
                    ladfjasdfj,
                </Text>

                <Text style={styles.label}>Ingredients:</Text>
                <Text style={styles.desc}>Sledri, bawang daun, bawang bodas</Text>

                </View>
                <View style={styles.footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.labelTotal}>Total Price: </Text>
                        <Text style={styles.priceTotal}>IDR 14.289.000 </Text>
                    </View>
                    <View style={styles.button}>
                        <Button text="Order Now" onPress={() =>navigation.navigate('OrderSummary')} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    cover:{
        height:330,
        paddingTop:26,
        paddingLeft:22
    },
    back:{
        
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        backgroundColor:'white',
        marginTop:-40,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        paddingTop:26,
        paddingHorizontal:16,
        flex:1
    },
    page:{
        flex:1
    },
    title:{
        fontSize:16,
        fontFamily:'Poppins-Regular',
        color:'#020202'
    },
    ProductContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:14
    },
    desc:{
        fontSize:14,
        fontFamily:'Poppins-Regular',
        color:'#8d92A3',
    marginBottom:16
    },
    label:{fontSize:14, fontFamily:'Poppins-Regular', color:'#020202', marginBottom:4},
    mainContaint:{
        flex:1
    },
    footer:{
        flexDirection:'row',
        alignItems:'center'
    },
    button:{
        width:163
    },
    priceContainer:{
        flex:1,
        paddingVertical:16,
    },
    labelTotal:{fontSize:13, fontFamily:'Poppins-Regular', color:'#8D92A3'},
    priceTotal:{fontSize:18, fontFamily:'Poppins-Regular', color:'#020202'},
})
