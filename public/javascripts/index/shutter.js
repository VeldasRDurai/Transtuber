if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
document.body.style.overflowY = 'hidden';
setTimeout(() => {
    document.querySelector('#shutter').style.display = 'none';
    // window.scrollTo(0, 1000);
    document.body.style.overflowY = 'scroll';
}, 1200);

setTimeout(() => {
    document.querySelector('#shutter').style.backgroundColor = 'black';
    document.querySelector('#shutter').innerHTML += '<H1> COPIED! </H1>'
}, 300);

const showShutter = (event) => {

    const text = event.parentElement.innerText;
    console.log( text );
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

    var currentPosition = window.scrollY;
    window.scrollTo(0, 0);
    document.querySelector('#shutter').style.display = 'flex';
    document.querySelector('#shutter').style.backgroundColor = 'white';
    setTimeout(() => {
        document.querySelector('#shutter').style.display = 'none';
        window.scrollTo(0, currentPosition);
    }, 1250);
    setTimeout(() => {
        document.querySelector('#shutter').style.backgroundColor = 'black';
    }, 500);
}
