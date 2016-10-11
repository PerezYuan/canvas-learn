/**
 * @time 2015/12/07
 * @author yuanzimin
 * @description 发布会专题js
 **/
$(function () {
    var Slider = {
        /**
         * @method 初始化函数
         **/
        init : function () {
            var me = this;
            me.sendAjax();
            me.bind();
            me.isComplete = true;
            me.timer = setInterval(me.timerFunc,3000);
        },
        /**
         * @method 获取广告位数据
         **/
        sendAjax : function () {
            var $slider = $('#slider');
            $.ajax({
                url: PUBCONFIG.ZHUBIAOJU_URL + "/img/advert?json=1&jsonpcallback=?&holder_id=43",
                type: "get",
                dataType: "jsonp",
                success: function (res) {
                    var data = res.ad;
                    var _html = "";
                    $.each(data, function (index, value) {
                        _html += '<li><img src="' + value.src + '" alt="' + value.alt + '"></li>'
                    })
                    $slider.html(_html);
                    Slider.resizeWidth($slider);
                },
                error : function () {
                    alert("error");
                }
            })
        },
        /**
         * @method 重置slider宽度
         * @pram $element 被重置的jQuery对象
         **/
        resizeWidth : function ($element) {
            var _length = $element.find('li').length;
            var _num = Math.ceil(_length / 4);
            if(_num == 1) {
                $('.slider-btn-left').hide();
                $('.slider-btn-right').hide();
            }
            $element.css('width', 1035 * _num);
        },
        /**
         * @method 像左滚动事件
         **/
        clickLeft : function () {
            if(Slider.isComplete) {
                Slider.isComplete = false;
                var $slider = $('#slider');
                var _currentOffset = parseInt($slider.css('marginLeft'));
                //到达边界判断
                var _num = Math.ceil($slider.find('li').length / 4) - 1;
                var _moveOffset = _currentOffset == 0 ? -parseInt($slider.css('width')) + (1035 - 25 * _num) : _currentOffset + 1055;
                $slider.animate({marginLeft : _moveOffset}, 500, function () {
                    Slider.isComplete = true;
                });
            }
        },
        /**
         * @method 像右滚动事件
         **/
        clickRight : function () {
            if(Slider.isComplete) {
                Slider.isComplete = false;
                var $slider = $('#slider');
                var _currentOffset = parseInt($slider.css('marginLeft'));
                //到达边界判断
                var _moveOffset = _currentOffset - 1055 < -parseInt($slider.css('width')) ? 0 : _currentOffset - 1055;
                $slider.animate({marginLeft : _moveOffset},500, function () {
                    Slider.isComplete = true;
                });
            }
        },
        /**
         * @method 轮播事件
         **/
        timerFunc : function () {
            if(Slider.isComplete) {
                Slider.isComplete = false;
                var $slider = $('#slider');
                var _currentOffset = parseInt($slider.css('marginLeft'));
                //到达边界判断
                var _moveOffset = _currentOffset - 1055 < -parseInt($slider.css('width')) ? 0 : _currentOffset - 1055;
                $slider.animate({marginLeft : _moveOffset},500, function () {
                    Slider.isComplete = true;
                });
            }
        },
        /**
         * @method 通用绑定事件方法
         **/
        bind : function () {
            var me = this;
            $('.slider-btn-left').on('click',me.clickLeft);
            $('.slider-btn-right').on('click',me.clickRight);
        }
    }
    //执行函数
    Slider.init();

})