javascript: (function() {
	window.showKeyCode = window.showKeyCode || {};
	if (!window.showKeyCode.isActive) {
		window.showKeyCode.isActive = true;
		window.showKeyCode.originalTitle = document.title;
		window.showKeyCode.update = (event) => {document.title = `${event.keyCode} ("${event.key}")`};
		document.title = 'Ready for key input...';
		window.addEventListener('keyup', window.showKeyCode.update);
	} else {
		window.showKeyCode.isActive = false;
		document.title = window.showKeyCode.originalTitle;
		window.removeEventListener('keyup', window.showKeyCode.update);
	}
})();
