document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed")
	var list = document.querySelectorAll("img")
	console.log(list.length)
	for(var i = 0; i < list.length; i++) {
		// set the src = ourdomain/link-to-image
		list[i].src = 'http://cdn-s3.si.com/s3fs-public/[current-date:custom:Y]/[current-date:custom:m]/[current-date:custom:d]/best-crying-jordan-memes.jpg'
		//list[i].src = 'http://quikpic.net/' + list[i].src
	}
 })