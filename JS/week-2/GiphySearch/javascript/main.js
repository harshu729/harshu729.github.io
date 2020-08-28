/*Grab the input value*/

var word = "";

document.querySelector(".js-go").addEventListener('click', function(e){
	var input = document.querySelector("input").value;
	word = input.split(" ",2);
	pushToDOM(word);
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
	
	var input = document.querySelector("input").value;
	
	//if the key is pressed...
	if(e.which === 13) {
		pushToDOM(input);
	}

})


/*Do the data stuff with the API*/
alert(word);
var url = "https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();


GiphyAJAXCall.addEventListener('load', function(e) {

	var data = e.target.response;
	pushToDOM(data);

});



/*Show me the GIFs*/


function pushToDOM(input) {

	var response = JSON.parse(input);

	var imageUrls = response.data;
	
	imageUrls.forEach(function(image){
		var src = image.images.fixed_height.url;

		console.log(src);
		var container = document.querySelector(".js-container");
		container.innerHTML += "<img src=" + src + ">"; 

	});


}