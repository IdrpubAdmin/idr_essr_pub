<template>
  <div class="conner-box goods-banner" style="overflow: hidden;">
    <div class="inner-box" style="position:fixed;">
      <div class="dim-box"></div>
      <swiper ref="aswiper" :options="swiperOption">
        <swiper-slide>
          <div>
            <a href="#none">
              <div class="img-box">
                <img src="../../common/images/temp/tempImg_2.png" alt="">
              </div>
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <a href="#none">
              <div class="img-box">
                <img src="../../common/images/temp/tempImg_2.png" alt="">
              </div>
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <a href="#none">
              <div class="img-box">
                <img src="../../common/images/temp/tempImg_2.png" alt="">
              </div>
            </a>
          </div>
        </swiper-slide>
        <div class="pagination-wrap" slot="pagination">
          <span class="swiper-pagination-bar">
              <span class="swiper-pagination-fill" :style="{width: barWidth}"></span>
          </span>
          <span class="swiper-pagination-num">
            <span class="current-num">{{currentSlideIndex}}</span> / <span class="total-num">{{slideCount}}</span>
          </span>
        </div>
      </swiper>
    </div>
  </div>
</template>
<script>
Vue.use(VueAwesomeSwiper);

module.exports = {
  data: function(){
    var that = this;

    return {
      slideCount: 0,
      currentSlideIndex: 0,
      barWidth: '0%',
      swiperOption: {
        loop: true,
        init: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        on: {
          init: function(){
            var loop = that.swiperOption.loop;
            var slideLength = loop ? that.swiper.slides.length / 3 : that.swiper.slides.length;
            that.currentSlideIndex = that.swiper.realIndex + 1;
            that.barWidth = (100 / slideLength) * (that.swiper.realIndex + 1) + "%";
          },
          slideChange: function () {
            var loop = that.swiperOption.loop;
            var slideLength = loop ? that.swiper.slides.length / 3 : that.swiper.slides.length;
            that.currentSlideIndex = that.swiper.realIndex + 1;
            that.barWidth = (100 / slideLength) * (that.swiper.realIndex + 1) + "%";
          }
        }
      }
    }
  },
  computed: {
    swiper: function(){
      return this.$refs.aswiper.swiper;
    }
  },
  updated: function(){
    this.swiper.update();
  },
  mounted: function(){
    this.swiper.init();
    var loop = this.swiperOption.loop;
    var slideLength = loop ? this.swiper.slides.length / 3 : this.swiper.slides.length;
    // 필요시 아래 데이터 수 세팅되어야 합니다.
    this.slideCount = slideLength;
    this.bannerScroll();
    this.handleResize();
  },

  methods:{
    handleResize: function(){
      var target = document.querySelector('.goods-banner');
      var targetInner = target.querySelector('.inner-box');
      var targetInnerH = targetInner.clientHeight;
      target.style.height = targetInnerH+'px';
    },
    handleScroll: function (event) {
      this.bannerScroll();
    },
    bannerScroll: function(){
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var target = document.querySelector('.goods-banner');
      var targetT = target.offsetTop;
      var banner = target.querySelector('.inner-box');
      var dim = banner.querySelector('.dim-box');
      var bannerH = banner.clientHeight;
      var bannerS = (scrollTop - targetT)/2;
      var per = (scrollTop - targetT) / bannerH;
      if(scrollTop >= targetT && scrollTop <= targetT + bannerH){
        dim.style.opacity = per;
      }else if(scrollTop < targetT){
        dim.style.opacity = 0;
      }
    }
  },
  created: function () {
    var _this =this;
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    setTimeout(function(){_this.handleResize();},100);
  },
  destroyed: function () {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>