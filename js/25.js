$(document).ready(function() {
	$('.question h3').click(function(event) {

		// 讓h3亮起來，其他h3移除active樣式
		$(this).toggleClass('active');

		// 讓點擊到的h3找到父元素 .question，再找到裡面的p判斷收合
		$(this).parent().find('p').slideToggle();


		// 讓自己以外的 p 隱藏起來
		$(this).parent().siblings().find('p').slideUp();

		// 讓自己以外的 h3 移除active樣式
		$(this).parent().siblings().find('h3').removeClass('active')
	});
});