import {
  SAVE_RESTAURANT_ID,GETADMINDATA
} from './mutation-type'



export default { 
  [SAVE_RESTAURANT_ID](state, {restaurant_id}){
    state.restaurant_id = restaurant_id
  }, 
  [GETADMINDATA](state, {adminInfo}){
    state.adminInfo = adminInfo
  }, 
}
