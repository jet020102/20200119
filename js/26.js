$(document).ready(function() {
	$('.cart > li > a').click(function(event) {

		// 以下是取消默認行為，即使a連結中有網址，點擊了也不會連到那個網址去
		event.preventDefault();

		// this以外的都隱藏起來
		$(this).parent().siblings().find('ul').slideUp();

		// 我自己的ul 做摺疊效果
		$(this).parent().find('ul').slideToggle();
	});
});