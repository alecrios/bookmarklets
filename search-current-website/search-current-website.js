// Search Current Website
// Searches Google for the specified search term within the current domain

javascript: (function() {
	var query = encodeURIComponent(window.prompt('Enter Search Query', ''));
	if (query !== null && query.length) {
		window.open(`https://encrypted.google.com/search?q=site:${window.location.origin}%20${query}`);
	}
})();
