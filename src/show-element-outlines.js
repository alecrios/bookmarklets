javascript: (function() {
	window.showElementOutlines = window.showElementOutlines || {};

	if (typeof showElementOutlines.isActive === 'undefined') {
		showElementOutlines.isActive = false;
		showElementOutlines.style = document.createElement('style');
		showElementOutlines.style.innerHTML = '* {outline: 1px solid red !important}';
	}

	if (showElementOutlines.isActive) {
		showElementOutlines.isActive = false;
		document.head.removeChild(showElementOutlines.style);
		return;
	}

	showElementOutlines.isActive = true;
	document.head.appendChild(showElementOutlines.style);
})();
