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
  console.log(options)

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
  console.log(options)
  console.log("22222222222")
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