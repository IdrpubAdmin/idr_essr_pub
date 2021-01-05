<template>
  <div class="product-list-box" :class="pageType">
    <div class="sort-box">
      <div class="left-box">
        <span class="list-count" v-if="isCount"><em>100,000</em><i>개</i></span>
        <button type="button" class="list-align-btn btn-actionseet" data-actionsheet="prod-list-align" v-if="isSortLeft">신상품순</button>
      </div>
      <div class="right-box">
        <ul>
          <li v-if="isSortRight"><button type="button" data-actionsheet="prod-list-align" class="list-align-btn btn-actionseet">신상품순</button></li>
          <li v-if="isViewTypeOne"><button type="button" class="list-type-btn type1">리스트타입2</button></li>
          <li v-if="isViewTypeTwo"><button type="button" class="list-type-btn type2 on">리스트타입3</button></li>
          <li v-if="isFilter"><button type="button" class="btn-actionseet list-filter-btn" data-actionsheet="popup-filter">필터</button></li>
          <li v-if="isChkBox" class="chk-type">
            <label for="chkSelAll" class="chk-box">
              <input type="checkbox" id="chkSelAll" chekced="">
              <span class="square"></span>
            </label>
            <span>전체선택</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="prod-list prod-2ea list">
      <p class="sep-tit">OVER 30,000 WON_ 구분자 타이틀 2</p>
      <ul>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="'id1'"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="''"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="''"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="''"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
      </ul>
    </div>
    <div class="prod-list prod-2ea list">
      <p class="sep-tit">OVER 30,000 WON_ 구분자 타이틀 2</p>
      <ul>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="'id1'"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="''"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="''"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="''"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
      </ul>
    </div>
    <div class="prod-list prod-2ea list">
      <p class="sep-tit">OVER 30,000 WON_ 구분자 타이틀 2</p>
      <ul>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="'id1'"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="''"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="''"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
        <li>
          <product-box
              :link="'#none'"
              :img-path="'../../common/images/temp/product_normal.png'"
              :chk-box-id="''"
              :main-title="'브랜드명'"
              :sub-title="'상품명'"
              :descript="''"
              :percent="'20'"
              :price="'43,900'"
              :share="'2,111'"
              :like="'1,111'"
              :sell="''"
              :stkad="''"
              :stknew="''"
              :options="productOption"
          ></product-box>
        </li>
      </ul>
    </div>
    <div class="fixed-action-sheet select-layer prod-list-align">
      <div class="action-sheet-bx">
        <div class="action-sheet-scr">
          <ul class="select-list">
            <li>
              <label for="rd1-1" class="radio-box">
                <input type="radio" id="rd1-1" name="rd" checked="">
                <span class="ico"></span>
                <span class="form-txt">상품 재고</span>
              </label>
            </li>
            <li>
              <label for="rd1-2" class="radio-box">
                <input type="radio" id="rd1-2" name="rd" checked="">
                <span class="ico"></span>
                <span class="form-txt">가격 관련</span>
              </label>
            </li>
            <li>
              <label for="rd1-3" class="radio-box">
                <input type="radio" id="rd1-3" name="rd" checked="">
                <span class="ico"></span>
                <span class="form-txt">상품 출시</span>
              </label>
            </li>
            <li>
              <label for="rd1-4" class="radio-box">
                <input type="radio" id="rd1-4" name="rd" checked="">
                <span class="ico"></span>
                <span class="form-txt">기타</span>
              </label>
            </li>
          </ul>
        </div>
        <div class="button-box">
          <button type="button" class="modal-blk-btn w100 close-btn"><span>닫기</span></button>
        </div>
      </div>
      <div class="dim"></div>
    </div>
</template>
<script>
module.exports = {
  components: {
    'product-box': httpVueLoader('../common/product.vue')
  },
  props: {
    pageType: {
      type: String,
      required: false,
      default: ''
    },
    productType: {
      type: String,
      required: false,
      default: ''
    },
    isCount: Boolean,
    isSortLeft: Boolean,
    isSortRight: Boolean,
    isFilter: Boolean,
    isViewTypeOne: Boolean,
    isViewTypeTwo: Boolean,
    isChkBox: Boolean,
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
        drawer: true,//true 선택시 내서랍 아이콘 노출
        shareBtn: false,//창고상품 : true 선택시 공유하기 아이콘 노출
      },
    }
  },

  mounted:function(){
    window.actionseet();
  },
  updated:function(){
    var prodListBox = document.querySelector('.product-list-box');
    var prodList = prodListBox.querySelectorAll('.prod-list');
    // var prodBox = prodList[0].querySelectorAll('.prod-box');
    var viewBtn = document.querySelectorAll('.list-type-btn');
    var prodType = this.$el.attributes[2].nodeValue;

    if(viewBtn){
      for (const vBtn of viewBtn) {
        vBtn.addEventListener('click', function(event) {
          if(this.classList.contains('type1')) {
            if (!this.classList.contains('on')) {
              this.classList.add('on');
              viewBtn[1].classList.remove('on')
              changeView('align-left');
            }
          }else{
            if (!this.classList.contains('on')) {
              this.classList.add('on');
              viewBtn[0].classList.remove('on');
              changeView('align-center');
            }
          }
        })
      }
      function changeView(changeClass){
        // var viewType = 'align-left' + prodType;
        for(var i = 0;i<prodList.length;i++){
          var prodBox = prodList[i].querySelectorAll('.prod-box');
          if(changeClass == 'align-center'){
            prodList[i].classList.add('prod-2ea');
            for (const pBox of prodBox) {
              pBox.classList.add('align-center');
              pBox.classList.remove('align-left');
              pBox.classList.remove(prodType);
            }
          }else{
            prodList[i].classList.remove('prod-2ea');
            for (const pBox of prodBox) {
              pBox.classList.add('align-left');
              pBox.classList.add(prodType);
              pBox.classList.remove('align-center');
            }
          }
        }
      }
    }

  },
}
</script>
<style>




</style>