javascript: (function() {
	window.showWindowSize = window.showWindowSize || {};

	if (!window.showWindowSize.isActive) {
		window.showWindowSize.isActive = true;
		window.showWindowSize.originalTitle = document.title;
		window.showWindowSize.update = () => {document.title = `${window.innerWidth} × ${window.innerHeight}`};
		window.showWindowSize.update();
		window.addEventListener('resize', window.showWindowSize.update);
	}

	window.showWindowSize.isActive = false;
	document.title = window.showWindowSize.originalTitle;
	window.removeEventListener('resize', window.showWindowSize.update);
})();
