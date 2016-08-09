/**
 * gmoblieMenu v1.1.0 - Animated Responsive Mobile Menu Plugin
 * Copyright 2016, Gaurav Sirauthiya
 * Released under the MIT license - http://opensource.org/licenses/MIT
*/

(function($) { 
	$.fn.gForms = function( options ) {
		var el = $(this);
		var settings = $.extend({ 
			themeColor	: 'inherit',
			parent : false,			
        }, options);
		
		var target = el.find('input');
		target.addClass('gForms');
		if(parent){
			target.closest(''+settings.parent+'').addClass('gform-container');
		}else {
			target.parent().addClass('gform-container');
		}
		
		
		/*  $('.gform-container').append('<span class="hr"></span>');
		 if(!el.find('label').length){
			$(''+settings.parent+'').prepend('<label>'+target.attr('placeholder')+'</label>');
			target.attr('placeholder','');
		 } */
		 
		el.find('label').addClass('gform-label');
		/* input type focus state */
		$(target).on('focus',function(){ 
		var container = $(this).closest('.gform-container'); 
		container.addClass('focused');
		container.siblings('.gform-container').each(function(){
			var $value = $(this).find('input').val();
			
			if($value == '' || $value ==' '){
				$(this).removeClass('focused');
			}
			else{
				$(this).addClass('focused');
			}
		});
			 

	});
	/* input blur state */
	 $(target).on('blur',function(){ 		 
		var container = $(this).closest('.gform-container');
		if($(this).val()=='')
		{
			container.removeClass('focused');
		} 
		 
		if(container.siblings('.gform-container').find('.input').val()==''){ 
			container.siblings('.gform-container').removeClass('focused');
		}
	}); 
	
	
	var appendCss = $("<style>")
	.prop("type", "text/css")
	.html("\
	.gform-container .hr {\
		 background: "+settings.themeColor+";\
		 }\
		 .focused label{\
			color:"+settings.themeColor+";\
		 }\
		 ").appendTo("head"); 
	return appendCss; 
	
	
	

	} 
}(jQuery));
