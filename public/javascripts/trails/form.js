const clearAll = () => {
    document.querySelector('#utube').style.display = 'none';
    document.querySelector('#stack-space').style.display = 'none';

    document.querySelector('#stack-space #player').style.display = 'none';
    document.querySelector('#stack-space #player').style.animation = 'none';

    document.querySelector('#stack-space #player-ball').style.display = 'none';
    document.querySelector('#stack-space #player-ball').style.animation = 'none';

    document.querySelector('#stack-space #container').style.display = 'none';
    document.querySelector('#stack-space #container').style.animation = 'none';

    document.querySelector('#stack-space #notification').style.display = 'none';
    document.querySelector('#stack-space #notification').style.animation = 'none';
}

const showStack = () => {
    clearAll();
    const link = document.querySelector('#form input').value;
    console.log('Youtube link : ' + link)
    // from the reference https://gist.github.com/Glurt/ea11b690ba4b1278e049
    if( !(/http(s?):\/{2}(wwww.)?(youtube.com\/((watch\?v)|(v)|(attribution_link\?a)))|(youtu.be\/(watch\?v)?)/).test(link) ){
        // for an invalid link => #stack-space , notification
        console.log('inside');
        document.querySelector('#stack-space').style.display = 'flex';
        document.querySelector('#stack-space #notification').style.display = 'flex'; // reflow might not trigger since the previous value of display may be flex itself
        document.querySelector('#stack-space #notification').offsetHeight; /* trigger reflow */
        document.querySelector('#stack-space #notification').style.animation = '';
    } else {
        // a valid link and loading content => #stack-space , #player , #player-ball , #container
        document.querySelector('#stack-space').style.display = 'flex';
        document.querySelector('#stack-space #player').style.display = 'block';
        document.querySelector('#stack-space #player-ball').style.display = 'block';
        document.querySelector('#stack-space #container').style.display = 'block';
        document.querySelector('#stack-space').offsetHeight; /* trigger reflow */
        document.querySelector('#stack-space #player').style.animation = '';
        document.querySelector('#stack-space #player-ball').style.animation = '';
        document.querySelector('#stack-space #container').style.animation = '';
        setTimeout(() =>{
            // contents of valid link => #utube
            document.querySelector('#utube').style.display = 'flex';
            document.querySelector('#stack-space').style.display = 'none';
        },30000);
    }

}