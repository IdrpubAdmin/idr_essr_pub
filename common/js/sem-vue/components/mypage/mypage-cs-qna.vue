<template>
  <div class="qna-box">
    <dl class="on">
      <dt>
        <button type="button">
          <p class="qna-cate">상품재고<span>답변완료</span></p>
          <p class="qna-tit">디즈니 청바지 상품이 있는지 확인해봤습니다.디즈니 청바지 상품이 있는지 확인해봤습니다.디즈니 청바지 상품이 있는지 확인해봤습니다.</p>
          <p class="qna-date">2021.01.06</p>
        </button>
      </dt>
      <dd>
        <div class="qna-q">
          <em>Q</em><p>정산 서비스 관련 문의드립니다.
          정산받을 금액이 맞지 않는 것 같습니다.
          학인 부탁드립니다.
        </p>
        </div>
        <div class="qna-a">
          <em>A</em><p>안녕하세요 이랜드 입니다.
          이랜드 앱이 업데이트(버전 9.0.0)되었습니다.
          일부 기능 개선 및 서비스 안정화를 위해 업데이트
          되었습니다. 안정적인 서비스를 위해 최신 버전으로

          감사합니다.</p>
        </div>
      </dd>
    </dl>
    <dl>
      <dt>
        <button type="button">
          <p class="qna-cate">상품출시</p>
          <p class="qna-tit">상품 출시일이 언제인지 궁금합니다.</p>
          <p class="qna-date">2021.01.02</p>
        </button>
      </dt>
      <dd>
        <div class="qna-q">
          <em>Q</em><p>정산 서비스 관련 문의드립니다.
          정산받을 금액이 맞지 않는 것 같습니다.
          학인 부탁드립니다.
        </p>
        </div>
        <div class="qna-a">
          <em>A</em><p>안녕하세요 이랜드 입니다.
          이랜드 앱이 업데이트(버전 9.0.0)되었습니다.
          일부 기능 개선 및 서비스 안정화를 위해 업데이트
          되었습니다. 안정적인 서비스를 위해 최신 버전으로

          감사합니다.</p>
        </div>
      </dd>
    </dl>
    <dl>
      <dt>
        <button type="button">
          <p class="qna-cate">서비스<span>답변완료</span></p>
          <p class="qna-tit">정산 관련문의드립니다.</p>
          <p class="qna-date">2021.01.06</p>
        </button>
      </dt>
      <dd>
        <div class="qna-q">
          <em>Q</em><p>정산 서비스 관련 문의드립니다.
          정산받을 금액이 맞지 않는 것 같습니다.
          학인 부탁드립니다.
        </p>
        </div>
        <div class="qna-a">
          <em>A</em><p>안녕하세요 이랜드 입니다.
          이랜드 앱이 업데이트(버전 9.0.0)되었습니다.
          일부 기능 개선 및 서비스 안정화를 위해 업데이트
          되었습니다. 안정적인 서비스를 위해 최신 버전으로

          감사합니다.</p>
        </div>
      </dd>
    </dl>
    <dl>
      <dt>
        <button type="button">
          <p class="qna-cate">상품재고</p>
          <p class="qna-tit">디즈니 청바지 상품이 있는지 확인해봤습니다.</p>
          <p class="qna-date">2021.01.06</p>
        </button>
      </dt>
      <dd>
        <div class="qna-q">
          <em>Q</em><p>정산 서비스 관련 문의드립니다.
          정산받을 금액이 맞지 않는 것 같습니다.
          학인 부탁드립니다.
        </p>
        </div>
        <div class="qna-a">
          <em>A</em><p>안녕하세요 이랜드 입니다.
          이랜드 앱이 업데이트(버전 9.0.0)되었습니다.
          일부 기능 개선 및 서비스 안정화를 위해 업데이트
          되었습니다. 안정적인 서비스를 위해 최신 버전으로

          감사합니다.</p>
        </div>
      </dd>
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