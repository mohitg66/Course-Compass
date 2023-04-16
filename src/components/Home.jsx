import { Link } from "react-router-dom"
import { useState } from "react"
import Navbar2 from "./Navbar2"
// import PostReview from "./PostReview"
import CollegeName from "./signUp/CollegeName"
import Course from "./home/Course"
import Instructor from "./home/Instructor"
// import svg from "../assets/workConsfused.svg"
import svg from "../assets/workConfused.svg"

export default () => {

    const [state, setState] = useState(false)
    const [stateOfReview, setStateOfReview] = useState(true)

    return (
        <>  
            {state ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
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
                            <form className="p-4 my-2 text-[15.5px] leading-relaxed text-gray-500">
                                <div className="grid grid-cols-2 grid-rows-3 gap-3">
                                    <div>
                                        <label for="course-name" className="block p-1 text-gray-600">
                                            Course Name
                                        </label>
                                        <Course />
                                    </div>

                                    <div>
                                        <label for="instructor" className="block p-1 text-gray-600">
                                            Instructor Name
                                        </label>
                                        <Instructor />
                                    </div>

                                    <div>
                                        <label for="overall-course-rating" className="block p-1 text-gray-600">
                                            Overall Course Rating
                                        </label>
                                        <input type="number" min="0.1" max="5" step="0.1" className="w-full p-2 text-gray-600 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="1-5" />
                                    </div>

                                    <div>
                                        <label for="difficulty" className="block p-1 text-gray-600">
                                            Difficulty Rating
                                        </label>
                                        <input type="number" min="0.1" max="5" step="0.1" className="w-full p-2 text-gray-600 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="1-5" />
                                    </div>

                                    <div>
                                        <label for="workload" className="block p-1 text-gray-600">
                                            Workload Rating
                                        </label>
                                        <input type="number" min="0.1" max="5" step="0.1" className="w-full p-2 text-gray-600 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="1-5" />
                                    </div>

                                    <div>
                                        <label for="average-grade" className="block p-1 text-gray-600">
                                            Average Grade
                                        </label>
                                        <input type="number" min="1" max="10" className="w-full p-2 text-gray-600 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="1-10" />
                                    </div>                                   

                                </div>

                                <label for="review" className="block p-1 mt-3 text-gray-600">
                                    Review
                                </label>
                                <textarea 
                                    className="w-full p-2 text-gray-600 border rounded-md overflow-auto focus:outline-none focus:border-indigo-500" 
                                    rows="6" 
                                    placeholder="Write your review here..."
                                />

                                {stateOfReview ? (
                                    
                                <div className="flex items-center gap-3 mt-2">
                                    <button className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
                                        onClick={() => (setStateOfReview(false), setTimeout(() => (setState(false), setStateOfReview(true)), 5000))}
                                    >
                                        Post
                                    </button>
                                    <button className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg shadow-md md:inline-flex"
                                        onClick={() => setState(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>) : (

                                <div className="mt-2 px-4 rounded-md border border-green-200 bg-green-50 w-full md:mr-auto md:px-4">
                                    <div className="flex justify-between py-3">
                                        <div className="flex">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="self-center ml-3">
                                                <span className="text-green-600 font-semibold">
                                                    Success
                                                </span>
                                                <p className="text-green-600 mt-1">
                                                    Your Review has been posted successfully!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </form>
                            
                        </div>
                    </div>
                </div>
            ) : ''}



            <div id='home' className="bg-gray-50 h-screen">

                <Navbar2 />

                <section id='hero' className="py-28">
                    <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                            <h1 className="text-sm text-indigo-600 font-medium">
                                Over 200 successful deals
                            </h1>
                            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                                We help startups to grow and make money
                            </h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                            </p>
                            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0 cursor-pointer">
                                <a 
                                    // href="#postreview" 
                                    className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
                                    onClick={() => setState(true)}
                                >
                                    Post a Review
                                </a>
                                <Link to="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg shadow-md md:inline-flex">
                                    View Reviews
                                </Link>
                            </div>
                        </div>
                        <div className="flex-none mt-14 md:mt-0 md:max-w-lg">
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