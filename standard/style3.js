/**
* @time 2015/12/04
* @author yuanzimin
* @description 原型写法
**/
$(function () {
	//按钮类
	function Btn (alertString) {
		this.alertString = alertString;
	}

	Btn.prototype = {
		/**
		* @method 点击事件
		* @pram alertString:提示语
		**/
		clickBtn : function () {
			alert(this.alertString);
		}
	}

	//下拉类
	function Select ($element) {
		this.$element = $element;
	}

	Select.prototype = {
		/**
		* @method select选中事件
		**/
		changeSelect : function () {
			alert(this.$element.val());
		}
	}

	/**
	* @method 通用绑定事件方法
	**/
	var bind = function () {
		$("#botton").on('click', function () {
			var btn = new Btn("按钮被点击了！");
			btn.clickBtn();
		});
		$("#select").on('change', function () {
			var select = new Select($(this));
			select.changeSelect();
		});
	}();
})