javascript: (function() {
	let isRepeatRequest = window.location.host === 'picsum.photos';

	let previousDimensions = window.location.pathname.split('/');
	let previousWidth = isRepeatRequest ? previousDimensions[1] : null;
	let previousHeight = isRepeatRequest ? previousDimensions[2] : null;

	let defaultValue = `${previousWidth || 1920}x${previousHeight || 1080}`;

	let dimensions = window.prompt('Image dimensions', defaultValue).split('x');
	let width = Number(dimensions[0]);
	let height = Number(dimensions[1]);

	if (!Number.isInteger(width) || !Number.isInteger(height)) {
		window.alert('Invalid image dimensions');
		return;
	}

	let url = `https://picsum.photos/${width}/${height}/?random`;

	isRepeatRequest ? window.location = url : window.open(url);
})();
