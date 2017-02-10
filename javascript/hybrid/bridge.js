(function(window) {
    var DEBUG = !!~window.location.href.indexOf('bridge-debug=true');
    var callbacks = {};
    var guid = 0;
    // var ua = navigator.userAgent.toLowerCase();
    var ua = 'nativeName/1.2 IOS10 iPhone'.toLowerCase();
    
    var ANDROID = /android/.test(ua);
    var IOS = /iphone|ipad/.test(ua);
    var WP = /windows phone/.test(ua);


    var newRule = /IOS10/.test(ua); // 是否为支持IOS10新协议的，Native端可以通过添加UA来告诉前端是否需要支持IOS10

    /**
     * 方便在各个平台中看到完整的 log
     */
    function log() {
        if (DEBUG) {
            console.log.call(console, Array.prototype.join.call(arguments, ' '));
        }
    }

    /**
     * 平台相关的 Web 与 Native 单向通信方法
     */
    function invoke(cmd) {
        log('invoke', cmd);

        if (ANDROID) {
            prompt(cmd);   //android 了解 是否单纯捕获窗体
        } else if (IOS) {
            // 获取Native版本号 例如：nativeName/1.2 自动匹配1
            var IOS_SYSTEM_VERSION = /nativeName\/(\d+)/.exec(ua) ? /nativeName\/(\d+)/.exec(ua)[1] : 0;
            var bridgeRFC = IOS_SYSTEM_VERSION < 10 && !newRule ? 'bridge://' : 'bridge://MobileNative?query=';
            var bridgeRFC = 'bridge://MobileNative?query=';

            var iframe = document.createElement('IFRAME');
            iframe.setAttribute('src',  bridgeRFC + cmd);
            document.documentElement.appendChild(iframe);
            iframe.parentNode.removeChild(iframe);
            iframe = null;
        } else if (WP) {
            // ...
        }
    }

    var Bridge = {
        callByJS: function(opt) {
            log('callByJS', JSON.stringify(opt));

            var input = {};
            input.name = opt.name;
            input.token = ++guid;
            input.param = opt.param || {};
            callbacks[input.token] = opt.callback;

            invoke(JSON.stringify(input));
        },
        callByNative: function(opt) {
            log('callByNative', JSON.stringify(opt));

            var callback = callbacks[opt.token];
            var ret = opt.ret || {};
            var script = opt.script || '';

            // Native 主动调用 Web
            if (script) {
                log('callByNative script', script);
                try {
                    invoke(JSON.stringify({
                        token: opt.token,
                        ret: eval(script)
                    }));
                } catch (e) {
                    console.error(e);
                }
            }
            // Web 主动调用 Native，Native 被动的响应
            else if (callback) {
                callback(ret);
                try {
                    delete callback;
                    log(callbacks);
                } catch (e) {
                    console.error(e);
                }
            }
        },
        /*
            callbyjs方法二次封装
            options:参数对象
            {
                platform:代表需要发送本次bridge的平台，0：安卓与IOS，1：安卓，2：ios，可为空，默认0
                bridgeData:代表要发送的bridgeData，与callByJs方法的参数相同，非空
                successCallback：匹配平台成功执行的回调函数，可为空
                normalCallback：匹配平台失败执行的回调函数，可为空
            }
         */
        branch:function(options){
            var platform=options.platform || 0;
            var result=false;
            var m_ANDROID=ua.toLowerCase().match('zbj_android');
            var m_IOS=ua.toLowerCase().match('zbj_ios');
            switch(platform){
                case 0:
                    result=m_ANDROID || m_IOS;
                    break;
                case 1:
                    result=m_ANDROID;
                    break;
                case 2:
                    result=m_IOS;
                    break;
            }
            if(result){
                this.callByJS(options.bridgeData);
                (typeof options.successCallback=="function") && options.successCallback();
            }
            else{
                (typeof options.normalCallback=="function") && options.normalCallback();
            }
        }
    };


    window.Bridge = Bridge;
    window.__log = log;

})(window);