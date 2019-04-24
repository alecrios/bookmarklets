# Bookmarklets

&nbsp;

**Clear Cookies** - Clears cookies for the current domain.

```
javascript:(function(){document.cookie.split(';').forEach((cookie)=>{document.cookie=cookie.replace(/^ +/,'').replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)});window.confirm('Cookies have been cleared.')}())
```

&nbsp;

**Clear Local Storage** - Clears local storage for the current domain.

```
javascript:(function(){localStorage.clear();window.confirm('Local storage has been cleared.')}())
```

&nbsp;

**Edit Page Content** - Toggles content editing mode on the current webpage.

```
javascript:(function(){if(document.body.contentEditable=='true'||document.designMode=='on'){document.body.removeAttribute('spellcheck');document.body.removeAttribute('contentEditable');document.designMode='off';return}document.body.setAttribute('spellcheck','false');document.body.setAttribute('contenteditable','true');document.designMode='on'}())
```

&nbsp;

**Get Element Size** - Toggles the display of the size of the element that is moused over.

```
javascript:(function(){window.getElementSize=window.getElementSize||{};if(typeof getElementSize.isActive==='undefined'){getElementSize.isActive=!1;getElementSize.style=document.createElement('style');getElementSize.style.innerText=`.get-element-size{z-index:1000000000;position:absolute;top:0;left:0;opacity:0;pointer-events:none;outline:0!important}.get-element-size__overlay{width:1px;height:1px;background-color:rgba(255,0,0,.25);transform-origin:0 0;transition:transform 50ms ease;outline:0!important}.get-element-size__label{padding:.25rem .5rem;border:.125rem solid rgba(255,255,255,1);border-radius:.25rem;background-color:rgba(0,0,0,1);font-family:BlinkMacSystemFont,'Segoe UI',sans-serif;color:rgba(255,255,255,1);font-size:1rem;line-height:1.5rem;transform-origin:0 0;outline:0!important}`;document.head.appendChild(getElementSize.style);getElementSize.container=document.createElement('div');getElementSize.container.classList.add('get-element-size');document.body.appendChild(getElementSize.container);getElementSize.overlay=document.createElement('div');getElementSize.overlay.classList.add('get-element-size__overlay');getElementSize.container.appendChild(getElementSize.overlay);getElementSize.label=document.createElement('div');getElementSize.label.classList.add('get-element-size__label');getElementSize.container.appendChild(getElementSize.label);getElementSize.update=(event)=>{let rect=event.target.getBoundingClientRect();let overlayX=window.pageXOffset+rect.left;let overlayY=window.pageYOffset+rect.top;let overlayWidth=rect.width;let overlayHeight=rect.height;getElementSize.overlay.style.transform=`translate(${overlayX}px, ${overlayY}px) scale(${overlayWidth}, ${overlayHeight})`;let labelX=window.pageXOffset+event.clientX+8;let labelY=window.pageYOffset+event.clientY+16;getElementSize.label.style.transform=`translate(${labelX}px, ${labelY}px)`;let elementWidth=Math.round(rect.width);let elementHeight=Math.round(rect.height);getElementSize.label.innerText=`${elementWidth} × ${elementHeight}`;getElementSize.container.style.opacity='1'}}if(getElementSize.isActive){getElementSize.isActive=!1;document.removeEventListener('mousemove',getElementSize.update);getElementSize.container.style.opacity='0';return}getElementSize.isActive=!0;document.addEventListener('mousemove',getElementSize.update)}())
```

&nbsp;

**Get Font Name** - Displays the font used by the selected text.

```
javascript:(function(){function getSelectedNode(){if(window.getSelection().focusNode===null)return null;return window.getSelection().focusNode.parentNode}function getNodeFontStack(node){return window.getComputedStyle(node).fontFamily}function getFirstAvailableFont(fonts){for(let font of fonts){let fontName=font.trim().replace(/"/g,'');let isAvailable=document.fonts.check(`16px ${fontName}`);if(!isAvailable)continue;return fontName}}let node=getSelectedNode();if(!node){window.alert('Please select a string of text and try again.');return}let fonts=getNodeFontStack(node).split(',');let firstAvailableFont=getFirstAvailableFont(fonts);window.alert(`Font: ${firstAvailableFont}`)}())
```

