import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');

    // Create the submit method.
    const submit = async e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
            // email: email
        };
        try {
            // Create the POST request
            const response = await
                axios.post(window.API + '/login/',
                    user,
                    { headers: { 'Content-Type': 'application/json' } }
                );


            // Set the access token and refresh token.
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            localStorage.setItem('user_name', username);
            localStorage.setItem('user_id', response.data.id);

            // Set the axios default header.
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

            // Redirect to the home page.
            window.location.href = '/';
            // console.log("Logged in successfully")
            // console.log("data", response.data)
            // console.log("localStorage", localStorage)
        }

        catch (e) {
            alert("Please enter valid credentials")
            console.log("Login failed", e)
        }
    }

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center pb-8">
                    {/* <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" /> */}
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="text-center">Don't have an account? <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">Sign up</Link></p>
                    </div>
                </div>
                <form
                    className="space-y-3"
                    onSubmit={submit}
                    method='POST'
                >
                    <div>
                        <input
                            name='username'
                            type="username"
                            required
                            className="w-full px-4 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    {/* <div>
                        <input
                            name='email'
                            type="email"
                            required
                            className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div> */}
                    <div>
                        <input
                            name='password'
                            type="password"
                            required
                            className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* <div className="flex items-center justify-between text-sm">
                        <a href="#" className="text-center text-blue-600 hover:text-blue-500">Forgot password?</a>
                    </div> */}

                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-5 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-lg duration-150"
                    >
                        Sign in
                    </button>
                </form>

                {/* <button className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-4 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_17_40)">
                        <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                        <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                        <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                        <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                    </g>
                    <defs>
                        <clipPath id="clip0_17_40">
                            <rect width="48" height="48" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                Continue with Google
            </button> */}
            </div>
        </main>
    )
}