var J = jQuery.noConflict();
module( "Page Header", {
  setup: function() {
  	J('.container header').remove();
	testUserData =
	{
		"user":
		{
			"name":"User Name",
			"org":"User Org"
		}
	} // end testData{}
	var page_header = _.template( _pageHeader, testUserData.user );
	J('.container').prepend(page_header);
  }, // end setup()
  teardown: function() {
	J('.container header').remove();
	var page_header = _.template( _pageHeader, data.user );
	J('.container').prepend( page_header );
  } // end teardown()
});

test( "The page header should", function() {
	equal( J('.container header').length, 1, "have exactly one .container header" );
	equal( J('.container header').attr('id'), 'page_header', "have an header id name 'page_header'");
	equal( J('.container header:contains("' + testUserData.user.name + '")').length, 1, "display the user name once");
	equal( J('.container header:contains("' + testUserData.user.org +'")').length, 1, "display the user org once");
});

module( "Items", {
  setup: function() {
  	J('.item_group').remove();
	testItemData =
	{
		"items" :
		{
			"name":"ItemName",
			"access":true,
			"list":
			[
				{
					"hello":''
				}
			]
		},
		"grades" :
		[
			{
				"name":"fail",
				"value":0
			},
			{
				"name":"pass",
				"value":1
			}
		]
	} // end testData{}
	J('.item_group').remove();
	var itemList = _.template( _items, { items : testItemData.items, grades : testItemData.grades } );
	J('.container').append( itemList );
  }, // end setup()
  teardown: function() {
	// J('.item_group').remove();
	// var item_list = _.template( _itemList, { data.items, data.grades } );
	// J('.container').append( item_list );
  } // end teardown()
});

test( "content area should", function(){
	
	equal( J('h3:contains("' + testItemData.items.name + '")').length, 1, "have one h3 with the list name");
	var checkboxToEvaluate = J('input[type="checkbox"]#' + testItemData.items.name + '_enrolled');
	equal( checkboxToEvaluate.length, 1, "have one checkbox with the correct id");
	equal( J(checkboxToEvaluate).attr('checked'), 'checked', "be checked if data.access is true" );
});

test( "list should", function(){
	equal( J('.item').length, testItemData.items.list.length, "have the same number of .item class as items in data");
});