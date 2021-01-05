<template>
  <ul>
    <li :class="{on: urlCheck('/home/mainPage.html')}">
      <a href="#none">
        <i class="icon-home" ></i><em>홈</em><!-- 메뉴 활성화시에 i 태그에 class명 on붙임 -->
      </a>
    </li>
    <li>
      <a href="#none">
        <i class="icon-shop"></i><em>샵</em><!-- 메뉴 활성화시에 i 태그에 class명 on붙임 -->
      </a>
    </li>
    <li>
      <a href="#none">
        <i class="icon-drawer"></i><em>내서랍</em><!-- 메뉴 활성화시에 i 태그에 class명 on붙임 -->
      </a>
    </li>
    <li>
      <a href="#none">
        <i class="icon-event"></i><em>이벤트</em><!-- 메뉴 활성화시에 i 태그에 class명 on붙임 -->
      </a>
    </li>
    <li>
      <a href="#none">
        <i class="icon-my"></i><em>MY</em><!-- 메뉴 활성화시에 i 태그에 class명 on붙임 -->
      </a>
    </li>
  </ul>
</template>
<script>
//# sourceURL=/vcomps/FooterMenuComponent.vue
module.exports = {
  data() {
    return {
      showFooterMenu: reqUrl.includes('/home') || reqUrl.includes('/shop') || reqUrl.includes('/drawer') || reqUrl.includes('/mypage')
    };
  },
  methods: {
    urlCheck: function(url){
      return reqUrl.includes(url);
    }
  }
}
</script>