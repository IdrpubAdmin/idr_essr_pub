<template>
  <div class="modal-wrap big my-cs-popup my-cs-service">
    <div class="modal-layer">
      <div class="inner-box has-btn">
        <strong class="modal_tit">서비스 문의</strong>
        <div class="modal_cont">
          <div class="cs-prod-box">
            <div class="cate-select-box">
              <p>서비스 관련 문의가 있으 신가요?</p>
            </div>
            <div class="text-box">
              <div class="ipt-txt-box">
                <textarea maxlength="1000" name="" id="" cols="" rows="" placeholder="문의 내용을 입력해 주세요."></textarea>
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