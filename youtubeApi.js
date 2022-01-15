import axios from 'axios';
const KEY = 'AIzaSyASVp2I81OfQ_sYRhh0SgP73PhyyFXwBoo';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})