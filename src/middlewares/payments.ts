import { cinetpayConfig } from 'src/config';
const axios = require('axios');


export const get_payment_url =  (data: any) => {

    // data = JSON.stringify({
    //     "apikey": "14047243215ebd680ed0d0c0.07903569",
    //     "site_id": '622120',
    //     "transaction_id":  Math.floor(Math.random() * 100000000).toString(), //
    //     "amount": 100,
    //     "currency": "XOF",
    //     "alternative_currency": "",
    //     "description": " TEST INTEGRATION ",
    //     // "customer_id": "172",
    //     "customer_name": "KOUADIO",
    //     "customer_surname": "Francisse",
    //     "customer_email": "harrissylver@gmail.com",
    //     "customer_phone_number": "+225004315545",
    //     "customer_address": "Antananarivo",
    //     "customer_city": "Antananarivo",
    //     "customer_country": "CM",
    //     "customer_state": "CM",
    //     "customer_zip_code": "065100",
    //     "notify_url": "https://webhook.site/b7e1f738-6c07-4ecb-b4ad-9868c04fc1fb",
    //     "return_url": "https://webhook.site/b7e1f738-6c07-4ecb-b4ad-9868c04fc1fb",
    //     "channels": "ALL",
    //     // "metadata": "user1",
    //     // "lang": "FR",
    //     // "invoice_data": {
    //     //   "Donnee1": "",
    //     //   "Donnee2": "",
    //     //   "Donnee3": ""
    //     // }
    //   });

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


export const verify_payment = (transaction_id:String) =>{

    const data = {
        'apikey': cinetpayConfig.API_KEY,
        'site_id': cinetpayConfig.SITE_ID,
        'transaction_id' :  transaction_id
    }
    const config = {
        method: 'post',
        url: 'https://api-checkout.cinetpay.com/v2/payment/check',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
    
      axios(config)
      .then(function (response:any) {
        return JSON.stringify(response.data)
        
      })
      .catch(function (error:any) {
        return error
      });
}


// export const verify_payment = (token:String, transaction_id:String) =>{

//     const config = {
//         method: 'post',
//         url: 'https://client.cinetpay.com/v1/transfer/check/money?token='+ token +'&transaction_id=',
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

export const get_token = () => {
    var config = {
        method: 'post',
        url: 'https://client.cinetpay.com/v1/auth/login?apikey='+cinetpayConfig.API_KEY+'&password='+cinetpayConfig.PASSWORD,
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      };
    
      axios(config)
      .then(function (response:any) {
        return JSON.stringify(response.data)
        
      })
      .catch(function (error:any) {
        return error
      });
}



export const add_contact = (data:any) => {

    // const data =[
    //     { 
    //         "prefix": "221",
    //         "phone": "777396921", 
    //         "name": "Cédric", 
    //         "surname": "S", 
    //         "email": "email@example.com" 
    //     }
    // ]
    var config = {
        method: 'post',
        url: 'https://client.cinetpay.com/v1/auth/login?apikey='+cinetpayConfig.API_KEY+'&password='+cinetpayConfig.PASSWORD,
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data:data
      };
    
      axios(config)
      .then(function (response:any) {
        return JSON.stringify(response.data)
        
      })
      .catch(function (error:any) {
        return error
      });
}

export const get_balance = (token:String)=>{
    var config = {
        method: 'get',
        url: 'https://client.cinetpay.com/v1/transfer/check/balance?token='+token,
        headers: { 
          'Content-Type': 'application/json'
        },
      };
    
      axios(config)
      .then(function (response:any) {
        return JSON.stringify(response.data)
        
      })
      .catch(function (error:any) {
        return error
      });
}

export const money_transfer = (token:String, transaction_id: String, data:any) =>{
    var config = {
        method: 'get',
        url: 'https://client.cinetpay.com/v1/transfer/money/send/contact?token='+token+'&transaction_id='+transaction_id,
        headers: { 
          'Content-Type': 'application/json'
        },
        data:data
      };
    
      axios(config)
      .then(function (response:any) {
        return JSON.stringify(response.data)
        
      })
      .catch(function (error:any) {
        return error
      });
}


export const check_transfer = (token:String, transaction_id: String, data:any) =>{
    var config = {
        method: 'get',
        url: 'https://client.cinetpay.com/v1/transfer/check/money?token='+token+'&transaction_id='+transaction_id,
        headers: { 
          'Content-Type': 'application/json'
        },
        data:data
      };
    
      axios(config)
      .then(function (response:any) {
        return JSON.stringify(response.data)
        
      })
      .catch(function (error:any) {
        return error
      });
}