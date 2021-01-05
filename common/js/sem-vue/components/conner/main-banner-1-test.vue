<template>
  <div class="conner-box main-banner-1" style="overflow: hidden;">
    <div class="inner-box">
      <div class="dim-box"></div>
      <swiper ref="aswiper" :options="swiperOption">
        <swiper-slide>
          <div>
            <a href="#none">
              <div class="img-box">
                <img src="../../common/images/temp/event_temp.png" />
                <div class="stk-box plan">
                  <span class="stk_new">NEW</span>
                  <span class="stk_ad">AD</span>
                  <span class="stk_sp">특가</span>
                </div>
              </div>
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <a href="#none">
              <div class="img-box">
                <img src="../../common/images/temp/event_temp.png" />
                <div class="stk-box plan">
                  <span class="stk_new">NEW</span>
                  <span class="stk_ad">AD</span>
                  <span class="stk_sp">특가</span>
                </div>
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
    var target = null;
    var targetT = 0;
    var banner = null;
    var dim = null;
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
    this.target = document.querySelector('.main-banner-1');
    this.targetT = this.target.offsetTop;
    this.banner = this.target.querySelector('.inner-box');
    this.dim = this.banner.querySelector('.dim-box');
    this.bannerScroll();
  },

  methods:{
    handleResize: function(){

    },
    handleScroll: function (event) {
      this.bannerScroll();
    },
    bannerScroll: function(){

      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;


      this.targetT = this.target.offsetTop;
      var bannerH = this.banner.clientHeight;
      var bannerS = (scrollTop - this.targetT)/2;
      var per = (scrollTop - this.targetT) / bannerH;


      if(scrollTop >= this.targetT && scrollTop <= this.targetT + bannerH){
        this.banner.style.transform = "translate3d(-50%,"+ bannerS+'px'+",0)";
        this.dim.style.opacity = per;
        this.banner.classList.remove('on');
      }else if(scrollTop < this.targetT){
        this.banner.style.transform = "translate3d(-50%,"+ 0+'px'+",0)";
        this.dim.style.opacity = 0;
      }else{
        if(!this.banner.classList.contains('on')){
          this.banner.classList.add('on');
        }
      }
    }
  },
  created: function () {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>