import axios from "axios";

// request severvices
const requester = axios.create({
    baseURL: 'https://elearningnew.cybersoft.edu.vn/',
    headers:{
        TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1NzIxMzIwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.uVmhasF9oy0mXFYvSl8tBIUY7ZRmZ-U0hLsBB75mkn8',
    },
});

// interceptor them access authoriztion token
requester.interceptors.request.use((req) => {
    req.headers = {
        ...req.headers,
        Authorization: "Bearer " + localStorage.getItem('Token'),
    };
    return req;
});

export default requester;