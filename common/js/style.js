var _STYLE_JS_PARAMS = typeof STYLE_JS_PARAMS == 'object'?STYLE_JS_PARAMS:new Object();
//--vh css Property 생성
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

(function(){

    var userAgent = navigator.userAgent.toLowerCase();
    var browserInfo=  {};

    browserInfo.IS_ANDROID = /android/.test(userAgent);
    browserInfo.IS_CHROME = /chrome/.test(userAgent);
    browserInfo.IS_IOS = /iphone/.test(userAgent) || /ipad/.test(userAgent) || /ipod/.test(userAgent);

    browserInfo.IS_ANDROID_SUCKS = browserInfo.IS_ANDROID && !browserInfo.IS_CHROME;

    browserInfo.IS_CHROME_SUCKS = (function () {
        var ver = userAgent.match(/chrom(e|ium)\/([0-9]+)\./);
        if (ver != null) {
            ver = parseInt(ver[2], 10);
            if (ver < 35) {
                return true;
            }
        }

        return false;
    })();

    if (browserInfo.IS_ANDROID) document.querySelector('body').classList.add('android');
    if (browserInfo.IS_ANDROID_SUCKS) document.querySelector('body').classList.add('android_sucks');
    if (browserInfo.IS_IOS) document.querySelector('body').classList.add('ios');

    // css 지원여부 체크
    if (typeof document.body.style.mixBlendMode == 'string') {
        document.querySelector('html').classList.add('mix-blend-mode');
    }
    if (typeof document.body.style.flexWrap == 'string') {
        document.querySelector('html').classList.add('flex-wrap');
    } else {
        document.querySelector('html').classList.add('not-flex-wrap');
    }

    // window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    browserInfo.IS_ANDROID && (document.querySelector('body').style.minHeight = document.documentElement.clientHeight + 'px');

    window.browserInfo = browserInfo;
})();

