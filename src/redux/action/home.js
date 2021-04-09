const {default:Axios} = require('axios');
const { API_HOST }= require('../../config');

export const getFoodData = () => (dispatch) => {
    Axios.get (`${API_HOST.url}/food`)
    .then(res => {
        // console.log('res: ', res.data.data.data)
        dispatch ({type:'SET_FOOD', value:res.data.data.data})
    })
    .catch(err => {
        console.log('err1 : ', err)
    })
}