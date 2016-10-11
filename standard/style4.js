/**
* @time 2015/12/03
* @author yuanzimin
* @description sea.js写法规范
**/
define(function (require, exports, module) {
	/**
	* @method 点击事件
	* @pram alertString:提示语
	**/
	function clickBtn (alertString) {
		alert(alertString);
	}

	/**
	* @method select选中事件
	**/
	function changeSelect () {
		alert($(this).val());
	}

	/**
	* @method 通用绑定事件方法
	**/
	var bind = function () {
		//带参数
		$("#botton").on('click', function () {
			clickBtn("按钮被点击了！");
		});
		//不带参数
		$("#select").on('change', changeSelect);
	}();
})