// STYLE COMMON API
var StyleCommon = StyleCommon || {};
StyleCommon = (function(doc, global) {
    // PRIVATE VARIABLE
    var obj = {};

    // PRIVATE METHOD
    function preventDefault(_evt){
        if(_evt.cancelable) {
            _evt.preventDefault();
        }
    }

    function preventMomentumScroll(_el){
        var scrollTop = _el.scrollTop,
            offsetHeight = _el.offsetHeight,
            scrollHeight = _el.scrollHeight;
        if(scrollTop == 0){
            _el.scrollTo(0, 1);
            return true;
        }

        if(scrollTop + offsetHeight >= scrollHeight) {
            _el.scrollTo(0, scrollHeight - offsetHeight -1);
            return true;
        }
        return false;
    }

    function pinchZoomHandler(_evt){
        if(_evt.touches.length > 1) _evt.preventDefault();
    }

    function doubleTabZoomHandler(_evt){
        if(!global.lastTouchEnd) global.lastTouchEnd = 0;
        var now = (new Date()).getTime();
        if(now - global.lastTouchEnd <= 300){
            _evt.preventDefault();
        }
        global.lastTouchEnd = now;
    }

    function toggleKeyInputing(_evt, _obj){
        var body = document.querySelector('body');
        setTimeout(function() {
            if (_evt) { //입력중
                body.classList.add('key-inputing');
                if(_obj) {
                    _obj.parentElement.classList.add('focusing');
                }
            } else {
                body.classList.remove('key-inputing');
                if(_obj) {
                    _obj.parentElement.classList.remove('focusing');
                }
            }
        }, 100);
    }


    // PUBLIC METHOD
    obj.scrollLock = function(_flag){
        if(_flag){
            doc.querySelector('body').classList.add('body_hold');
        }else{
            doc.querySelector('body').classList.remove('body_hold');
        }

        ['scroll', 'touchmove', 'mousewheel','wheel'].forEach(function(_evtNm){
            if(_flag) window.addEventListener(_evtNm, preventDefault, {passive:false});
            else window.removeEventListener(_evtNm, preventDefault);
        });

    };

    obj.forceScroller = function(_el){

        _el.onscroll = function(_evt){
            preventMomentumScroll(_evt.currentTarget);
        };
        _el.ontouchmove = function(_evt){
            var slideBtnBool = _evt.target.classList.contains('vue-slider-dot-handle');
            if(!preventMomentumScroll(_evt.currentTarget) && _evt.cancelable && !slideBtnBool){
                _evt.stopPropagation();
            }
        };
        _el.onmousewheel = function(_evt){
            if(!preventMomentumScroll(_evt.currentTarget)){
                _evt.stopPropagation();
            }
        }
    };

    obj.scrollToSmooth = function(_top){
        var headerHeight = doc.querySelector('.header-wrap') ? doc.querySelector('.header-wrap').offsetHeight : 0;
        window.scrollTo({
            top: _top - headerHeight,
            behavior: 'smooth'
        });
    };

    obj.pinchZoom = function(_use){
        if(_use) doc.addEventListener('touchstart', pinchZoomHandler, {passive:false});
        else doc.removeEventListener('touchstart', pinchZoomHandler);
    };

    obj.doubleTabZoom = function(_use){
        if(_use) doc.addEventListener('touchend', doubleTabZoomHandler, {passive:false});
        else doc.removeEventListener('touchend', doubleTabZoomHandler);
    };

    obj.setPhotoList = function(){
        document.querySelectorAll('.photo-list').forEach(function(context, index){
            var list = context.querySelector('ul');
            var total_width = 0;

            list.querySelectorAll('li').forEach(function(item){
                total_width += outerWidth(item);
            });

            list.style.width = total_width + 'px';
        });

        function outerWidth(el) {
            var width = el.offsetWidth;
            var style = getComputedStyle(el);

            width += parseInt(style.marginLeft) + parseInt(style.marginRight);
            return width;
        }
    };

    obj.animateScrollTo = function(_selector, _duration, _adjust) {
        _duration = 400; //이동시간
        _adjust = 60; //조정값
        var targetEle = document.querySelector(_selector);

        if (!targetEle){return;}

        // - Get current & target positions
        var scrollEle = document.documentElement || window.scrollingElement,
            currentY = scrollEle.scrollTop,
            targetY = targetEle.offsetTop - (_adjust || 0);
        animateScroll(currentY, targetY, _duration);

        // - Animate and scroll to target position
        function animateScroll(_startY, _endY, _duration) {
            _duration = _duration ? _duration : 600;
            var unitY = (targetY - currentY) / _duration;
            var startTime = new Date().getTime();
            var endTime = new Date().getTime() + _duration;
            var scrollTo = function() {
                var now = new Date().getTime();
                var passed = now - startTime;
                if (now <= endTime) {
                    scrollEle.scrollTop = currentY + (unitY * passed);
                    requestAnimationFrame(scrollTo);
                }
                else {
                    console.log('End off.')
                }
            };
            requestAnimationFrame(scrollTo);
        };
    };

    obj.checkEmphasisBtnBx = function (){
        var doc = doc || document,
            bodyH = doc.querySelector('body').offsetHeight,
            headerWrap = doc.querySelector('.header-wrap'),
            container = doc.querySelector('.container'),
            attcPrevWrap = doc.querySelector('.attach-preview-wrap'),
            emphasis = {
                _that :  doc.querySelector('.emphasis-btn-bx'),
                _btn : null,
                _btnHandler : function(){}
            },
            isScoller = false;

        if(emphasis._that){
            setTimeout(function() {
                if(emphasis._that){var emphasisH = emphasis._that.offsetHeight;}
                if(headerWrap){var headerWrapH = headerWrap.offsetHeight;}
                if(container){var containerH = container.offsetHeight;}
                if(attcPrevWrap){var attcPrevWrapH = attcPrevWrap.offsetHeight;}

                if(emphasis._that.classList.contains('btn-static')){
                    containerH = containerH - emphasisH;
                    bodyH = bodyH + 27;//btn-static에 따른 emphaisisH의 높이 차이
                }
                if(attcPrevWrap){
                    //containerH = containerH - attcPrevWrapH;
                }
                /*
                console.log("bodyH : " + bodyH);
                console.log("bodyH - headerWrapH - emphasisH : " + (bodyH - headerWrapH - emphasisH));
                console.log("containerH : " + containerH);
                */
                if(headerWrap){
                    isScoller =	bodyH - headerWrapH - emphasisH <= containerH;
                }else {
                    isScoller =	bodyH <= containerH;
                }

                if(isScoller){
                    emphasis._that.classList.add('btn-static');
                }else {
                    emphasis._that.classList.remove('btn-static');
                }
            },100);
        }
    };

    obj.checkBottomBtnBx = function (){
        var doc = doc || document,
            bodyH = doc.querySelector('body').offsetHeight,
            headerWrap = doc.querySelector('.header-wrap'),
            findIdpwWrap = doc.querySelector('.find-idpw-wrap'),

            isScoller = false;

        if(findIdpwWrap){
            setTimeout(function() {
                var c = findIdpwWrap.children;
                var sum = 0;
                for (var i = 0; i < c.length; i++) {
                    sum += c[i].offsetHeight;
                    if (((c[i].classList.contains('find-id') || c[i].classList.contains('find-pw')) && c[i].querySelector('.btn-block.bottom'))) {
                        if(c[i].querySelector('.btn-block.bottom').classList.contains('static')){
                            sum -= c[i].querySelector('.btn-block.bottom').offsetHeight;
                        }
                        //sum -= 10;
                    }
                    // 완료페이지는 제외
                    if (c[i].classList.contains('find-finish')) {
                        sum = 0;
                        break;
                    }
                }
                if(headerWrap){
                    bodyH -= headerWrap.offsetHeight;
                }

                isScoller =	bodyH <= sum;

                //console.log("bodyH : " +  bodyH + " / sum : " + sum);
                if(isScoller){
                    findIdpwWrap.classList.add('no-fixed-btn');
                    if(doc.querySelector('.btn-block.bottom')){
                        doc.querySelector('.btn-block.bottom').classList.add('static');
                    }
                }
                findIdpwWrap.style.minHeight = sum + 'px';
            },100);
        }
    };
    obj.checkKeyInputing = function () {
        var inputStts = document.querySelectorAll('input');

        if(inputStts) {
            inputStts.forEach(function (_el) {
                if(_el.type != 'checkbox' && _el.type != 'radio' && _el.type != 'file') {
                    _el.addEventListener(
                        'focus',
                        function () {
                            toggleKeyInputing(true, _el);
                        },
                        true);
                    _el.addEventListener(
                        'blur',
                        function () {
                            toggleKeyInputing(false, _el);
                        },
                        true);
                }
            });
        }

        var textareaStts = document.querySelectorAll('textarea');
        if(textareaStts) {
            textareaStts.forEach(function (_el) {
                _el.addEventListener(
                    'focus',
                    function () {
                        toggleKeyInputing(true, _el);
                    },
                    true);
                _el.addEventListener(
                    'blur',
                    function () {
                        toggleKeyInputing(false, _el);
                    },
                    true);
            })
        };
    };

    obj.checkInputTextCount = function () {
        var inputText = document.querySelectorAll('.text-box');

        if(inputText){
            inputText.forEach(function(_el){
                _el.addEventListener('input',function(e){
                    var len = e.target.value.length;
                    var tLen = e.target.getAttribute('maxlength');
                    var count = _el.querySelector('.ipt-count');
                    if(count){
                        var currnet = _el.querySelector('.ipt-count .crt-len');
                        var total = _el.querySelector('.ipt-count .max-len');
                        currnet.textContent = len;
                        total.textContent = tLen;
                    }
                });
            });
        }
    };

    obj.toggleSwitch = function () {
        var inputText = document.querySelectorAll('.switch-box');
        if(inputText){
            inputText.forEach(function(_el){
                var swi = _el.querySelector('input');
                var swiText = _el.querySelector('.state-txt');

                if(swiText){
                    if(swi.checked){
                        swiText.classList.add('on');
                    }else{
                        swiText.classList.remove('on');
                    }
                }
                swi.addEventListener('change',function(e){
                    if(swi.checked){
                        swiText.classList.add('on');
                    }else{
                        swiText.classList.remove('on');
                    }
                });
            });
        }
    };

    return obj;
})(document, window);

