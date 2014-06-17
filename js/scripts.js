$(document).ready(function() {

	// Store features as object literals
	// Based on http://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/

	//	-------------------------------
	//	Utilities
	var Utilities = {
		getSize: function() {
			var size_string = window.getComputedStyle(document.body,':after').getPropertyValue('content')
			size_string = size_string.replace(/["']/g, "")
			size_string = size_string.replace("size", "")
			var	size = parseInt(size_string)
			return size
		}
		
	} // Utilities
	
	
	
	

	//	-------------------------------
	// OpenClose
	
	var OpenClose = {
		// Settings
		settings: {
			$triggers: $('a.trigger'),
			$to_hide: $('.hide')
		},
		// Init
		init: function() {
			s = this.settings
			OpenClose.bind()
		},
		// Bind
		bind: function() {
			OpenClose.hideThings()
			s.$triggers.click( function() {
				var $clicked_trigger = $(this)
				OpenClose.doStuff($clicked_trigger)
				return false
			} )
		},
		// Functions
		doStuff: function($clicked_trigger) {
			OpenClose.displayToggle($clicked_trigger)
			OpenClose.textToggle($clicked_trigger)
		},
		hideThings: function()	{
			s.$to_hide.hide()
		},
		displayToggle: function($clicked_trigger) {
			var target_id = $clicked_trigger.attr("href")
			var $target = $(target_id)
			if ( $target.hasClass("open") ) {
				$target.removeClass("open").slideToggle(300)
				$clicked_trigger.removeClass("active")
			}
			else {
				$target.addClass("open").slideToggle(300)
				$clicked_trigger.addClass("active")
			}
		},
		textToggle: function($clicked_trigger) {
			if ( $clicked_trigger.data('default-text') ) {
				var default_text = $clicked_trigger.data('default-text')
			}
			if ($clicked_trigger.data("alt-text") ) {
				var alt_text 	 = $clicked_trigger.data("alt-text")
			}
			var current_text = $clicked_trigger.text()
			if (alt_text && default_text) {
				if ( default_text == current_text ) {
					$clicked_trigger.text(alt_text)
				}
				else {
					$clicked_trigger.text(default_text)
				}
			}
		},
	} // OpenClose
	

	//	-------------------------------
	//	Global: Animate Scrolling

	var AnimatedScrolling = {
		settings: {
			$animatables: $('.animate'),
			speed: 1200
		},
		init: function() {
			s = this.settings
			this.bind()
		},
		bind: function() {
			AnimatedScrolling.settings.$animatables.click( function() {
				// $('.animate').click( function() {
					var clicked_link = this
					if ( AnimatedScrolling.checkSamePage(clicked_link) ) {
						AnimatedScrolling.doScroll(clicked_link) 
						return false // don't jump to hash
					}
				})
			},
			checkSamePage: function(clicked_link) {
				if (location.pathname.replace(/^\//,'') == clicked_link.pathname.replace(/^\//,'') && location.hostname == clicked_link.hostname) {
					return true
				}
				else {return false}
			},
			doScroll: function(clicked_link) {
				var $target = $(clicked_link.hash)
				$target = $target.length ? $target : $('[name=' + clicked_link.hash.slice(1) +']')
				if ($target.length) {
					$('html,body').animate({
						scrollTop: $target.offset().top
					}, AnimatedScrolling.settings.speed)
				}
			}
		} // AnimatedScrolling
	
	
		var MyFeature = {
			init: function() {
				console.log('fired!')
			}
		}
	

		// -----------------------------------------
		// Run initializing functions when document is ready,
		
		// Global
		AnimatedScrolling.init()
		OpenClose.init()
		
		// Page-specific
		// Get features based on <body> tag's data-features attribute
		// based on http://viget.com/extend/javascript-execution-patterns-for-non-web-apps

		var SiteFeatures = {
			init: function() {
				var features = $('body').data('features')
				var featuresArray = []
 
				if(features) {
					featuresArray = features.split(' ')
					for(var x = 0, length = featuresArray.length; x < length; x++) {
						var func = featuresArray[x]
						func.init()
						// if(this[func] && typeof this[func].init === 'function') {
						// 	this[func].init()
						// }
					}
				}
			}
		} // Site.features
		
		//Page specific
		SiteFeatures.init()


	}); // end document.ready

