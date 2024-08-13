import axios from 'axios';

let refresh = false;

axios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === 401 && !refresh) {
      refresh = true;
      console.log("Refreshing token...");
      console.log("localStorage", localStorage);
      const refreshToken = localStorage.getItem('refresh_token');

      if (refreshToken) {
        try {
          const response = await axios.post(
            `${window.API}/token/refresh/`,
            { refresh: refreshToken },
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
            }
          );

          console.log("Token refreshed successfully");
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);

          // Retry the original request with the new access token
          error.config.headers['Authorization'] = `Bearer ${response.data.access}`;
          refresh = false;
          return axios(error.config);

        } catch (err) {
          console.log("Refresh error, redirecting to login page", err);
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          alert("Session expired, please login again");
          window.location.href = '/login';
        }
      } else {
        console.log("No refresh token available, redirecting to login page");
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        alert("Session expired, please login again");
        window.location.href = '/login';
      }
    }

    refresh = false;
    return Promise.reject(error);
  }
);