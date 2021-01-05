window._StaticImgUrl = "/common/images";


Vue.filter('toNumber', function (value) {
    if (typeof value !== 'number') {
        return value;
    }
    return (new Intl.NumberFormat('ko-KR').format(value));
});

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('YYYY.MM.DD');
    }
});

Vue.use(semPlugin);
// Vue.use(VueAgile);
var vm = new Vue({
    el: '#app',
    mixins: _PageMixins
});
