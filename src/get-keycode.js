javascript: (function() {
	document.addEventListener('keyup', function(event) {
		console.log(`${event.key} (${event.which})`);
	});
})();
