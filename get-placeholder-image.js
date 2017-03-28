// Get Placeholder Image
// Generates a placeholder image with custom dimensions via https://unsplash.it/

javascript: (function() {
	var size = window.prompt('Enter Image Size', '1920x1080');
	if (size !== null && size.length) {
		size = size.toLowerCase().replace(/\s+/g, '').split('x', 2);
		window.open(`https://unsplash.it/${size[0]}/${size[1]}/?random`);
	}
})();
