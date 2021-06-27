document.addEventListener( 'scroll', () => {
    if( window.scrollY < 250 ) document.querySelector("#header #header-img").style.transform = "rotate("+ (25 - window.scrollY/6) +"deg)";
    // var randomNum = Math.floor((Math.random() * 4) + 1);
    // console.log( randomNum );

    if( window.scrollY >= 250 && window.scrollY <= 550 ) {
        document.querySelector('#free-space #move').style.right = ( screen.width * (550 - window.scrollY) /300 ) +'px';
    } else if( window.scrollY < 250){
        document.querySelector('#free-space #move').style.right = (screen.width)+'px';
    } else {
        document.querySelector('#free-space #move').style.right = '0px';
    }

    const sub = document.querySelector('#header #header-text #sub');
    const head = document.querySelector('#header #header-text #head');
    // if(randomNum === 4){
    //     sub.style.border = 'none';
    //     head.style.border = 'none';
    //     sub.style.borderLeft = randomNum+'px solid blue';
    //     head.style.borderBottom = randomNum+'px solid red';
    // } else if(randomNum === 3){
    //     sub.style.border = 'none';
    //     head.style.border = 'none';
    //     sub.style.borderBottom = randomNum+'px solid red';
    //     head.style.borderRight = '1px solid green';
    // } else if(randomNum === 2 ){
    //     sub.style.border = 'none';
    //     head.style.border = 'none';
    //     sub.style.borderRight = randomNum+'px solid green';
    //     head.style.borderTop = randomNum+'px solid white';
    // } else{
    //     sub.style.border = 'none';
    //     head.style.border = 'none';
    //     sub.style.borderTop = randomNum+'px solid white';
    //     head.style.borderLeft = randomNum+'px solid blue';
    // }

    
    sub.style.border = 'none';
    head.style.border = 'none';
    
    var colors = ['red','green','blue','white'];
    var randomNum1 = Math.floor((Math.random() * 4) + 1);

    if( randomNum1 === 4 ){
        sub.style.borderLeft = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    } else if ( randomNum1 === 3 ){
        sub.style.borderRight = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)]; 
    } else if( randomNum1 === 2 ){
        sub.style.borderTop = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    } else {
        sub.style.borderBottom = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    }

    var randomNum2 = Math.floor((Math.random() * 4) + 1);

    if( randomNum2 === 4 ){
        head.style.borderLeft = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    } else if ( randomNum2 === 3 ){
        head.style.borderRight = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)]; 
    } else if( randomNum2 === 2 ){
        head.style.borderTop = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    } else {
        head.style.borderBottom = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    }
});