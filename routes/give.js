var express = require('express');
var router = express.Router();

const show = require('./dowloader');

router.post('/', async (req, res, next) => {
    console.log( req.body );
    const { transcript, allLanguage, url } = await show( req.body.link );
    res.json({ name : 'veldasrdurai72', transcript, url, allLanguage }).send();
    //   res.render('index/index', { title: 'Express' });
});

module.exports = router;

// https://www.youtube.com/watch?v=z9W0GQvONKc

// await page.waitForTimeout(2000);
// // await page.waitForSelector('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer');
// try{
//     const allLanguage = await page.evaluate( () =>
//         [...document.querySelectorAll('tp-yt-paper-listbox#menu.dropdown-content.style-scope.yt-dropdown-menu div.item.style-scope.yt-dropdown-menu')].map( each  => each.innerText)
//     );
//     const transcript = await page.evaluate( () =>
//         document.querySelectorAll('ytd-transcript-body-renderer.style-scope.ytd-transcript-renderer')[0]
//             .innerText.split(/\n{0,1}\d{2}:\d{2}\n/g).join(' ')
//     );
//     // await browser.close();
//     console.log( allLanguage );
//     return { transcript, allLanguage, url };
// } catch (e) {
//     console.log(e);
//     // await browser.close();
//     return { transcript : 'Not able to auto-generate transcript by youtube', url };
// }