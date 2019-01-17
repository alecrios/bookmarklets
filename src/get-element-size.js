javascript: (function() {
	window.getElementSize = window.getElementSize || {};

	if (typeof getElementSize.isActive === 'undefined') {
		getElementSize.isActive = false;

		getElementSize.style = document.createElement('style');
		getElementSize.style.innerText = `
			.get-element-size {
				z-index: 1000000000;
				position: absolute;
				top: 0;
				left: 0;
				opacity: 0;
				pointer-events: none;
				outline: 0 !important;
			}

			.get-element-size__overlay {
				width: 1px;
				height: 1px;
				background-color: rgba(255, 0, 0, .25);
				transform-origin: 0 0;
				transition: transform 50ms ease;
				outline: 0 !important;
			}

			.get-element-size__label {
				padding: .25rem .5rem;
				border: .125rem solid rgba(255, 255, 255, 1);
				border-radius: .25rem;
				background-color: rgba(0, 0, 0, 1);
				font-family: BlinkMacSystemFont, 'Segoe UI', sans-serif;
				color: rgba(255, 255, 255, 1);
				font-size: 1rem;
				line-height: 1.5rem;
				transform-origin: 0 0;
				outline: 0 !important;
			}
		`;
		document.head.appendChild(getElementSize.style);

		getElementSize.container = document.createElement('div');
		getElementSize.container.classList.add('get-element-size');
		document.body.appendChild(getElementSize.container);

		getElementSize.overlay = document.createElement('div');
		getElementSize.overlay.classList.add('get-element-size__overlay');
		getElementSize.container.appendChild(getElementSize.overlay);

		getElementSize.label = document.createElement('div');
		getElementSize.label.classList.add('get-element-size__label');
		getElementSize.container.appendChild(getElementSize.label);

		getElementSize.update = (event) => {
			let rect = event.target.getBoundingClientRect();

			let overlayX = window.pageXOffset + rect.left;
			let overlayY = window.pageYOffset + rect.top;
			let overlayWidth = rect.width;
			let overlayHeight = rect.height;
			getElementSize.overlay.style.transform = `
				translate(${overlayX}px, ${overlayY}px)
				scale(${overlayWidth}, ${overlayHeight})
			`;

			let labelX = window.pageXOffset + event.clientX + 8;
			let labelY = window.pageYOffset + event.clientY + 16;
			getElementSize.label.style.transform = `translate(${labelX}px, ${labelY}px)`;

			let elementWidth = Math.round(rect.width);
			let elementHeight = Math.round(rect.height);
			getElementSize.label.innerText = `${elementWidth} × ${elementHeight}`;

			getElementSize.container.style.opacity = '1';
		};
	}

	if (getElementSize.isActive) {
		getElementSize.isActive = false;
		document.removeEventListener('mousemove', getElementSize.update);
		getElementSize.container.style.opacity = '0';
		return;
	}

	getElementSize.isActive = true;
	document.addEventListener('mousemove', getElementSize.update);
}());
