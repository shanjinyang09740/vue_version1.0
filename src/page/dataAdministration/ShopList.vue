<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-table :data="tableDataArr" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="店铺名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="店铺介绍">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="销售量">
                <span>{{ props.row.recent_order_num }}</span>
              </el-form-item>
              <el-form-item label="分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="店铺名称" prop="name"> </el-table-column>
        <el-table-column label="店铺地址" prop="address"> </el-table-column>
        <el-table-column label="店铺介绍" prop="description"> </el-table-column>
        <el-table-column label="操作" width="400" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="Success"
              @click="addFood(scope.$index, scope.row)"
              >添加商品</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="Pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="count"
        >
        </el-pagination>
      </div>
      <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
        <el-form :model="selectTable">
          <el-form-item label="店铺名称" label-width="100px">
            <el-input v-model="selectTable.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" label-width="100px">
            <el-input
              v-model="selectTable.address"
              auto-complete="off"
              style="width: 100%;"
            ></el-input>
            <span>当前城市：{{ city.name }}</span>
          </el-form-item>
          <el-form-item label="店铺介绍" label-width="100px">
            <el-input v-model="selectTable.description"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" label-width="100px">
            <el-input v-model="selectTable.phone"></el-input>
          </el-form-item>
          <el-form-item label="店铺分类" label-width="100px">
            <el-cascader
              :options="categoryOptions"
              v-model="selectedCategory"
              change-on-select
            ></el-cascader>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateShop">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {reqShopList,deleteResturant,foodCategory} from './../../api'
import {baseUrl, baseImgPath} from './../../config/env'
import  {SAVE_RESTAURANT_ID} from './../../store/mutation-type'
   export default {
       props:['changeName'],
        data(){
            return {
                baseUrl,
                baseImgPath,
                city: {name:'北京'},
                offset: 0,
                limit: 10,
                count: 0,
				dataList: [],
                pageSize: 10,
                tableData: [],
                tableDataArr: [],
                currentPage: 1,
                selectTable: {},
                dialogFormVisible: false,
                categoryOptions: [],
                selectedCategory: []
            }
        },
        created(){
            this.initData();
        },
    	components: {

    	},
        methods: {
            async initData(){
                this.count = 20;
                try{
					const restaurants = await reqShopList();
					this.dataList = restaurants["data"];
                    this.getResturants(); 
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            async getCategory(){
                console.log('获取分类列表')
                try{
                    const categories = await foodCategory();
                    categories.data.forEach(item => {
                        if (item.sub_categories.length) {
                            const addnew = {
                                value: item.name,
                                label: item.name,
                                children: []
                            }
                            item.sub_categories.forEach((subitem, index) => {
                                if (index == 0) {
                                    return
                                }
                                addnew.children.push({
                                    value: subitem.name,
                                    label: subitem.name,
                                })
                            })
                            this.categoryOptions.push(addnew)
                        }
                    })
                }catch(err){
                    console.log('获取商铺种类失败', err);
                }
            },
            async getResturants(){
                const $this = this;
                const {latitude, longitude} = this.city;
                // const restaurants = await reqShopList();
                this.tableDataArr = [];
                this.tableData = [];
                this.dataList.forEach(item => {
                    const tableData = {};
                    tableData.name = item.name;
                    tableData.address = item.address;
                    tableData.description = item.description;
                    tableData.id = item.id;
                    tableData.phone = item.phone;
                    tableData.rating = item.rating;
                    tableData.recent_order_num = item.recent_order_num;
                    tableData.category = item.category;
                    tableData.image_path = item.image_path;
                    this.tableData.push(tableData);
                });
                this.count = this.dataList.length;
                //根据当前页码截取相应数据
                this.tableData.forEach((item, index) => {
                  if((index > $this.offset || index == $this.offset) && (index < ($this.offset + $this.pageSize))){
                    $this.tableDataArr.push(item);
                  }
                });

            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.pageSize;
                this.getResturants()
            },
            handleEdit(index, row) {
                console.log('编辑')
                this.selectTable = row;
                this.dialogFormVisible = true;
                this.selectedCategory = row.category.split('/');
                if (!this.categoryOptions.length) {
                    this.getCategory();
                }
            },
            addFood(index, row){
                 this.$store.commit(SAVE_RESTAURANT_ID, {restaurant_id: row.id })
                 this.changeName("AddFood")
                // this.$router.push({ path: 'addGoods', query: { restaurant_id: row.id }})
            },
            async handleDelete(index, row) {
				const $this = this;
                try{
                    const res = await deleteResturant(row.id);
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '删除店铺成功'
                        });
                        this.tableDataArr.splice(index, 1);
						this.dataList.forEach(function(item, index){
							if(item["id"] === row["id"]){
								$this.dataList.splice(index, 1);
							}
						});
						this.count--;
                    }else{
                        throw new Error(res.message)
                    }
                }catch(err){
                    this.$message({
                        type: 'error',
                        message: err.message
                    });
                    console.log('删除店铺失败')
                }
            },
            handleServiceAvatarScucess(res, file) {
                if (res.status == 1) {
                    this.selectTable.image_path = res.image_path;
                }else{
                    this.$message.error('上传图片失败！');
                }
            },
            beforeAvatarUpload(file) {
                const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isRightType) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isRightType && isLt2M;
            },
            async updateShop(){
                this.dialogFormVisible = false;
            },
        },
    }
</script>

<style lang="less">
@import url(../../style/mixin.less);
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.table_container {
  padding: 20px;
}
.Pagination {
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>
