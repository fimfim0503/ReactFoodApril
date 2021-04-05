
import Axios from 'axios';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, TextInput } from '../../components';
import { useForm } from '../../Utils';

const SignIn = ({navigation}) => {
    // const [email, setEmail] =useState('');
    // const [Password, setPassword] =useState('');

    const [form, setForm] = useForm({
        email:'',
        password:''
    })


    const onSubmit =()=> {
         console.log('form :', form);
         
        Axios.post('http://10.0.2.2/foodbackend/public/api/login', form)
        .then(res=>{
            console.log('success', res);
        })
        .catch(err=>{   
            console.log('error', err)
        })
       
    }
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
