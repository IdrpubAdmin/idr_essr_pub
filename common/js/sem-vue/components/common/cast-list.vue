<template>
  <!-- conner-box -->
  <div class="conner-box cast-list-wrap">
    <div class="title-box">
      <p class="tit-txt">
        라이브편성표
        <!-- mkp-del : 20210309 -->
        <!--<span class="tit-desc">방송 중에만 구매가능합니다.</span>-->
        <!-- //mkp-del : 20210309 -->

        <!-- mkp-add : 20210312 -->
        <span class="tit-desc">라이브 방송으로 더 생생하게</span>
        <!-- //mkp-add : 20210312 -->
      </p>
    </div>

    <!-- inner-box -->
    <div class="inner-box">
      <!-- top-box -->
      <div class="top-box">
        <!-- mkp-edit : 20210312 -->
        <div class="cast-info v2">
          <span class="cast-date"><span>01.06</span>&nbsp;&nbsp;<em>수</em></span>
        </div>
        <!-- //mkp-edit : 20210312 -->
      </div>
      <!-- //top-box -->

      <!-- bottom-box -->
      <div class="bottom-box">

        <!-- cast-list -->
        <ul class="cast-list">
          <!-- 리스트 있을 때 -->
          <li>
            <cast-box
                :link="'#none'"
                :img-path="'../../common/images/temp/temp_cast_01.png'"
                :sub-title="'2021아울렛 뉴코아 중계방송'"
                :main-title="'디스커버 최대 80% OFF 아우터 최대세일'"
                :cast-time="'15:00'"
                :sale-date="'21.01.06 23:45:00'"
                :goods-cnt="'100'"
                :stk-live="'true'"
                :cast-end="''"
                :options="castOption"
            ></cast-box>
          </li>
          <li>
            <cast-box
                :link="'#none'"
                :img-path="'../../common/images/temp/temp_cast_02.png'"
                :sub-title="'2021아울렛 뉴코아 중계방송'"
                :main-title="'환절기,겨울철 건강을 지키기위함환절기,겨울철 건강을 지키기위함환절기,겨울철 건강을 지키기위함'"
                :cast-time="'15:00'"
                :sale-date="'21.01.06 23:45:00'"
                :goods-cnt="'100'"
                :stk-live="'true'"
                :cast-end="''"
                :options="castOption"
            ></cast-box>
          </li>
          <li>
            <cast-box
                :link="'#none'"
                :img-path="'../../common/images/temp/temp_cast_03.png'"
                :sub-title="'2021아울렛 뉴코아 중계방송'"
                :main-title="'디스커버 최대 80% OFF 아우터 최대세일'"
                :cast-time="'15:00'"
                :sale-date="'21.01.06 23:45:00'"
                :goods-cnt="'100'"
                :stk-live="''"
                :cast-end="''"
                :options="castOption"
            ></cast-box>
          </li>
          <li>
            <cast-box
                :link="'#none'"
                :img-path="'../../common/images/temp/temp_cast_01.png'"
                :sub-title="'2021아울렛 뉴코아 중계방송'"
                :main-title="'디스커버 최대 80% OFF 아우터 최대세일'"
                :cast-time="'15:00'"
                :sale-date="'21.01.06 23:45:00'"
                :goods-cnt="'100'"
                :stk-live="''"
                :cast-end="''"
                :options="castOption"
            ></cast-box>
          </li>
          <li>
            <cast-box
                :link="'#none'"
                :img-path="'../../common/images/temp/temp_cast_03.png'"
                :sub-title="'2021아울렛 뉴코아 중계방송'"
                :main-title="'디스커버 최대 80% OFF 아우터 최대세일'"
                :cast-time="'15:00'"
                :sale-date="'21.01.06 23:45:00'"
                :goods-cnt="'100'"
                :stk-live="''"
                :cast-end="''"
                :options="castOption"
            ></cast-box>
          </li>
          <!-- mkp-add : 20210309 -->
          <li class="more-btn-li">
            <button type="button" class="white-btn more-cast-btn"><span>라이브 편성표 더보기</span></button>
          </li>
          <!-- //mkp-add : 20210309 -->
          <!-- //리스트 있을 때 -->

          <!-- 리스트 없을 때 -->
          <li>
            <div class="result-wrap">
              <span class="ico"></span>
              <p>오늘은 방송 중인 라이브가 없습니다.</p>
              <span class="desc">다가오는 라이브 방송을 기대해주세요.</span>
            </div>
          </li>
          <!-- //리스트 없을 때 -->

        </ul>
        <!-- //cast-list -->

      </div>
      <!-- //bottom-box -->
    </div>
    <!-- //inner-box -->

    <!-- mkp-add : 20210309 -->
    <!-- inner-box -->
    <div class="inner-box">

      <!-- bottom-box -->
      <div class="bottom-box">

        <!-- mkp-add : 20210312 -->
        <div class="title-box v3">
          <p class="tit-txt">
            지난 편성표 보기 <br>
            <span class="tit-desc">판매 기간이 지난 라이브는 표시되지 않습니다.</span>
          </p>
        </div>
        <!-- //mkp-add : 20210312 -->

        <!-- cast-list -->
        <ul class="cast-list past-cast-list">
          <!-- 리스트 있을 때 -->
          <li>
            <cast-box
                :link="'#none'"
                :img-path="'../../common/images/temp/temp_cast_01.png'"
                :sub-title="'2021아울렛 뉴코아 중계방송'"
                :main-title="'디스커버 최대 80% OFF 아우터 최대세일'"
                :cast-time="'2021.03.06(토) 15:00'"
                :sale-date="'21.01.06 23:45:00'"
                :goods-cnt="'100'"
                :stk-live="''"
                :cast-end="''"
                :options="castOption"
            ></cast-box>
          </li>
          <li>
            <cast-box
                :link="'#none'"
                :img-path="'../../common/images/temp/temp_cast_01.png'"
                :sub-title="'2021아울렛 뉴코아 중계방송'"
                :main-title="'디스커버 최대 80% OFF 아우터 최대세일'"
                :cast-time="'2021.03.06(토) 15:00'"
                :sale-date="'21.01.06 23:45:00'"
                :goods-cnt="'100'"
                :stk-live="''"
                :cast-end="''"
                :options="castOption"
            ></cast-box>
          </li>
          <li>
            <cast-box
                :link="'#none'"
                :img-path="'../../common/images/temp/temp_cast_01.png'"
                :sub-title="'2021아울렛 뉴코아 중계방송'"
                :main-title="'디스커버 최대 80% OFF 아우터 최대세일'"
                :cast-time="'2021.03.06(토) 15:00'"
                :sale-date="'21.01.06 23:45:00'"
                :goods-cnt="'100'"
                :stk-live="''"
                :cast-end="''"
                :options="castOption"
            ></cast-box>
          </li>
          <!-- //리스트 있을 때 -->
        </ul>
        <!-- //cast-list -->

      </div>
      <!-- //bottom-box -->
    </div>
    <!-- //inner-box -->
    <!-- //mkp-add : 20210309 -->

  </div>
  <!-- //conner-box -->
</template>
<script>
module.exports = {
  components: {
    'cast-box': httpVueLoader('../common/cast.vue')
  },
  data: function(){
    var that = this;
    return {
      castOption: {
        imgMode:'',//img-wide 와이드 이미지 , img-rect 직사각형 이미지
        imgAlign:'align-left img-size-s0',// align-center 기본형, align-left 이미지 왼쪽, align-right 이미지 오른쪽
        //align-left 일경우 적용 이미지사이즈 img-size-s0(166 묶음코너1) , img-size-s1(190 묶음코너3) ,img-size-s2(196 랭킹구좌) .img-size-s3(230 기획전)
      },
    }
  },
}
</script>