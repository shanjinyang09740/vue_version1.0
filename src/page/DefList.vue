<template>
  <div>
    <h1>数据统计</h1>
    <el-button>
      <router-link to="/lytzone">路由跳转</router-link>   
    </el-button>
    <el-button>
      <router-link to="/edit">权限管理</router-link>   
    </el-button>
    <el-button>
      <router-link to="/lazyload">懒加载</router-link>
    </el-button>
    <el-button>
      <router-link to="/address">位置信息</router-link>
    </el-button>

    <br>
    <div class="tags">
      <el-tag effect="dark">
        <b>当日数据：</b>
      </el-tag>
      <div class="btn" v-for="(item, index) in message" :key="index">
        <span>{{ item.num }}</span>
        &nbsp;&nbsp;{{ item.str }}
      </div>
    </div>
    <div class="tags">
      <el-tag type="warning" effect="dark">
        <b>总计数据：    </b>
      </el-tag>
      <div class="btn" v-for="(item, index) in message2" :key="index">
        <span>{{ item.num }}</span>
        &nbsp;&nbsp;{{ item.str }}
      </div>
    </div>

    <div id="chartsTotall"  style="width: 80%;height:500px;">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import echarts from 'echarts/lib/echarts';
  // 引入折线图
  import 'echarts/lib/chart/line';
  import 'echarts/lib/component/title';
  import 'echarts/lib/component/legend';
  export default {
    data() {
      return {
        message:[
          {num:9,str:"新注册用户"},
          {num:15,str:"新增订单"},
          {num:10,str:"新增管理员"},
          ],
          message2:[
          {num:100,str:"注册用户"},
          {num:244,str:"订单"},
          {num:50,str:"管理员"},
        ]
      }
    },
    mounted(){
      this.myChart = echarts.init(document.getElementById('chartsTotall'));
      this.drawLine();
    },
    props: ['lineData'],
    methods: {
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          /*let myChart = this.$echarts.init(document.getElementById('chartsTotall'))*/
          //配置
          const option = {
              title: {
                  text: '折线图堆叠'
              },
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  data: ['新注册用户', '新增订单', '新增管理员']
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              toolbox: {
                  feature: {
                      saveAsImage: {}
                  }
              },
              xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: ['2020-01-11', '2020-01-12', '2020-01-13', '2020-01-14', '2020-01-15', '2020-01-16', '2020-01-17']
              },
              yAxis: {
                  type: 'value'
              },
              series: [
                  {
                      name: '新注册用户',
                      type: 'line',
                      stack: '总量',
                      data: [120, 132, 101, 134, 90, 230, 210]
                  },
                  {
                      name: '新增订单',
                      type: 'line',
                      stack: '总量',
                      data: [220, 182, 191, 234, 290, 330, 310]
                  },
                  {
                      name: '新增管理员',
                      type: 'line',
                      stack: '总量',
                      data: [150, 232, 201, 154, 190, 330, 410]
                  }
              ]
          };

          this.myChart.setOption(option);
      },
      /*watch: {
          lineData: function (){
              this.initData()
          }
      }*/
    }
  }
</script>

<style scoped lang="less">
h1 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
    margin-top: 0px;
    color: #666;
    font-weight: normal;
}
.btn {
  width: 166px;
  height: 35px;
  color: #666;
  background-color: #e5e9f2;
  font-size: 14px;
  border-radius: 10px;
  text-align: center;
  line-height: 35px;
  span {
    padding-right: 5px;
    color: #333;
    font-size: 26px;
  }
}
.tags {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  b {
    font-size: 18px;
    padding: 4px 0;
    color: #fff;
  }
}
#chartsTotall {
  margin: 60px auto;
}
</style>
