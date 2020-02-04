
import {
  GETADMINDATA
} from "./mutation-type";



export default {
  async getAdminData({commit}){
    //1. 发送请求获取数据
    let result = {code:0,data:{id:123456}}
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(GETADMINDATA, {adminInfo: result.data})
    }
  },
  
}
