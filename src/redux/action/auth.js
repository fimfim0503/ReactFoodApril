import Axios from 'axios';
import { showMessage, storeData } from '../../Utils';
import { setLoading } from './global';
import {API_HOST} from '../../config';

export const signUpAction = (dataRegister, photoReducer, navigation) =>(dispatch) => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
        .then((res)=> {
           // console.log('data success : ', res.data);
           const token =`${res.data.data.token_type} ${res.data.data.access_token}`;
           const profile =  res.data.data.user;
            
            storeData('token', {value : token})

            if (photoReducer.isUploadPhoto) {

                const photoForUpload = new FormData();
                photoForUpload.append('file', photoReducer);

                Axios.post (
                    `${API_HOST.url}/user/photo`, 
                photoForUpload, 
                {
                    headers:{
                        'Authorization' : token,
                        'Content-Type':'multipart/form-data',
                    },
                })
                .then((resUpload )=> {
                    //console.log('succes upload : ', resUpload)
                    profile.profile_photo_url=`http://localhost/foodmarket3/public/storage/${resUpload.data.data[0]}`
                    storeData('userProfile: ',profile); 
                    navigation.reset({index:0, routes:[{name:'SuccessSignUp'}]});
                })
                .catch((err) => {
                    showMessage('Upload photo tidak berhasil')
                    navigation.reset({index:0, routes:[{name:'SuccessSignUp'}]});
                });
            } else {
                storeData('userProfile', profile);
                navigation.reset({index:0, routes:[{name:'SuccessSignUp'}]});
            }
            dispatch(setLoading(false));
           
        })
        .catch((err) => {
            dispatch(setLoading(false));
            showMessage(err?.response?.data?.message);
        })
};


export const signInAction = (form, navigation) => (dispatch) =>  {
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/login`, form)
    .then(res=>{
        console.log('Sign In : ', res.data.data.user.profile_photo_path);
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        const profile = res.data.data.user;

        dispatch(setLoading(false));
        storeData('token', {value: token });
        //profile.profile_photo_url = `http://192.168.137.1/foodmarket3/public/storage/${res.data.data.user.profile_photo_path}`
        storeData('userProfile', profile);
        navigation.reset({index:0, routes:[{name:'MainApp'}]});
    })
    .catch(err=>{   
        dispatch(setLoading(false));
        showMessage(err?.response?.data?.data?.message);
    })
}