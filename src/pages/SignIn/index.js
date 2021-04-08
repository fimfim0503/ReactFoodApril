
import Axios from 'axios';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, TextInput } from '../../components';
import { getData, useForm } from '../../Utils';
import { signInAction } from '../../redux/action/auth';
import { setLoading } from '../../redux/action/global';

const SignIn = ({navigation}) => {
    // const [email, setEmail] =useState('');
    // const [Password, setPassword] =useState('');

    const [form, setForm] = useForm({
        email:'',
        password:''
    })

    const dispatch = useDispatch();

   

    const onSubmit =()=> {
        //  console.log('form :', form);
        dispatch(signInAction(form, navigation))
       
    };

    return (
        <View style={styles.page} >
            <Header title="Sign in" subTitle="Find Your best evel meal" />
            <View style={styles.container} >
                <TextInput 
                label="Email Address" 
                placeholder="Type your email address"
                value={form.email}
                onChangeText={(value)=>setForm('email',value)}
                
                />
                <Gap height={16} />
                <TextInput 
                label="password" 
                placeholder="Type Your Password"
                value={form.password}
                onChangeText={(value)=>setForm( 'password' ,value)}
                secureTextEntry
                />
                <Gap height={24} />
                <Button text="Sign In" onPress={onSubmit} />
                <Gap height={12} />
                <Button  text="Create New Accunt" color='#8D92A3' textColor='white' onPress={()=> navigation.navigate('SignUp')} />
            </View>
           
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingHorizontal:24,
        paddingVertical:26,
        marginTop:24,
        flex:1
    },
    page:{
        flex:1
    },
})
