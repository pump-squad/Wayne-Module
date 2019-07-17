const Scraper = require('images-scraper');
const google = new Scraper.Google();
 
google.list({
    keyword: 'west elm Viv Swivel Chair luxe boucle white',
    num: 10,
    detail: true,
    nightmare: {
        show: true
    }
})
.then(function (res) {
    console.log('first 10 results from google', res[res.length - 1].url);
}).catch(function(err) {
    console.log('err', err);
});
 
// you can also watch on events
google.on('result', function (item) {
    console.log('out', item);
});


