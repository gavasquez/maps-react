import axios from "axios";


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZ2F2YXNxdWV6IiwiYSI6ImNsY3prNWY4ZjA2OHUzcHBmeDY2ZjhudW0ifQ.vTWtskcjVNj6xIB6sqQg_A'
    }
});

export default searchApi;