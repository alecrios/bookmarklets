javascript: (function() {
	let isRepeatRequest = window.location.host === 'picsum.photos';

	let splitPathName = window.location.pathname.split('/');
	let previousDimensions = splitPathName.slice(splitPathName.length - 2, splitPathName.length);
	let previousWidth = isRepeatRequest ? previousDimensions[0] : null;
	let previousHeight = isRepeatRequest ? previousDimensions[1] : null;

	let defaultValue = `${previousWidth || 1920}x${previousHeight || 1080}`;

	let dimensions = window.prompt('Image dimensions', defaultValue);

	if (dimensions === null) return;

	dimensions = dimensions.split('x');
	let width = Number(dimensions[0]);
	let height = Number(dimensions[1]);

	if (!Number.isInteger(width) || !Number.isInteger(height)) {
		window.alert('Invalid image dimensions');
		return;
	}

	let url = `https://picsum.photos/${width}/${height}`;

	isRepeatRequest ? window.location = url : window.open(url);
})();
