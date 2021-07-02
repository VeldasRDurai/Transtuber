document.querySelector('#help #insruction-right').addEventListener('mouseenter', () => {
    // document.querySelector('#help #insruction-right').style.backgroundColor = 'black';
    document.querySelector('#header #header-text #head').style.visibility = 'hidden';
    document.querySelector('#help #downarrow').style.visibility = 'visible';
    document.querySelector('#header #header-text #sub').style.color = 'black';

    document.querySelector('#help').style.backgroundColor = '#00f02f';    
    document.querySelector('#header').style.backgroundColor = '#00f02f';  
    document.querySelector('#free-space').style.backgroundColor = '#00f02f';

});
document.querySelector('#help #insruction-right').addEventListener('mouseleave', () => {
    // document.querySelector('#help #insruction-right').style.backgroundColor = '#0000';
    document.querySelector('#header #header-text #head').style.visibility = 'visible';
    document.querySelector('#help #downarrow').style.visibility = 'hidden';
    document.querySelector('#header #header-text #sub').style.color = 'white';
    // clearInterval(id);
    // document.querySelector('#help #insruction-left #downarrow').style.color = 'white';
    document.querySelector('#help').style.backgroundColor =  'black'; 
    document.querySelector('#header').style.backgroundColor = 'black';   
    document.querySelector('#free-space').style.backgroundColor = 'black';
    // document.querySelector('#help #insruction-left').style.color = '#08ff08'
});
document.querySelector('#form svg').addEventListener('click', () => {
    document.querySelector('#stack-space').scrollIntoView();
});

var moverRight = undefined;
document.querySelector('#mover-right').addEventListener('mouseenter', () => { 
    moverRight = setInterval(() => {
        document.querySelector('#utube-stack').scrollBy(30,0);
    },100);
});
document.querySelector('#mover-right').addEventListener('mouseleave', () => { 
    clearInterval(moverRight);
});

var moverLeft = undefined;
document.querySelector('#mover-left').addEventListener('mouseenter', () => { 
    moverLeft = setInterval(() => {
        document.querySelector('#utube-stack').scrollBy(-30,0);
    },100);
});
document.querySelector('#mover-left').addEventListener('mouseleave', () => { 
    clearInterval(moverLeft);
});