// LAYOUT COMMON MOVEMENT
var Wrapper = Wrapper || {};
Wrapper = (function(doc, global) {
    // ELEMENTS INITIALIZE
    var obj = {},
        header = {
            _that : doc.querySelector('.header-wrap'),
            _back : null,
            _share : null,
            _shareBtnHandler : null,
            _cart : null,
            _cartCnt : null,
            _cartBtnHandler : null,
            _close : null,
            _sorting: null,
            _addr: null,
            _load : {
                _that : null,
                _timer : null
            }
        },
        mainBanner = {
            _that :  doc.querySelector('.main-banner-1'),
            _has : false,
            _height : 0,
            _top : 0
        },
        body = doc.querySelector('body'),
        scroller = doc.querySelector('html'),
        wrapper = doc.querySelector('.wrapper'),
        container = doc.querySelector('.container'),
        header = doc.querySelector('.header-wrap'),
        headerH = 60,
        headerBox = doc.querySelector('.header'),
        tabBar = doc.querySelector('.tab-bar'),
        beforeTop = 0,
        lastScroll = 0,
        bodyHeight = body.offsetHeight,
        isScoller = false,
        hasMainBn = false,
        floating = {
            _btn : null,
            _btnHandler : function(){}
        },
        scollerGestureCallback;

    // PRIVATE FUNCTIONS
    function initialize(){
        StyleCommon.pinchZoom(true);
        StyleCommon.doubleTabZoom(true);
        StyleCommon.toggleSwitch();
        global.addEventListener('scroll', wrapperHandler, false);
        global.addEventListener('load', wrapperHandler, false);

        if(doc.querySelector('.header-wrap')) {
            header._share = doc.querySelector('.header-wrap .icon-header-share');
            header._cart = doc.querySelector('.header-wrap .icon-header-cart');
            if(header._cart){
                header._cart.addEventListener('click', cartBtnHandler, true);
                header._cartCnt = header._cart.querySelector('.header-cart-count .txt');
            }
            header._sorting = doc.querySelector('.header-wrap .sorting');
            if(!header._sorting) {
                if(container) header._sorting = container.querySelector('.sorting');
            }
            header._addr = doc.querySelector('.header-wrap .cart-add-bx');
        }

        if(doc.querySelector('.tab-bar')){
            floating._btn = doc.querySelector('.tab-bar').querySelector('button[class=btn-type1]');
        }

        if(mainBanner._has){

        }
        global.addEventListener('orientationchange', orientationChangeHandler, true);
        body.addEventListener('load', orientationChangeHandler, true);

        StyleCommon.checkInputTextCount();
        // keypad 나올때
        if (container) {
            setTimeout(function(){
                StyleCommon.checkKeyInputing();
            }, 100);
        }
    }

    function wrapperHandler(_evt){

        if(getBodyScrollTop() > beforeTop && getBodyScrollTop() > 0){ // UP GESTURE
            if(getBodyScrollTop() > 0 && !doc.querySelector('.header-wrap').classList.contains('fixed')){ // ADD HEADER FIXED
                if(!mainBanner._has){
                    doc.querySelector('.header-wrap').classList.add('fixed');
                    //header fixed 일경우 wrapper에 패딩값 적용
                    doc.querySelector('.wrapper').style.paddingTop = doc.querySelector('.header-wrap').clientHeight + 'px';
                }
                tabBarToggle('DOWN');
            }else if(Math.round(getBodyScrollTop()) >= (scroller.scrollHeight - global.innerHeight)){
                tabBarToggle('UP');
            }else{
                tabBarToggle('DOWN');
            }
            if(doc.querySelector('.detail-visual-wrap')){

                detailVisualWrap = doc.querySelector('.detail-visual-wrap');

                if(getBodyScrollTop() >= detailVisualWrap.offsetHeight - headerH && !doc.querySelector('.header-wrap').classList.contains('header-type')){
                    doc.querySelector('.header-wrap').classList.add('header-type');
                }
                if(getBodyScrollTop() >= detailVisualWrap.offsetHeight + detailVisualWrap.offsetTop){
                    headerToggle('UP');
                }

            }else{
                if(getBodyScrollTop() > headerH){
                    headerToggle('UP');
                }
            }
            if(scollerGestureCallback) scollerGestureCallback('UP', scroller);
        }else{ // DOWN GESTURE
            if(!mainBanner._has && getBodyScrollTop() == 0 && doc.querySelector('.header-wrap').classList.contains('fixed') && !!_STYLE_JS_PARAMS.forceHeaderFix == false) { // ON TOP SCROLL POSITION REMOVE HEADER FIXED
                doc.querySelector('.header-wrap').classList.remove('fixed');
                doc.querySelector('.wrapper').style.paddingTop = '0px';
            }
            tabBarToggle('UP');
            detailVisualWrap = doc.querySelector('.detail-visual-wrap');
            if(detailVisualWrap){
                if(getBodyScrollTop() + headerH <= detailVisualWrap.offsetHeight && doc.querySelector('.header-wrap').classList.contains('header-type')){
                    doc.querySelector('.header-wrap').classList.remove('header-type');
                }
                //20210226 메인화면에 탭 이동후 바로 스크롤 위로 이동시 헤더가 표시안되어 조건 제거
                //if(getBodyScrollTop() >= detailVisualWrap.offsetHeight + detailVisualWrap.offsetTop){
                headerToggle('DOWN');
                //}

            }else{
                headerToggle('DOWN');
            }
            if(scollerGestureCallback) scollerGestureCallback('DOWN', scroller);
        }
        if(doc.querySelector('.wrapper').classList.contains('banner-type')){
            (function(){
                var currentScroll = doc.documentElement.scrollTop || doc.body.scrollTop;
                var sorting = doc.querySelector('.header-wrap .sorting-wrap') || doc.querySelector('.container .sorting-wrap');

                if(sorting === null) return;

                if (currentScroll > 0 && lastScroll <= currentScroll) {
                    sorting.classList.remove('fixed');

                    if (currentScroll < sorting.offsetTop) {
                        sorting.classList.remove('pre-fixed');
                    }
                    else {
                        sorting.classList.add('pre-fixed');
                        sorting.querySelector('.sorting').style.transition = 'height 0s';
                    }

                } else {

                    sorting.classList.remove('pre-fixed');
                    sorting.querySelector('.sorting').style.transition = 'height 0.5s';

                    if (currentScroll < sorting.offsetTop - sorting.offsetHeight) {
                        sorting.classList.remove('fixed');
                    }
                    else {
                        sorting.classList.add('fixed');
                    }
                }

                lastScroll = currentScroll;
            })();
        }
        beforeTop = getBodyScrollTop();
    }

    obj.wrapperHandler = wrapperHandler;

    function orientationChangeHandler(){
        setTimeout(function(){
            if(body.offsetHeight < body.offsetWidth){ // LANDSCAPE
                body.classList.add('lands')
            }else{ // PORTRATE
                body.classList.remove('lands');
            }
        }, 100);
    }

    obj.headerToggle = headerToggle;

    function headerToggle(_stance){
        headerBox = doc.querySelector('.header')
        if(headerBox){
            if(_stance == 'DOWN'){
                headerBox.classList.add('show');
                headerBox.classList.remove('hide');
            }else if(_stance == 'UP'){
                headerBox.classList.add('hide');
                headerBox.classList.remove('show');
            }
        }

    }
    function tabBarToggle(_stance){
        // if(mainScrollDisabled) return;
        tabBar = doc.querySelector('.tab-bar');
        header._addr = doc.querySelector('.cart-add-bx');

        if(tabBar) {
            if(_stance == 'DOWN'){
                //20210203 GNB tabBar 상시 고정으로 수정
                //tabBar.classList.add('scr-tab-bar');
                //tabBar.classList.remove('fixed-tab-bar');
                //doc.querySelector('body').classList.remove('tab-show');
                tabBar.classList.add('fixed-tab-bar');
                doc.querySelector('body').classList.add('tab-show');
            }else if(_stance == 'UP'){
                //20210203 GNB tabBar 상시 고정으로 수정
                //tabBar.classList.remove('scr-tab-bar');
                tabBar.classList.add('fixed-tab-bar');
                doc.querySelector('body').classList.add('tab-show');
            }
        }

        if(doc.querySelector('.header-wrap') && header._addr){
            if(_stance == 'DOWN'){
                header._addr.classList.add('src-srh');
            }else if(_stance == 'UP'){
                header._addr.classList.remove('src-srh');
            }
        }
    }

    // PUBLIC FUNCTIONS

    obj.setScollerGestureCallback = function(_callback){
        scollerGestureCallback = _callback;
    };

    obj.assignTabbar =  function(){
        tabBar = doc.querySelector('.tab-bar');
    };
    obj.removeScroll = function() {
        beforeTop = 0;
        global.removeEventListener('scroll', wrapperHandler);
    }
    obj.assignScroll = function(){
        var timer = 0;
        timer = setInterval(function() {

            if (doc.querySelectorAll('.header-wrap').length) {
                global.removeEventListener('scroll', wrapperHandler);
                global.addEventListener('scroll', wrapperHandler, false);
                clearInterval(timer);
            }
        }, 10);

        setTimeout(function() {
            clearInterval(timer);
        }, 5000)
    }

    // VALIDATION
    if(doc.querySelector('.header-wrap') && wrapper) setTimeout(initialize, 0);

    return obj;
})(document, window);

