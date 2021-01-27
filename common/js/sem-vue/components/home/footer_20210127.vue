<template>
  <!-- mkp-edit : 20210122 -->
  <div id="footer" class="v2">
    <div class="footer-nav">
      <ul>
        <li><a href="#">로그인</a></li>
        <li><a href="#">마이페이지</a></li>
        <li><a href="#">고객센터</a></li>
        <li><a href="#">공지사항</a></li>
      </ul>
    </div>
    <div class="address-wrap">
      <address>
        <p class="name-txt">(주)이랜드리테일</p>
        <p class="w">1899-9500</p>
        <p>사업자등록번호 : 114-81-01855 <a href="#none">사업자정보확인</a></p>
        <p>통신판매업 신고번호 : 제2007-서울서초-09998호</p>
        <p>서울시 서초구 잠원동70-2 대표이사 : 김우섭/석창현</p>
        <p>개인정보 보호책임자 : 이동규</p>
      </address>

      <!-- mkp-edit : 20210126 -->
      <a href="#none" class="anchor-txt" onclick="openPopup('policy-terms-popup')">이용약관</a>
      <a href="#none" class="anchor-txt" onclick="openPopup('policy-privacy-popup')">개인정보처리방침</a>
      <a href="#none" class="anchor-txt" onclick="openPopup('policy-operation-popup')">운영정책</a>
      <!-- //mkp-edit : 20210126 -->

      <p class="copy">Copyright © Elandretail All rights reserved.</p>
    </div>

    <!-- mkp-add : 20210126 -->
    <!-- 이용약관 팝업   -->
    <div class="modal-wrap big policy-terms-popup" style="display:none;">
      <div class="modal-layer">
        <div class="inner-box has-btn">
          <strong class="modal_tit">이용약관</strong>
          <div class="modal_cont">

            <policy-text-terms></policy-text-terms>

          </div>
          <div class="button-box">
            <button type="button" class="modal-blk-btn w100 btn-modal-close"><span>확인</span></button>
          </div>
          <button type="button" class="icon-header-close">팝업닫기</button>
        </div>
      </div>
      <div class="dim"></div>
    </div>
    <!-- //이용약관 팝업   -->

    <!-- 개인정보처리방침 팝업   -->
    <div class="modal-wrap big policy-privacy-popup" style="display:none;">
      <div class="modal-layer">
        <div class="inner-box has-btn">
          <strong class="modal_tit">개인정보처리방침</strong>
          <div class="modal_cont">

            <policy-text-privacy></policy-text-privacy>

          </div>
          <div class="button-box">
            <button type="button" class="modal-blk-btn w100 btn-modal-close"><span>확인</span></button>
          </div>
          <button type="button" class="icon-header-close">팝업닫기</button>
        </div>
      </div>
      <div class="dim"></div>
    </div>
    <!-- //개인정보처리방침 팝업   -->

    <!-- 운영정책 팝업   -->
    <div class="modal-wrap big policy-operation-popup" style="display:none;">
      <div class="modal-layer">
        <div class="inner-box has-btn">
          <strong class="modal_tit">운영정책</strong>
          <div class="modal_cont">

            <policy-text-operation></policy-text-operation>

          </div>
          <div class="button-box">
            <button type="button" class="modal-blk-btn w100 btn-modal-close"><span>확인</span></button>
          </div>
          <button type="button" class="icon-header-close">팝업닫기</button>
        </div>
      </div>
      <div class="dim"></div>
    </div>
    <!-- //운영정책 팝업   -->
    <!-- //mkp-add : 20210126 -->

  </div>
  <!-- //mkp-edit : 20210122 -->

</template>

<script>
module.exports = {
  components: {
    'policy-text-terms': httpVueLoader('../home/policy-text-terms.vue'),
    'policy-text-privacy': httpVueLoader('../home/policy-text-privacy.vue'),
    'policy-text-operation': httpVueLoader('../home/policy-text-operation.vue'),
  },
}
</script>