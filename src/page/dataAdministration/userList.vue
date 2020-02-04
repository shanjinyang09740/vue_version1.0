<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="date" label="日期" width="300"> </el-table-column>
      <el-table-column prop="name" label="姓名" width=""> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import {reqUserList} from './../../api/index'
  export default {
    data() {
      return {
        tableData: []
      }
    },
    async mounted() {
      const result = await  reqUserList();
      if(result.code===0){
        result.data.forEach(item => {
            const tableData = {};
            tableData.name = item.username;
            tableData.date = item.registe_time;
            tableData.address = item.city;
            this.tableData.push(tableData);
        })
      }else{
        this.$message.error('获取数据失败');
      }
    },
  }
</script>

<style scoped></style>
