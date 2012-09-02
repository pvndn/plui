//Show form section step by step
$(function(){
	
	$(".order-form > section").live("click", function(){
		var $this = $(this);		
		var $next = $this.next("section");
		if ($next && $next.hasClass("none")) {
			$next.fadeIn(400, function(){$(this).removeClass("none")});
		}
	});
	
	//Fix side bar when scoll
	$('.order > .bd > .side').scrollToFixed();
	
});


//Fix side bar when scoll
$(function(){
	//Fix side bar when scoll
	$('.order > .bd > .side').scrollToFixed();
});

//Show user profile when hover
$(function(){
	$(".user.with-profile").popover({
		trigger: 'hover',
		title: function(){
			$me = $(this);
			var name = $me.data("name");
			return name;
		},
		content: function(){
			$me = $(this);
			var email = $me.data("email"),
			picture = $me.data("picture"),
			phone = $me.data("phone");
			var content = '<img width="36" height="36" src="' + picture + '" class="pull-left spaced" />' + ' <span>Phone: '+phone+'</span> <br />' + ' <span>Email: '+email+'</span>' ;
			return content;
		},
		customClass: "large user-profile"
	});
})

//Show user profile when hover
$(function(){
	var shipToForm = $(".order-form-ship");
	$(".shipto-add").bind("click", function(){
		$(".order-form-ship").first().before(shipToForm.clone().hide(0).fadeIn(300));
	});
})


