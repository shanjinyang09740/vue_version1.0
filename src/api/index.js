import ajax from "./ajax";

/* 获取列表内数据 */
export const reqFoodList = () => ajax({
  url:'/foodlist',
})

export const reqOrderList = () => ajax({
  url:'/orderlist',
})

export const reqShopList = () => ajax({
  url:'/shoplist',
})

export const reqUserList = () => ajax({
  url:'/userlist',
})

export const foodCategory = () => ajax({
  url:'/foodcategory',
})

/* 对数据进行增删改查 */

export const deleteResturant = (id) => ajax({
  url:'/deleteresturant',
  params:{id}
})
export const getResturantDetail = (id) => ajax({
  url:'/getresturantdetail',
  params:{id}
})
/**
 * getResturant:获取商铺的信息
 */
export const getResturant = () => ajax({
  url:'/getresturant',
})
export const getMenuById = (id) => ajax({
  url:'/getmenubyid',
  params:{id}
})

//* 对食品的操作 */
export const addFoodReq = (foodMessage) => ajax({
  url:'/addfood',
  method:'POST',
  data:{foodMessage}
})
export const updateFood = (foodMessage) => ajax({
  url:'/updatefood',
  params:{foodMessage}
})
export const deleteFood = (foodid) => ajax({
  url:'/deletefood',
  method:'POST',
  data:{foodid}
})

/* 添加商铺 */
export const addShopReq = (shopMessage) => ajax({
  url:'/addshop',
  method:'POST',
  data:{shopMessage}
})
/* 添加商品页-添加食品种类 */
export const addCategory = (foodCategoryMessage) => ajax({
  url:'/addcategory',
  method:'POST',
  data:{foodCategoryMessage}
})
/* 添加商品页-获取食品种类  restaurant_id*/
export const getCategory = (restaurant_id) => ajax({
  url:'/getcategory',
  params:{restaurant_id}
})