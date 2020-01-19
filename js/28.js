$(document).ready(function() {
	$('.wrap').on('click', 'h1', function(event) {
		//on類似監聽的效果，在這邊就監聽wrap裡面所有的h1都會產生效果
		event.preventDefault();
		alert('有效！')
	});
	$('.box1').html('<h1>用jQuery動態產生的</h1>')
});