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
    }catch(e){
        return 'No transcript available 2'
    }
    const transcript = await page.evaluate( () => {
        const allNode = document.querySelectorAll('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer')[0];
        // const eachNode = document.querySelectorAll('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer div.cue-group.style-scope.ytd-transcript-body-renderer');
        return allNode ?  allNode.innerText : 'No transcript available 2';
    });

    return transcript.split(/\n{0,1}\d{2}:\d{2}\n/g).join(' ') ;
    // await browser.close();
};

module.exports = show;