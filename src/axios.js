import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/challenge-62d91/us-central1/api' // The API (cloud function)

})

export default instance;