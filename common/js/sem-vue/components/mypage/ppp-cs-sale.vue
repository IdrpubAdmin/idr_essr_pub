<template>
  <div class="modal-wrap big my-cs-popup my-cs-sale" style="display:none;">
    <div class="modal-layer">
      <div class="inner-box">
        <strong class="modal_tit">판매 관련 문의</strong>
        <div class="modal_cont">
          <img src="http://placehold.it/640x300" />
          <div class="button-box">
            <a href="#none" class="modal-blk-btn w100"><span>이랜드몰 고객센터 가기</span></a>
          </div>
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