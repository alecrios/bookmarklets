javascript: (function() {
	var wordCount = window.prompt('Enter Word Count', '250');
	if (wordCount !== null && wordCount.length) {
		wordCount = parseInt(wordCount.trim());
		var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius enim quis nulla mattis, id cursus lectus eleifend. Ut eu pulvinar augue. Donec nulla est, dapibus vulputate placerat eu, tempus eget erat. Nam commodo eu erat iaculis commodo. Sed ultrices sapien vitae neque scelerisque, sit amet feugiat ipsum tristique. Vestibulum et ornare lorem. Phasellus lacinia pellentesque augue. In consequat libero magna, in placerat nibh semper a. Donec rutrum nibh ante, non feugiat enim dapibus efficitur. Quisque hendrerit, massa ac posuere iaculis, odio metus dictum tellus, vel semper mauris nunc eget urna.';
		var lorem = lorem.split(' ');
		var result = '';
		var j = Math.floor(Math.random() * lorem.length);
		for (var i = 0; i < wordCount; i++) {
			if (j >= lorem.length) {
				j = 0;
			}
			if (i == 0) {
				result += lorem[j].charAt(0).toUpperCase() + lorem[j].slice(1) + ' ';
			} else {
				result += lorem[j] + ' ';
			}
			j++;
		}
		result = result.slice(0, -1);
		if (result.slice(-1) == ',') {
			result = result.slice(0, -1) + '.';
		} else if (result.slice(-1) != '.') {
			result = result + '.';
		}
		var newDocument = window.open().document;
		newDocument.title = wordCount + ' words';
		style = document.createElement('style');
		style.innerHTML = `
			body {
				margin: 0;
				padding: 32px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			#text {
				font-family: sans-serif;
				font-size: 16px;
				line-height: 24px;
				max-width: 512px;
			}
		`;
		var textDiv = document.createElement('div');
		textDiv.setAttribute('id', 'text');
		textDiv.innerHTML = result;
		newDocument.head.appendChild(style);
		newDocument.body.appendChild(textDiv);
	}
})();
