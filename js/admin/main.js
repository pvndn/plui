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
	
	
	$('.data-section.section-order').bind("mouseover", function(){
		var $section = $(this);
		
		if (!$section.find('.row-expandable').hasClass('expanded')) {
			$('.data-section.section-order').find(".btn-expand").removeClass("btn-collapse");
			$('.data-section.section-order').find('.row-expandable').removeClass("expanded").slideUp(300);
			$section.find(".btn-expand").addClass("btn-collapse");
			$section.find('.row-expandable').addClass("expanded").slideDown(300);
		} else {
			
		}
	});
	
	$('.data-section.section-job').bind("mouseover", function(){
		var $section = $(this);
		
		if (!$section.find('.row-expandable').hasClass('expanded')) {
			$('.data-section.section-job').find(".btn-expand").removeClass("btn-collapse");
			$('.data-section.section-job').find('.row-expandable').removeClass("expanded").slideUp(300);
			$section.find(".btn-expand").addClass("btn-collapse");
			$section.find('.row-expandable').addClass("expanded").slideDown(300);
		} else {
			
		}
	});
	
	
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
	
	$(".push-notice-person").clickover({
		html: true,
		trigger: 'hover',
		placement: 'left',
		delay: { show: 200, hide: 10000 }
	});
	
	
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
	});


	$(".btn-edit-reply").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-reply').slideDown(300, function(){
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

	$(".btn-edit-review").live('click', function(){
		$(this).parents(".activity-thread").find('.section-edit-review').slideDown(300, function(){
			$(this).removeClass("none");
		});
		return false;
	});

	$(".section-edit .close").live('click', function(){
		$(this).closest(".section-edit").find("input").show().next().addClass("none")
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
		$(this).hide().closest(".section-edit").find(".edit-panel").removeClass("none");
		$(this).closest(".section-edit").find(".save").show();
	});

	$(".section-edit-tag .save").live("click", function(){
		$(this).hide().closest(".section-edit").find(".edit-panel").addClass("none");
		$(this).closest(".section-edit").find(".edit").show();
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

	$(".poll-option .close").live("click", function(){
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
});


