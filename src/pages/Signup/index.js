import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {useForm} from '../../Utils';

const SignUp = ({navigation}) => {
    const [form, setForm] = useForm({
        name:'',
        email:'',
        password:'',
    });

    const dispatch = useDispatch();

    const onSubmit = () =>{
        console.log('form : ', form);
        dispatch({type:'SET_REGISTER', value: form})
        navigation.navigate('SignUpAddress');
    };

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>

        <View style={styles.page}>
            <Header title="Sign Up" subTitle="Register and Eat" onBack={()=>{}} />
            <View style={styles.container} >
                <View style={styles.photo}>
                    <View style={styles.borderFhoto} >
                        <View style={styles.fhotoContainer}>
                            <Text style={styles.addFhoto}>Add Fhoto</Text>
                        </View>
                    </View>
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
        marginBottom:10
    }
})
