$(function(){
	$(".switcher__btn").click(function(){
		if(!$(this).closest(".switcher__control").hasClass("switcher__control_deactive")) {
			var sw = $(this).closest(".switcher");
			sw.find(".switcher__btn").removeClass("switcher__btn_active");
			sw.find(".switcher__holder").removeClass("switcher__holder_active");
			var index = $(this).index();
			sw.find(".switcher__control").each(function(){
				$(this).find(".switcher__btn").eq(index).addClass("switcher__btn_active");
			});
			sw.find(".switcher__holder").eq(index).addClass("switcher__holder_active")
			return false;
		}
	});
	$(".js-scroll-link").click(function(){
  	if(!$(this).hasClass("active")) {
	    var scrollTo = $(this).data("scrollto"),
	    scrollTarget = $('*[data-scrollto="'+scrollTo+'"].js-scroll-target');
	    $.scrollTo(scrollTarget, 350, {offset: 30});
  	}
  });
});
$(document).ready(function(){
	$('#city').multiselect();
	$(".brand .brand__item").each(function(){
		var hidden = $(this).parents(':hidden');
		hidden.css("opacity", "0.01").show();
		var width = $(this).width();
		hidden.hide().css("opacity", "1");
		$(this).height(width);
	});
	$(".modal-inline").fancybox({
    type: 'inline',
    fixed:false,
    maxWidth: "100%",
    title: '',
    padding: 0,
    autoResize: false,
    autoCenter: false,
    fitToView: false,
    helpers: {
      overlay: {
        fixed: false
      }
    }
  }); 
  $(".catalog").each(function(){
  	var max_height = 0;
  	if($(window).width() >= 480) {
  		$(this).find(".catalog__item-holder").each(function(){
	  		var hidden = $(this).closest('.switcher__holder');
				hidden.css("opacity", "0.01").show();
	  		if($(this).height() > max_height) {
	  			max_height = $(this).height();
	  		}
	  		hidden.hide().css("opacity", "1");
	  	});
	  	$(this).find(".catalog__item-holder").height(max_height);
  	}
  })
});
