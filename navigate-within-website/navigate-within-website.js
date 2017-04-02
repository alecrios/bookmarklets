// Navigate Within Website
// Sets window location to the specified relative path

javascript: (function() {
	var path = window.prompt('Enter Path', '/');
	if (path !== null && path.length) {
		window.location.href = window.location.origin + path;
	}
})();