&nbsp;

**Get Placeholder Image** - Generates a placeholder image with custom dimensions (uses [Lorem Picsum](http://picsum.photos/)).

```
javascript:(function(){let isRepeatRequest=window.location.host==='picsum.photos';let splitPathName=window.location.pathname.split('/');let previousDimensions=splitPathName.slice(splitPathName.length-2,splitPathName.length);let previousWidth=isRepeatRequest?previousDimensions[0]:null;let previousHeight=isRepeatRequest?previousDimensions[1]:null;let defaultValue=`${previousWidth || 1920}x${previousHeight || 1080}`;let dimensions=window.prompt('Image dimensions',defaultValue);if(dimensions===null)return;dimensions=dimensions.split('x');let width=Number(dimensions[0]);let height=Number(dimensions[1]);if(!Number.isInteger(width)||!Number.isInteger(height)){window.alert('Invalid image dimensions');return}let url=`https://picsum.photos/${width}/${height}`;isRepeatRequest?window.location=url:window.open(url)})()
```

&nbsp;

**Get Placeholder Text** - Generates placeholder text of a specified word count (uses [Lorem Ipsum](https://www.lipsum.com/)).

```
javascript:(function(){let wordCount=window.prompt('Word count','250');if(wordCount===null)return;wordCount=Number(wordCount);if(!Number.isInteger(wordCount)||wordCount===0){window.alert('Invalid word count');return}let wordBankSource='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius enim quis nulla mattis, id cursus lectus eleifend. Ut eu pulvinar augue. Donec nulla est, dapibus vulputate placerat eu, tempus eget erat. Nam commodo eu erat iaculis commodo. Sed ultrices sapien vitae neque scelerisque, sit amet feugiat ipsum tristique. Vestibulum et ornare lorem. Phasellus lacinia pellentesque augue. In consequat libero magna, in placerat nibh semper a. Donec rutrum nibh ante, non feugiat enim dapibus efficitur. Quisque hendrerit, massa ac posuere iaculis, odio metus dictum tellus, vel semper mauris nunc eget urna.';let wordBank=wordBankSource.split(' ');let result='';let offset=Math.floor(Math.random()*wordBank.length);for(let index=0;index<wordCount;index++){if(offset>=wordBank.length){offset=0}if(index===0){result+=wordBank[offset].charAt(0).toUpperCase()+wordBank[offset].slice(1)+' '}else{result+=wordBank[offset]+' '}offset++}result=result.slice(0,-1);if(result.slice(-1)==','){result=result.slice(0,-1)+'.'}else if(result.slice(-1)!='.'){result=result+'.'}window.prompt(`${wordCount} words`,result)})()
```

&nbsp;

**Show Element Outlines** - Toggles the visibility of a red outline around all elements to help visualize layout.

```
javascript:(function(){window.showElementOutlines=window.showElementOutlines||{};if(typeof showElementOutlines.isActive==='undefined'){showElementOutlines.isActive=!1;showElementOutlines.style=document.createElement('style');showElementOutlines.style.innerHTML='* {outline: 1px solid red !important}'}if(showElementOutlines.isActive){showElementOutlines.isActive=!1;document.head.removeChild(showElementOutlines.style);return}showElementOutlines.isActive=!0;document.head.appendChild(showElementOutlines.style)})()
```

&nbsp;

## Usage

1. Open the browser's bookmark manager.
2. Create a new bookmark.
3. Type in a name for the bookmarklet, _e.g._ "Get Placeholder Text".
4. Paste in a script as the URL, _e.g._ `javascript:(function(){...})()`.
5. Optionally set a keyboard shortcut (_Mac: System Preferences > Keyboard > Shortcuts > App Shortcuts_).
