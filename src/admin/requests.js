import axios from 'axios';

const token = localStorage.getItem('token');
if(!token) console.warn('Отсутствует')

const requests = axios.create({
    baseURL: 'https://webdev-api.loftschool.com/',
    headers: {
        'Authorization': `Bearer ${token}`
    }
});


requests.interceptors.response.use(
    response => response,

    async error => {
        const originalRequest = error.config;

        if(error.response.status === 401) {
           const response = await requests.post('/refreshToken');
           const token = response.data.token;

           localStorage.setItem('token', token);
           requests.defaults.headers['Authorization'] = `Bearee ${token}`;
           originalRequest.headers['Authorization'] = `Bearee ${token}`;
           return axios(originalRequest);

        }

        return Promise.reject(error);
    }
);
export default requests;

