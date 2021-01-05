<template>
  <div class="qna-box">
    <dl class="on">
      <dt><em>Q</em><button type="button">주문을 확인하고 싶어요.</button></dt>
      <dd><em>A</em><p>My > 주문내역에서 주문번호를 선택하여 상세 주문 내역 확인이 가능합니다.</p></dd>
    </dl>
    <dl>
      <dt><em>Q</em><button type="button">여러개의 상품을 주문했는데, 일부만 취소하고 싶어요.</button></dt>
      <dd><em>A</em><p>My > 주문내역에서 주문번호를 선택하여 상세 주문 내역 확인이 가능합니다.</p></dd>
    </dl>
    <dl>
      <dt><em>Q</em><button type="button">현금영수증을 받을 수 있나요?</button></dt>
      <dd><em>A</em><p>My > 주문내역에서 주문번호를 선택하여 상세 주문 내역 확인이 가능합니다.</p></dd>
    </dl>
    <dl>
      <dt><em>Q</em><button type="button">입점 신청을 어떻게 하나요?</button></dt>
      <dd><em>A</em><p>My > 주문내역에서 주문번호를 선택하여 상세 주문 내역 확인이 가능합니다.</p></dd>
    </dl>
    <dl>
      <dt><em>Q</em><button type="button">배송기간은 얼마나 걸리나요?</button></dt>
      <dd><em>A</em><p>My > 주문내역에서 주문번호를 선택하여 상세 주문 내역 확인이 가능합니다.</p></dd>
    </dl>
    <button type="button" class="white-btn"><span>더보기 <em>+</em></span></button>
  </div>
</template>
<script>
//# sourceURL=/vcomps/FooterMenuComponent.vue
module.exports = {
  methods: {

  },
  mounted:function(){
    var qnaBox = document.querySelector('.qna-box');
    var qnaList = qnaBox.querySelectorAll('dl');
    for(var i = 0 ;i<qnaList.length;i++){
      var btn = qnaList[i].querySelector('button');
      (function(idx) {
        qnaList[idx].querySelector('button').addEventListener('click',function(){
          setDl(idx);
        })
      })(i);
    }
    function setDl(idx){
      for(var i = 0 ;i<qnaList.length;i++){
        if(i == idx){
          toggleClass(qnaList[i],'on');
        }else{
          qnaList[i].classList.remove('on');
        }
      }
    }
    }
}
</script>