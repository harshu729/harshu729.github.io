/*Grab the input value*/

document.querySelector(".js-go").addEventListener('click', function(e){
	var input = document.querySelector("input").value;
	var word = input.split(" ",2);
	search(word);
});


function search(word){

	/*Do the data stuff with the API*/

	var container = document.querySelector(".js-container");
	container.innerHTML = " "; 

	
	var url = "https://api.giphy.com/v1/gifs/search?q=" + word[0] + "+" + word[1] + "&api_key=dc6zaTOxFJmzC";

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
		var container = document.querySelector(".js-container");
		
		imageUrls.forEach(function(image){
			var src = image.images.fixed_height.url;

			console.log(src);
			
			container.innerHTML += "<img src=" + src + ">"; 

		});


	}
}