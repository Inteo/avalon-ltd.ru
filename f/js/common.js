$(function(){
	$(".switcher__btn").click(function(){
		var sw = $(this).closest(".switcher");
		sw.find(".switcher__btn").removeClass("switcher__btn_active");
		sw.find(".switcher__holder").removeClass("switcher__holder_active");
		var index = $(this).index();
		sw.find(".switcher__control").each(function(){
			$(this).find(".switcher__btn").eq(index).addClass("switcher__btn_active");
		});
		sw.find(".switcher__holder").eq(index).addClass("switcher__holder_active")
		return false;
	});
});
