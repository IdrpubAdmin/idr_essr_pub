<template>
  <div class="prod-box" :class="options.imgAlign">
    <div class="img-box" :class="options.imgMode">
      <a v-if="link" :href="link">
        <img :src="imgPath" />
        <div class="stk-box prod">
          <span class="stk_ad" v-if="stkad">AD</span>
          <span class="stk_new" v-if="stknew">NEW</span>
          <span class="sold_out" v-if="soldout">SOLD OUT</span>
        </div>
      </a>
      <button type="button" class="drawer-btn-0" v-if="options.drawer">내서랍</button>
      <button type="button" class="kakao-btn" v-if="options.kakaoBtn">공유</button>
      <label :for="chkBoxId" v-if="chkBoxId" class="chk-box">
        <input type="checkbox" :id="chkBoxId" chekced="">
        <span class="square"></span>
      </label>
      <button type="button" class="share-btn" v-if="options.shareBtn"><span class="ico">공유하기</span></button>
      <div class="sold-dim" v-if="soldout"></div>
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
        <span v-if="sell" class="sell">판매 : <i>{{sell}}</i></span>
      </div>
    </div>
    <button type="button" class="drawer-btn-1" :class="{'sold-out' : soldout}" v-if="options.drawer">내서랍</button>
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
    soldout: {
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
  }
};
</script>
