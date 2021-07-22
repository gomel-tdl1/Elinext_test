import * as axios from "axios";

export const api_key = '7b561199692b1ffc46c33900ae0b1e59';

const instance = axios.create({
    baseURL: 'https://www.flickr.com/services/rest/',
    headers: {}
});

export const photosAPI = {
    getPhotosData(text, currentPage) {
        return instance.get(`?method=flickr.photos.search&api_key=${api_key}&text=${text}&extras=description%2Clicense%2Cowner_name%2Coriginal_format%2Ctags%2Curl_o%2Curl_c&per_page=21&page=${currentPage}&format=json&nojsoncallback=1`);
    },
};