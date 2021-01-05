<template>
  <div class="conner-box template-box">
    <div class="inner-box">
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
                :share="'9,999'"
                :like="'0'"
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
                :share="'9,999'"
                :like="'0'"
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
                :share="'9,999'"
                :like="'0'"
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
                :share="'9,999'"
                :like="'0'"
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
        imgAlign:'align-left img-size-s3',// align-center 기본형, align-left 이미지 왼쪽, align-right 이미지 오른쪽 ,
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