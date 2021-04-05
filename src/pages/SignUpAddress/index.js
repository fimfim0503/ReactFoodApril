import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {Header, TextInput, Gap, Button, Select} from '../../components';
import { useForm } from '../../Utils';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';

const SingUpAddress = ({navigation}) => {
    const [form, setForm] = useForm({
        phoneNumber:'',
        address:'',
        houseNumber:'',
        city:'Bandung',
    })

    const dispatch=useDispatch();
    const registerReducer=useSelector(state=>state.registerReducer)

   const onSubmit = () => {
        console.log('form: ', form);
        const data = {
            ...form,
            ...registerReducer
        }
        console.log('data Register : ', data)
        // Axios.post('http://foodmarket.test/api/register', data)
         Axios.post('http://192.168.137.1/foodmarket3/public/api/register', data)
        .then(res => {
            console.log('data success : ', res.data)
            navigation.replace('SuccessSignUp')
        })
        .catch(err => {
            console.log('sign up error : ', err);
        })
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}} >

        <View style={styles.page}>
            <Header title="Address" subTitle="Make Sure It's Valid" onBack={()=>{}} />
           
           
            <View style={styles.container} >
                
                <TextInput 
                label="Phone Number" 
                placeholder="Phone Number"
                value={form.phoneNumber}
                onChangeText={(value)=> setForm('phoneNumber', value)}
                />

                <Gap height={16} />

                <TextInput 
                label="Address" 
                placeholder="address"
                value={form.address}
                onChangeText={(value)=> setForm('address', value)}
                />

                <Gap height={16} />

                <TextInput 
                label="House Number" 
                placeholder="House Number"
                value={form.houseNumber}
                onChangeText={(value)=> setForm('houseNumber', value)}
                />

                <Gap height={16} />

                <Select 
                label="City" 
                value={form.city}
                onSelectChange={(value)=> setForm('city', value)}
                />

                <Gap height={24} />

                <Button text="Sign Up Now" onPress={onSubmit} />
                
            </View>
        </View>
        </ScrollView>
    )
}

export default SingUpAddress

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
