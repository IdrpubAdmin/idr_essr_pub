<template>
  <div class="conner-box main-banner-2">
    <div class="inner-box">
      <swiper ref="aswiper" :options="swiperOption">
        <swiper-slide>
          <div>
            <a href="#none">
              <div class="img-box">
                <img src="../../common/images/temp/bottom_banner.png" alt="">
                <div class="stk-box cnr">
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
                <img src="../../common/images/temp/bottom_banner.png" alt="">
                <div class="stk-box cnr">
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
                <img src="../../common/images/temp/bottom_banner.png" alt="">
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
  methods: {
  },
  mounted: function(){
    this.swiper.init();
    var loop = this.swiperOption.loop;
    var slideLength = loop ? this.swiper.slides.length / 3 : this.swiper.slides.length;
    // 필요시 아래 데이터 수 세팅되어야 합니다.
    this.slideCount = slideLength;
  }
};
</script>