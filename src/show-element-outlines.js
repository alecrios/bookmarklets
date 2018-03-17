// Show Element Outlines
// Toggles the visibility of an outline around all elements for debugging layout issues

javascript: (function() {
	var id = 'show-element-outlines';
	var style = document.getElementById(id);
	if (style === null) {
		style = document.createElement('style');
		style.setAttribute('id', id);
		style.innerHTML = '* {outline: 1px solid red !important;}';
		document.head.appendChild(style);
	} else {
		document.head.removeChild(style);
	}
})();