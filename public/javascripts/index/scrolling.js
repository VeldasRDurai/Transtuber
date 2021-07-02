var lastScroll = window.scrollY;
document.addEventListener( 'scroll', () => {
    if( screen.availWidth > 768 ){
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
    } else {
        if( window.scrollY >= 500 && window.scrollY <= 700 ) {
            document.querySelector("#header #header-img").style.transform = "translateY("+ ( window.scrollY-500 ) +"px)";
            document.querySelector('#free-space #move').style.visibility = "visible";
            document.querySelector('#free-space #move').style.right = ( screen.width * (700 - window.scrollY) /200 ) +'px';
        } else if( window.scrollY < 500 ){
            document.querySelector("#header #header-img").style.transform = "translateY(0px)";
            document.querySelector('#free-space #move').style.visibility = "hidden";
        } else {
            document.querySelector("#header #header-img").style.transform = "translateY(200px)";
            document.querySelector('#free-space #move').style.visibility = "hidden";
        }
    }


    if ( window.scrollY < lastScroll ){
            document.querySelector('#free-space #move svg').style.transform = 'rotateY(180deg)';
    } else {
            document.querySelector('#free-space #move svg').style.transform = 'rotateY(0deg)';
    }
    lastScroll = window.scrollY;
});