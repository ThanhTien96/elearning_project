import axios from "axios";

// request severvices
const requester = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        TokenCybersoft: process.env.REACT_APP_API_TOKEN,
    },
});

export default requester;