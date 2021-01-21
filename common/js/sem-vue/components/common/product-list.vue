<template>
  <div class="product-list-box" :class="pageType">
    <div class="sort-box">
      <div class="left-box">
        <span class="list-count" v-if="isCount"><b><em>100,000</em><i>개 </i></b> / <em>100,000</em><i>개</i></span>
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
              <span class="txt"></span>
            </label>

          </li>
        </ul>
      </div>
    </div>
    <div class="prod-list prod-2ea list">
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
    <div class="fixed-action-sheet expand-right popup-filter" v-if="isFilter">
      <div class="action-sheet-bx">
        <div class="top-box">
          <div class="tit-box">
            <h3>필터</h3>
            <span class="num-txt"><em>0</em>개 상품</span>
            <button type="button" class="reset-btn"><span>초기화</span></button>
          </div>
          <div class="selected-box scr-box">
            <button type="button"><span class="clr-box mix-clr"></span><span>혼합</span></button>
            <button type="button"><span class="clr-box" style="background-color:#000;"></span><span>검정</span></button>
            <button type="button"><span>무료배송</span></button>
            <button type="button"><span>스토어픽</span></button>
            <button type="button"><span>반려동물/문구/취미</span></button>
            <button type="button"><span>무료배송</span></button>
            <button type="button"><span>스토어픽</span></button>
            <button type="button"><span>반려동물/문구/취미</span></button>
            <button type="button"><span>무료배송</span></button>
            <button type="button"><span>스토어픽</span></button>
            <button type="button"><span>반려동물/문구/취미</span></button>
          </div>
        </div>
        <div class="bottom-box scr-box">
          <div class="filter-box">
            <dl>
              <dt>
                <button type="button"><span><b>체크박스</b></span></button>
              </dt>
              <dd>
               <ul class="filter-chk-list">
                 <li>
                   <label for="chkBoxId1" class="chk-box-type2">
                     <input type="checkbox" id="chkBoxId1" chekced="">
                     <span class="square"></span>
                     <p><em>빠른배송</em></p>
                   </label>
                 </li>
                 <li>
                   <label for="chkBoxId2" class="chk-box-type2">
                     <input type="checkbox" id="chkBoxId2" chekced="">
                     <span class="square"></span>
                     <p><em>빠른배송</em></p>
                   </label>
                 </li>
                 <li>
                   <label for="chkBoxId3" class="chk-box-type2">
                     <input type="checkbox" id="chkBoxId3" chekced="">
                     <span class="square"></span>
                     <p><em>빠른배송</em> <span>(6)</span></p>
                   </label>
                 </li>
               </ul>
                <div class="button-box">
                  <button type="button" class="more-btn"><span>전체보기</span></button>
                </div>
              </dd>
            </dl>
          </div>
          <div class="filter-box">
            <dl>
              <dt>
                <button type="button"><span><b>라디오박스</b></span></button>
              </dt>
              <dd>
                <div class="loc-box">
                  <span>전체</span>
                  <span>반려동물/문구/취미</span>
                </div>
                <ul class="filter-radio-list">
                  <li>
                    <label for="frd1-1" class="filter-radio-box">
                      <input type="radio" id="frd1-1" name="frd" checked="checked">
                      <span class="ico"></span>
                      <span class="form-txt">상품 재고</span>
                    </label>
                  </li>
                  <li>
                    <label for="frd1-2" class="filter-radio-box">
                      <input type="radio" id="frd1-2" name="frd">
                      <span class="ico"></span>
                      <span class="form-txt">상품 재고</span>
                    </label>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="filter-box">
            <dl>
              <dt>
                <button type="button"><span><b>색상</b></span></button>
              </dt>
              <dd>
                <ul class="filter-clr-list">
                  <li>
                    <label for="chkClr_0" class="filter-clr-box" date-color="ff0000">
                      <input type="checkbox" id="chkClr_0" chekced="">
                      <span class="square"></span>
                    </label>
                  </li>
                  <li>
                    <label for="chkClr_1" class="filter-clr-box" date-color="00ff00">
                      <input type="checkbox" id="chkClr_1" chekced="">
                      <span class="square"></span>
                    </label>
                  </li>
                  <li>
                    <label for="chkClr_2" class="filter-clr-box" date-color="0000ff">
                      <input type="checkbox" id="chkClr_2" chekced="">
                      <span class="square"></span>
                    </label>
                  </li>
                  <li>
                    <label for="chkClr_3" class="filter-clr-box" date-color="0000ff">
                      <input type="checkbox" id="chkClr_3" chekced="">
                      <span class="square"></span>
                    </label>
                  </li>
                  <li>
                    <label for="chkClr_4" class="filter-clr-box" date-color="0000ff">
                      <input type="checkbox" id="chkClr_4" chekced="">
                      <span class="square"></span>
                    </label>
                  </li>
                  <li>
                    <label for="chkClr_5" class="filter-clr-box" date-color="0000ff">
                      <input type="checkbox" id="chkClr_5" chekced="">
                      <span class="square"></span>
                    </label>
                  </li>
                  <li>
                    <label for="chkClr_6" class="filter-clr-box" date-color="0000ff">
                      <input type="checkbox" id="chkClr_6" chekced="">
                      <span class="square"></span>
                    </label>
                  </li>
                  <li>
                    <label for="chkClr_7" class="filter-clr-box" date-color="0000ff">
                      <input type="checkbox" id="chkClr_7" chekced="">
                      <span class="square"></span>
                    </label>
                  </li>
                  <li>
                    <label for="chkClr_8" class="filter-clr-box" date-color="0000ff">
                      <input type="checkbox" id="chkClr_8" chekced="">
                      <span class="square"></span>
                    </label>
                  </li>
                  <li>
                    <label for="chkClr_9" class="filter-clr-box mix-clr">
                      <input type="checkbox" id="chkClr_9" chekced="">
                      <span class="square"></span>
                    </label>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="filter-box">
            <dl>
              <dt>
                <button type="button"><span><b>체크박스2</b></span></button>
              </dt>
              <dd>
                <ul class="filter-chk-list half">
                  <li>
                    <label for="chkBoxId4" class="chk-box-type2">
                      <input type="checkbox" id="chkBoxId4" chekced="">
                      <span class="square"></span>
                      <p><em>빠른배송</em></p>
                    </label>
                  </li>
                  <li>
                    <label for="chkBoxId5" class="chk-box-type2">
                      <input type="checkbox" id="chkBoxId5" chekced="">
                      <span class="square"></span>
                      <p><em>빠른배송</em></p>
                    </label>
                  </li>
                  <li>
                    <label for="chkBoxId6" class="chk-box-type2">
                      <input type="checkbox" id="chkBoxId6" chekced="">
                      <span class="square"></span>
                      <p><em>빠른배송</em> <span>(6)</span></p>
                    </label>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="filter-box">
            <dl>
              <dt>
                <button type="button"><span><b>가격</b></span></button>
              </dt>
              <dd>
                <div class="price-box">
                  <div class="disp_price">
                    <span class="min_price_span" name="filtrsSlideSpan" title="최저가"><em>{{ slideValueText[0] }}</em>원</span>
                    ~ <span class="max_price_span" name="filtrsSlideSpan" title="최고가"><em>{{ slideValueText[1] }}</em>원</span>
                  </div>
                  <vue-slider
                      ref="slider"
                      v-model="slideValue"
                      :min="minValue" :max="maxValue"
                      @change="slideChange"
                  ></vue-slider>
                  <span class="value-txt min-txt">{{ slideRangeText[0] }}</span>
                  <span class="value-txt max-txt">{{ slideRangeText[1] }}</span>
                </div>
                <ul class="filter-radio-list set-price half">
                  <li>
                    <label for="frd2-1" class="filter-radio-box">
                      <input type="radio" id="frd2-1" name="frd2" checked="checked" value="140000">
                      <span class="ico"></span>
                      <span class="form-txt">14만원 이하</span>
                    </label>
                  </li>
                  <li>
                    <label for="frd2-2" class="filter-radio-box">
                      <input type="radio" id="frd2-2" name="frd2" value="420000">
                      <span class="ico"></span>
                      <span class="form-txt">42만원 이하</span>
                    </label>
                  </li>
                  <li>
                    <label for="frd2-3" class="filter-radio-box">
                      <input type="radio" id="frd2-3" name="frd2" value="690000">
                      <span class="ico"></span>
                      <span class="form-txt">69만원 이하</span>
                    </label>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="filter-box">
            <dl>
              <dt>
                <button type="button"><span><b>할인율</b></span></button>
              </dt>
              <dd>
                <div class="discount-box">
                  <span class="inp"><input type="text" value="" title="최소 할인율"></span>
                  <span class="parti">~</span>
                  <span class="inp"><input type="text" value="" title="최대 할인율"></span>
                  <button type="button" class="modal-blk-btn"><span>적용</span></button>
                </div>
                <ul class="filter-radio-list half">
                  <li>
                    <label for="frd3-1" class="filter-radio-box">
                      <input type="radio" id="frd3-1" name="frd2" checked="checked" value="140000">
                      <span class="ico"></span>
                      <span class="form-txt">30% 이상</span>
                    </label>
                  </li>
                  <li>
                    <label for="frd3-2" class="filter-radio-box">
                      <input type="radio" id="frd3-2" name="frd2" value="420000">
                      <span class="ico"></span>
                      <span class="form-txt">50% 이상</span>
                    </label>
                  </li>
                  <li>
                    <label for="frd3-3" class="filter-radio-box">
                      <input type="radio" id="frd3-3" name="frd2" value="690000">
                      <span class="ico"></span>
                      <span class="form-txt">70% 이상</span>
                    </label>
                  </li>
                  <li>
                    <label for="frd3-4" class="filter-radio-box">
                      <input type="radio" id="frd3-4" name="frd2" value="690000">
                      <span class="ico"></span>
                      <span class="form-txt">90% 이상</span>
                    </label>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="dim"></div>
    </div>
