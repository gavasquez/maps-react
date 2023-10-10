import axios from "axios";


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZ2F2YXNxdWV6IiwiYSI6ImNsY3prNWY4ZjA2OHUzcHBmeDY2ZjhudW0ifQ.vTWtskcjVNj6xIB6sqQg_A'
    }
});

export default directionsApi;