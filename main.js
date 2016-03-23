// Re-Create An Etsy Page - example: https://www.etsy.com/search?q=whiskey

// 1. Create your own API token by signing up as an Etsy developer
// 2. Create a function that makes an AJAX request to the Etsy API using whatever search term you'd like.
// 3. Create a data handler function to handle the data when it (asynchronously) returns from the API. Use this data to populate your webpage!
// 4. Recreate the Etsy search results page, styled as closely as possible to the actual Etsy site.
// The most important thing is the actual search results. Do the rest of the page (including header and footer styles) after you have the search results rendering to the DOM
// You should link the items to their proper Etsy product pages
// You may omit the "Top Categories" section
// No  need to make any of the form elements work.


//Etsy keystring: osx7d470bi8dk1qqir1juhls
//https://api.etsy.com/v2/listings/active.js?api_key={your api key }&keywords={search term}&includes=Images,Shop`




var handleData = function(data) {


	var container = $('#items');
	//need to access the results array of the returned object
	data.results.forEach(function(val, i, arr) {

		//first create a DIV for each item that will contain the image, price, etc.  
		var boxDIV = $('<div></div>');

		//each of the elements that we want to add to the DIV:
		var imageEl =  $('<img />', {src: val.Images[0].url_170x135});
		var titleEl = $('<p class="title"></p>', {'data-id': val.id}).html(val.title);
		var priceEl = $('<p class="price"></p>', {'data-id': val.id}).html('$'+ val.price+' USD');
		var linkEl = $('<a></a>', {href: val.url});
		var shopEl = $('<p class="shop"></p>', {'data-id': val.id}).html(val.Shop.shop_name);
		

		//for images to have links, append the imageEl to the linkEl 
		linkEl.append(imageEl);

		//append each item we need to add to the DIV:
		boxDIV.append(linkEl);
		boxDIV.append(titleEl);
		boxDIV.append(shopEl);
		boxDIV.append(priceEl);

		//append the DIV to the container
		container.append(boxDIV);
		 
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
