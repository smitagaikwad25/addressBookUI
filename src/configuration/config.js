const axios = require('axios');

export function registerUser(data) {
    console.log("apicall at config",data);
    return axios({
        method: "POST",
        url: "http://localhost:3001/create/record",
        data: data
    });
}