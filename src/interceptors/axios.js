import axios from "axios";
import { useNavigate } from "react-router-dom";
let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401 && !refresh) {
        refresh = true;
        console.log("refreshing token")
        console.log(localStorage.getItem('refresh_token'))
        try {
            const response = await axios.post(
                window.API + '/token/refresh/',
                {
                    refresh: localStorage.getItem('refresh_token')
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );
            if (response.status === 200) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                return axios(error.config);
            }
        } catch (refreshError) {
            // Redirect to login page, using react
            console.log("refresh error, redirecting to login page");
            console.log(refreshError)
            const navigate = useNavigate();
            navigate('/login');            
        }
    }
    refresh = false;
    return error;
});