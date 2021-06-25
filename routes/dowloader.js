const puppeteer = require('puppeteer');

const show = async ( link ) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto( link );
    console.log('done');

    await page.waitForSelector('div#info.style-scope.ytd-video-primary-info-renderer');
    await page.evaluate( () => document.querySelectorAll('div#info.style-scope.ytd-video-primary-info-renderer')[0]
        .querySelectorAll('yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer')[0].click() )
    
    await page.waitForSelector('tp-yt-iron-dropdown.style-scope.ytd-popup-container');
    if ( await page.evaluate( () => {
        const options = document.querySelectorAll('ytd-menu-service-item-renderer.style-scope.ytd-menu-popup-renderer');
        options.length ?  (() => { options[0].click(); return false; })() : true ;
    })) return 'No transcript available 1';
    
    try{ await page.waitForSelector('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer');
    }catch(e){ return 'No transcript available 2'}
    
    const transcript = await page.evaluate( () => 
        document.querySelectorAll('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer')[0].innerText );

    const url = await page.evaluate( () => window.location.search.split('=')[1] )
    // await page.evaluate( () => 
    //     [... document.querySelectorAll('div#top-level-buttons-computed.top-level-buttons.style-scope.ytd-menu-renderer ytd-button-renderer.style-scope.ytd-menu-renderer.force-icon-button.style-default.size-default a.yt-simple-endpoint.style-scope.ytd-button-renderer')]
    //         .find( (v) =>{ return v.innerText.toLowerCase() === 'share' }).click () )

    return { transcript : transcript.split(/\n{0,1}\d{2}:\d{2}\n/g).join(' '), url };
    // await browser.close();
};

module.exports = show;