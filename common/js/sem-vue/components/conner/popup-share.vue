<template>
  <div class="modal-wrap popup-share-wrap">

    <div class="modal-layer">
      <div class="inner-box">
        <strong class="modal_tit">공유하기</strong>
        <div class="modal_cont">

          <div class="share-box">
            <div class="share-kakao-btn">
              <a href="#none" class="btn-share" data-param-url="">카카오톡 공유</a>
            </div>
            <div class="share-url-btn">
              <a href="#none" class="btn-share" @click="copyUrlForShare">URL</a>
            </div>
          </div>

          <!-- mkp-add : 20210128 -->
          <div class="ipt-txt-box">
            <input type="text" class="input-type-rn" readonly value="https://bit.ly/20dkfh3kshdd20dkfh3kshdd20dkfh3kshdd20dkfh3kshdd20dkfh3kshdd20dkfh3kshdd20dkfh3kshdd">
            <button type="button" class="url-copy-btn" @click="copyUrlForShare"><span>복사</span></button>
          </div>
          <!-- //mkp-add : 20210128 -->

        </div>
        <button type="button" class="icon-header-close">팝업닫기</button>
      </div>
    </div>
    <div class="dim"></div>

    <div class="toast-popup url-copy-complate">
      <div class="toast-inner">
        <p>URL 복사가 완료되었습니다.</p>
      </div>
    </div>

  </div>
</template>
<script>
module.exports = {
  methods: {
    copyUrlForShare: function () {
      openToast('url-copy-complate');
    }
  },
};
</script>