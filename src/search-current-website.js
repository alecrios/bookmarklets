javascript: (function() {
	var query = window.prompt('Enter Search Query', '');
	if (query !== null && query.length) {
		window.open('https://encrypted.google.com/search?q=site:' + window.location.origin + '%20' + encodeURIComponent(query));
	}
})();
