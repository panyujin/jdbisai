// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap/alert
//= require bootstrap/dropdown
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){
// invoke the carousel
    $('#myCarousel').carousel({
      interval:6000
    });

// scroll slides on mouse scroll
$('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');


        }
        else{
            $(this).carousel('next');

        }
    });

//scroll slides on swipe for touch enabled devices

 	$("#myCarousel").on("touchstart", function(event){

        var yClick = event.originalEvent.touches[0].pageY;
    	$(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});

});
//animated  carousel start
$(document).ready(function(){

//to add  start animation on load for first slide
$(function(){
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});
			 $('.item1.active img').animateCss('slideInDown');
			 $('.item1.active h2').animateCss('zoomIn');
			 $('.item1.active p').animateCss('fadeIn');

});

//to start animation on  mousescroll , click and swipe



     $("#myCarousel").on('slide.bs.carousel', function () {
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});

// add animation type  from animate.css on the element which you want to animate

		$('.item1 img').animateCss('slideInDown');
		$('.item1 h2').animateCss('zoomIn');
		$('.item1 p').animateCss('fadeIn');

		$('.item2 img').animateCss('zoomIn');
		$('.item2 h2').animateCss('swing');
		$('.item2 p').animateCss('fadeIn');

		$('.item3 img').animateCss('fadeInLeft');
		$('.item3 h2').animateCss('fadeInDown');
		$('.item3 p').animateCss('fadeIn');
    });
});

