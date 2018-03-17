javascript: (function () {
	var bcId = 'bookmarklet-container';
	var bc = document.getElementById(bcId);
	var epcId = 'bookmarklet-edit-page-content';
	var epc = document.getElementById(epcId);
	if (document.body.contentEditable == 'true' || document.designMode == 'on') {
		document.body.removeAttribute('spellcheck');
		document.body.removeAttribute('contentEditable');
		document.designMode = 'off';
		if (bc !== null && epc !== null) {
			bc.removeChild(epc);
			if (bc.childNodes.length === 0) {
				document.body.removeChild(bc);
			}
		}
	} else {
		document.body.setAttribute('spellcheck','false');
		document.body.contentEditable = 'true';
		document.designMode = 'on';
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
		if (epc === null) {
			var epc = document.createElement('div');
			epc.setAttribute('id', epcId);
			epc.innerHTML = 'Edit Mode';
			bc.appendChild(epc);
		}
	}
}());
