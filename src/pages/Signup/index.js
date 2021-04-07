import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage, useForm} from '../../Utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SignUp = ({navigation}) => {
    const [form, setForm] = useForm({
        name:'',
        email:'',
        password:'',
    });

    const [photo, setPhoto]= useState('');

    const dispatch = useDispatch();

    const onSubmit = () =>{
        console.log('form : ', form);
        dispatch({type:'SET_REGISTER', value: form})
        navigation.navigate('SignUpAddress');
    };

    const addPhoto = () => {
        launchImageLibrary({
            quality:0.5,
            maxWidth:200,
            maxHeight:200
        }, (response)=> {
            console.log('Response = ', response);
            if (response.didCancel || response.error) {
                showMessage('anda tidak memilih fhoto')
            } else {
                const source = {uri : response.uri};
                const dataImage = {
                    uri:response.uri,
                type:response.type,
                name:response.fileName
                };

                setPhoto(source)
                dispatch({type:'SET_PHOTO', value:dataImage});
                dispatch({type:'SET_UPLOAD_STATUE', value:true});

            }
        });
    };

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>

        <View style={styles.page}>
            <Header title="Sign Up" subTitle="Register and Eat" onBack={()=>{}} />
            <View style={styles.container} >
                <View style={styles.photo}>
                    <TouchableOpacity onPress={addPhoto} >
                    <View style={styles.borderFhoto}  >
                        {photo ? (  <Image source={photo} style={styles.fhotoContainer} />
                        ) : (
                            <View style={styles.fhotoContainer}>
                            <Text style={styles.addFhoto}>Add Fhoto</Text>
                        </View> 
                        )}
                        
                        
                    </View>

                    </TouchableOpacity>
                </View>
                <TextInput 
                label="Full Name" 
                placeholder="Full Name"
                value={form.name}
                onChangeText={(value)=> setForm('name', value)}

                />
                <Gap height={16} />

                <TextInput 
                label="Email Address" 
                placeholder="Type your email address"
                value={form.email}
                onChangeText={(value)=> setForm('email', value)}
                />

                <Gap height={16} />

                <TextInput 
                label="Password" 
                placeholder="Type Your Password"
                value={form.password}
                onChangeText={(value)=> setForm('password', value)}
                secureTextEntry
                />

                <Gap height={24} />
                <Button text="Continue" onPress={onSubmit} />
                
            </View>
        </View>
        </ScrollView>

        
        
    )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingHorizontal:24,
        paddingVertical:26,
        marginTop:24,
        flex:1
    },
    page:{
        flex:1,
        backgroundColor:'white'
    },
    addFhoto:{
        fontSize:14,
        fontFamily:'Poppins-Light',
        color:'#8D92A3',
        textAlign:'center'
    },
    fhotoContainer:{
        width:90,
        height:90,
        borderRadius:90,
        backgroundColor:'#F0F0F0',
        justifyContent:'center',
        alignItems:'center',
       
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
        marginBottom:10
    }
})
