<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="300"> </el-table-column>
        <el-table-column prop="name" label="用户名" width=""> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reqUserList} from './../../api/index'
  import {mapActions, mapState} from 'vuex'
  export default {
    data() {
      return {
        tableData: []
      }
    },
    mounted(){
      const $this = this;
      this.getAdminData();
      const result = this.adminInfo;
      result.forEach(function(item){
        const tabData = {};
        tabData.name = item.username;
        tabData.date = item.date;
        tabData.address = item.address;
        $this.tableData.push(tabData);
      });
    },
    computed: {
      ...mapState(['adminInfo']), //vuex内置方法，获取登录用户信息
    },
    methods: {
      ...mapActions(['getAdminData']), //vuex内置方法，获取登录用户信息
    },
  }
</script>

<style lang="less">
@import url(../../style/mixin.less);

</style>
