/* 1. GRAB THE SEARCH DATA (we did this already) */


var UI = {};


UI.handleEnterPress = function() {
	document.querySelector(".js-search").addEventListener('keypress', function( e ) {
		if ( e.which === 13 ) {
			var inputValue = e.target.value;
			SoundCloudAPI.getTrack(inputValue);
			
		}
	});
}

UI.handleSubmitClick = function() {
	document.querySelector(".js-submit").addEventListener('click', function( e ) {
		var inputValue = document.querySelector(".js-search").value;
		SoundCloudAPI.getTrack(inputValue);
	});
} 

// // set up the search
UI.handleEnterPress();
UI.handleSubmitClick();



/* 2. SEARCH THE SOUNDCLOUD API WITH HARDCODED SEARCH  */
var SoundCloudAPI = {};

SoundCloudAPI.init = function() {
	SC.initialize({
		client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
	});

} 	

// set up soundcloud API
SoundCloudAPI.init();


//Search - https://developers.soundcloud.com/docs/api/guide#search

SoundCloudAPI.getTrack = function(inputValue) {
	return SC.get('/tracks/', {
		q: inputValue
	}).then(function(tracks) {
  		//console.log(tracks);
  		SoundCloudAPI.renderTracks(tracks);


	});
}

SoundCloudAPI.getTrack("Rilo Kiley")


/* 3. Display the Cards*/


SoundCloudAPI.renderTracks = function(tracks) {

	tracks.forEach(function(track){

		//console.log(track);
		var searchResults = document.querySelector(".js-search-results");

		// card
		var card = document.createElement('div');
		card.classList.add("card");

		// image
		var imageDiv = document.createElement('div');
		imageDiv.classList.add('image');

		var image_img = document.createElement('img');
		image_img.classList.add('image_img');
		image_img.src = track.artwork_url || 'http://lorempixel.com/100/100/abstract/';

		imageDiv.appendChild(image_img);

		//content
		var content = document.createElement('div');
		content.classList.add('content');

		var header = document.createElement('div');
		header.classList.add('header');
		header.innerHTML = '<a href="' + track.permalink_url + '" target="_blank">' + track.title + '</a>'
		
		content.appendChild(header);

		//button
		var button = document.createElement('button');
		button.classList.add('ui', 'button', 'bottom', 'attached', 'js-button');
		
		//icon
		var icon = document.createElement('i');
		icon.classList.add('add', 'icon');
		

		var buttonText = document.createElement('span');
		buttonText.innerHTML = 'Add to Playlist';

		//appenChild
		button.appendChild(icon);
		button.appendChild(buttonText);

		button.addEventListener('click', function(){
			SoundCloudAPI.getEmbed(track.permalink_url);
		})
		

		card.appendChild(imageDiv);
		card.appendChild(content);
		card.appendChild(button);
		
		searchResults.appendChild(card);
	})


}

//SoundCloudAPI.renderTracks();


/* 4. Add to Playlist */

SoundCloudAPI.getEmbed = function(trackURL) {
	SC.oEmbed(trackURL, {
	  auto_play: true
	}).then(function(embed){
	  //console.log('oEmbed response: ', embed);

	  var sideBar = document.querySelector('.js-playlist');

	  var box = document.createElement('div');
	  box.innerHTML = embed.html;

	  sideBar.insertBefore(box, sideBar.firstChild);

	  localStorage.setItem("key", sideBar.innerHTML);
	});
}

var sideBar = document.querySelector('.js-playlist');
sideBar.innerHTML = localStorage.getItem("key");
