// Show Element Outlines
// Toggles visibility of a red outline around all elements

javascript: (function() {
	var id = 'show-element-outlines';
	var style = document.getElementById(id);
	if (style === null) {
		style = document.createElement('style');
		style.setAttribute('id', id);
		style.innerHTML = '* {outline: 1px solid red;}';
		document.head.appendChild(style);
	} else {
		document.head.removeChild(style);
	}
})();
