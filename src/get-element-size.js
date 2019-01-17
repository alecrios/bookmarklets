javascript: (function() {
	window.getElementSize = window.getElementSize || {};

	if (typeof getElementSize.isActive === 'undefined') {
		getElementSize.isActive = false;

		getElementSize.style = document.createElement('style');
		getElementSize.style.innerText = `
			.get-element-size {
				display: none;
				pointer-events: none;
				z-index: 1000000000;
				position: absolute;
				top: 0;
				left: 0;
				outline: 0 !important;
			}

			.get-element-size__overlay {
				background-color: rgba(255, 0, 0, .25);
				width: 1px;
				height: 1px;
				outline: 0 !important;
				transform-origin: 0 0;
				transition: transform 50ms ease;
			}

			.get-element-size__label {
				background-color: rgba(0, 0, 0, 1);
				color: rgba(255, 255, 255, 1);
				padding: .25rem .5rem;
				border-radius: .25rem;
				border: .125rem solid rgba(255, 255, 255, 1);
				font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
				font-size: 1rem;
				line-height: 1.5rem;
				outline: 0 !important;
				transform-origin: 0 0;
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

			getElementSize.overlay.style.transform = `translate(${window.pageXOffset + rect.left}px, ${window.pageYOffset + rect.top}px) scale(${rect.width}, ${rect.height})`;

			getElementSize.label.innerText = `${Math.round(rect.width)} × ${Math.round(rect.height)}`;
			getElementSize.label.style.transform = `translate(${window.pageXOffset + event.clientX + 8}px, ${window.pageYOffset + event.clientY + 16}px)`;
		};
	}

	if (getElementSize.isActive) {
		getElementSize.isActive = false;
		getElementSize.container.style.display = 'none';
		document.removeEventListener('mousemove', getElementSize.update);
		return;
	}

	getElementSize.isActive = true;
	getElementSize.container.style.display = 'block';
	document.addEventListener('mousemove', getElementSize.update);
}());
