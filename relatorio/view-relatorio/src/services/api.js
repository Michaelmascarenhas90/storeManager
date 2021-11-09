import axios from 'axios';

//tentativa 3

// function showResponse(res){
//   return JSON.stringify(res.data,null,'\t')
// }

// export default function get(orderId) {
//   axios
//     .get(`http://localhost:3001/order/${orderId}`)
//     .then(res => showResponse(res));
// }

//tentativa 2
export const api = axios.create({
  baseURL: `http://localhost:3001/`,
});

// export default api;

//tentativa 1
// export const api = async (orderId) => {
//   let response = await fetch (`http://localhost:3001/order/${orderId}`);
//   let orderData = await response.json();

//   return orderData;
// }
