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
      <van-swipe :auto="1000">
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img v-lazy="banner.imageUrl" alt width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "shoppingMall",
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [
          {imageUrl: require('../../assets/images/01.jpg')},
          {imageUrl: require('../../assets/images/02.jpg')},
          {imageUrl: require('../../assets/images/03.jpg')},
          {imageUrl: require('../../assets/images/04.jpg')}

      ]
    };
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
.swipe-area{
    clear: both;
    background-color: red;
    max-height: 15rem;
    overflow: hidden;
}
</style>