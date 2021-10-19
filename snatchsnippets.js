function resetCodeBlock(codeElement, hljsObject){
    codeElement.innerHTML = hljsObject.value;
    codeElement.classList.remove('language-undefined');
    langClass = 'language-' + hljsObject.language;
    codeElement.classList.add(langClass);
    codeElement.classList.add('hljs');
    codeElement.classList.remove('remote');
}

function getCodeSnippets(){
    var codeBlocks = document.getElementsByClassName('remote');
    if(codeBlocks.length > 0){
        for (var i=0; i<codeBlocks.length; i=i+1){
            codeBlock = codeBlocks[i];
            if ('source' in codeBlock.attributes){
                codeSource = codeBlock.attributes['source'];
                fetch(codeSource.textContent)
                    .then(response => response.text())
                    .then(respText => hljs.highlightAuto(respText))
                    .then(data => resetCodeBlock(codeBlock,data));
            }
        }
    }
}