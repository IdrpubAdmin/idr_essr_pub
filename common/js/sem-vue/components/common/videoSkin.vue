<template>
    <div class="video-skin">
        <!-- loop muted playsinline controls disablepictureinpicture controlslist="nodownload" -->
        <video
            ref="video"
            :id="videoid"
            :class="videoclass"
            :loop="options.loop"
            :muted="options.muted"
            :autoplay="options.autoplay"
            :playsinline="options.playsinline"
            :controls="options.controls"
            :disablepictureinpicture="options.disablepictureinpicture"
            :controlslist="options.controlslist">
            <slot></slot>
        </video>

        <button @click.stop="toggleMute" class="toggle-muted icon-volume" :class="{on: !isMuted}"></button>
        <a v-if="link" :href="link" class="link"></a>
    </div>
</template>

<script>
    module.exports = {
        data: function(){
            return {
                isMuted: true
            }
        },
        props: {
            link: {
                type: String,
                required: false
            },
            videoid: {
                type: String,
                required: false
            },
            videoclass: {
                type: String,
                required: false
            },
            options: {
                type: Object,
                required: false,
                default: function(){
                    return {
                        loop: false,
                        muted: true,
                        playsinline: true,
                        controls: false,
                        disablepictureinpicture: true,
                        controlslist: 'nodownload'
                    }
                }
            },
        },
		computed: {
		},
        mounted: function(){
            var that = this;

            if (this.videoid) {
                this.player = videojs(this.videoid);
                this.player.muted(true);
                this.$emit("videojs-load", this.player);
                var autoplay = this.player.autoplay();
                var playBtn = this.player.el().closest(".video-box").querySelector('.play-btn');

                // console.log(that.closest(".video-box"));
              // play-btn
                 if (isInViewport(that.player.el()) && autoplay) {
                    that.player.paused() && that.player.play();
                }
                
                // // 스크롤시 자동 재생
                window.addEventListener('scroll', function(){
                      if (isInViewport(that.player.el())) {
                        if(autoplay){
                          that.player.paused() && that.player.play();
                        }
                      }
                      else {
                        !that.player.paused() && that.player.pause();
                        if(playBtn != null){
                          playBtn.className = playBtn.className.replace('on', " ").trim()
                        }
                      }
                });

            }
        },
		methods: {
            toggleMute: function () {
                // if (this.$refs.video.muted) {
                //     this.$refs.video.muted = false;
                //     this.$refs.video.volume = 0.5;
                //     this.isMuted = false;
                // }
                // else {
                //     this.$refs.video.muted = true;
                //     this.isMuted = true;
                // }
                
                if (this.player.muted()) {
                     this.player.muted(false);
                    //  this.$refs.video.volume = 0.5;
                     this.isMuted = false;
                }
                else {
                    this.player.muted(true);
                    this.isMuted = true;
                }
            }
        }
    }
</script>