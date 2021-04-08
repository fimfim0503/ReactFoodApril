

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlSuccessSignUp } from '../../assets'
import { Button } from '../../components'

const SuccessSignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <IlSuccessSignUp/>
            <Text style={styles.title} >Yeay! Completed</Text>
            <Text style={styles.subTitle} >Now you are able to order</Text>
            <Text style={styles.subTitle} >some foods as a self-reward</Text>
           
           <View style={styles.buttonContainer} >
           <Button text="Find Foods" onPress={()=>navigation.reset({index :0, routes:[{name:'MainApp' }]})}  />
           </View>
            
        </View>
    )
}

export default SuccessSignUp

const styles = StyleSheet.create({
    page:{
       
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontFamily:'Poppins-Regular',
        color:'#020202'
    },
    subTitle:{
        fontSize:14, fontFamily:'Poppins-Light', color:'#8d92A3'
    },
    buttonContainer:{
        
        width:'100%',
        paddingHorizontal:80
    }
    
})
