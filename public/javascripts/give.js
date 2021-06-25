
const give = async () => {
    const link = document.getElementById('link').value;
    document.getElementById('output').innerText = 'loading...';
    try{
        const res = await fetch(`http://localhost:3000/give`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ link })
        });
        console.log( res );
        const data = await res.json();
        console.log( data );

        document.getElementById('output').innerText =  data.transcript ;
        if( typeof(data.transcript) === "object" ){
            let selectTag = '<label for="language">Choose the language : </label> <select name="language" id="language" onChange="changeLanguage()" >';
            data.transcript.forEach( i => {
                sessionStorage.setItem(i.language, i.content );
                selectTag += '<option value="'+ i.language +'">'+ i.language +'</option>'
            });
            selectTag += '</select>';
            document.getElementById('output').innerHTML += selectTag;
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
const ok =() => {
    console.log('hello');
}