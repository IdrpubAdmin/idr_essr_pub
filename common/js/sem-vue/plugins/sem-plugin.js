// 2020.01.29 import/export 제거 관련하여 module export를 전역객체 정의로 대체
var semPlugin = {
    install: function(vm, options) {
        vm.prototype.$_popup = {
            openLayer: function(selector) {
                console.log(`openLayer(${selector})`);
                new Modal(selector).show();
            },
            openActionSheet: function(selector) {
                console.log(`openActionSheet(${selector})`);
                new ActionSheet(selector).show();
            },
            alert: function(msg) {
                document.getElementById('sysMsg').innerHTML = msg;
                new Modal('.sys-modal').show();
            },
            confirm: function(msg, confCancellMsg, confOkkMsg) {
                return new Promise(function(resolve, reject) {
                    document.getElementById('sysConfirmMsg').innerHTML = msg;

                    document.getElementById('confCancellMsg').innerHTML = confCancellMsg || '취소';
                    document.getElementById('confOkkMsg').innerHTML = confOkkMsg || '확인';

                    document.querySelector('.system-confirm-ok').onclick = function(e){
                        e.preventDefault();
                        resolve();
                        closeConfirm();
                    };

                    document.querySelector('.system-confirm-cancel').onclick = function(e){
                        e.preventDefault();
                        reject();
                        closeConfirm();
                    };

                    new Modal('.sys-confirm').show();
                });
            }
        };
    }
};
