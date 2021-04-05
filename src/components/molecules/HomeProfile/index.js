import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ProfileDummy } from '../../../assets'

const HomeProfile = () => {
    return (
        <View>
           <View style={styles.profileContainer} >
                <View>
                    <Text style={styles.Appname} >Food Market</Text>
                    <Text style={styles.dec} >Let's get some foods </Text>
                </View>
                <Image source={ProfileDummy} styles={styles.profile} />
            </View>
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    profile:{
        width:50,
        height:50,
        borderRadius:8
    },
    profileContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:24,
        paddingTop:32,
        paddingBottom:24,
        backgroundColor:'white'
    },
    Appname:{
        fontSize:22,
        fontFamily:'Poppins-Medium', 
        color:'#020202'
    },
    dec:{
        fontSize:14,
        fontFamily:'Poppins-Light',
        color: '#8d92A3'
    },
})
