<template>
  <div class="prod-box" :class="options.imgAlign">
    <div class="img-box" :class="options.imgMode">
      <a v-if="link" :href="link">
        <img :src="imgPath" />
        <div class="stk-box prod">
          <span class="stk_ad" v-if="stkad">AD</span>
          <span class="stk_new" v-if="stknew">NEW</span>
          <span class="sold_out" v-if="soldout">SOLD OUT</span>
          <!-- mkp-add : 20210217 -->
          <span class="stk_free_dlvr" v-if="stkfreedlvr">무료배송</span>
          <!-- mkp-add : 20210217 -->
          <!-- mkp-add : 20210118 -->
          <span class="stk_disp_end" v-if="stkdispend">전시종료</span>
          <span class="stk_sell_stop" v-if="stksellstop">판매중지</span>
          <!-- //mkp-add : 20210118 -->
        </div>
      </a>
      <button type="button" class="drawer-btn-0" v-if="options.drawer">내서랍</button>
      <!-- mkp-del : 20210121 -->
      <!--<button type="button" class="kakao-btn" v-if="options.kakaoBtn">공유</button>-->
      <!-- mkp-del : 20210121 -->
      <label :for="chkBoxId" v-if="chkBoxId" class="chk-box">
        <input type="checkbox" :id="chkBoxId" chekced="">
        <span class="square"></span>
      </label>

      <!-- mkp-del : 20210121 -->
      <!--<button type="button" class="share-btn" v-if="options.shareBtn"><span class="ico">공유하기</span></button>-->
      <!-- mkp-del : 20210121 -->

      <!-- mkp-edit : 20210118 -->
      <!--<div class="sold-dim" v-if="soldout"></div>-->
      <div class="sold-dim" v-if="soldout || stkdispend || stksellstop"></div>
      <!-- mkp-edit : 20210118 -->
    </div>
    <div class="info-box" :class="{'sold-out' : soldout}">
      <a v-if="link" :href="link">
        <p class="tit"><b>{{mainTitle}}</b></p>
        <p class="sub-tit" v-if="subTitle" :class="{'oneLine' : options.subTitLine}">{{subTitle}}</p>
        <p class="desc" v-if="descript" :class="{'oneLine' : options.desLine}">{{descript}}</p>
        <span class="per" v-if="percent"><b><em>{{percent}}</em>%</b></span>
        <span class="price" v-if="price"><b><em>{{price}}</em></b><i>원</i></span>
      </a>
      <div class="social-box">
        <button type="button" class="share" v-if="share"><span class="ico"></span>{{share}}</button>
        <button type="button" class="like" v-if="like"><span class="ico"></span>{{like}}</button>
        <!-- mkp-add : 20210208 -->
        <button type="button" class="share-btn-0" v-if="share2" @click="shareGoods($event.target)" data-param-url="paramUrl">공유하기</button>
        <!-- //mkp-add : 20210208 -->
        <span v-if="sell" class="sell">판매 : <i>{{sell}}</i></span>
      </div>
    </div>
    <button type="button" class="drawer-btn-1" :class="{'sold-out' : soldout}" v-if="options.drawer">내서랍</button>
    <!-- mkp-add : 20210121 -->
    <button type="button" class="share-btn-0" v-if="options.shareBtn" @click="shareGoods($event.target)" data-param-url="paramUrl">공유하기</button>
    <!-- //mkp-add : 20210121 -->
  </div>
</template>
<script>
module.exports = {
  props: {
    link: {
      type: String,
      required: false
    },
    imgPath: {
      type: String,
      required: false
    },
    chkBoxId: {
      type: String,
      required: false
    },
    mainTitle: {
      type: String,
      required: false,
    },
    subTitle: {
      type: String,
      required: false
    },
    descript: {
      type: String,
      required: false
    },
    percent: {
      type: String,
      required: false
    },
    price: {
      type: String,
      required: false
    },
    like: {
      type: String,
      required: false
    },
    share: {
      type: String,
      required: false
    },
    share2: {
      type: String,
      required: false
    },
    sell: {
      type: String,
      required: false
    },
    stkad: {
      type: String,
      required: false
    },
    stknew: {
      type: String,
      required: false
    },
    stkdispend: {
      type: String,
      required: false
    },
    stksellstop: {
      type: String,
      required: false
    },
    soldout: {
      type: String,
      required: false
    },
    stkfreedlvr: {
      type: String,
      required: false
    },
    options: {
      type: Object,
      required: false,
      default: function(){
        return {
          imgMode: {
            type: String,
            required: false
          },
          imgAlign: {
            type: String,
            required: false
          },
          subTitLine: false,
          desLine: false,
          drawer: false,
          shareBtn:false,
          kakaoBtn:false,
        }
      }
    }
  },
  methods: {
    shareGoods: function(obj){
      /*
      //temp-conner-5.vue 참조해서 사용 필요
      let urlInfo = obj.getAttribute('data-param-url');
      this.$emit('btnshareclick', {
        urlInfo: urlInfo,
      });
      */
      //공유하기 팝업모달만 오픈(개발자 변경 필요)
      //parent에 [popup-share] component 필요
      openPopup('popup-share-wrap');
    }
  }
};
</script>