(function ($) {

    $.fn.flexisel = function (options) {

        var defaults = $.extend({
    		visibleItems: 4,
    		animationSpeed: 200,
    		autoPlay: false,
    		autoPlaySpeed: 3000,
    		pauseOnHover: true,
			setMaxWidthAndHeight: false,
    		enableResponsiveBreakpoints: false,
    		responsiveBreakpoints: {
	    		portrait: {
	    			changePoint:480,
	    			visibleItems: 1
	    		},
	    		landscape: {
	    			changePoint:640,
	    			visibleItems: 2
	    		},
	    		tablet: {
	    			changePoint:768,
	    			visibleItems: 3
	    		}
        	}
        }, options);

		/******************************
		Private Variables
		*******************************/

        var object = $(this);
		var settings = $.extend(defaults, options);
		var itemsWidth; // Declare the global width of each item in carousel
		var canNavigate = true;
        var itemsVisible = settings.visibleItems;

		/******************************
		Public Methods
		*******************************/

        var methods = {

			init: function() {

        		return this.each(function () {
        			methods.appendHTML();
        			methods.setEventHandlers();
        			methods.initializeItems();
				});
			},

			/******************************
			Initialize Items
			*******************************/

			initializeItems: function() {

				var listParent = object.parent();
				var innerHeight = listParent.height();
				var childSet = object.children();

    			var innerWidth = listParent.width(); // Set widths
    			itemsWidth = (innerWidth)/itemsVisible;
    			childSet.width(itemsWidth);
    			childSet.last().insertBefore(childSet.first());
    			childSet.last().insertBefore(childSet.first());
    			object.css({'left' : -itemsWidth});

    			object.fadeIn();
				$(window).trigger("resize"); // needed to position arrows correctly

			},


			/******************************
			Append HTML
			*******************************/

			appendHTML: function() {

   			 	object.addClass("nbs-flexisel-ul");
   			 	object.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>");
   			 	object.find("li").addClass("nbs-flexisel-item");

   			 	if(settings.setMaxWidthAndHeight) {
	   			 	var baseWidth = $(".nbs-flexisel-item > img").width();
	   			 	var baseHeight = $(".nbs-flexisel-item > img").height();
	   			 	$(".nbs-flexisel-item > img").css("max-width", baseWidth);
	   			 	$(".nbs-flexisel-item > img").css("max-height", baseHeight);
   			 	}

   			 	$("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").insertAfter(object);
   			 	var cloneContent = object.children().clone();
   			 	object.append(cloneContent);
			},


			/******************************
			Set Event Handlers
			*******************************/
			setEventHandlers: function() {

				var listParent = object.parent();
				var childSet = object.children();
				var leftArrow = listParent.find($(".nbs-flexisel-nav-left"));
				var rightArrow = listParent.find($(".nbs-flexisel-nav-right"));

				$(window).on("resize", function(event){

					methods.setResponsiveEvents();

					var innerWidth = $(listParent).width();
					var innerHeight = $(listParent).height();

					itemsWidth = (innerWidth)/itemsVisible;

					childSet.width(itemsWidth);
					object.css({'left' : -itemsWidth});

					var halfArrowHeight = (leftArrow.height())/2;
					var arrowMargin = (innerHeight/2) - halfArrowHeight;
					leftArrow.css("top", arrowMargin + "px");
					rightArrow.css("top", arrowMargin + "px");

				});

				$(leftArrow).on("click", function (event) {
					methods.scrollLeft();
				});

				$(rightArrow).on("click", function (event) {
					methods.scrollRight();
				});

				if(settings.pauseOnHover == true) {
					$(".nbs-flexisel-item").on({
						mouseenter: function () {
							canNavigate = false;
						},
						mouseleave: function () {
							canNavigate = true;
						}
					 });
				}

				if(settings.autoPlay == true) {

					setInterval(function () {
						if(canNavigate == true)
							methods.scrollRight();
					}, settings.autoPlaySpeed);
				}

			},

			/******************************
			Set Responsive Events
			*******************************/

			setResponsiveEvents: function() {
				var contentWidth = $('html').width();

				if(settings.enableResponsiveBreakpoints == true) {
					if(contentWidth < settings.responsiveBreakpoints.portrait.changePoint) {
						itemsVisible = settings.responsiveBreakpoints.portrait.visibleItems;
					}
					else if(contentWidth > settings.responsiveBreakpoints.portrait.changePoint && contentWidth < settings.responsiveBreakpoints.landscape.changePoint) {
						itemsVisible = settings.responsiveBreakpoints.landscape.visibleItems;
					}
					else if(contentWidth > settings.responsiveBreakpoints.landscape.changePoint && contentWidth < settings.responsiveBreakpoints.tablet.changePoint) {
						itemsVisible = settings.responsiveBreakpoints.tablet.visibleItems;
					}
					else {
						itemsVisible = settings.visibleItems;
					}
				}
			},

			/******************************
			Scroll Left
			*******************************/

			scrollLeft:function() {

				if(canNavigate == true) {
					canNavigate = false;

					var listParent = object.parent();
					var innerWidth = listParent.width();

					itemsWidth = (innerWidth)/itemsVisible;

					var childSet = object.children();

					object.animate({
							'left' : "+=" + itemsWidth
						},
						{
							queue:false,
							duration:settings.animationSpeed,
							easing: "linear",
							complete: function() {
								childSet.last().insertBefore(childSet.first()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)
								methods.adjustScroll();
								canNavigate = true;
							}
						}
					);
				}
			},

			/******************************
			Scroll Right
			*******************************/

			scrollRight:function() {

				if(canNavigate == true) {
					canNavigate = false;

					var listParent = object.parent();
					var innerWidth = listParent.width();

					itemsWidth = (innerWidth)/itemsVisible;

					var childSet = object.children();

					object.animate({
							'left' : "-=" + itemsWidth
						},
						{
							queue:false,
							duration:settings.animationSpeed,
							easing: "linear",
							complete: function() {
								childSet.first().insertAfter(childSet.last()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)
								methods.adjustScroll();
								canNavigate = true;
							}
						}
					);
				}
			},

			/******************************
			Adjust Scroll
			*******************************/

			adjustScroll: function() {

				var listParent = object.parent();
				var childSet = object.children();

				var innerWidth = listParent.width();
				itemsWidth = (innerWidth)/itemsVisible;
				childSet.width(itemsWidth);
				object.css({'left' : -itemsWidth});
			}

        };

        if (methods[options]) { 	// $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) { 	// $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);
        } else {
            $.error( 'Method "' +  method + '" does not exist in flexisel plugin!');
        }
};

})(jQuery);
