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
    document.querySelector('#shutter').style.visibility = 'hidden';
    window.scrollTo(0, 500);
}, 1250);

setTimeout(() => {
    document.querySelector('#shutter').style.backgroundColor = 'black';
}, 500);

