<template>
  <div class="conner-box popup-banner-2" style="display: none;">
    <div class="inner-box">
      <swiper ref="aswiper" :options="swiperOption">
        <swiper-slide>
          <div class="img-box">
            <img src="../../common/images/temp/main_banner.png" />
          </div>
          <dl>
            <dt>
              <div class="stk-box plan">
                <span class="stk_new">NEW</span>
                <span class="stk_ad">AD</span>
                <span class="stk_sp">특가</span>
              </div>
              <p>이렇게 우아한 케이스의 등장</p>
            </dt>
            <dd><p>악어무늬를 입힌 이태리 소가죽</p></dd>
            <dd><a href="#none"><span>바로가기</span></a></dd>
          </dl>
        </swiper-slide>
        <swiper-slide>
          <div class="img-box">
            <img src="../../common/images/temp/main_banner.png" />
          </div>
          <dl>
            <dt>
              <div class="stk-box plan">
                <span class="stk_new">NEW</span>
                <span class="stk_ad">AD</span>
                <span class="stk_sp">특가</span>
              </div>
              <p>이렇게 우아한 케이스의 등장</p>
            </dt>
            <dd><p>악어무늬를 입힌 이태리 소가죽</p></dd>
            <dd><a href="#none"><span>바로가기</span></a></dd>
          </dl>
        </swiper-slide>
        <swiper-slide>
          <div class="img-box">
            <img src="../../common/images/temp/main_banner.png" />
          </div>
          <dl>
            <dt>
              <div class="stk-box plan">
                <span class="stk_new">NEW</span>
                <span class="stk_ad">AD</span>
                <span class="stk_sp">특가</span>
              </div>
              <p>이렇게 우아한 케이스의 등장</p>
            </dt>
            <dd><p>악어무늬를 입힌 이태리 소가죽</p></dd>
            <dd><a href="#none"><span>바로가기</span></a></dd>
          </dl>
        </swiper-slide>
      </swiper>
      <div class="button-box">
        <button type="button" class="modal-blk-btn"><span>다시 보지 않기</span></button>
        <button type="button" class="modal-blk-btn" onclick="document.querySelector('.popup-banner').style.display='none';"><span>닫기</span></button>
      </div>
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
        observer: true,
        observeParents: true,
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