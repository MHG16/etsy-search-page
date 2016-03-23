// Re-Create An Etsy Page - example: https://www.etsy.com/search?q=whiskey

// 1. Create your own API token by signing up as an Etsy developer
// 2. Create a function that makes an AJAX request to the Etsy API using whatever search term you'd like.
// 3. Create a data handler function to handle the data when it (asynchronously) returns from the API. Use this data to populate your webpage!
// 4. Recreate the Etsy search results page, styled as closely as possible to the actual Etsy site.
// The most important thing is the actual search results. Do the rest of the page (including header and footer styles) after you have the search results rendering to the DOM
// You should link the items to their proper Etsy product pages
// You may omit the "Top Categories" section
// No  need to make any of the form elements work.

//Surge: entertaining-industry.surge.sh
//Etsy keystring: osx7d470bi8dk1qqir1juhls
//https://api.etsy.com/v2/listings/active.js?api_key={your api key }&keywords={search term}&includes=Images,Shop`


//Want to use a loop to create the DIVs to hold items and fill
//the DIVs with image, price, etc.  

var handleData = function(data) {
	var container = $('#items');
	//need to access the results array of the returned object
	data.results.forEach(function(val, i, arr) {
		//assign newElement to a div containing 
		var titleEl = $('<h3></h3>', {'data-id': val.id}).html(val.title);
		var priceEl = $('<p></p>', {'data-id': val.id}).html(val.price);
		var urlEl = $('<a></a>', {href: val.url}).html(val.url);
		var imageEl =  $('<img>', {src: val.url}).html(val.url_170x135);
		var shopEl = $('<p></p>', {'data-id': val.id}).html(val.Shop.shop_name);
		//var newDiv = $('<div class = "holding-div"></div>'); 

		container.append(titleEl);
		container.append(priceEl);
		container.append(urlEl);
		container.append(imageEl);
		container.append(shopEl);

	})	

$('div').on('click', function(e) {
	console.log($(e.target).data());
	})

};



var settings = {

url: 'https://api.etsy.com/v2/listings/active.js?api_key=osx7d470bi8dk1qqir1juhls&keywords=starwars&includes=Images,Shop',

type: 'GET',
dataType: 'jsonp',
success: handleData,
error: function(err) {
	console.log(err);
},
complete: function() {
	console.log('I got a response');
	}
};

$.ajax(settings);