// MODAL
var Modal = Modal || function(){};
Modal = (function(doc, global) {
    return function(_class){
        var modal = doc.querySelector(_class),
            _cont = modal ? modal.querySelector('.modal_cont') : null,
            _scrBox = modal ? modal.querySelector('.scr-box') : null,
            _dim = modal ? modal.querySelector('.dim') : null,
            _that = this;

        if(_cont) StyleCommon.forceScroller(_cont);
        if(_scrBox) StyleCommon.forceScroller(_scrBox);
        // PRIVATE METHOD
        if(modal){
            var closeBtn = modal.querySelector('.icon-header-close');
            var closeBtn2 = modal.querySelector('.btn-modal-close');
            if(_dim){
                _dim.onclick = function(){
                    _that.hide();
                };
            }
            if(closeBtn){
                closeBtn.onclick = function(){
                    if(!this.classList.contains('evt-none')){
                        _that.hide();
                    }
                };
            }
            if(closeBtn2){
                closeBtn2.onclick = function(){
                    if(!this.classList.contains('evt-none')){
                        _that.hide();
                    }
                };
            }
        }
        // PUBLIC METHOD
        _that.show = function(){
            if(modal) {
                modal.style.display = 'block';
                StyleCommon.scrollLock(true);
                if(modal.querySelector('.ipt-count')){
                    setTimeout(function(){
                        StyleCommon.checkKeyInputing();
                    }, 100);
                }
            }
        };
        _that.hide = function(){
            if(modal) {
                modal.style.display = 'none';
                StyleCommon.scrollLock(false);
            }
        };
    };
})(document, window);

