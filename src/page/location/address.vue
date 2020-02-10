<template>
  <div class="geolocation">
    <h1>{{ LocationCity }}</h1>
    <h2>{{ latitude }}</h2>
    <h2>{{ longitude }}</h2>
    
    <div id="allmap"></div>
    <p>点击地图展示详细地址</p>
  </div>
</template>

<script>
import axios from "axios";
import BMap from "BMap";
export default {
  data() {
    return {
      LocationCity: "正在定位",
      latitude: "...",
      longitude: "...",
     
    };
  },
  mounted() {
		this.city(); //触发获取城市方法
		this.clickAddress();
  },
  computed: {
    address() {
      axios({
        method: "get",
        url:`http://cangdu.org:8001/v2/pois/${this.latitude},${this.longitude}`
      }).then((res)=> {
				console.log(res.data.address);
				console.log(this)
				let Address = res.data.address;
      });
    }
  },
  methods: {
    clickAddress() {
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);
      var geoc = new BMap.Geocoder();

      map.addEventListener("click", function(e) {
        var pt = e.point;
        geoc.getLocation(pt, function(rs) {
          var addComp = rs.addressComponents;
          alert(
            addComp.province +
              ", " +
              addComp.city +
              ", " +
              addComp.district +
              ", " +
              addComp.street +
              ", " +
              addComp.streetNumber
          );
        });
      });
    },
    city() {
      //定义获取城市方法
      const geolocation = new BMap.Geolocation();
      var _this = this;
      geolocation.getCurrentPosition(
        function getinfo(position) {
          console.log(position);
          let city = position.address.city; //获取城市信息
          let province = position.address.province; //获取省份信息
          _this.LocationCity = city;
          _this.latitude = position.latitude;
          _this.longitude = position.longitude;
        },
        function(e) {
          _this.LocationCity = "定位失败";
        },
        { provider: "baidu" }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#allmap {
  width: 100%;
  height: 500px;
}
</style>
