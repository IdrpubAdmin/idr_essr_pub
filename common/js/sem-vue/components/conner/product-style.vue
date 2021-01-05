<template>
  <div class="conner-box template-box">
    <h3 class="def-tit">상품리스트 샘플</h3>
    <div class="inner-box">
      <div style="padding:30px 0;">
        <div class="prod-list prod-1ea">
          <ul>
            <li>
              <!-- chk-box-id 체크박스 for,id값 빈값일경우 노출안함, stkad , stknew 스티커 ad,new 빈값일경우 노출안함 , 품절일경우 soldout true 값 입력 값 없을시 노출안함  -->
              <product-box
                  :link="'#none'"
                  :img-path="'../../common/images/temp/product_normal.png'"
                  :chk-box-id="'chkboxId'"
                  :main-title="'메인타이틀11'"
                  :sub-title="'서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀서브타이틀'"
                  :descript="'상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명'"
                  :percent="'20'"
                  :price="'43,900'"
                  :share="'2,111'"
                  :like="'1,111'"
                  :sell="'43,900'"
                  :stkad="'true'"
                  :stknew="'true'"
                  :soldout="'true'"
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
        imgAlign:'align-center',// align-center 기본형, align-left 이미지 왼쪽, align-right 이미지 오른쪽
        //align-left 일경우 적용 이미지사이즈 img-size-s0(166 묶음코너1) , img-size-s1(190 묶음코너3) ,img-size-s2(196 랭킹구좌) .img-size-s3(230 기획전)
        subTitLine: true,//서브타이틀 true 선택시 두줄표시
        desLine: true,//상품설명 true 선택시 두줄표시
        drawer: false,//true 선택시 내서랍 아이콘 노출
        shareBtn: false,//창고상품 : true 선택시 공유하기 아이콘 노출
        kakaoBtn: true,//창고상품 : true 선택시 카카오 공유 아이콘 노출
      },
    }
  },
}
</script>