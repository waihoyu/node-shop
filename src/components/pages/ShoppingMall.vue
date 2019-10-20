<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" alt width="80%" class="location-icon" />
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swipe-area">
      <van-swipe :autoplay="3000" indicator-color="white" :height="210">
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" width="100%" height="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for="(item, index) in category" :key="index">
        <img v-lazy="item.image" width="90%" alt class="type-image" />
        <span>{{item.mallCategoryName}}</span>
      </div>
    </div>
    <div>
      <img :src="adBanner" alt style="width:100%" />
    </div>
    <div recommend-area>
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%" alt />
              <div>{{item.goodsName}}</div>
              <div>${{item.price | moneyFilter}}(${{item.mallPrice | moneyFilter}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
    <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <!--这里需要一个list组件-->
      </div>
    </div>
  </div>
</template>

<script>
import floorComponent from "../../components/component/floorComponent";
import swiperDefault from "../../components/swiper/swiperDefault";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import { toMoney } from "@/filter/moneyFilter.js";

export default {
  data() {
    return {
      msg: "shoppingMall",
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [],
      category: [],
      adBanner: "",
      recommendGoods: [],
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
      swiperOption: {
        slidesPerView: 3,
        freeMode: true,
        mouseWheel: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide,
    swiperDefault,
    floorComponent
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  created() {
    //   console.log(this.adBanner)
    this.$axios({
      url: "../../../static/easy-mock/index.json",
      method: "get"
    })
      .then(response => {
        if (response.status == 200) {
          this.category = response.data.data.category;
          this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
          this.bannerPicArray = response.data.data.slides;
          this.recommendGoods = response.data.data.recommend;
          this.floor1 = response.data.data.floor1;
          this.floor2 = response.data.data.floor2;
          this.floor3 = response.data.data.floor3;
          this.floorName = response.data.data.floorName;
          //   console.log(this.category)
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.location-icon {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #fff !important;
  /* border-radius: 5px; */
  background-color: #e5017d;
  color: #fff;
}
.swipe-area {
  clear: both;
  /* background-color: red; */
  /* height:50px; */
  /* max-height: 15rem; */
  /* overflow: hidden; */
}
.type-bar {
  /* display: none; */
  /* background-color: yelow; */
  /* height: 200px; */
  margin: 0rem 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* width:100px;
    height: 100px; */
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  /* background-color: #fff; */
  border-bottom: 1px solid #000;
  padding: 0.2rem;
  font-size: 14px;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
  border-bottom: 1px solid rgb(27, 27, 27);
}

.floor-anomally {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.floor-anomally div {
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #eee;
}
.floor-two {
  border-bottom: 1px solid #eee;
}
.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}
.floor-rule div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 10rem;
  border-bottom: 1px solid #000;
}
.floor-rule div:nth-child(odd) {
  border-right: 1px solid #eee;
}
.hot-area{
      text-align: center;
      font-size:14px;
      height: 1.8rem;
      line-height:1.8rem;
  }
</style>