// MODAL BTN BINDING
(function(doc, global){
    var modals = doc.querySelectorAll('.btn-modal');
    if(modals){
        modals.forEach(function(_el, _idx){
            var data = _el.getAttribute('data-modal');
            if(data){
                _el.onclick = function(){
                    new Modal('.modal-wrap.'+data).show();
                };
            }
        });
    }
})(document, window);

/*ACTION SEET 확장 축소 */
var LayerExpand = LayerExpand || function(){};
LayerExpand = function(obj, additionCallback, externalCallback){
    var initialMouse = 0;
    var slideMovementTotal = 0;
    var mouseIsDown = false;
    var direction = null;
    var relativeMouse = 0;
    var currentMouse = 0;
    var statusBoolean = false;
    obj.setAttribute('data-expanded',false);

    var toggle = obj.querySelector(".toggle-btn");
    var objDim = obj.querySelector(".dim");
    var objCloseBtn = obj.querySelector(".close-btn");

    var startEvent = function(event){
        mouseIsDown = true;
        initialMouse = event.clientY || event.touches[0].pageY;
    }

    var moveEvent = function(event){
        if (!mouseIsDown) return;
        currentMouse = event.clientY || event.touches[0].pageY;
        relativeMouse = currentMouse - initialMouse;

        if (relativeMouse < 0) {
            direction = 'up';
        }else if (relativeMouse >= 0)  {
            direction = 'down';
        }
    }

    var upEvent = function(event){

        if (event.cancelable) {
            event.preventDefault();
            event.stopPropagation();
        }

        var status = obj.getAttribute('data-expanded');
        statusBoolean = (status === 'true');

        var exeExpand = function(){
            obj.setAttribute('data-expanded', !statusBoolean);
            direction = null;
        }

        if ( direction == null && statusBoolean == false){/*축소상태에서 click 했을때, - 확대해야 함 */
            exeExpand();
        } else if (direction == null && statusBoolean == true) {/* 확장상태에서 click 했을때, - 축소해야 함 */
            exeExpand();
        } else if (direction == 'up' && statusBoolean == false) {/*축소상태에서 up 으로 쓸어올렸을 때, - 확대야 함 */
            exeExpand()
        } else if (direction == 'down'){/*축소상태에서 down 으로 쓸어내렸을 때, - 숨김 */

            closeActionSeetLayer();

            // if(location.href.indexOf("popActionSheet_") > -1) {
            //     history.go(-2);
            // } else {
            //     history.back();
            // }
        }
    }

    function closeActionSeetLayer(){
        statusBoolean = false;
        direction = null;
        obj.setAttribute('data-expanded', false);
        obj.classList.remove('seet-fixed');
        StyleCommon.scrollLock(false);
        additionCallback();

        setTimeout(externalCallback, 10);
        if(toggle){
            toggle.removeEventListener("touchstart", startEvent, false);
            toggle.removeEventListener("touchend", upEvent, false);
        }
        objDim.removeEventListener("touchstart", dimClick, false);
        document.removeEventListener("touchmove", moveEvent, false);
    }

    var dimClick = function(event){
        if (event.cancelable) {
            //event.stopImmediatePropagation();
            event.preventDefault();
            event.stopPropagation();
        }
        direction = 'down';
        upEvent(event);
    }

    // window.onpopstate = history.onpushstate = function(e) {
    //     try {
    //         if(location.href.indexOf("popActionSheet") > -1) {
    //             history.back();
    //         }
    //         if(location.href.split("/").pop().indexOf("popActionSheet") == -1) {
    //             closeActionSeetLayer();
    //         }
    //     }catch(e){}
    // }

    //확장기능 예외
    if(toggle){
        if(toggle.closest('.fixed-action-sheet').classList.contains('article-cart-sheet')
            || toggle.closest('.fixed-action-sheet').classList.contains('top-searh-select')
            || toggle.closest('.fixed-action-sheet').classList.contains('top-share-seet')
            || toggle.closest('.fixed-action-sheet').classList.contains('sortlist')
        ){
            toggle.addEventListener('click', function(event){
                event.stopPropagation();
                obj.classList.remove('seet-fixed');
                StyleCommon.scrollLock(false);
            });
            objDim.addEventListener("touchstart", dimClick, false);
            objDim.addEventListener("click", dimClick, false);
            return;
        }
    }
    if(objDim){
        objDim.addEventListener("touchstart", dimClick, false);
        objDim.addEventListener("click", dimClick, false);
    }
    if(objCloseBtn){
        objCloseBtn.addEventListener("touchstart", dimClick, false);
        objCloseBtn.addEventListener("click", dimClick, false);
    }

    /*
    if(toggle.closest('.fixed-action-sheet').classList.contains('article-cart-sheet')
        || toggle.closest('.fixed-action-sheet').classList.contains('top-searh-select')
        || toggle.closest('.fixed-action-sheet').classList.contains('top-share-seet')
        || toggle.closest('.fixed-action-sheet').classList.contains('sortlist')
    ){
        toggle.addEventListener('click', function(event){
            event.stopPropagation();
            obj.classList.remove('seet-fixed');
            StyleCommon.scrollLock(false);
        });
        objDim.addEventListener("touchstart", dimClick, false);
        objDim.addEventListener("click", dimClick, false);
        return;
    }
*/
    if(toggle){
        toggle.addEventListener("touchstart", startEvent, false);
        toggle.addEventListener("touchend", upEvent, false);
        toggle.addEventListener("click", upEvent, false);
        objDim.addEventListener("touchstart", dimClick, false);
        objDim.addEventListener("click", dimClick, false);
    }

    document.addEventListener("touchmove", moveEvent, false);
}
/*//ACTION SEET 확장 축소 */

