<template>
  <div class="conner-box template-box temp-1">
    <div class="title-box">
      <!-- mkp-edit : 20210114 -->
      <!--<p class="tit-txt">템플릿_묶음코너1</p>-->
      <p class="tit-txt">
        템플릿_묶음코너1
        <span class="tit-sub-txt">기획전 코너에 MD 안내멘트 영역 노출입니다.</span>
      </p>
      <!-- //mkp-edit : 20210114 -->
    </div>
    <div class="inner-box">
      <div class="top-box">
        <div class="user-info">
          <span class="user"><img src="http://placehold.it/50x50?text=user" />
          </span>
          <span class="name">최진우 관리자</span>
          <!-- mkp-del : 20210114 -->
          <!--<span class="date">2010.10.10</span>-->
          <!-- //mkp-del : 20210114 -->
        </div>
        <div class="img-box">
          <a href="#none">
            <img src="http://placehold.it/680x680?text=conner-1" />
          </a>
        </div>
        <div class="info-box">
          <p class="tit"><b>포근한 차렵이불로 바꿔야 할때<br>
            겨울을 준비하는 자세</b>
          <p class="desc">오센트는 향기를 통해 우리의 일상에 의미를 부여하는 일에 가치를 두고, 그것에 집중합니다.오센트는 향기를 통해 우리의 일상에 의미를 부여하는 일에 가치를 두고, 그것에 집중합니다.오센트는 향기를 통해 우리의 일상에 의미를 부여하는 일에 가치를 두고, 그것에 집중합니다.오센트는 향기를 통해 우리의 일상에 의미를 부여하는 일에 가치를 두고, 그것에 집중합니다.오센트는 향기를 통해 우리의 일상에 의미를 부여하는 일에 가치를 두고, 그것에 집중합니다.오센트는 향기를 통해 우리의 일상에 의미를 부여하는 일에 가치를 두고, 그것에 집중합니다. 오센트의 향기로 증정적인 영감을 느껴보세요.</p>
          <a href="#none" class="more-btn">더보러 가기</a>
        </div>
      </div>
      <div class="bottom-box">
        <div class="prod-list prod-1ea list">
          <ul>
            <li>
              <product-box
                  :link="'#none'"
                  :img-path="'../../common/images/temp/product_normal.png'"
                  :chk-box-id="''"
                  :main-title="'메인타이틀11'"
                  :sub-title="'서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀'"
                  :descript="''"
                  :percent="'20'"
                  :price="'43,900'"
                  :share="''"
                  :like="''"
                  :sell="''"
                  :stkad="''"
                  :stknew="'true'"
                  :options="productOption"
              ></product-box>
            </li>
            <li>
              <product-box
                  :link="'#none'"
                  :img-path="'../../common/images/temp/product_normal.png'"
                  :chk-box-id="''"
                  :main-title="'메인타이틀11'"
                  :sub-title="'서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀'"
                  :descript="''"
                  :percent="'20'"
                  :price="'43,900'"
                  :share="''"
                  :like="''"
                  :sell="''"
                  :stkad="''"
                  :stknew="'true'"
                  :options="productOption"
              ></product-box>
            </li>
            <li>
              <product-box
                  :link="'#none'"
                  :img-path="'../../common/images/temp/product_normal.png'"
                  :chk-box-id="''"
                  :main-title="'메인타이틀11'"
                  :sub-title="'서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀'"
                  :descript="''"
                  :percent="'20'"
                  :price="'43,900'"
                  :share="''"
                  :like="''"
                  :sell="''"
                  :stkad="''"
                  :stknew="'true'"
                  :options="productOption"
              ></product-box>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
module.exports = {
  components: {
    'product-box': httpVueLoader('../common/product.vue')
  },
  data: function(){
    var that = this;
    return {
      productOption: {
        imgMode:'',//img-wide 와이드 이미지 , img-rect 직사각형 이미지
        imgAlign:'align-left img-size-s0',// align-center 기본형, align-left 이미지 왼쪽, align-right 이미지 오른쪽
        //align-left 일경우 적용 이미지사이즈 img-size-s0(166 묶음코너1) , img-size-s1(190 묶음코너3) ,img-size-s2(196 랭킹구좌) .img-size-s3(230 기획전)
        subTitLine: true,//서브타이틀 true 선택시 한줄표시
        desLine: true,//상품설명 true 선택시 한줄표시
        drawer: true,//true 선택시 내서랍 아이콘 노출
        shareBtn: false,//창고상품 : true 선택시 공유하기 아이콘 노출
      },
    }
  },
}
</script>