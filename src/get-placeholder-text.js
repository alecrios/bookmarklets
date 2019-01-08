javascript: (function() {
	let wordCount = Number(window.prompt('Word count', '250'));

	if (!Number.isInteger(wordCount) || wordCount === 0) {
		window.alert('Invalid word count');
		return;
	}

	let wordBankSource = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius enim quis nulla mattis, id cursus lectus eleifend. Ut eu pulvinar augue. Donec nulla est, dapibus vulputate placerat eu, tempus eget erat. Nam commodo eu erat iaculis commodo. Sed ultrices sapien vitae neque scelerisque, sit amet feugiat ipsum tristique. Vestibulum et ornare lorem. Phasellus lacinia pellentesque augue. In consequat libero magna, in placerat nibh semper a. Donec rutrum nibh ante, non feugiat enim dapibus efficitur. Quisque hendrerit, massa ac posuere iaculis, odio metus dictum tellus, vel semper mauris nunc eget urna.';

	let wordBank = wordBankSource.split(' ');
	let result = '';
	let offset = Math.floor(Math.random() * wordBank.length);

	for (let index = 0; index < wordCount; index++) {
		if (offset >= wordBank.length) {
			offset = 0;
		}

		if (index === 0) {
			result += wordBank[offset].charAt(0).toUpperCase() + wordBank[offset].slice(1) + ' ';
		} else {
			result += wordBank[offset] + ' ';
		}

		offset++;
	}

	result = result.slice(0, -1);

	if (result.slice(-1) == ',') {
		result = result.slice(0, -1) + '.';
	} else if (result.slice(-1) != '.') {
		result = result + '.';
	}

	window.prompt(`${wordCount} words`, result);
})();
