<template>
  <div class="conner-box movie-banner">
    <div class="title-box">
      <p class="tit-txt">영상배너</p>
    </div>
    <div class="inner-box">

      <div class="video-box">
        <video-skin
            @videojs-load="videojsLoad"
            :link="'/home/MW-DI-S0001.html'"
            :videoid="'test-video1'"
            :videoclass="'video-js'"
            :options="videoOption">
          <source src="../../common/images/temp/Adventures_In_Imagination.mp4" type="video/mp4">
        </video-skin>
        <button type="button" class="play-btn" onclick="toggleClass(this,'on');" @click="toggle">플레이버튼</button>
      </div>
      <dl>
        <dt>1920 남녀 공용골지 양말 20색상</dt>
        <dd>면 혼방 소재로 착화감이 우수한 1290 남녀공용 골지 양말은 신축성이 좋아 남녀 모두 착용 가능해요.</dd>
      </dl>
    </div>
  </div>
</template>
<script>
Vue.use(VueAwesomeSwiper);

module.exports = {
  components: {
    'video-skin': httpVueLoader('../common/videoSkin.vue')
  },
  data: function(){
    var that = this;

    return {
      videoOption: {
        muted: true,
        playsinline: true,
      },
    }
  },
  methods: {
    videojsLoad: function(player){
      this.player = player;
    },
    toggle: function(){
      var isPlaying = this.player.paused();
      isPlaying ? this.play() : this.pause();
    },
    play: function(){
      this.player.play();
    },
    pause: function(){
      this.player.pause();
    },
  }
};

</script>