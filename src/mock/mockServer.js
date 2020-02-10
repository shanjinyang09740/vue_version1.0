import Mock from 'mockjs'
import foodData from '../json/foodListJSON.json'
import shopData from '../json/shopListJSON.json'
import orderData from '../json/orderListJSON.json'
import userData from '../json/userListJSON.json'
import foodcategoryData from './../json/sub_categories.json'
import categorylistData from "./../json/categorylistJSON.json"
const baseUrl = '/api'


Mock.mock(`${baseUrl}/test1`, 123)
Mock.mock(`${baseUrl}/foodlist`, {
  code: 0,
  data: foodData
})
Mock.mock(`${baseUrl}/orderlist`, {
  code: 0,
  data: orderData
})
Mock.mock(`${baseUrl}/shoplist`, {
  code: 0,
  data: shopData
})
Mock.mock(`${baseUrl}/userlist`, {
  code: 0,
  data: userData
})
Mock.mock(`${baseUrl}/foodcategory`, {
  code: 0,
  data: foodcategoryData
})
Mock.mock(`${baseUrl}/getresturant`, {
  code: 0,
  data: shopData
})


Mock.mock(RegExp(`${baseUrl}/deleteresturant.*`), 'get', (options) => {
  console.log(options)
  return {
    code: 0,
    data: 'success'
  }
})
Mock.mock(RegExp(`${baseUrl}/getresturantdetail.*`), 'get', (options) => {
  const urlArr = options.url.split('?')
  const params = urlArr[1].split('=')[1]
  const resturantdetail = shopData.filter((item, index) => item.restaurant_id == params)
  return {
    code: 0,
    data: resturantdetail[0]
  }
})
Mock.mock(RegExp(`${baseUrl}/getmenubyid.*`), 'get', (options) => {
  return {
    code: 0,
    data: 'success'
  }
})
/* 对食品的操作 */
Mock.mock(RegExp(`${baseUrl}/addfood.*`), 'post', (options) => {

  const Name = decodeURI(options.body.split('=')[1]);
  const foodItem = {
    name:'是吗',
    "image_path": "16f9d417e2662930.jpg",
    "activity": {
      "image_text_color": "f1884f",
      "icon_color": "f07373",
      "image_text": "吗， "
    },
    "restaurant_id": 3,
    "category_id": 9306,
    "item_id": 6213,
    "tips": "355评价 月售875份",
    "specfoods": [{
      "specs_name": "默认",
      "name": "是吗",
      "item_id": 6213,
      "sku_id": 24080,
      "food_id": 24107,
      "restaurant_id": 3,
      "_id": "5e1bf8386901211bf3adab40",
      "specs": [],
      "stock": 1000,
      "checkout_mode": 1,
      "is_essential": false,
      "recent_popularity": 698,
      "sold_out": false,
      "price": 20,
      "promotion_stock": -1,
      "recent_rating": 1.7,
      "packing_fee": 0,
      "pinyin_name": "",
      "original_price": 0
    }],
    "satisfy_rate": 94,
    "satisfy_count": 42,
    "attributes": [{
      "icon_color": "f07373",
      "icon_name": "招牌"
    }],
    "is_essential": false,
    "server_utc": "2019-12-27T06:01:37.107Z",
    "specifications": [],
    "rating_count": 355,
    "month_sales": 875,
    "description": "",
    "attrs": [],
    "display_times": [],
    "pinyin_name": "",
    "is_featured": 0,
    "rating": 4.1,
    "__v": 0
  }
  foodItem.name = Name;
  foodData.unshift(foodItem)
  console.log(foodData)
  return {
    code: 0,
    data: 'success'
  }
})
Mock.mock(RegExp(`${baseUrl}/updatefood.*`), 'get', (options) => {
  console.log(options)
  return {
    code: 0,
    data: 'success'
  }
})
Mock.mock(RegExp(`${baseUrl}/deletefood.*`), 'post', (options) => {
  console.log(options)
  return {
    code: 0,
    data: 'success'
  }
})
Mock.mock(RegExp(`${baseUrl}/addcategory.*`), 'post', (options) => {
  return {
    code: 0,
    data: 'success'
  }
})
Mock.mock(RegExp(`${baseUrl}/getcategory.*`), 'get', (options) => {
  return {
    code: 0,
    data: categorylistData
  }
})
Mock.mock(RegExp(`${baseUrl}/addshop.*`), 'post', (options) => {
  console.log(options)
  return {
    code: 0,
    data: "success"
  }
})