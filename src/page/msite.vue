<template>
  <div style="height: 100%;">
    <el-container style="height: 100%;">
      <el-aside width="200px" style="background-color:#324057">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#324057"
          border="0"
          text-color="#fff"
          active-text-color="#20a0ff"
        >
          <el-menu-item ref="indexBtn" index="1" @click="changeToMsite">
            <i class="el-icon-menu"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>
          <el-submenu index="2" style="background-color: #324057">
            <template slot="title"
              ><i class="el-icon-location"></i>数据管理</template
            >
            <el-menu-item @click="currentName = 'ShopList'" index="2-2"
              >商家列表</el-menu-item
            >
            <el-menu-item @click="currentName = 'FoodList'" index="2-3"
              >食品列表</el-menu-item
            >
            <el-menu-item @click="currentName = 'OrderList'" index="2-4"
              >订单列表</el-menu-item
            >
            <el-menu-item
              class="xxx"
              @click="currentName = 'UserList'"
              index="2-1"
              >用户列表</el-menu-item
            >
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>添加数据</template
            >
            <el-menu-item ref="addFoodBtn" index="3-1" @click="currentName = 'AddFood'"
              >添加商品</el-menu-item
            >
            <el-menu-item index="3-2" @click="currentName = 'AddShop'"
              >添加商铺</el-menu-item
            >
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-star-on"></i>数据图表</template>
            <el-menu-item index="4-1" @click="currentName = 'UserFb'">用户分布</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="sysName">后台管理系统欢迎您！</div>
          <el-dropdown>
            <i class="el-icon-s-custom"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div @click="changeName('homePage')">首页</div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div @click="changeName('loginPage')">退出</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="wangxiaohu">王小虎</span>
        </el-header>

        <el-main>
          <component
            v-bind:is="currentName"
            :changeName="changeName"
          ></component>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script type="text/ecmascript-6">
import {GETADMINDATA} from './../store/mutation-type'
import UserList from './dataAdministration/userList'
import ShopList from './dataAdministration/ShopList'
import FoodList from './dataAdministration/FoodList'
import OrderList from './dataAdministration/OrderList'
import AddFood from './addData/addFood'
import AddShop from './addData/addShop'
import UserFb from './dataAdministration/userFb'
import DefList from './DefList'
  export default {
  name: 'msite',
  data(){
    return {
      currentName:"DefList"
    }
  },
  mounted(){
    // this.$store.commit(GETADMINDATA, {adminInfo: {userName:'admin'}})
    /*setTimeout(()=>{ 
      this.$store.commit(GETADMINDATA, {adminInfo: {id:67890}})
    },2000)*/
  },
  components: {
    UserList,
    ShopList,
    FoodList,
    OrderList,
    DefList,
    AddShop,
    AddFood,
    UserFb
  },
  methods: {
    changeToMsite(){
      this.currentName="DefList";
    },
    changeName(name){
      if(name === "homePage"){
        this.$refs.indexBtn.$el.click();
      }else if(name === "AddFood"){
        this.$refs.addFoodBtn.$el.click();
      }else if(name === "loginPage"){
        this.$router.replace("/login");
      }
    }
  },

  }
</script>

<style scoped lang="less">
@link-color: #428bca; // sea blue
@link-color-hover: red;
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  .sysName {
    float: left;
    color: #009688;
    font-size: 18px;
    font-family: Microsoft YaHei;
  }
}

.el-icon-s-custom {
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
}
.el-icon-s-custom:hover {
  color: #00a1d4;
}
.el-aside {
  color: #333;
  .el-menu {
    border-right: 0;
  }
}
</style>
