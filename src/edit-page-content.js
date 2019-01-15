javascript: (function() {
	if (document.body.contentEditable == 'true' || document.designMode == 'on') {
		document.body.removeAttribute('spellcheck');
		document.body.removeAttribute('contentEditable');
		document.designMode = 'off';
		return;
	}

	document.body.setAttribute('spellcheck', 'false');
	document.body.setAttribute('contenteditable', 'true');
	document.designMode = 'on';
}());
