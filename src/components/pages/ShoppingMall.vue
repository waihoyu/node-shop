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
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img :src="banner.imageUrl" style="width: 100%; height: 100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar" >
        <div v-for="(item, index) in category"  :key="index">
            <img v-lazy="item.image"  width="90%"  alt="" class="type-image">
            <span>{{item.mallCategoryName}}</span>
        </div>
    </div>
    <div>
        <img v-lazy="adBanner" alt="" style="width:100%">
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
          {imageUrl: require('../../assets/images/01.png')},
          {imageUrl: require('../../assets/images/02.png')},
          {imageUrl: require('../../assets/images/03.png')},
          {imageUrl: require('../../assets/images/04.png')},
          {imageUrl: require('../../assets/images/05.png')},
          {imageUrl: require('../../assets/images/06.png')},
          {imageUrl: require('../../assets/images/07.png')}
      ],
      category:[],
      adBanner:require("../../assets/images/location.png")
    };
  },
  created(){
      console.log(12333)
      this.$axios({
          url: '../../../static/easy-mock/index.json',
          method: 'get'
      }).then(response =>{
          if (response.status == 200) {
              this.category = response.data.data.category;
              this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
            }
      }).catch(err => {
          console.log(err)
      })
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
    /* background-color: red; */
    /* height:50px; */
    max-height: 15.9rem;
    overflow: hidden;
}
.type-bar{
    /* display: none; */
    /* background-color: yelow; */
    /* height: 200px; */
    margin: 0rem .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    /* width:100px;
    height: 100px; */
}
.type-bar div{
    padding: .3rem;
    font-size: 12px;
    text-align: center;
}
</style>