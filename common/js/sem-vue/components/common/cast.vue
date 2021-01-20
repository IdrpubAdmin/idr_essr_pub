<template>
  <div class="cast-box" :class="options.imgAlign">
    <div class="time-box">
      <span class="cast-time-t">{{castTime}}</span>
      <div class="stk-box cast">
        <span class="stk_live" v-if="stkLive">LIVE</span>
      </div>
    </div>
    <div class="img-box" :class="options.imgMode">
      <a v-if="link" :href="link">
        <img :src="imgPath" />
        <div class="sold-dim" v-if="castEnd"></div>
      </a>
    </div>
    <div class="info-box">
      <a v-if="link" :href="link">
        <p class="sub-tit" v-if="subTitle">{{subTitle}}</p>
        <p class="tit"><b>{{mainTitle}}</b></p>
        <p class="cast-date" v-if="castDate">
          <span>판매기간</span><br>
          <em>{{castDate}}</em> <i>까지</i>
        </p>
        <p class="goods-cnt" v-if="goodsCnt"><em>{{goodsCnt}}</em><i>개 상품</i></p>
      </a>
    </div>

    <!-- mkp-edit : 20210120 -->
    <!--<button type="button" class="share-btn-0" @click="shareGoods($event.target)" data-param-url="paramUrl">공유하기</button>-->
    <button type="button" class="kakaotalk-btn"><span class="ico">카카오톡공유하기</span></button>
    <!-- //mkp-edit : 20210120 -->

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
    mainTitle: {
      type: String,
      required: false,
    },
    subTitle: {
      type: String,
      required: false
    },
    castTime: {
      type: String,
      required: false
    },
    castDate: {
      type: String,
      required: false
    },
    goodsCnt: {
      type: String,
      required: false
    },
    stkLive: {
      type: String,
      required: false
    },
    castEnd: {
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
        }
      }
    }
  },
  methods: {
    shareGoods: function(obj){
      //parent에 [popup-share] component 필요
      openPopup('popup-share-wrap');
    }
  }
};
</script>
