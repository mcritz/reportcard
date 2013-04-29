requirejs.config({
    // enforceDefine: true,
    paths: {
        underscore:
        [
        	'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
        	'libs/underscore-min'
    	]
    	, bootstrap:
    	[
    		'http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap.min',
    		'libs/bootstrap.min'
    	]
    }
});

require(["jquery", "underscore", "bootstrap", "data", "pageHeader", "items"], function($) {
	var J = jQuery.noConflict();
	
	var page_header = _.template( _pageHeader, data.user );
	J('.container').prepend(page_header);
	
	var items = _.template( _items, {items : data.items, grades: data.grades} );
	J('.container').append(items);
})
