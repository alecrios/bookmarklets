// Get Keycode
// Console logs the keycodes of pressed keys

javascript: (function() {
	document.addEventListener('keyup', function(event) {
		console.log(`${event.key} (${event.which})`);
	});
})();
