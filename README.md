# Bookmarklets

&nbsp;

**Edit Page Content** - Toggles content editing mode on the current webpage

```
javascript:(function(){var bcId='bookmarklet-container';var bc=document.getElementById(bcId);var epcId='bookmarklet-edit-page-content';var epc=document.getElementById(epcId);if(document.body.contentEditable=='true'||document.designMode=='on'){document.body.removeAttribute('spellcheck');document.body.removeAttribute('contentEditable');document.designMode='off';if(bc!==null&&epc!==null){bc.removeChild(epc);if(bc.childNodes.length===0){document.body.removeChild(bc)}}}else{document.body.setAttribute('spellcheck','false');document.body.contentEditable='true';document.designMode='on';if(bc===null){var bc=document.createElement('div');bc.setAttribute('id',bcId);var style=document.querySelector('style');if(style===null){style=document.createElement('style');document.head.appendChild(style)}style.innerHTML=style.innerHTML+` #${bcId}{position:fixed;top:0;left:0;z-index:9999;padding:8px}#${bcId}>div{margin-bottom:8px;padding:6px 8px;background-color:#000;color:#fff;font-family:Helvetica,sans-serif;font-size:12px;line-height:12px;letter-spacing:1px}`;document.body.appendChild(bc)}if(epc===null){var epc=document.createElement('div');epc.setAttribute('id',epcId);epc.innerHTML='Edit Mode';bc.appendChild(epc)}}}())
```

&nbsp;


**Get Placeholder Image** - Generates a placeholder image with custom dimensions (uses https://unsplash.it/)

```
javascript:(function(){var size=window.prompt('Enter Image Size','1920x1080');if(size!==null&&size.length){size=size.toLowerCase().replace(/\s+/g,'').split('x',2);window.open(`https://unsplash.it/${size[0]}/${size[1]}/?random`)}})()
```

&nbsp;

**Get Placeholder Text** - Generates 'lorem ipsum' placeholder text of a specified word count

```
javascript:(function(){var wordCount=window.prompt('Enter Word Count','250');if(wordCount!==null&&wordCount.length){wordCount=parseInt(wordCount.trim());var lorem='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius enim quis nulla mattis, id cursus lectus eleifend. Ut eu pulvinar augue. Donec nulla est, dapibus vulputate placerat eu, tempus eget erat. Nam commodo eu erat iaculis commodo. Sed ultrices sapien vitae neque scelerisque, sit amet feugiat ipsum tristique. Vestibulum et ornare lorem. Phasellus lacinia pellentesque augue. In consequat libero magna, in placerat nibh semper a. Donec rutrum nibh ante, non feugiat enim dapibus efficitur. Quisque hendrerit, massa ac posuere iaculis, odio metus dictum tellus, vel semper mauris nunc eget urna.';var lorem=lorem.split(' ');var result='';var j=Math.floor(Math.random()*lorem.length);for(var i=0;i<wordCount;i++){if(j>=lorem.length){j=0}if(i==0){result+=lorem[j].charAt(0).toUpperCase()+lorem[j].slice(1)+' '}else{result+=lorem[j]+' '}j++}result=result.slice(0,-1);if(result.slice(-1)==','){result=result.slice(0,-1)+'.'}else if(result.slice(-1)!='.'){result=result+'.'}var newDocument=window.open().document;newDocument.title=wordCount+' words';style=document.createElement('style');style.innerHTML=`body{margin:0;padding:32px;display:flex;align-items:center;justify-content:center}#text{font-family:sans-serif;font-size:16px;line-height:24px;max-width:512px}`;var textDiv=document.createElement('div');textDiv.setAttribute('id','text');textDiv.innerHTML=result;newDocument.head.appendChild(style);newDocument.body.appendChild(textDiv)}})()
```

&nbsp;

**Navigate Within Website** - Sets the window location to the specified relative path

```
javascript:(function(){var path=window.prompt('Enter Path','/');if(path!==null&&path.length){window.location.href=window.location.origin+path}})()
```

&nbsp;

**Search Current Website** - Searches Google for the specified search term within the current domain

```
javascript:(function(){var query=window.prompt('Enter Search Query','');if(query!==null&&query.length){window.open('https://encrypted.google.com/search?q=site:'+window.location.origin+'%20'+encodeURIComponent(query))}})()
```

&nbsp;

**Show Element Outlines** - Toggles the visibility of an outline around all elements for debugging layout issues

```
javascript:(function(){var id='show-element-outlines';var style=document.getElementById(id);if(style===null){style=document.createElement('style');style.setAttribute('id',id);style.innerHTML='* {outline: 1px solid red;}';document.head.appendChild(style)}else{document.head.removeChild(style)}})()
```

&nbsp;

**Show Window Size** - Toggles the visibility of a window size indicator

```
javascript:(function(){var bcId='bookmarklet-container';var bc=document.getElementById(bcId);var swsId='bookmarklet-show-window-size';var sws=document.getElementById(swsId);if(bc!==null&&sws!==null){bc.removeChild(sws);if(bc.childNodes.length===0){document.body.removeChild(bc)}}else{if(bc===null){var bc=document.createElement('div');bc.setAttribute('id',bcId);var style=document.querySelector('style');if(style===null){style=document.createElement('style');document.head.appendChild(style)}style.innerHTML=style.innerHTML+` #${bcId}{position:fixed;top:0;left:0;z-index:9999;padding:8px}#${bcId}>div{margin-bottom:8px;padding:6px 8px;background-color:#000;color:#fff;font-family:Helvetica,sans-serif;font-size:12px;line-height:12px;letter-spacing:1px}`;document.body.appendChild(bc)}var sws=document.createElement('div');sws.setAttribute('id',swsId);sws.innerHTML=window.innerWidth+' &times; '+window.innerHeight;window.onresize=function(){sws.innerHTML=window.innerWidth+' &times; '+window.innerHeight};bc.appendChild(sws)}})()
```

&nbsp;

## Usage

* Open the browser's bookmark manager.
* Create a new bookmark.
* Type in a name for the bookmarklet (e.g. "Get Placeholder Text").
* Paste in a script as the URL (i.e. `javascript:(function(){...})()`).
* _Optional:_ Set a keyboard shortcut (Mac: System Preferences > Keyboard > Shortcuts > App Shortcuts)
