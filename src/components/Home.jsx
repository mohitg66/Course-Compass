import { Link } from "react-router-dom"
import { useState } from "react"
import Navbar2 from "./Navbar2"
// import PostReview from "./PostReview"
import CollegeName from "./signUp/CollegeName"
import Course from "./home/Course"
import Instructor from "./home/Instructor"
// import svg from "../assets/workConsfused.svg"
import svg from "/images/WorkConfused.svg"
import Form from "./home/Form"

export default () => {

    const [state, setState] = useState(false)

    // if escape is pressed, close the modal
    document.onkeydown = (e) => {
        if (e.key === 'Escape') setState(false)
    }

    return (
        <>
            <div className={`fixed inset-0 z-30 overflow-y-auto ${state ? 'block' : 'hidden'}`}>
                <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-5xl mx-auto bg-white rounded-md shadow-lg">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h4 className="p-1 text-xl font-medium text-gray-800">
                                Course Review
                            </h4>
                            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                onClick={() => setState(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <Form />

                    </div>
                </div>
            </div>


            <div id='home' className="bg-gray-50 h-screen flex flex-col">

                <Navbar2 />

                <section id='hero' className="flex-1 h-full border flex items-center justify-center">
                  <div className="max-w-screen-xl text-gray-600 m-auto gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                      {/* <h1 className="text-sm text-blue-600 font-medium">
                          Over 200 successful deals
                      </h1> */}
                      <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        Detailed qualitative and quantitaive course reviews
                      </h2>
                      <p>
                        With Course Compass, you can easily search and compare courses based on factors such as difficulty, workload, average grade, class size and overall quality.
                      </p>
                      <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0 cursor-pointer">
                        <a
                          // href="#postreview" 
                          className="block py-2 px-4 text-center text-white font-medium bg-blue-600 duration-150 hover:bg-blue-500 active:bg-blue-700 rounded-lg lg:shadow-lg hover:shadow-none"
                          onClick={() => setState(true)}
                        >
                          Post a Review
                        </a>
                        <Link to="/courses" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg lg:shadow-md md:inline-flex">
                          View Reviews
                        </Link>
                      </div>
                    </div>
                    <div className="hidden lg:block flex-none mt-14 md:mt-0 md:max-w-lg">
                      <img
                        src={svg}
                        alt="img"
                      />
                    </div>
                  </div>
                </section>
            </div>
        </>
    )
}

// // Import the react JS packages
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar2 from "./Navbar2";

// // Define the Login function.
// export default () => {
//     const [message, setMessage] = useState('');
//     useEffect(() => {
//         if (localStorage.getItem('access_token') === null) {
//             window.location.href = '/login'
//         }
//         else {
//             (async () => {
//                 try {
//                     const { data } = await axios.get(
//                         'http://localhost:8000/home/', {
//                         headers: {
//                             'Content-Type': 'application/json',
//                             Authorization: `Bearer ${localStorage.getItem('access_token')}`
//                         }
//                     }
//                     );
//                     setMessage(data.message);
//                 } catch (e) {
//                     console.log('not auth');
//                 }
//             })()
//         };
//     }, []);
//     return (
//         <div>
//             <Navbar2 />
//             <div className="form-signin mt-5 text-center">
//                 <h3>{message}</h3>
//             </div>
//         </div>
//     );
// }