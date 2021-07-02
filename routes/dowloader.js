const puppeteer = require('puppeteer');

const show = async ( link ) => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto( link );
    
    const url = await page.evaluate( () => window.location.search.split('=')[1].split('&')[0] );

    try{
        await page.waitForSelector('div#info.style-scope.ytd-video-primary-info-renderer');
        await page.evaluate( () => document.querySelectorAll('div#info.style-scope.ytd-video-primary-info-renderer yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer')[0].click() )
    } catch (e) {
        let pages = await browser.pages(); await Promise.all(pages.map(page =>page.close()));
        await browser.close();
        return { 
            success: false, 
            message: 'Not a valid link', 
            errorTypeNo: 1,
            transcript: undefined, 
            url: undefined 
        };
    }
    
    await page.waitForTimeout(1000);
    // await page.waitForSelector('tp-yt-iron-dropdown.style-scope.ytd-popup-container');
    if( await page.evaluate( () => {
        const options = document.querySelectorAll('ytd-menu-service-item-renderer.style-scope.ytd-menu-popup-renderer');
        options.length ?  (() => { options[0].click(); return false; })() : true ;
    })){
        let pages = await browser.pages(); await Promise.all(pages.map(page =>page.close()));
        await browser.close();
        return { 
            success: false, 
            message: 'No transcript available', 
            errorTypeNo: 2,
            transcript: undefined, 
            url
        };
    }
    
    
    await page.waitForTimeout(1000);
    // await page.waitForSelector('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer');
    if( await page.evaluate( () => {
        const options = document.querySelectorAll('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer');
        return options.length ? false : true ;
    })){
        let pages = await browser.pages(); await Promise.all(pages.map(page =>page.close()));
        await browser.close();
        return { 
            success: false, 
            message: 'Not able to auto-generate transcript by youtube', 
            errorTypeNo: 3,
            transcript: undefined, 
            url
        };
    }

    const allLanguage = await page.evaluate( () =>
        [...document.querySelectorAll('tp-yt-paper-listbox#menu.dropdown-content.style-scope.yt-dropdown-menu div.item.style-scope.yt-dropdown-menu')].map( each  => each.innerText));
    const transcript = [];
    for( i=0; i<allLanguage.length; i++ ){
        await page.evaluate( ( i, allLanguage ) => {
            [...document.querySelectorAll('tp-yt-paper-listbox#menu.dropdown-content.style-scope.yt-dropdown-menu div.item.style-scope.yt-dropdown-menu')].find( item => item.innerText === allLanguage[i] ).click();
        },i, allLanguage);
        await page.waitForTimeout(500);
        const content = await page.evaluate( () =>
            document.querySelectorAll('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer')[0]
            .innerText.split(/\n{0,1}\d{2}:\d{2}\n/g).join(' '));
        transcript.push( { language:allLanguage[i], content } );
    }
    let pages = await browser.pages(); await Promise.all(pages.map(page =>page.close()));
    await browser.close();
    return { 
        success: true, 
        message: 'Transcript Extracted from Youtube', 
        errorTypeNo: null,
        transcript, 
        url
    };
    
};

module.exports = show;