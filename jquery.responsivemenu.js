(function( $ ){

    $.fn.responsiveMenu = function(){
	
    	var ul = this;
	var menu = $('<select id="'+ul.attr('id')+'_responsive" />');
    
	    var list = ul.children('li');

	    // $('<option />', {
		   //  'value' : '',
		   //  'text'  : 'Go to ...'
		   //  }).appendTo(menu);
	    
	    list.each(function(){
		
		var el = $(this).children('a');
		

		$('<option />', {
		    'value' : el.attr('href'),
		    'text'  : el.text()
		    }).appendTo(menu);
		
		if($(this).children('ul').length > 0)
		{
		    var group = $('<optgroup />', {
			'label' : $(this).children('ul > li > a').text() 
			});
		    var subelems = $(this).children('ul').children('li');
		    
		    subelems.each(function(){
			
			    var a = $(this).children('a');
			    $('<option />', {
			    'value' : a.attr('href'),
			    'text'  : a.text()
			    }).appendTo(group);
			
			});
		    group.appendTo(menu);
		}		
		menu.insertAfter(ul);
		});
	    
	$('#'+ul.attr('id')+'_responsive').live('change', function(){
		window.location = $(this).find("option:selected").val();
	    });
    };
})( jQuery );