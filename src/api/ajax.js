import axios from "axios";
import qs from "qs";

const instance = axios.create({
  baseURL:'/api'
})

instance.interceptors.request.use(config => {
  if(config.method.toUpperCase() === 'POST' && config.data instanceof Object){
    config.data = qs.stringify(config.data)
  }
  return config
})

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log ('请求失败2')
    return new Promise(()=>{})
  }
)

export default instance