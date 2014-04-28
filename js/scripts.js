$(document).ready(function() {

	//	-------------------------------
	//	global: Get current breakpoints 
		getSize();
		$(window).on('resize', function(){ getSize(); });


	//	-------------------------------
	//	global: animate scroll

   	 $("a.animate").click(function(event){
 	 		event.preventDefault();
 	 		var full_url = this.href;
 	 		var parts = full_url.split("#");
 	 		var trgt = parts[1];
 	 		var target_offset = $("#"+trgt).offset();
 	 		var target_top = target_offset.top - 56;
 	 		$("html, body").animate({scrollTop:target_top}, "slow");
 	 	});
		

	//	-------------------------------
	//	global: open/close	

		$(".hide").hide(); 

		$('a.trigger').click(function() {

	   		var trigger = $(this);
			var trigger_text = trigger.text();
			// console.log(trigger_text);

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
			if ( target.hasClass("videoplayer") ) {
				trigger.hide();
			}
			if ( target.hasClass("videotrigger") ) {
				trigger.closest(".videoplayer").hide();
			}

	   		return false;
	   	});




}); // end document.ready




//	-------------------------------
//	Functions

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