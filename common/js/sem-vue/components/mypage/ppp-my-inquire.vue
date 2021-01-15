<template>
  <div class="modal-wrap big my-inquire-popup my-inquire-list" style="display:none;">
    <div class="modal-layer">
      <div class="inner-box has-btn">

        <strong class="modal_tit">내 문의 내역</strong>

        <div class="modal_cont">
          <div type="button" class="gray-box">
            판매 관련 문의내역은 이랜드몰에서 확인하실 수 있습니다.<br>
            <button type="button" class="underline-link btn-my-qna" onclick="openPopup('my-cs-sale')">판매 문의 바로가기</button>
          </div>

          <!-- 문의내역이 있을 때 -->
          <mypage-cs-qna></mypage-cs-qna>
          <!-- //문의내역이 있을 때 -->

          <!-- 문의내역이 없을 때 -->
          <div class="result-wrap">
            <span class="ico"></span>
            <p>문의하신 내역이 없습니다.</p>
            <span class="desc">궁금하신 점은 언제든지 문의해주세요</span>
          </div>
          <div class="button-box">
            <!-- 버튼 비활성화 상태 disabled 추가 -->
            <button type="button" class="modal-gray-btn w50 btn-rnd"><span>이전으로</span></button>
            <button type="button" class="modal-blk-btn w50 btn-rnd"><span>홈으로</span></button>
          </div>
          <!-- //문의내역이 없을 때 -->
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
  components: {
    'mypage-cs-qna': httpVueLoader('../mypage/mypage-cs-qna.vue'),
  },
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