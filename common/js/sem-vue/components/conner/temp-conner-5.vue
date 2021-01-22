<template>
  <div class="conner-box template-box temp-5">
    <div class="title-box">
      <p class="tit-txt">템플릿_랭킹구좌</p>
      <a href="#none" class="more-btn">ALL</a>
    </div>
    <div class="inner-box">
      <div class="tab-box">
        <ul>
          <li class="on"><button type="button">공유순</button></li>
          <li><button type="button">구매순</button></li>
          <li><button type="button">좋아요순</button></li>
        </ul>
      </div>
      <div class="prod-list list">
        <ul>
          <li>
            <product-box
                :link="'#none'"
                :img-path="'../../common/images/temp/tempImg_2_2_2.png'"
                :chk-box-id="''"
                :main-title="'아프리모 향수'"
                :sub-title="''"
                :descript="'러블리부띠끄'"
                :percent="'20'"
                :price="'43,900'"
                :share="'2,111'"
                :like="'1,111'"
                :sell="''"
                :stkad="''"
                :stknew="''"
                :options="productOption"
                :soldout="'1'"
                @btnshareclick="openPopupShare"
            ></product-box>
          </li>
          <li>
            <product-box
                :link="'#none'"
                :img-path="'../../common/images/temp/product_normal.png'"
                :chk-box-id="''"
                :main-title="'조말론 잉글리쉬 페어 앤 프리지아 코롱 50ml 조말론 잉글리쉬 페어 앤 프리지아 코롱 50ml 조말론 잉글리쉬 페어 앤 프리지아 코롱 50ml 조말론 잉글리쉬 페어 앤 프리지아 코롱 50ml'"
                :sub-title="''"
                :descript="'상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명'"
                :percent="'20'"
                :price="'43,900'"
                :share="'2,111'"
                :like="'1,111'"
                :sell="''"
                :stkad="''"
                :stknew="''"
                :soldout="''"
                :options="productOption"
                :soldout="''"
                @btnshareclick="openPopupShare"
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
        imgMode:'img-round',//img-wide 와이드 이미지 , img-rect 직사각형 이미지, img-round 라운드이미지
        imgAlign:'align-left img-size-s4',// align-center 기본형, align-left 이미지 왼쪽, align-right 이미지 오른쪽
        //align-left 일경우 적용 이미지사이즈 img-size-s0(166 묶음코너1) , img-size-s1(190 묶음코너3) ,img-size-s2(196 랭킹구좌) .img-size-s3(230 기획전)
        subTitLine: true,//서브타이틀 true 선택시 두줄표시
        desLine: false,//상품설명 true 선택시 두줄표시
        drawer: true,//true 선택시 내서랍 아이콘 노출
        shareBtn: true,//창고상품 : true 선택시 공유하기 아이콘 노출
      },
    }
  },
  methods: {
    openPopupShare: function(param) {
      console.log(param.urlInfo)//이후 전달은 고민이 필요함
      //parent에 [popup-share] component 필요
      openPopup('popup-share-wrap');
    }
  }
}
</script>