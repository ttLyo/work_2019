//import fetch1 from 'utils/fetch';
import {base_url} from '../util';
export function loginByEmail(email, password) {
  // const data = {
  //   "username":email,
  //   "password":password,
  //   "type":"admin"//"type":"admin"
  // };
  // var data_json = JSON.stringify(data)
  // return fetch1({
  //   url: '/login/loginbyemail',
  //   method: 'post',
  //   data
  // });
  // console.log("login")
  return Promise.race([
    fetch(base_url+'user/login/',{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        "username":email,
        "password":password
      }),
    }),
    new Promise(function(resolve,reject){
      setTimeout(()=> reject(new Error('请求超时，请检查网络或服务器状态')),10000)
    })
  ])

  // return fetch('http://211.159.186.47/sport/login/',{
  //     method:"POST",
  //     body:data_json,
  //     headers:{"content-type":"application/json"}
  // })
}///login/loginbyemail

export function logout() {
  return fetch(util.base_url+'sys/account/logout',{
            method:"get",
            headers:{
              "token":"",
              "content-type":"application/json"
            }
          })
}

export function getInfo(token) {
  //console.log(token)
  //token = "admin"
  // return fetch('http://211.159.186.47/sport/login/',{
  //     method:"GET",
  //     headers:{"content-type":"application/json","token":token}
  // })
  // return fetch('http://piaoyang.tk:8080/hd-api/user/login/',{
  //   method:"get",
  //   headers:{
  //     // "token":token,
  //     "content-type":"application/json"
  //   }
  // })
  return fetch(base_url+'user/login/',{
    method:"get",
    headers:{
      "token":token,
      "content-type":"application/json"
    }
  })
}

