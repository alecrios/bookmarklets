javascript: (function() {
	window.showElementOutlines = window.showElementOutlines || {};

	if (typeof showElementOutlines.isActive === 'undefined') {
		showElementOutlines.isActive = false;
		showElementOutlines.style = document.createElement('style');
		showElementOutlines.style.innerHTML = '*:not(#element-overlay) {outline: 1px solid rgba(255,0,0,.8) !important;}';
		showElementOutlines.overlay = document.createElement('div');
		showElementOutlines.overlay.setAttribute('id', 'element-overlay');
		showElementOutlines.overlay.style.backgroundColor = 'rgba(255,0,0,.2)';
		showElementOutlines.overlay.style.zIndex = '100000000';
		showElementOutlines.overlay.style.position = 'absolute';
		showElementOutlines.overlay.style.top = '0';
		showElementOutlines.overlay.style.left = '0';
		showElementOutlines.overlay.style.width = '1px';
		showElementOutlines.overlay.style.height = '1px';
		showElementOutlines.overlay.style.transformOrigin = '0 0';
		showElementOutlines.overlay.style.pointerEvents = 'none';
		showElementOutlines.overlay.style.opacity = '0';
		showElementOutlines.updateOverlay = (event) => {
			if (!event.metaKey) {
				showElementOutlines.overlay.style.opacity = '0';
				showElementOutlines.overlay.style.transform = '';
				return;
			};

			let rect = event.target.getBoundingClientRect();
			showElementOutlines.overlay.style.transform = `translateX(${rect.left}px) translateY(${rect.top}px) scaleX(${rect.width}) scaleY(${rect.height})`;
			showElementOutlines.overlay.style.opacity = '1';
		}
	}

	if (showElementOutlines.isActive) {
		showElementOutlines.isActive = false;
		document.head.removeChild(showElementOutlines.style);
		document.body.removeChild(showElementOutlines.overlay);
		document.removeEventListener('mousemove', showElementOutlines.updateOverlay);
		return;
	}

	showElementOutlines.isActive = true;
	document.head.appendChild(showElementOutlines.style);
	document.body.appendChild(showElementOutlines.overlay);
	document.addEventListener('mousemove', showElementOutlines.updateOverlay);

})();
