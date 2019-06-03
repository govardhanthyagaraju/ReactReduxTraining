import axios from 'axios';

//https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json

const get = (api) => axios.get(api);
const post = (api, data) => axios.post(api, data);
const put = (api, data) => axios.put(api, data);
const del = (api, data) => axios.delete(api, data);

export { get, post, put, del };

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });