const axios = require('axios');

const baseUrl = 'http://127.0.0.1:8000/'

export const httpGet = async (endpoint) => {
    return axios.get(baseUrl + endpoint, {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const httpPost = async (endpoint, data, config =
    {headers: {authorization: 'Bearer ' + localStorage.getItem('token')}}) => {
    return axios.post(baseUrl + endpoint, data, config)
}
export const httpPost2 = async (endpoint, data) => {
    return axios.post(baseUrl + endpoint, data,
    )
}
export const httpPut = async (endpoint, data) => {
    return axios.put(baseUrl + endpoint, data, {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const httpDelete = async (endpoint) => {
    return axios.delete(baseUrl + endpoint, {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
}