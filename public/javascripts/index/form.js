const showNotification = ( color1, color2, message ) => {
    let notification = document.querySelector('#stack-space #notification');
    notification.style.display = 'none';
    notification.style.animation = 'none';
    notification.style.display = 'flex'; 
    // reflow might not trigger since the previous value of display may be flex itself
    notification.offsetHeight; /* trigger reflow */
    notification.innerText = message ;
    notification.style.animation = null;
    notification.style.background = 'linear-gradient( 180deg, ' + color1 + ' 0%, ' + color2 + ' 50% ,' + color1 + ')';
}
const clearAll = () => {
    document.querySelector('#utube').style.display = 'none';
    document.querySelector('#stack-space').style.display = 'none';

    document.querySelector('#stack-space #player').style.display = 'none';
    document.querySelector('#stack-space #player').style.animation = 'none';

    document.querySelector('#stack-space #player-ball').style.display = 'none';
    document.querySelector('#stack-space #player-ball').style.animation = 'none';

    document.querySelector('#stack-space #container').style.display = 'none';
    document.querySelector('#stack-space #container').style.animation = 'none';
}

var WaitingTimer = undefined;
const showStack = async () => {
    clearAll();
    const link = document.querySelector('#form input').value;
    console.log('Youtube link : ' + link)
    // from the reference https://gist.github.com/Glurt/ea11b690ba4b1278e049
    if( !(/http(s?):\/{2}(www.)?(youtube.com\/((watch\?v)|(v)|(attribution_link\?a)))|(youtu.be\/(watch\?v)?)/).test(link) ){
        console.log('inside');
        document.querySelector('#stack-space').style.display = 'flex';
        showNotification('#F007', '#ef002f',' Enter a valid link ');
    } else {
        // a valid link and loading content => #stack-space , #player , #player-ball , #container
        document.querySelector('#stack-space').style.display = 'flex';
        document.querySelector('#stack-space #player').style.display = 'block';
        document.querySelector('#stack-space #player-ball').style.display = 'block';
        // document.querySelector('#stack-space #container').style.display = 'block';
        document.querySelector('#stack-space').offsetHeight; /* trigger reflow */
        document.querySelector('#stack-space #player').style.animation = '';
        document.querySelector('#stack-space #player-ball').style.animation = '';
        // document.querySelector('#stack-space #container').style.animation = '';

        showNotification('#0F07', '#00ef2f',' Expected to complete with in 30 seconds... ');

        WaitingTimer = setTimeout(() =>{
            showNotification('#0F07', '#00ef2f',' Looks like You are looking for big Video \n keep Waiting... ');
            document.querySelector('#stack-space #player').style.display = 'none';
            document.querySelector('#stack-space #player-ball').style.display = 'none';
        },30000)

        try{
            const res = await fetch(`https://transtuber.herokuapp.com/give`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ link })
            });
            clearTimeout(WaitingTimer);
            // { success, message, errorTypeNo, transcript, url }
            const { success, message, errorTypeNo, transcript, url } = await res.json();
            console.log( { success, message, errorTypeNo, transcript, url } );
            if( success ){
                document.querySelector('#utube-video').src = 'https://www.youtube.com/embed/'+ url;
                document.querySelector('#utube #utube-stack #stack').innerHTML = '';
                for( var i of transcript ){
                    document.querySelector('#utube #utube-stack #stack').innerHTML += 
                        "<div class='card'> \
                            <div class='title'>"+ i.language +"</div> \
                            <div class='content'>"+ i.content +"</div> \
                            <button  onClick='showShutter(this)' >Copy</button> \
                        </div>";
                }
                document.querySelector('#utube').style.display = 'flex';
                document.querySelector('#stack-space').style.display = 'none';
            } else {
                if( errorTypeNo === 1 ){
                    showNotification('#F007', '#ef002f', message);
                    document.querySelector('#stack-space #player').style.display = 'none';
                    document.querySelector('#stack-space #player-ball').style.display = 'none';
                } else {
                    document.querySelector('#utube-video').src = 'https://www.youtube.com/embed/'+ url;
                    document.querySelector('#utube #utube-stack #stack').innerHTML = 
                        "<div class='card' style='background: linear-gradient( 180deg, #F007 0%, #ef002f 50% ,#F007);' > \
                            <div class='title-error' > WARNING </div> \
                            <div class='content-error'>"+ message +"</div> \
                        </div>";
                    document.querySelector('#utube').style.display = 'flex';
                    document.querySelector('#stack-space').style.display = 'none';
                }
            }

        } catch (e) {
            clearTimeout(WaitingTimer);
            showNotification('#F007', '#ef002f', 'Server Error \n Sorry :(');
            document.querySelector('#stack-space #player').style.display = 'none';
            document.querySelector('#stack-space #player-ball').style.display = 'none';

            console.log('Error : ', e);
        }
        // setTimeout(() =>{
        //     // contents of valid link => #utube
        //     document.querySelector('#utube').style.display = 'flex';
        //     document.querySelector('#stack-space').style.display = 'none';
        // },40000);
    }

}