<template>
  <div class="conner-box template-box temp-swiper">
    <div class="title-box">
      <p class="tit-txt">템플릿_스와이핑</p>
      <a href="#none" class="more-btn">ALL</a>
    </div>
    <div class="inner-box">
      <swiper ref="aswiper" :options="swiperOption">
        <swiper-slide>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :main-title="'메인타이틀11'"
              :sub-title="'서브타이틀'"
              :descript="'상품설명'"
              :percent="'20'"
              :price="'43,900'"
              :share="''"
              :like="''"
              :sell="''"
              :stkad="'true'"
              :stknew="'true'"
              :soldout="'true'"
              :options="productOption"
          ></product-box>
        </swiper-slide>
        <swiper-slide>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :main-title="'메인타이틀11'"
              :sub-title="'서브타이틀'"
              :descript="'상품설명'"
              :percent="'20'"
              :price="'43,900'"
              :share="''"
              :like="''"
              :sell="''"
              :stkad="'true'"
              :stknew="'true'"
              :soldout="''"
              :options="productOption"
          ></product-box>
        </swiper-slide>
        <swiper-slide>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :main-title="'메인타이틀11'"
              :sub-title="'서브타이틀'"
              :descript="'상품설명'"
              :percent="'20'"
              :price="'43,900'"
              :share="''"
              :like="''"
              :sell="''"
              :stkad="'true'"
              :stknew="'true'"
              :soldout="''"
              :options="productOption"
          ></product-box>
        </swiper-slide>
        <swiper-slide>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :main-title="'메인타이틀11'"
              :sub-title="'서브타이틀'"
              :descript="'상품설명'"
              :percent="'20'"
              :price="'43,900'"
              :share="''"
              :like="''"
              :sell="''"
              :stkad="'true'"
              :stknew="'true'"
              :soldout="''"
              :options="productOption"
          ></product-box>
        </swiper-slide>
        <swiper-slide>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :main-title="'메인타이틀11'"
              :sub-title="'서브타이틀'"
              :descript="'상품설명'"
              :percent="'20'"
              :price="'43,900'"
              :share="''"
              :like="''"
              :sell="''"
              :stkad="'true'"
              :stknew="'true'"
              :soldout="''"
              :options="productOption"
          ></product-box>
        </swiper-slide>
        <swiper-slide>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :main-title="'메인타이틀11'"
              :sub-title="'서브타이틀'"
              :descript="'상품설명'"
              :percent="'20'"
              :price="'43,900'"
              :share="''"
              :like="''"
              :sell="''"
              :stkad="'true'"
              :stknew="'true'"
              :soldout="''"
              :options="productOption"
          ></product-box>
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
  components: {
    'product-box': httpVueLoader('../common/product.vue')
  },
  data: function(){
    var that = this;

    return {
      slideCount: 0,
      currentSlideIndex: 0,
      barWidth: '0%',
      swiperOption: {
        loop: false,
        init: false,
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 4,
        on: {
          init: function(){
            var loop = that.swiperOption.loop;
            var slideLength = loop ? that.swiper.slides.length / 3 : that.swiper.slides.length;
            that.currentSlideIndex = that.swiper.realIndex + 1;
            that.barWidth = (100 / slideLength) * (that.swiper.realIndex + 1) + "%";
          },
          slideChange: function () {
            var loop = that.swiperOption.loop;
            var slideLength = loop ? that.swiper.slides.length / 3 : that.swiper.slides.length - 1;
            that.currentSlideIndex = that.swiper.realIndex + 1;
            that.barWidth = (100 / slideLength) * (that.swiper.realIndex + 1) + "%";
          }
        }
      },
      productOption: {
        imgMode:'',//img-wide 와이드 이미지 , img-rect 직사각형 이미지
        imgAlign:'align-center',// align-center 기본형, align-left 이미지 왼쪽, align-right 이미지 오른쪽
        subTitLine: true,
        desLine: true,
        drawer: true,
      },
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