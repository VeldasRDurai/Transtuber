document.querySelector('#help #insruction-right').addEventListener('mouseenter', () => {
    // document.querySelector('#help #insruction-right').style.backgroundColor = 'black';
    document.querySelector('#header #header-text #sub').style.color = 'black';

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