// ACTION SEET
var ActionSheet = ActionSheet || function(){};
ActionSheet = (function(doc, global) {
    return function(_class){
        var as = doc.querySelector(_class),
            _cont = as.querySelector('.action-sheet-scr'),
            _scrBox = as.querySelectorAll('.scr-box'),
            _that = this;
        if(_cont) StyleCommon.forceScroller(_cont);
        if(_scrBox) {
            for(var i = 0;i<_scrBox.length;i++){
                StyleCommon.forceScroller(_scrBox[i]);
            }
        }

        var exeAddition = function(){
            var btnType17 = document.querySelector('.btn-type17');
            if(btnType17){
                btnType17.classList.remove("cart");
            }
        };

        // PUBLIC METHOD
        _that.show = function(externalCallback){
            if(as){
                as.classList.add('seet-fixed');
            }
            StyleCommon.scrollLock(true);
            LayerExpand(as, exeAddition, externalCallback);
        };
        _that.hide = function(){
            if(as){
                as.classList.remove('seet-fixed');
            }
            StyleCommon.scrollLock(false);
        };
    };
})(document, window);

// ACTIONSHEET BTN BINDING

(window.actionseet = function(selector, doc, global){
    doc = doc || document;
    global = global || window;
    selector = selector || '.btn-actionseet';
    setTimeout(function(){
        doc.querySelectorAll(selector).forEach(function(_el, _idx){
            var data = _el.getAttribute('data-actionsheet');
            if(data){
                _el.onclick = function(){
                    new ActionSheet('.fixed-action-sheet.'+ data).show();
                };
            }
        });
    },100);

})('', document, window);


