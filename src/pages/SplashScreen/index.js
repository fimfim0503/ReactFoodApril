
import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import { Logo } from '../../assets';
import { getData } from '../../Utils';



const SplashScreen = ({navigation}) => {
    useEffect (() => {
        setTimeout(() => {
           getData('token').then((res)=>{
               console.log('token :', res);
               if (res){
                   navigation.reset({index:0, routes:[{name:'MainApp'}]})
               } else {
                   navigation.replace('SignIn');
               }
           });
        }, 2000)
    }, [])
    return (
        <View style={{ backgroundColor:'#FFc700', flex:1,  justifyContent:"center", alignItems:"center"}} >
           <Logo/>
           <View style={{ height:38 }} />
            <Text style={{fontSize:32, color:'#020202', fontFamily:'Poppins-Medium'}}
                >Desy Market</Text>
        </View>
    )
}

export default SplashScreen;