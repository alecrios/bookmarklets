// Search Current Website
// Searches Google for the specified search term within the current domain

javascript: (function() {
	var site = /\/([^\s\/]+)/g.exec(window.location)[1];
	var query = encodeURIComponent(window.prompt('Enter Search Query', ''));
	if (query !== null && query.length) {
		window.open(`https://encrypted.google.com/search?q=site:${site}%20${query}`);
	}
})();
