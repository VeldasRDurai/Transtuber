
const give = async () => {
    // move();
    const link = document.getElementById('link').value;
    document.getElementById('output').innerText = 'loading...';
    try{
        const res = await fetch(`http://localhost:3000/give`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ link })
        });
        const data = await res.json();
        console.log( data );
        if( typeof data.transcript === 'string' ){
            document.getElementById('output').innerText = data.transcript;
        }else{
            document.getElementById('output').innerText =  data.transcript[0].content ;
            if( data.transcript !== undefined ){
                let selectTag = '<label for="language">Choose the language : </label> <select name="language" id="language" onChange="changeLanguage()" >';
                data.transcript.forEach( item => {
                    sessionStorage.setItem(item.language, item.content );
                    selectTag += '<option value="'+ item.language +'">'+ item.language +'</option>'
                });
                selectTag += '</select>';
                document.getElementById('options').innerHTML = selectTag;
            }
        }
        if ( data.url !== undefined ) document.getElementById('help').innerHTML = 
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+data.url+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    } catch (e) {
        console.log('Error : ', e);    
        document.getElementById('output').innerText = e ;
    }
}
const copy = () => {
    const text = document.getElementById('output').innerText;
    navigator.clipboard ? navigator.clipboard.writeText(text) :
        (window.clipboardData && window.clipboardData.setData) ? window.clipboardData.setData('Text', text) :
            (() => {
                // document.body.innerHTML +='<input type="text" value="' + text + '">'
                const input = document.createElement("input");
                const attribute = document.createAttribute("type") 
                attribute.value = 'text';
                input.setAttributeNode(attribute);
                input.value = text;
                document.body.append(input);
                input.focus();
                input.select();
                document.execCommand('copy');
                input.remove();
            })();
    }
const changeLanguage =() => {
    const language = document.getElementById('language').value;
    console.log( language );
    document.getElementById('output').innerText = sessionStorage.getItem( language );
}

var i = 0;
const move = () => {
    if (i === 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 0;
        var id = setInterval(() => {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        },300 );
    }
}