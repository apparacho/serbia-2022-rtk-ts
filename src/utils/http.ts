import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

api.defaults.headers.post['Accept'] = 'application/json'
api.defaults.headers.post['Content-Type'] = 'application/json'

export default api;