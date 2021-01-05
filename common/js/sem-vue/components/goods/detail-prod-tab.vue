<template>
  <div class="detail-tab-menu">
    <ul>
      <li class="on"><button type="button"><em>상품설명</em></button></li>
      <li><button type="button"><em>구매정보</em></button></li>
      <li><button type="button"><em>배송/반품/교환</em></button></li>
    </ul>
  </div>
</template>

<script>
Vue.use(VueAwesomeSwiper);

module.exports = {

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
      var tabMenu = document.querySelector('.detail-tab-menu');
      var goodsBox = document.querySelector('.goods-wrap');
      var detailBox = document.querySelector('.prod-detail');
      var tabMenuBox = document.querySelector('.detail-tab-container');
      var cateSlideH = tabMenuBox.clientHeight;
      var detailBoxH = detailBox.clientHeight;
      var cateSlideBoxT = tabMenuBox.offsetTop;
      var goodsBoxT = goodsBox.offsetTop;
      var header = document.querySelector('.header');
      var headerH = header.clientHeight;
      var headerCon = headerWrap.querySelector('.append-box');
      if(scrollTop + headerH >= goodsBoxT + detailBoxH){
        headerCon.append(tabMenu);

        tabMenuBox.style.paddingTop = cateSlideH + 'px';
      }else{
        tabMenuBox.append(tabMenu);
        tabMenuBox.style.paddingTop = 0;
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
  },
  mounted: function(){
    var tabBox = document.querySelector('.detail-tab-menu ul');
    var tabList = tabBox.querySelectorAll('li');
    for(var i = 0 ;i<tabList.length;i++){
      var btn = tabList[i].querySelector('button');
      (function(idx) {
        tabList[idx].querySelector('button').addEventListener('click',function(){
          setDl(idx);
        })
      })(i);
    }
    function setDl(idx){
      for(var i = 0 ;i<tabList.length;i++){
        if(i == idx){
          toggleClass(tabList[i],'on');
        }else{
          tabList[i].classList.remove('on');
        }
      }
    }
  }

};
</script>