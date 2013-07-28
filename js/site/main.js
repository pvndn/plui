$(function(){
	//Init expander
	$('.expander').expander({
		slicePoint: 120,
		preserveWords: true,
		widow: 4,
		expandText: 'More info',
		expandPrefix: '&hellip; ',
		moreClass: 'read-more',
		lessClass: 'read-less',
		expandEffect: 'fadeIn',
		expandSpeed: 400,
		collapseEffect: 'fadeOut',
		collapseSpeed: 300,
		userCollapse: true,
		userCollapseText: 'Collapse',
		userCollapsePrefix: ' '
	});
	
	//Init expander
	$('.expander-all').expander({
		slicePoint: 0,
		preserveWords: true,
		widow: 4,
		expandText: 'More info',
		expandPrefix: '',
		moreClass: 'read-more',
		lessClass: 'read-less',
		expandEffect: 'fadeIn',
		expandSpeed: 400,
		collapseEffect: 'fadeOut',
		collapseSpeed: 300,
		userCollapse: true,
		userCollapseText: 'Collapse',
		userCollapsePrefix: ' '
	});
	
	//Fix alerts
	$('.alerts').scrollToFixed();
	
	$(".with-tooltop").tooltip();
    $(".with-tooltip").tooltip();
	
	//Combobox
	$('.combobox').combobox();
	
	//Datepicker
	$('.date').datepicker();
	
	
	//Theme picker
	var wrapper = $(".wrapper");
    var themePicker = {
        black : function() {
            wrapper.removeClass().addClass("theme-black");
        },
        blue : function() {
            wrapper.removeClass().addClass("theme-blue");
        },
        deepBlue : function() {
            wrapper.removeClass().addClass("theme-deepblue");
        },
        green : function() {
            wrapper.removeClass().addClass("theme-green");
        },
        red : function() {
            wrapper.removeClass().addClass("theme-red");
        },
        yellow : function() {
            wrapper.removeClass().addClass("theme-yellow");
        }
        ,
        festRed : function() {
            wrapper.removeClass().addClass("theme-fest-red");
        }
        ,
        festGreen : function() {
            wrapper.removeClass().addClass("theme-fest-green");
        }
    };
    
    $("#theme-picker-black").bind('click', function() {
        themePicker.black();
    });
    $("#theme-picker-blue").bind('click', function() {
        themePicker.blue();
    });
    $("#theme-picker-deepblue").bind('click', function() {
        themePicker.deepBlue();
    });
    $("#theme-picker-green").bind('click', function() {
        themePicker.green();
    });
    $("#theme-picker-red").bind('click', function() {
        themePicker.red();
    });
    $("#theme-picker-yellow").bind('click', function() {
        themePicker.yellow();
    });
    $("#theme-picker-fest-red").bind('click', function() {
        themePicker.festRed();
    });
    $("#theme-picker-fest-green").bind('click', function() {
        themePicker.festGreen();
    });


    if ($(".jcarousel").length > 0) { 
        $(".jcarousel").jcarousel(); 
    } 


    $('.product-viewer').etalage({
        thumb_image_width: 250,
        thumb_image_height: 250,
        source_image_width: 600,
        source_image_height: 600,
        zoom_area_width: 400,
        zoom_area_height: 400,
        zoom_area_distance: 5,
        smallthumb_inactive_opacity: 0.5,
        smallthumbs_position: 'bottom',
        show_icon: false,
        autoplay: false,
        keyboard: false,
        zoom_easing: false
    });

    $(".product-customize").scrollToFixed();

    $(".deco-options a").live("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
    });


});


$(".btn-add-question").live("click", function(){
    $(this).addClass("none").siblings(".form-question").removeClass("none");
});

$(".btn-add-answer").live("click", function(){
    $(this).parent().siblings(".form-answer").removeClass("none");
});
