$(function(){
	//Pantone color select
	$('.pms-list > .pms').bind("click", function(){
	    if ($(this).parent().hasClass("readonly")) {
	        return;
	    }
	    var $me = $(this),
	    	$list = $me.parent(".pms-list");
	    
	    if ($list.hasClass("pms-multi")) {
	    	if ($me.hasClass("selected")) {
				$me.removeClass("selected");
			} else {
				$me.addClass("selected");
			}
	    } else {
	    	$list.find(".pms").removeClass("selected");
			$me.addClass("selected");
	    }
	});
	
	$(".with-tooltop").tooltip();
	
	$('.combobox').combobox();
	
	
	//Datepicker
	$('.date').datepicker();
	
	$('.btn-advanced-filter').bind("click", function(){
		var $me = $(this),
			$filter = $me.closest('.order-list-filter');
		
		if (!$filter.find('.expandable').hasClass('expanded')) {
			$me.addClass("btn-collapse");
			$filter.find('.expandable').addClass("expanded").slideDown(300);
		} else {
			$me.removeClass("btn-collapse");
			$filter.find('.expandable').removeClass("expanded").slideUp(300);
		}
	});
	
	$('.btn-expand').bind("click", function(){
		var $me = $(this),
			$section = $me.closest('.data-section');
		
		if (!$section.find('.row-expandable').hasClass('expanded')) {
			$me.addClass("btn-collapse");
			$section.find('.row-expandable').addClass("expanded").slideDown(300);
		} else {
			$me.removeClass("btn-collapse");
			$section.find('.row-expandable').removeClass("expanded").slideUp(300);
		}
	});
	
	
	// $('.data-section.section-order').bind("mouseover", function(){
	// 	var $section = $(this);
		
	// 	if (!$section.find('.row-expandable').hasClass('expanded')) {
	// 		$('.data-section.section-order').find(".btn-expand").removeClass("btn-collapse");
	// 		$('.data-section.section-order').find('.row-expandable').removeClass("expanded").slideUp(300);
	// 		$section.find(".btn-expand").addClass("btn-collapse");
	// 		$section.find('.row-expandable').addClass("expanded").slideDown(300);
	// 	} else {
			
	// 	}
	// });
	
	
	$('.btn-expand-all').bind("click", function(){
		$(".data-section").find('.row-expandable').addClass("expanded").slideDown(300);
		$(".data-section").find('.btn-expand').addClass("btn-collapse");
	});
	
	$('.btn-collapse-all').bind("click", function(){
		$(".data-section").find('.row-expandable').removeClass("expanded").slideUp(300);
		$(".data-section").find('.btn-expand').removeClass("btn-collapse");
	});
	
	
	$('.order-list-toolbar').scrollToFixed();
	
	$('.push-notice').scrollToFixed();
	
	$('.alerts').scrollToFixed();

	$('.list-time-filter').scrollToFixed();
	
	
	$(".filter-group .filter-item").live("click", function(){
		var $me = $(this),
			$group = $me.closest(".filter-group");
		if ($group.hasClass("filter-multi")){
			if ($me.hasClass("selected")) {
				$me.removeClass("selected");
			} else {
				$me.addClass("selected");
			}
		} else if ($group.hasClass("filter-single")) {
			if (!$me.hasClass("selected")) {
				$group.find(".filter-item").addClass("none");
				$me.removeClass("none").addClass("selected");
			} else {
				$group.find(".filter-item").removeClass("none");
				$me.removeClass("selected");
			}
		} else if ($group.hasClass("filter-alphabet")) {
            if (!$me.hasClass("selected")) {
                $group.find(".filter-item").removeClass("selected");
                $me.addClass("selected");
            } else {
                $me.removeClass("selected");
            }
        }
		
	});
	
	$(".bp-popover").popover({
		html: true,
		trigger: 'click',
		delay: { show: 200, hide: 100 }
	});

	$(".bp-popover").popover({
		html: true,
		trigger: 'click',
		delay: { show: 200, hide: 100 }
	});
	
	// $(".push-notice-person").clickover({
	// 	html: true,
	// 	trigger: 'hover',
	// 	placement: 'left',
	// 	delay: { show: 200, hide: 10000 }
	// });




	//$(".popover-user").clickover({ width: 300, height: "auto" });

	$('.popover-user').popover({
		placement: 'right',
		offset: 15,
		trigger: 'manual',
		delay: { show: 350, hide: 200 },
		html: true,
	});

	$('.popover-bp').popover({
		placement: 'right',
		offset: 15,
		trigger: 'manual',
		delay: { show: 350, hide: 200 },
		html: true,
	});

	$('.push-notice-person').popover({
		placement: 'left',
		offset: 15,
		trigger: 'manual',
		delay: { show: 350, hide: 200 },
		html: true,
	});

	var timer,
	popover_parent;
	function hidePopover(elem) {
		$(elem).popover('hide');
	}
	$('.popover-user').hover(
		function() {
			var self = this;
			clearTimeout(timer);
          $('.popover').hide(); //Hide any open popovers on other elements.
          popover_parent = self
          $(self).popover('show');            
      }, 
      function() {
      	var self = this;
      	timer = setTimeout(function(){hidePopover(self)},500);                 
      });
	$('.popover-bp').hover(
		function() {
			var self = this;
			clearTimeout(timer);
          $('.popover').hide(); //Hide any open popovers on other elements.
          popover_parent = self
          $(self).popover('show');            
      }, 
      function() {
      	var self = this;
      	timer = setTimeout(function(){hidePopover(self)},500);                 
      });
	$('.push-notice-person').hover(
		function() {
			var self = this;
			clearTimeout(timer);
          $('.popover').hide(); //Hide any open popovers on other elements.
          popover_parent = self
          $(self).popover('show');            
      }, 
      function() {
      	var self = this;
      	timer = setTimeout(function(){hidePopover(self)},500);                 
      });
	$(document).on({
		mouseenter: function() {
			clearTimeout(timer);
		},
		mouseleave: function() {
			var self = this;
			timer = setTimeout(function(){hidePopover(popover_parent)},300); 
		}
	}, '.popover');


	
	
	//Remove attachment
	$(".upload-thumbnail .icon-remove").live("click", function(){
	    if ($(this).parent().parent(".upload-thumbnails").hasClass("readonly")) {
	        return;
	    }
	    $(this).parent(".upload-thumbnail").fadeOut(250, function(){$(this).remove()});
	    //@Todo: Add ajax function to remove upload file
	});
	
	$(".upload-text-link .icon-remove").live("click", function(){
        if ($(this).parent().parent(".upload-text-links").hasClass("readonly")) {
            return;
        }
        $(this).parent(".upload-text-link").fadeOut(250, function(){$(this).remove()});
        //@TODO: Add ajax function to remove upload file
    });
    
     $(".order-details .editable-color .pms-list .pms").live("click", function(){
       var $me = $(this);
       $me.closest(".editable-color").find(".modal-color").fadeIn(300);
    });
    
    $(".order-details .editable-color .modal-color .modal-footer .btn-save").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-color").fadeOut(300);
    });
    
    $(".order-details .editable-color .modal-color .modal-footer .btn-cancel").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-color").fadeOut(300);
    });
    
    
    $(".order-details .editable-specifications > a").live("click", function(){
       var $me = $(this);
       $me.closest(".editable-specifications").find(".modal-specifications").fadeIn(300);
    });
    
    $(".order-details .editable-specifications .modal-specifications .modal-footer .btn-save").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-specifications").fadeOut(300);
    });
    
    $(".order-details .editable-specifications .modal-specifications .modal-footer .btn-cancel").live("click", function(){
       var $me = $(this);
       $me.closest(".modal-specifications").fadeOut(300);
    });
    
    
    var shipToForm = $(".data-section.section-shipping");
	$(".shipto-add").bind("click", function(){
		$(".data-section.section-shipping").first().before(shipToForm.clone().hide(0).fadeIn(300));
	});
	
	$(".data-section.section-shipping .btn.delete").live("click", function(){
		$(this).closest(".data-section.section-shipping").fadeOut(200, function(){
			$(this).remove();
		});
	});
	
	
	
	//Push notice
	
	$('.push-notice .push-notice-handle').bind('click', function(){
		var $me = $(this),
			$panel = $me.closest('.push-notice');
		if ($panel.hasClass('expanded')){
			$panel.removeClass('expanded');
			$me.removeClass('expanded');
		} else {
			$panel.addClass('expanded');
			$me.addClass('expanded');
		}
	});
	
	
	$('.editable-inline').live('click', function(){
		
	});

	$('.btn-add-activity').live('click', function(){
		$(this).parent().parent().next('.activity-add').slideDown(300, function(){
			$(this).removeClass("none");
		});
		$(this).addClass("none");
	});


	$(".btn-edit-reply").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-reply').first().slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".btn-edit-assignment").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-assignment').slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".btn-edit-tag").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-tag').slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".btn-edit-file").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-file').slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".btn-edit-email").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-email').slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".btn-edit-review").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-review').slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".section-edit .btn-close-section").live('click', function(){
		//$(this).closest(".section-edit").find("input").show().next().addClass("none");

		$(this).closest(".section-edit").hide();
	});

	$(".act-box, .activity-thread-reply").live('mouseover', function(){
		$(this).find(".edit").removeClass("none");
		$(this).find(".remove").removeClass("none");
	});

	$(".act-box, .activity-thread-reply").live('mouseout', function(){
		$(this).find(".edit").addClass("none");
		$(this).find(".remove").addClass("none");
	});




	$(".section-edit-reply > input").live("click", function(){
		$(this).hide().next().removeClass("none").find("textarea").focus();
	});

	$(".section-edit-tag .edit").live("click", function(){
		$(this).hide().closest(".section-edit").removeClass("no-shadow").addClass("editing");
		$(this).closest(".section-edit").find(".save").show();
	});

	$(".section-edit-tag .save").live("click", function(){
		$(this).hide().closest(".section-edit").addClass("no-shadow").removeClass("editing");
		$(this).closest(".section-edit").find(".edit").show();
	});

	$(".act-tag .btn-remove-tag").live("click", function(e){
		$(this).closest(".act-tag").remove();
		return false;
	});

	$(".section-edit-assignment .edit").live("click", function(){
		$(this).hide().closest(".section-edit").addClass("editing");
		$(this).closest(".section-edit").find(".save").show();
		$(this).closest(".section-edit").find(".remove-all").show();
	});

	$(".section-edit-assignment .save").live("click", function(){
		$(this).hide().closest(".section-edit").removeClass("editing");
		$(this).closest(".section-edit").find(".edit").removeAttr("style");
		$(this).closest(".section-edit").find(".remove-all").hide();
	});

	$(".section-edit-assignment .remove-all").live("click", function(){
		$(this).closest(".row-fluid").next(".row-fluid").find(".user-stripe").remove();
	});


	

	$(".btn-change-vote").live("click", function(){
		
		$(this).siblings(".act-voting-edit").removeClass("none");
		$(this).siblings(".act-voting").addClass("none");
	});


	$(".btn-submit-vote").live("click", function(){
		$(this).parent(".act-voting-edit").addClass("none").siblings(".act-voting").removeClass("none");
	});

	$(".poll-option input").live("click", function(){
		var option = $(this).closest(".poll-option");
		var tpl = option.clone();
		tpl.find('input').removeAttr("placeholder").val('');
		if (option.next(".poll-option").length <= 0) {
			option.after(tpl);
		}
	});

	$(".poll-option .btn-remove-option").live("click", function(){
		var option = $(this).closest(".poll-option");
		option.remove();
	});


	$(".activity-thread .btn-section-expand").live("click", function(){
		var $btn = $(this),
			$thread = $btn.closest(".activity-thread"),
			$expandable = $thread.find(".section-expandable");

		if ($btn.hasClass("expanded")) {
			$expandable.hide(0);
			$btn.removeClass("expanded");
		} else {
			$expandable.show(0);
			$btn.addClass("expanded");
		}
	});


	$(".act-user-popover").popover({
		html: true,
		trigger: 'hover',
		delay: { show: 200, hide: 200 }
	});


	//Fake logic here, remove when integration
	$(".act-list-by-type, .act-list-by-user, .act-list-by-tag").live("click", function(){
		$(".activity-list-hd").removeClass("none");
	});

	$(".activity-list-show-all").live("click", function(){
		$(".activity-list-hd").addClass("none");
	});

	$(".search-box-input .dropdown-menu a").live('click', function(){
		var $me = $(this),
			$input = $(this).closest(".dropdown-menu").siblings("input").first(),
			$hiddenSelect = $(this).closest(".search-box").find("select").first();

		$input.val("").attr("placeholder", $me.data("placeholder"));
		$hiddenSelect.find("option").filter(function(){
			return $(this).attr("value") == $me.data("value");
		})
		.attr("selected", "selected")
		.siblings().removeAttr("selected");
	});

	$('.dropdown-menu-group li').live("click", function(){
		var $me = $(this),
			$group = $me.closest(".dropdown-menu-group");

		if ($group.hasClass("group-radio")) {
			console.log(0);
			$me.addClass("selected").siblings().removeClass("selected");
		} else if ($group.hasClass("group-checkbox")) {
			if ($me.hasClass("selected")) {
				$me.removeClass("selected");
			} else {
				$me.addClass("selected");
			}
		}

	});


	$(".fancybox-mockup-edit").fancybox({
		width: 940,
		minHeight: "98%"
	});

	$(".section-thread .btn-edit-thread").live("click", function(){
		var $thread = $(this).closest(".section-thread"),
			$threadEdit = $thread.next(".section-thread-edit");

		$thread.addClass("none");
		$threadEdit.removeClass("none");
	});

	$(".section-thread-edit .btn-save").live("click", function(){
		var $threadEdit = $(this).closest(".section-thread-edit"),
			$thread = $threadEdit.prev(".section-thread");

		$thread.removeClass("none");
		$threadEdit.addClass("none");
	});

	$(".section-thread-edit .btn-cancel").live("click", function(){
		var $threadEdit = $(this).closest(".section-thread-edit"),
			$thread = $threadEdit.prev(".section-thread");

		$thread.removeClass("none");
		$threadEdit.addClass("none");
	});

});


