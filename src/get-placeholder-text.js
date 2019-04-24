javascript: (function() {
	let wordCount = window.prompt('Word count', '250');

	if (wordCount === null) return;

	wordCount = Number(wordCount);

	if (!Number.isInteger(wordCount) || wordCount === 0) {
		window.alert('Invalid word count');
		return;
	}

	let wordBankSource = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget massa nec nibh pharetra tristique. Cras lectus justo, dapibus ac lobortis vitae, convallis eu lectus. Nullam sapien nibh, ultrices vel nunc fringilla, pulvinar finibus leo. Sed rutrum commodo ullamcorper. Sed vulputate urna vitae tempor aliquet. Sed vestibulum tempor placerat. Mauris at porta justo, sed bibendum erat. Etiam sed neque quis orci tincidunt euismod. Quisque elementum fermentum ante, ut vestibulum tellus luctus pharetra. Etiam nec fermentum arcu, non semper enim. Cras commodo nulla sapien, ut egestas felis scelerisque vel. Fusce porttitor consectetur semper. Nam facilisis, libero in suscipit dapibus, erat nisl luctus tellus, vulputate molestie dolor mi sed ante. Aliquam commodo mauris tincidunt tellus scelerisque, eget laoreet ipsum vulputate. Praesent interdum tortor laoreet, bibendum urna ut, aliquam tellus. Nullam sit amet sapien pretium, ultricies felis vel, tempor orci. Proin eu enim ac velit egestas viverra iaculis ac neque. Ut sit amet lobortis nulla. Etiam convallis, nibh in tempus consequat, ipsum nisi rutrum ligula, vitae viverra purus tellus eu nisi. Quisque consequat gravida posuere. Duis aliquam libero sit amet varius posuere. Morbi a iaculis orci. Nunc nulla leo, vestibulum vel mattis in, venenatis et enim. Maecenas bibendum odio vitae rhoncus ultricies. Curabitur maximus rhoncus massa non tempor. Pellentesque suscipit lacinia ligula nec cursus. Suspendisse ut euismod mauris. Cras at porta enim. Ut finibus sagittis nulla ut gravida. Pellentesque molestie nec diam at tincidunt. Nunc placerat dictum justo feugiat bibendum. In in rutrum augue. Sed porta eget felis ac ullamcorper. Vestibulum et massa at lacus condimentum fringilla sed vel nunc. Ut quis rhoncus velit. Phasellus at ligula eleifend arcu convallis gravida nec ut est. Phasellus eget convallis augue. Aenean tempus, tellus quis sodales tempus, nulla nisi pharetra nibh, ut luctus orci sem vitae ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ac sapien a nisi tincidunt semper. Vestibulum sed consequat augue. Quisque nec facilisis metus. Quisque tincidunt enim a sagittis consectetur. In hac habitasse platea dictumst. Aliquam vulputate enim eu tempus mattis. Pellentesque justo purus, gravida eget bibendum id, lobortis eu neque.';

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
