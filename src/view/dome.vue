<template>

<div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">slider1</div>
      <div class="swiper-slide">slider2</div>
      <div class="swiper-slide">slider3</div>
    </div>
  </div>

</div>



</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';

    export default {
        name: "dome",
      data() {
        return {
          activeName: 'second'
        };
      },
      mounted() {
        let mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }

    }
</script>

<style scoped>
  #dome
  {
    width: 100%;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: red;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .swiper-container{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
    height: 100%;
    width: 100%;
  }

</style>
