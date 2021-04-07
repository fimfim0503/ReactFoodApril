import Axios from 'axios';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Gap, Header, Select, TextInput } from '../../components';
import { useForm, showMessage } from '../../Utils';


const SingUpAddress = ({navigation}) => {
    const [form, setForm] = useForm({
        phoneNumber:'',
        address:'',
        houseNumber:'',
        city:'Bandung',
    })

    const dispatch=useDispatch();
    const {registerReducer, photoReducer}=useSelector((state)=>state);

   const onSubmit = () => {
        console.log('form: ', form);
        const data = {
            ...form,
            ...registerReducer
        }
        // console.log('data Register : ', data)
        dispatch({type:'SET_LOADING', value:true});
         Axios.post('http://192.168.137.1/foodmarket3/public/api/register', data)
        .then(res => {
            console.log('data success : ', res.data);
            if (photoReducer.isUploadPhoto) {

                const photoForUpload = new FormData();
                photoForUpload.append('file', photoReducer)
                Axios.post ('http://192.168.137.1/foodmarket3/public/api/user/photo', 
                photoForUpload, 
                {
                    headers:{
                        'Authorization' : `${res.data.data.token_type} ${res.data.data.access_token}`,
                        'Content-Type':'multipart/form-data',
                    }
                })
                .then(resUpload => {
                    console.log('succes upload : ', resUpload)
                })
                .catch(err => {
                    showMessage('Upload photo tidak berhasil')
                })
            }
            dispatch({type:'SET_LOADING', value:false});
            showMessage('Register Success ', 'success')
            navigation.replace('SuccessSignUp')
        })
        .catch(err => {
            dispatch({type:'SET_LOADING', value:false});
            showMessage(err?.response?.data?.message)
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
