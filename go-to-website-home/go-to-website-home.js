// Go to Website Home
// Sets window location to the homepage of the current website

javascript: (function() {
	var url = window.location.href;
	window.location = url.substring(0, url.split('/', 3).join('/').length);
})();
