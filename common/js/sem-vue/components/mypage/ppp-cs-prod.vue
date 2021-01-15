<template>
  <div class="modal-wrap big my-cs-popup my-cs-prod" style="display:none;">
    <div class="modal-layer">
      <div class="inner-box has-btn">
        <strong class="modal_tit">상품 정보 문의</strong>
        <div class="modal_cont">
          <div class="cs-prod-box">
            <div class="cate-select-box">
              <p>상품 관련 문의가 있으 신가요?</p>
              <button type="button" data-actionsheet="cs-type-popup" class="sel-btn btn-actionseet"><span>문의 유형을 선택해 주세요.</span></button>
            </div>
            <div class="text-box">
              <div class="ipt-txt-box scr-box">
                <textarea maxlength="1000" name="" id="cs-prod" cols="" rows="" onkeypress="textareaFitContent('cs-prod');" placeholder="문의 내용을 입력해 주세요."></textarea>
              </div>
              <p class="ipt-count"><span class="crt-len">0</span>/<span class="max-len">20</span></p>
            </div>
          </div>
        </div>
        <div class="button-box">
          <!-- 버튼 비활성화 상태 disabled 추가 -->
          <button type="button" class="modal-blk-btn w100" disabled><span>문의 하기</span></button>
        </div>
        <button type="button" class="icon-header-close">팝업닫기</button>
      </div>
    </div>
    <div class="dim"></div>

    <div class="fixed-action-sheet select-layer cs-type-popup">
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
    
  </div>
</template>

<script>
Vue.use(VueAwesomeSwiper);

module.exports = {
  data: function(){
    var that = this;
    return {
    }
  },
  computed: {
  },
  updated: function(){
  },
  mounted: function(){
  },
  methods:{

  },
};
</script>