</template>
<script>
module.exports = {
  components: {
    'product-box': httpVueLoader('../common/product.vue'),
    'vueSlider': window[ 'vue-slider-component' ],
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
        drawer: false,//true 선택시 내서랍 아이콘 노출
        shareBtn: true,//창고상품 : true 선택시 공유하기 아이콘 노출
        kakaoBtn: false,//창고상품 : true 선택시 카카오 공유 아이콘 노출
      },
      slideValue: [0, 500000],
      slideValueText: ['0', '500000'],
      minValue:0,
      maxValue:1000000,
      slideRangeText: ['0', '1,000,000'],
      options: {
        min: 0,
        max: 100,
        duration: 0.5,
        enableCross: true,
        fixed: false,
        minRange: void 0,
        maxRange: void 0,
      }
    }
  },
  methods:{
    slideChange:function(){
      var min = this.slideValue[0];
      var max = this.slideValue[1];
      this.slideValueText = [numberWithCommas(min),numberWithCommas(max)];
    }
  },
  mounted:function(){
    var _this = this;
    var setPriceBox = document.querySelector('.price-box');
    var setPriceList = document.querySelectorAll('.set-price li');
    var prodListBox = document.querySelector('.product-list-box');
    var prodList = prodListBox.querySelectorAll('.prod-list');
    // var prodBox = prodList[0].querySelectorAll('.prod-box');
    var viewBtn = document.querySelectorAll('.list-type-btn');
    var prodType = this.$el.attributes[2].nodeValue;
    var filterPopup = document.querySelector('.popup-filter');

    if(filterPopup){
      var filterList = filterPopup.querySelectorAll('.bottom-box dl')
      var filterColor = filterPopup.querySelectorAll('.filter-clr-box')
      for(var i = 0;i<filterList.length;i++){
        var btn = filterList[i].querySelector('dl dt button');
        btn.addEventListener('click',function(){
          toggleClass(this.closest('dl'),'on');
        });
      }
      for(var i = 0;i<filterColor.length;i++){
        var clr = filterColor[i].getAttribute('date-color');
        var target = filterColor[i].querySelector('.square');
        if(clr){
          target.style.backgroundColor="#"+clr;
        }
      }
    }
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
    if(setPriceBox){
      for(var i = 0;i < setPriceList.length;i++){
        var priceRadio = setPriceList[i].querySelector('input');
        priceRadio.addEventListener('change',function(e){
          var price = Number(this.getAttribute('value'));
          setPrice(0,price);
        });
      }
    }


    function setPrice(min,max){
      _this.$refs.slider.setValue([min,max]);
      _this.slideValueText = [numberWithCommas(min),numberWithCommas(max)];
    }
    window.actionseet();
  },
  updated:function(){
    var _this = this;
  },
}
</script>
<style>




</style>