import { cinetpayConfig } from 'src/config';
const axios = require('axios');


export const get_payment_url =  (data: any) => {
    var config = {
        method: 'post',
        url: 'https://api-checkout.cinetpay.com/v2/payment',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
    
      axios(config)
      .then(function (response:any) {
        return response.data
        
      })
      .catch(function (error:any) {
        return error
      });
    
}


// export const verify_payment = (data:any) =>{
//     var config = {
//         method: 'post',
//         url: 'https://api-checkout.cinetpay.com/v2/payment/check',
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//         data : data
//       };
    
//       axios(config)
//       .then(function (response:any) {
//         return JSON.stringify(response.data)
        
//       })
//       .catch(function (error:any) {
//         return error
//       });
// }

// export const get_token = (data:any) => {
//     var config = {
//         method: 'post',
//         url: 'https://client.cinetpay.com/v1/auth/login?apikey='+cinetpayConfig.API_KEY+'&'+cinetpayConfig.PASSWORD,
//         headers: { 
//           'Content-Type': 'application/x-www-form-urlencoded'
//         },
//       };
    
//       axios(config)
//       .then(function (response:any) {
//         return JSON.stringify(response.data)
        
//       })
//       .catch(function (error:any) {
//         return error
//       });
// }

// export const get_balance = (data:any)=>{
//     var config = {
//         method: 'get',
//         url: 'https://client.cinetpay.com/v1/transfer/check/balance?token='+data.token+'&lang='+data.lang,
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//       };
    
//       axios(config)
//       .then(function (response:any) {
//         return JSON.stringify(response.data)
        
//       })
//       .catch(function (error:any) {
//         return error
//       });
// }

