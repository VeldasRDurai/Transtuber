var lastScroll = window.scrollY;
document.addEventListener( 'scroll', () => {
    if( window.scrollY < 250 ) {
        document.querySelector("#header #header-img").style.transform = "rotate("+ (25 - window.scrollY/6) +"deg)";
    } else {
        document.querySelector("#header #header-img").style.transform = "rotate(-16deg)";
    }
    // var randomNum = Math.floor((Math.random() * 4) + 1);
    // console.log( randomNum );

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

    // const sub = document.querySelector('#header #header-text #sub');
    // const head = document.querySelector('#header #header-text #head');
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

    
    // sub.style.border = 'none';
    // head.style.border = 'none';
    
    // var colors = ['red','green','blue','white'];
    // var randomNum1 = Math.floor((Math.random() * 4) + 1);

    // if( randomNum1 === 4 ){
    //     sub.style.borderLeft = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    // } else if ( randomNum1 === 3 ){
    //     sub.style.borderRight = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)]; 
    // } else if( randomNum1 === 2 ){
    //     sub.style.borderTop = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    // } else {
    //     sub.style.borderBottom = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    // }

    // var randomNum2 = Math.floor((Math.random() * 4) + 1);

    // if( randomNum2 === 4 ){
    //     head.style.borderLeft = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    // } else if ( randomNum2 === 3 ){
    //     head.style.borderRight = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)]; 
    // } else if( randomNum2 === 2 ){
    //     head.style.borderTop = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    // } else {
    //     head.style.borderBottom = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
    // }
});

// const hovered = () => {
    // var toRed = true;
    // setInterval(() => {
    //     let instruction = document.querySelector('#help #insruction-right').style;
        // instruction.borderTopColor = toRed ? 'red' : 'blue';
        // instruction.borderBottomColor = toRed ? 'red' : 'blue';
        // instruction.borderLeftColor = toRed ? 'blue': 'red';
        // instruction.borderRightColor = toRed ? 'blue': 'red';
        // instruction.backgroundColor = toRed ? 'blue': 'red';
        // instruction.borderColor = toRed ? 'red': 'blue';
//         document.querySelector('#help #insruction-left #downarrow').style.color = toRed ? 'red' : 'blue';
//         // document.querySelector('#header #header-img').style.border =  '3px solid '+(toRed ? 'red':'blue');
        // toRed = !toRed;
        
//         sub.style.border = 'none';
//         head.style.border = 'none';
        
//         var colors = ['red','green','blue','white'];
//         var randomNum1 = Math.floor((Math.random() * 4) + 1);

//         if( randomNum1 === 4 ){
//             sub.style.borderLeft = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
//         } else if ( randomNum1 === 3 ){
//             sub.style.borderRight = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)]; 
//         } else if( randomNum1 === 2 ){
//             sub.style.borderTop = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
//         } else {
//             sub.style.borderBottom = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
//         }

//         var randomNum2 = Math.floor((Math.random() * 4) + 1);

//         if( randomNum2 === 4 ){
//             head.style.borderLeft = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
//         } else if ( randomNum2 === 3 ){
//             head.style.borderRight = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)]; 
//         } else if( randomNum2 === 2 ){
//             head.style.borderTop = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
//         } else {
//             head.style.borderBottom = Math.floor((Math.random() * 4) + 1) + 'px solid ' + colors[Math.floor(Math.random() * 4)];
//         }
    // }, 200);
// }

let id = undefined;
const entered = () => {
    var toRed = true;
    id = setInterval(() => {
        // document.querySelector('#help #insruction-left #downarrow').style.color = toRed ? 'red' : '#08ff08';    
        document.querySelector('#help').style.backgroundColor =  toRed ? '#00f02f' : '#f0002f'; // green : red   
        document.querySelector('#header').style.backgroundColor =  toRed ? '#00f02f' : '#f0002f';  
        document.querySelector('#free-space').style.backgroundColor =  toRed ? '#00f02f' : '#f0002f';    
        // document.querySelector('#help #insruction-left').style.color = toRed ? '#f0002f' : '#00f02f' ; // red : green
        toRed = !toRed;
    },200)
}

document.querySelector('#help #insruction-right').addEventListener('mouseenter', () => {
    // document.querySelector('#help #insruction-right').style.backgroundColor = 'black';
    document.querySelector('#header #header-text #sub').style.color = 'black';
    // entered();

    document.querySelector('#help').style.backgroundColor = '#00f02f';    
    document.querySelector('#header').style.backgroundColor = '#00f02f';  
    document.querySelector('#free-space').style.backgroundColor = '#00f02f';

});
document.querySelector('#help #insruction-right').addEventListener('mouseleave', () => {
    // document.querySelector('#help #insruction-right').style.backgroundColor = '#0000';
    document.querySelector('#header #header-text #sub').style.color = 'white';
    // clearInterval(id);
    // document.querySelector('#help #insruction-left #downarrow').style.color = 'white';
    document.querySelector('#help').style.backgroundColor =  'black'; 
    document.querySelector('#header').style.backgroundColor = 'black';   
    document.querySelector('#free-space').style.backgroundColor = 'black';
    // document.querySelector('#help #insruction-left').style.color = '#08ff08'
});
// document.querySelector('#form input').addEventListener('click', () => {
//     document.querySelector('#form').scrollIntoView();
// });
const colors = [
    { backgroundColor:'#c43253', color:'#d3b738' },
    { backgroundColor:'#e5270e', color:'#7ebdc1' },
    { backgroundColor:'#112378', color:'#f64a00' },
    { backgroundColor:'#cd244a', color:'#eac417' },
    { backgroundColor:'#eac417', color:'#2b64a9' },
    { backgroundColor:'#28292b', color:'#a646a7' },
    { backgroundColor:'#0e2f56', color:'#fc3b2d' },
    { backgroundColor:'#009bc6', color:'#ffd15e' },
    { backgroundColor:'#cc2e22', color:'#ffb812' }
];
// for( let card of document.querySelectorAll('#utube-stack #stack .card')){
//     let n = colors[ Math.floor((Math.random() * 9) + 1) ];
//     [card.style.background, card.style.color] = [ 'linear-gradient(to right,'+n.backgroundColor+' 70%, transparent)', n.color ] ;
//     card.getElementsByTagName('button')[0].style.backgroundColor = n.color;
// }
const showStack = () => {
    document.querySelector('#stack-space').style.display = 'flex';
    document.querySelector('#stack-space #player').style.display = 'block';
    document.querySelector('#stack-space #player-ball').style.display = 'block';
    document.querySelector('#stack-space #container').style.display = 'block';
    document.querySelector('#utube').style.display = 'none';
    setTimeout(() =>{
        document.querySelector('#stack-space').style.display = 'none';
        document.querySelector('#stack-space #player').style.display = 'none';
        document.querySelector('#stack-space #player-ball').style.display = 'none';
        document.querySelector('#stack-space #container').style.display = 'none';
        document.querySelector('#utube').style.display = 'flex';
    },30000);
}