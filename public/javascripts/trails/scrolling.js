var lastScroll = window.scrollY;
document.addEventListener( 'scroll', () => {
    if( window.scrollY < 250 ) {
        document.querySelector("#header #header-img").style.transform = "rotate("+ (25 - window.scrollY/6) +"deg)";
    } else {
        document.querySelector("#header #header-img").style.transform = "rotate(-16deg)";
    }

    if( window.scrollY >= 250 && window.scrollY <= 550 ) {
        document.querySelector('#free-space #move').style.right = ( screen.width * (550 - window.scrollY) /300 ) +'px';
    } else if( window.scrollY < 250){
        document.querySelector('#free-space #move').style.right = screen.width+'px';
    } else {
        document.querySelector('#free-space #move').style.right = '-220px';
    }

    if ( window.scrollY < lastScroll ){
            document.querySelector('#free-space #move svg').style.transform = 'rotateY(180deg)';
    } else {
            document.querySelector('#free-space #move svg').style.transform = 'rotateY(0deg)';
    }
    lastScroll = window.scrollY;
});