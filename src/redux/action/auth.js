import Axios from 'axios';
import { showMessage, storeData } from '../../Utils';
import { setLoading } from './global';

const API_HOST = {
    url : 'http://192.168.137.1/foodmarket3/public/api'
}

export const signUpAction = (dataRegister, photoReducer, navigation) =>(dispatch) => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
        .then(res => {
           // console.log('data success : ', res.data);
           const token =`${res.data.data.token_type} ${res.data.data.access_token}`;
           const profile =  res.data.data.user;
            //data user
            storeData('userProfile: ',profile);
            //data token 
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
                // .then(resUpload => {
                //     console.log('succes upload : ', resUpload)
                // })
                .catch(err => {
                    showMessage('Upload photo tidak berhasil')
                })
            }
            dispatch(setLoading(false));
            navigation.replace('SuccessSignUp');
        })
        .catch(err => {
            dispatch(setLoading(false));
            showMessage(err?.response?.data?.message)
        })
}