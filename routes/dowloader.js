const puppeteer = require('puppeteer');

const show = async ( link ) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto( link );
    console.log('done');
    await page.waitForSelector('div#info.style-scope.ytd-video-primary-info-renderer');
    await page.evaluate( () => document.querySelectorAll('div#info.style-scope.ytd-video-primary-info-renderer')[0].querySelectorAll('yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer')[0].click() )

    await page.waitForSelector('ytd-menu-service-item-renderer.style-scope.ytd-menu-popup-renderer');
    await page.evaluate( () => document.querySelectorAll('ytd-menu-service-item-renderer.style-scope.ytd-menu-popup-renderer')[0].click());
    
    await page.waitForSelector('div#header.style-scope.ytd-engagement-panel-title-header-renderer yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer');
    await page.evaluate( () => document.querySelectorAll('div#header.style-scope.ytd-engagement-panel-title-header-renderer yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer')[0].click() );

    // const transcript = await page.evaluate( () => {
    //     // document.querySelectorAll('tp-yt-iron-dropdown.style-scope.ytd-popup-container')[0].querySelectorAll('ytd-menu-service-item-renderer.style-scope.ytd-menu-popup-renderer')[0].click();
    //     return document.querySelectorAll('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer')[0].innerText;
    //     // return 'hello';
    // });
    return transcript;
    // await browser.close();
};

module.exports = show;