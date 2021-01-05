<template>
    <div class="header" :class="{'home' : isMainIcon}">
      <div class="header-top">
        <h1 class="sub-tit" v-if="subTitle">{{ subTitle }}</h1>
        <button class="icon-header-back" v-if="isBackBtn">뒤로가기</button>
        <h1 class="sem_header_bi" v-if="isMainIcon">
          <a href="#">sellermarket</a>
        </h1>
        <div class="category-box" v-if="categoryTitle">
          <button type="button" class="cate-btn">Fashion</button>
          <div class="cate-list-box">
            <ul>
              <li class="on"><a href="#none">Fashion</a></li>
              <li><a href="#none">IT /Tech</a></li>
              <li><a href="#none">Living</a></li>
              <li><a href="#none">Gift</a></li>
              <li><a href="#none">Beauty</a></li>
            </ul>
            <div class="dim-box"></div>
          </div>
        </div>
        <div class="btn-rgt">
          <a href="#none" class="login-btn">로그인</a>
          <button class="icon-header-home" v-if="isHomeBtn">홈</button>
          <button class="icon-header-search" v-if="isSearchBtn">검색</button>
          <button class="icon-header-drawer on" v-if="isDrawerBtn">내창고</button>
        </div>
        <div class="search-box" v-if="isSearchBox">
          <input maxlength="30" value="" placeholder="검색어를 입력해주세요." type="text" class="input-type">
          <button class="icon-header-search">검색</button>
          <button class="icon-header-reset">초기화</button>
        </div>
      </div>
      <div class="header-middle">
        <div class="sub-category-box" v-if="subCategory">
          <ul class="sub-cate-list">
            <li><a href="#none">Fashion</a></li>
            <li><a href="#none">Fashion</a></li>
          </ul>
          <div class="current-menu-box">
            <button type="button" class="sub-cate-btn">ACC</button>
            <div class="sub-list-box">
              <ul>
                <li class="on"><a href="#none">NEW</a></li>
                <li><a href="#none">BEST</a></li>
                <li><a href="#none">OUTER</a></li>
                <li><a href="#none">ACC</a></li>
                <li><a href="#none">TOP</a></li>
                <li><a href="#none">BOTTOM</a></li>
              </ul>
              <div class="dim-box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            subTitle: {
                type: String,
                required: false,
                default: ''
            },
            categoryTitle: Boolean,
            subCategory: Boolean,
            isMainIcon: Boolean,
            isBackBtn: Boolean,
            isHomeBtn: Boolean,
            isSearchBtn: Boolean,
            isDrawerBtn: Boolean,
            isSearchBox: Boolean,
        },
        methods: {
            goHrefUrl: function(hrefUrl) {
                location.href = hrefUrl;
            }
        },
        mounted:function(){
          var categoryBox = document.querySelector('.category-box');
          var categoryBtn = document.querySelector('.category-box .cate-btn');
          var categoryDim = document.querySelector('.category-box .dim-box');

          var subCategoryBox = document.querySelector('.current-menu-box');
          var subCategoryBtn = document.querySelector('.current-menu-box .sub-cate-btn');
          var subCategoryDim = document.querySelector('.current-menu-box .dim-box');
          if(categoryBox){
            categoryBtn.addEventListener('click',function(){toggleClass(categoryBox,'on');});
            categoryDim.addEventListener('touchend',function(){toggleClass(categoryBox,'on');});
          }
          if(subCategoryBox){
            subCategoryBtn.addEventListener('click',function(){toggleClass(subCategoryBox,'on');});
            subCategoryDim.addEventListener('touchend',function(){toggleClass(subCategoryBox,'on');});
          }
        }
    };
</script>
