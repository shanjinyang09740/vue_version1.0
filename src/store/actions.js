
import {
  GETADMINDATA
} from "./mutation-type";



export default {
  async getAdminData({commit}){
    //1. 发送请求获取数据
    let result = {code:0,data:[
        {id: parseInt(Math.random()*10000000000), username: 'admin', password: '123', date: '2020-02-01', address: '北京'},
        {id: parseInt(Math.random()*10000000000), username: 'admin1', password: '123', date: '2020-02-01', address: '天津'},
        {id: parseInt(Math.random()*10000000000), username: 'admin2', password: '123', date: '2020-02-01', address: '上海'},
        {id: parseInt(Math.random()*10000000000), username: 'admin3', password: '123', date: '2020-02-01', address: '重庆'},
        {id: parseInt(Math.random()*10000000000), username: 'admin4', password: '123', date: '2020-02-01', address: '广州'}
    ]};
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(GETADMINDATA, {adminInfo: result.data})
    }
  },
  
}
