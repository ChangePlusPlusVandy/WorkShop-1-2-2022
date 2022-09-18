// read the first 10 rows in  local csv file and convert to json array
const csv = require('csvtojson');
const path = require('path');
const csvFilePath = path.join(__dirname, 'taylor_swift_lyrics.csv');


const csvToJson = async () => {
    const songsArray = await csv().fromFile(csvFilePath);

    // select first 10 songs from the json array
    for (var i = 0; i < 10; ++i){
        console.log(songsArray[i]);
    }

    // todo: The sequence is up to you
};

// TODO: to make api calls (implemented in js but not node.js) we need an outside library called node-fetch
const axios = require('axios').default;
const tracksFromRed = async () => {

    const BASE_URL = 'https://api.musixmatch.com/ws/1.1/'
    const API_KEY = '536d9d1b5892a02a2c5bab06ddf63747'
    const red_album_id = 49062023;

    const res = await axios.get(BASE_URL + 'album.tracks.get', {
        params: {
            album_id: red_album_id,
            apikey: API_KEY,
            page: 1,
            page_size: 5
        }
    });

    const tracks = res.data.message.body.track_list;
    for (var i = 0; i < tracks.length; ++i){
        console.log(`id: ${tracks[i].track.track_id}, Name: ${tracks[i].track.track_name}`);
    }
}

tracksFromRed();
