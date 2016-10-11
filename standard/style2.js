/**
* @time 2015/12/04
* @author yuanzimin
* @description json写法
**/
$(function () {
	var Page = {
		/**
		* @method 初始化函数
		**/
		init : function () {
			var me = this;
			me.bind();
		},
		/**
		* @method 点击事件
		* @pram alertString:提示语
		**/
		clickBtn : function (alertString) {
			alert(alertString);
		},
		/**
		* @method select选中事件
		**/
		changeSelect : function () {
			alert($(this).val());
		},
		/**
		* @method 通用绑定事件方法
		**/
		bind : function () {
			var me = this;
			//带参数
			$("#botton").on('click', function () {
				me.clickBtn("按钮被点击了！");
			});
			//不带参数
			$("#select").on('change', me.changeSelect);
		}
	}
	//执行函数
	Page.init();
})