<template>
  <div class="goods-accordion-box">
    <ul>
      <li class="on">
        <button type="button"><span>상품정보 제공고시</span></button>
        <div class="con-box">
          <dl>
            <dt><p>제품<br>소재</p></dt>
            <dd><p>면 80% 폴리에스터 20%</p></dd>
          </dl>
          <dl>
            <dt><p>제품<br>소재</p></dt>
            <dd><p>면 80% <br>폴리에스터 20%</p></dd>
          </dl>
          <dl>
            <dt><p>제품 소재</p></dt>
            <dd><p>면 80% <br>폴리에스터 20%</p></dd>
          </dl>
        </div>
      </li>
      <li>
        <button type="button"><span>상품정보 제공고시</span></button>
        <div class="con-box">
          <dl>
            <dt><p>제품<br>소재</p></dt>
            <dd><p>면 80% 폴리에스터 20%</p></dd>
          </dl>
          <dl>
            <dt><p>제품<br>소재</p></dt>
            <dd><p>면 80% <br>폴리에스터 20%</p></dd>
          </dl>
          <dl>
            <dt><p>제품 소재</p></dt>
            <dd><p>면 80% <br>폴리에스터 20%</p></dd>
          </dl>
        </div>
      </li>
      <li>
        <button type="button"><span>상품정보 제공고시</span></button>
        <div class="con-box">
          <dl>
            <dt><p>제품<br>소재</p></dt>
            <dd><p>면 80% 폴리에스터 20%</p></dd>
          </dl>
          <dl>
            <dt><p>제품<br>소재</p></dt>
            <dd><p>면 80% <br>폴리에스터 20%</p></dd>
          </dl>
          <dl>
            <dt><p>제품 소재</p></dt>
            <dd><p>면 80% <br>폴리에스터 20%</p></dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
Vue.use(VueAwesomeSwiper);

module.exports = {

  mounted: function(){
    var tabBox = document.querySelector('.goods-accordion-box ul');
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
<style>

</style>