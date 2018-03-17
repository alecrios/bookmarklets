javascript: (function() {
	window.showElementOutlines = window.showElementOutlines || {};
	if (!window.showElementOutlines.isActive) {
		window.showElementOutlines.isActive = true;
		window.showElementOutlines.style = document.createElement('style');
		window.showElementOutlines.style.innerHTML = '* {outline: 1px solid red !important;}';
		document.head.appendChild(window.showElementOutlines.style);
	} else {
		window.showElementOutlines.isActive = false;
		document.head.removeChild(window.showElementOutlines.style);
	}
})();