/* 공통함수 */
function updateDocTitle(txtTit) {
    if(txtTit) {
        let tempTit = document.title;
        if(tempTit != txtTit) {
            document.title = txtTit + " | " + tempTit;
        }
    }
}
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function openToast(obj){
    var target = document.querySelector('.'+obj);
    // target.style.display="block";
    target.classList.add('show');
    setTimeout(function(){
        target.classList.remove('show');
    },3000);
}

function scrollLock(bool){
    var scr = document.querySelector('.scr-box');
    if(bool){
        StyleCommon.scrollLock(true);
        if(scr) StyleCommon.forceScroller(scr);
    }else{
        StyleCommon.scrollLock(false);
        if(scr) StyleCommon.forceScroller(scr);
    }
};

function openPopup(obj){
    new Modal('.' +obj).show();
}
function closePopup(obj){
    console.log('d')
    new Modal('.' +obj).hide();
}

function getBodyScrollTop() {
    var el = document.scrollingElement || document.documentElement;
    // return el.scrollTop;
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
}

function isInViewport (el) {
    var rect = el.getBoundingClientRect();

    // transform으로 움직인 영역은 getBoundingClientRect이 정상적이지 않다.
    if (el.closest('.swiper-slide-active')) {
        return (
            Math.round(rect.top) >= 0 &&
            Math.round(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    else {
        return (
            Math.round(rect.top) >= 0 &&
            Math.round(rect.left) >= 0 &&
            Math.round(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            Math.round(rect.right) <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
    }

}

function autoVideo (els) {
    if(!els) return;

    els.forEach(function(vid, index){

        var ispauded = vid.paused;

        if (isInViewport(vid)) {
            ispauded && vid.play();
        }
        else {
            !ispauded && vid.pause();
        }
    });
}

function toggleMute(vdj){
    if (vdj.muted()) {
        vdj.muted(false);
        //  this.$refs.video.volume = 0.5;
        //this.isMuted = false;
    }
    else {
        vdj.muted(true);
        //this.isMuted = true;
    }
}

function getBodyScrollTop() {
    var el = document.scrollingElement || document.documentElement;
    // return el.scrollTop;
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
}

function imageloader(event, value){
    var img = event.target;
    var parentEl = img.parentElement;
    var prevEl = img.previousElementSibling || null;

    // true: image load success
    if (value) {
        prevEl && parentEl.removeChild(prevEl);
        // img.removeAttribute('data-noimage');
        // img.removeAttribute('data-default-noimage');
    }
    else {
        if (!img.src.endsWith(img.getAttribute('data-noimage'))) {
            img.src = img.getAttribute('data-noimage');
        } else {
            img.src = img.getAttribute('data-default-noimage');
        }
    }
}

function toggleClass(element, className) {
    var hasClass = (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
    hasClass ?  element.className = element.className.replace(className, " ").trim() : element.className += " " + className;
}

document.addEventListener("DOMContentLoaded", function () {

}, false);

function cabEditPosition(target){
    var targetButton = target.classList;
    var container = target.closest('.list-inner-box');
    var elements = container.querySelectorAll('.set-box');
    var totalLength = elements.length;
    var parent = target.closest('.set-box');
    var idx = [].indexOf.call(parent.parentNode.children, parent);

    if(targetButton.value == 'up-btn'){
        if(idx > 0){
            container.insertBefore(parent, container.childNodes[idx - 1]);
        }
    }else{
        if(idx < totalLength - 1){
            elements[idx + 1].parentNode.insertBefore(parent, elements[idx + 1].nextSibling);
        }
    }
}
function textareaFitContent(fieldId){
    document.getElementById(fieldId).style.height = document.getElementById(fieldId).scrollHeight+'px';
}