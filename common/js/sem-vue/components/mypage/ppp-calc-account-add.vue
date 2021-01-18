<template>
  <div class="modal-wrap big calc-account-info ppp-calc-account-add" style="display:none;">
    <div class="modal-layer">
      <div class="inner-box has-btn">
        <strong class="modal_tit">정산 계좌 설정</strong>
        <div class="modal_cont">

          <div class="calc-accnt-wrap info-input-box">

            <div class="bottom-box">
              <dl>

                <dt><span>사용자정보</span></dt>

                <dd>
                  <div class="text-box type-nor border-type2">
                    <p class="tit-txt">이름 <span class="red">*</span></p>
                    <div class="ipt-txt-box">
                      <div>
                        <input type="text" placeholder="이름을 입력해주세요" maxlength="10" class="input-type-nb">
                        <button type="button" class="txt-reset-btn" style="">입력값 삭제</button>
                      </div>
                    </div>
                  </div>
                </dd>

                <dd>
                  <div class="text-box type-nor border-type2 type-regident-num">
                    <p class="tit-txt">주민증록번호 <span class="red">*</span></p>
                    <div class="ipt-txt-box">
                      <div>
                        <input type="text" placeholder="앞 6자리" maxlength="6" class="input-type-rn">
                        <input type="password" placeholder="뒤 7자리" maxlength="7" class="input-type-rn">
                        <button type="button" class="confirm-btn" style=""><span>인증</span></button>
                        <p class="input-error red">이름과 주민번호가 일치하지 않습니다. 다시 확인 후 입력해주세요.</p>
                        <p class="input-error blue">인증이 완료되었습니다.</p>
                        <p class="input-error">정산을 위하여 주민등록번호를 소득세법 제 145조에 따라 수집 이용하며, 이 법에 따라 5년 동안 보관됩니다.</p>
                      </div>
                    </div>
                  </div>
                </dd>

              </dl>
              <dl>

                <dt><span>계좌정보</span></dt>

                <dd>
                  <div class="select-wrap">
                    <p class="tit-txt">은행 <span class="red">*</span></p>
                    <button type="button" class="select-btn btn-actionseet" data-actionsheet="acount-popup">선택</button>
                    <div class="fixed-action-sheet select-layer acount-popup" data-expanded="false">
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
                </dd>

                <dd>
                  <div class="text-box type-nor border-type2 type-acount">
                    <p class="tit-txt">계좌번호 <span class="red">*</span></p>
                    <div class="ipt-txt-box">
                      <div>
                        <input type="text" placeholder="- 없이 계좌번호를 입력해주세요." maxlength="30" class="input-type-nb">
                        <button type="button" class="txt-reset-btn" style="">입력값 삭제</button>
                        <button type="button" class="confirm-btn on" style=""><span>인증</span></button>
                        <p class="input-error red" style="">계좌번호가 올바르지 않습니다. 다시 확인 후 입력해주세요.</p>
                        <p class="input-error blue">인증이 완료되었습니다.</p>
                      </div>
                    </div>
                  </div>
                </dd>

                <dd>
                  <div class="text-box type-nor border-type2">
                    <p class="tit-txt">계좌 소유자</p>
                    <div class="ipt-txt-box">
                      <div>
                        <input type="text" placeholder="" maxlength="10" class="input-type-nb">
                        <button type="button" class="txt-reset-btn" style="">입력값 삭제</button>
                        <p class="input-error" style="">직접 입력하신 계좌가 사실과 달라 문제가 발생할 경우 그 책임은 입력자에게 있음을 알려드립니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </dd>

              </dl>
              
            </div>
            
          </div>

        </div>

        <div class="button-box">
          <!-- 버튼 비활성화 상태 disabled 추가 -->
          <button type="button" class="modal-blk-btn w100 "><span>확인</span></button>
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