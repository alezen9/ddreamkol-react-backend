const router = require('express').Router();
const fetch = require('node-fetch');
const keys = require('../config/keys');

const TOKEN = keys.facebook.token;
const PAGE_ID = keys.facebook.pageID;


// get pictures of a specific album
router.get('/getPhotos/:album', (req, res) => {
    fetch(`https://graph.facebook.com/v2.8/${PAGE_ID}?fields=albums{name, photos{images, name}}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN,
        }
    })
        .then(response => response.json())
        .then(data => {
            let r = data.albums.data.filter(el => el.name === req.params.album)
            res.send(r[0].photos.data);
        })
        .catch(err => res.send(JSON.stringify(err)));
})


module.exports = router;