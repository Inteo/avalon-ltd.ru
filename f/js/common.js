$(function(){
	$(".switcher__btn").click(function(){
		$(this).closest(".switcher").find(".switcher__btn").removeClass("switcher__btn_active");
		$(this).addClass("switcher__btn_active");
		return false;
	});
});