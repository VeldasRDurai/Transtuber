// document.addEventListener('load', () => {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
// });

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

setTimeout(() => {
    document.querySelector('#shutter').style.display = 'none';
    // window.scrollTo(0, 800);
}, 1250);

setTimeout(() => {
    document.querySelector('#shutter').style.backgroundColor = 'black';
    document.querySelector('#shutter').innerHTML += '<H1> COPIED! </H1>'
}, 500);

const showShutter = () => {
    var currentPosition = window.scrollY;
    console.log( 'show shutter ' );
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
