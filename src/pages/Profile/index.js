import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ProfileDummy } from '../../assets'
import {ProfileTabSection} from '../../components'

const Profile = () => {
    return (
        <View style={styles.page} >
            <View style={styles.profileDetail}>
            <View style={styles.photo}>
                    <View style={styles.borderFhoto} >
                        <Image source={ProfileDummy} style={styles.fhotoContainer} />
                        <View > 
                        </View>
                    </View>
                    </View>
            <Text style={styles.name}>Sharyl Mercury</Text>
            <Text style={styles.email}>Serly@gmail.com</Text>
            </View>
            <View style={styles.content}>
                <ProfileTabSection/>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    content:{
        flex:1,
        marginTop:24
    },
   page:{
        
        flex:1

   },
    fhotoContainer:{
        width:90,
        height:90,
        borderRadius:90,
        backgroundColor:'#F0F0F0',
        padding:24
    },
    borderFhoto:{
        borderWidth:1,
        borderColor:'#8D92A3',
        width:110,
        height:110,
        borderRadius:110,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems:'center'
    },
    photo:{
        alignItems:'center',
        marginTop:26,
        marginBottom:10,
        
    },
    name:{
        fontSize:18,
        fontFamily:'Poppins-Medium',
        color:'#020202',
        textAlign:'center'
    },
    email:{
        fontSize:13,
        fontFamily:'Poppins-Light',
        color:'#8d92a3',
        textAlign:'center'
    },
    profileDetail:{
        backgroundColor:"white",
        paddingBottom:26
    }
})
