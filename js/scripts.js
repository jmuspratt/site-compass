//	-------------------------------
//	Doc Ready

$(document).ready(function() {

	//	-------------------------------
	//	global: Get current breakpoints 
		
		getSize();
		$(window).on('resize', function(){ getSize(); });


	//	-------------------------------
	//	global: animate scroll
	    $(function() {
	        $('a.animate').click(function() {
	            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	                var target = $(this.hash);
	                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	                if (target.length) {
	                    $('html,body').animate({
	                        scrollTop: target.offset().top
	                    }, 1000);
	                    return false;
	                }
	            }
	        });
	    });
		

	//	-------------------------------
	//	global: open/close	

		$(".hide").hide(); 

		$('a.trigger').click(function() {
	   		var trigger = $(this);
			var trigger_text = trigger.text();
	   		var target_id = trigger.attr("href");
			var target = $(target_id);
			if ( target.hasClass("open") ) {
	   		   			target.removeClass("open").slideToggle(200);
	   		   			trigger.removeClass("active");
	   		   		}
	   		else {
	   		   		target.addClass("open").slideToggle(200);
	   		   		trigger.addClass("active");
	   		   		}
	   		return false;
	   	});


}); // end document.ready




//	-------------------------------
//	Functions


	// Based on http://adactio.com/journal/5429/
	function getSize() {
	    // for IE 8
	    if (!window.getComputedStyle) {
	        size = 4;
	    }
		    else {
			var size_string = window.getComputedStyle(document.body,':after').getPropertyValue('content');
			// strip quotes for firefox
			size_string = size_string.replace(/["']/g, "");
			// remove the word "size" (leaving just a number like 3)
			size_string = size_string.replace("size", "");
			// parse the number as a number
			var	size = parseInt(size_string);
			// console.log ("the size is " + size_string);
			return size;
		}
	}