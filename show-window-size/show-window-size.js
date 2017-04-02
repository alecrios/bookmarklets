// Show Window Size
// Toggles the visibility of a window size indicator

javascript: (function() {
	var bcId = 'bookmarklet-container';
	var bc = document.getElementById(bcId);
	var swsId = 'bookmarklet-show-window-size';
	var sws = document.getElementById(swsId);
	if (bc !== null && sws !== null) {
		bc.removeChild(sws);
		if (bc.childNodes.length === 0) {
			document.body.removeChild(bc);
		}
	} else {
		if (bc === null) {
			var bc = document.createElement('div');
			bc.setAttribute('id', bcId);
			var style = document.querySelector('style');
			if (style === null) {
				style = document.createElement('style');
				document.head.appendChild(style);
			}
			style.innerHTML = style.innerHTML + `
				#${bcId} {
					position: fixed;
					top: 0;
					left: 0;
					z-index: 9999;
					padding: 8px;
				}
				#${bcId} > div {
					margin-bottom: 8px;
					padding: 6px 8px;
					background-color: #000;
					color: #fff;
					font-family: Helvetica, sans-serif;
					font-size: 12px;
					line-height: 12px;
					letter-spacing: 1px;
				}
			`;
			document.body.appendChild(bc);
		}
		var sws = document.createElement('div');
		sws.setAttribute('id', swsId);
		sws.innerHTML = window.innerWidth + ' &times; ' + window.innerHeight;
		window.onresize = function() {
			sws.innerHTML = window.innerWidth + ' &times; ' + window.innerHeight;
		};
		bc.appendChild(sws);
	}
})();
