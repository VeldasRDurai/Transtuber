const puppeteer = require('puppeteer');

const show = async ( link ) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto( link );
    
    const url = await page.evaluate( () => window.location.search.split('=')[1] );

    try{
        await page.waitForSelector('div#info.style-scope.ytd-video-primary-info-renderer');
        await page.evaluate( () => document.querySelectorAll('div#info.style-scope.ytd-video-primary-info-renderer yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer')[0].click() )
    } catch (e) {
        await browser.close();
        return { transcript:'Not a valid link', url: undefined };
    }
    
    await page.waitForTimeout(2000);
    // await page.waitForSelector('tp-yt-iron-dropdown.style-scope.ytd-popup-container');
    if( await page.evaluate( () => {
        const options = document.querySelectorAll('ytd-menu-service-item-renderer.style-scope.ytd-menu-popup-renderer');
        options.length ?  (() => { options[0].click(); return false; })() : true ;
    })){
        await browser.close();
        return { transcript:'No transcript available', url };
    }
    
    await page.waitForTimeout(2000);
    // await page.waitForSelector('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer');
    try{
        const transcript = await page.evaluate( () => {
            const allLanguage = [ ...document.querySelectorAll('tp-yt-paper-listbox#menu.dropdown-content.style-scope.yt-dropdown-menu div.item.style-scope.yt-dropdown-menu')];
            return allLanguage.map( each => {
                each.click();
                return { 
                    language : each.innerText, 
                    content  : document.querySelectorAll('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer')[0]
                        .innerText.split(/\n{0,1}\d{2}:\d{2}\n/g).join(' ') 
                };
            });
        });
        // await browser.close();
        return { transcript, url };
    } catch (e) {
        await browser.close();
        return { transcript : 'Not able to auto-generate transcript by youtube', url };
    }

    // await page.waitForTimeout(2000);
    // let allLanguage = [];
    // try{
    //     allLanguage = await page.evaluate( () => 
    //         document.querySelectorAll('tp-yt-paper-listbox#menu.dropdown-content.style-scope.yt-dropdown-menu div.item.style-scope.yt-dropdown-menu') );
    // } catch (e) {
    //     // await browser.close();
    //     console.log( e );
    //     return { transcript : 'Not able to auto-generate transcript by youtube', url };
    // } 
    // const transcript = allLanguage.map( async (each) => {
    //     each.click();
    //     await page.waitForSelector('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer');
    //     return { 
    //         language : each.innerText, 
    //         content  : document.querySelectorAll('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer')[0]
    //             .innerText.split(/\n{0,1}\d{2}:\d{2}\n/g).join(' ') 
    //     };
    // });
    // await browser.close();
    // return { transcript, url };
    
};

module.exports = show;