<template>
  <div class="conner-box bottom-banner-type2">
    <h3 class="def-tit">하단배너</h3>
    <div class="inner-box">
      <div class="video-box">
        <video-skin
            @videojs-load="videojsLoad"
            :link="'/home/MW-DI-S0001.html'"
            :videoid="'test-video2'"
            :videoclass="'video-js'"
            :options="videoOption">
          <source src="../../common/images/temp/Adventures_In_Imagination.mp4" type="video/mp4">
        </video-skin>
        <button type="button" class="play-btn" onclick="toggleClass(this,'on');" @click="toggle">플레이버튼</button>
      </div>
      <dl>
        <dt>
          <p>이렇게 우아한 케이스의 등장</p>
        </dt>
        <dd><p>악어무늬를 입힌 이태리 소가죽</p></dd>
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
        autoplay:false,
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