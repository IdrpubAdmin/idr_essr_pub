<template>
  <div class="conner-box category-slide">
    <div class="inner-box">
      <swiper ref="aswiper" :options="swiperOption">
        <swiper-slide class="on">
          <div class="on"><button type="button">추천</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">얼리버드</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">지점</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">추천</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">얼리버드</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">지점</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">추천</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">얼리버드</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">지점</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">추천</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">얼리버드</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">지점</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">추천</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">얼리버드</button></div>
        </swiper-slide>
        <swiper-slide>
          <div><button type="button">지점</button></div>
        </swiper-slide>
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
        loop: false,
        init: false,
        centeredSlides: false,
        slidesPerView: 'auto',
        // slideToClickedSlide:true,
        on: {
          init: function(){

          },
          slideChange: function () {

          },
          click: function(evt){
            var targetIndex = this.clickedIndex;
            var slideIndex = 0;
            if(targetIndex > 1){
              slideIndex = targetIndex - 2;
              that.swiper.slideTo(slideIndex);
            }
            var list = this.$wrapperEl[0].querySelectorAll('.swiper-slide');
            for (var i = 0; i < list.length; ++i) {
              if(i != targetIndex){
                list[i].classList.remove('on');
              }else{
                list[targetIndex].classList.add('on');
              }
            }
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
  },
  methods:{
    handleResize: function(){

    },
    handleScroll: function (event) {
      this.categoryScroll();
    },
    categoryScroll: function(){
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var wrapper = document.querySelector('.wrapper');
      var headerWrap = document.querySelector('.header-wrap');
      var cateSlide = document.querySelector('.category-slide');
      var cateSlideBox = document.querySelector('.cate-slide-box');
      var connerBoxT = document.querySelector('.conner-container').offsetTop;
      var cateSlideH = cateSlideBox.clientHeight;
      var cateSlideBoxT = cateSlideBox.offsetTop;
      var header = document.querySelector('.header');
      var headerH = header.clientHeight;
      var headerCon = headerWrap.querySelector('.append-box');

      if(scrollTop + headerH >= connerBoxT){
        headerCon.append(cateSlide);
        cateSlideBox.style.paddingTop = cateSlideH + 'px';
      }else{
        cateSlideBox.append(cateSlide);
        cateSlideBox.style.paddingTop = 0;
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