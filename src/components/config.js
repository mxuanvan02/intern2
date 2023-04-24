const API_URL = 'https://newsapi.org/v2/';
const API_KEY = '5b2a127c4bf1411c8a3de122fd6c7fde';

const ARTICLES_URL = `${API_URL}everything?apiKey=${API_KEY}&pageSize=10&sortBy=relevancy`
const HOTS_URL = `${API_URL}top-headlines?apiKey=${API_KEY}&country=us&pageSize=4&sortBy=publishedAt`
export {
    API_URL,
    API_KEY,
    ARTICLES_URL,
    HOTS_URL,
}