import { useEffect } from "react";
import axios from "axios";
export default () => {
    useEffect(() => {
        (async () => {
            try {
                await axios.post(
                    window.API + '/logout/',
                    { refresh_token: localStorage.getItem('refresh_token') },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`
                        }
                    },
                    { withCredentials: true }
                );
        console.log('logging out');
        localStorage.clear();
        axios.defaults.headers.common['Authorization'] = null;
        window.location.href = '/home';
    } catch (e) {
        console.log('logout not working');
    }
}) ();
    }, []);
return (
    <div></div>
);
}