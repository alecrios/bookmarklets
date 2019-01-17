javascript: (function() {
	function getSelectedNode() {
		if (window.getSelection().focusNode === null) return null;

		return window.getSelection().focusNode.parentNode;
	}

	function getNodeFontStack(node) {
		return window.getComputedStyle(node).fontFamily;
	}

	function getFirstAvailableFont(fonts) {
		for (let font of fonts) {
			let fontName = font.trim().replace(/"/g, '');
			let isAvailable = document.fonts.check(`16px ${fontName}`);

			if (!isAvailable) continue;

			return fontName;
		}
	}

	let node = getSelectedNode();

	if (!node) {
		window.alert('Please select a string of text and try again.');
		return;
	}

	let fonts = getNodeFontStack(node).split(',');
	let firstAvailableFont = getFirstAvailableFont(fonts);

	window.alert(`Font: ${firstAvailableFont}`);
}());
