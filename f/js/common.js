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
  $(".main-control__search-input").on('focus', function(){
    $(this).closest(".main-control__search").find(".main-control__search-btn").addClass("main-control__search-btn_focus");
  });
  $(".main-control__search-input").on('blur', function(){
    $(this).closest(".main-control__search").find(".main-control__search-btn").removeClass("main-control__search-btn_focus");
  });
  $(".amounter__numb").on('focus', function(){
    $(this).closest(".amounter").addClass("amounter_focus");
  });
	$(".amounter__numb").on('blur', function(){
	  $(this).closest(".amounter").removeClass("amounter_focus");
	});
});
function check_min_amounter(that) {
	var numb = that.closest(".amounter").find(".amounter__numb");
	if(parseInt(numb.val()) <= parseInt(numb.data("min"))) {
		that.closest(".amounter").find(".amounter__btn_down").addClass("amounter__btn_min");
	}
	else if(parseInt(numb.val()) > parseInt(numb.data("min"))){
		that.closest(".amounter").find(".amounter__btn_down").removeClass("amounter__btn_min");
	}
}
$(document).ready(function(){
	$(".header-control").Stickyfill();
	$(".amounter").each(function(){
		if($(this).find(".amounter__numb").val() <= $(this).find(".amounter__numb").data("min")) {
			$(this).find(".amounter__btn_down").addClass("amounter__btn_min")
		}
	});
	$(".amounter__numb").on('change', function(){
		check_min_amounter($(this));
	})
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
  $(".modal-iframe").fancybox({
    type: 'iframe',
    wrapCSS: 'frame',
    fixed: false,
    maxWidth: 1400,
    width: '100%',
    margin: 30,
    autoHeight: true,
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
  	var that = $(this);
  	setTimeout(function(){
  		if($(window).width() >= 480) {
	  		that.find(".catalog__item-holder").each(function(){
		  		var hidden = $(this).closest('.switcher__holder');
					hidden.css("opacity", "0.01").show();
		  		if($(this).outerHeight() > max_height) {
		  			max_height = $(this).outerHeight();
		  		}
		  		hidden.hide().css("opacity", "1");
		  	});
		  	that.find(".catalog__item-holder").outerHeight(max_height);
	  	}
  	}, 1);
  	
  })
});
