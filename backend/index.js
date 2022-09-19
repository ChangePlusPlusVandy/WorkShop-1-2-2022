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
const getRandomCatImages = async () => {
	const response = await axios.get("https://cataas.com/cat");

	console.log("response: ", response.data);
};

getRandomCatImages();
