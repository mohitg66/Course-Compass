import { useState } from "react"
import { Link } from "react-router-dom"
import Contact1 from "./Contact1"
import Navbar1 from "./Navbar1"
import svg from "/images/WorkConfused.svg"
import logo from "/images/logo.svg"
import profileIcon from "/images/profileIcon.png"

export default () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Features", path: "features" },
        { title: "Team", path: "team" },
        { title: "Contact", path: "contact" },
    ]

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            title: "Course Reviews",
            desc: "A system that allows students to rate and review courses they have taken, providing feedback on course content, teaching quality, workload, and overall value."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Course comparison tool",
            desc: "A feature that allows students to compare different courses based on factors such as duration, cost, level of difficulty, and student ratings"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: "Instructor profiles",
            desc: "A page dedicated to each instructor, featuring their bio, areas of expertise, teaching style, and ratings from students who have taken their courses."
        }
    ]
    
    const team = [
        {
            avatar: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
            name: "Mohit Gupta",
            title: "Website Developer",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
            name: "Abhinav Sharma",
            title: "Website Designer",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
            name: "Devank Singh",
            title: "Website Designer",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
            name: "Param Kumar",
            title: "Website Developer",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
            name: "Harsh Bhardwaj",
            title: "Product designer",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
    ]
    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    }


    return (
        <>
        <div id='top' className="">
            {/* <div className="h-screen"> */}
            <nav className="sticky top-0 bg-white border-b shadow">
                <div className="flex justify-between items-center py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                    <div className="w-full md:w-auto flex justify-between">
                        <a href="javascript:void(0) " onClick={(e) => scrollToSection(e, 'top')} >
                            <img
                                src={logo}
                                width="60"
                                // height="50"
                                alt="logo"
                            />
                        </a>
                        <button className="text-gray-500 outline-none md:hidden"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                    <ul className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${state ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'}`}>
                        <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
                            {
                                navigation.map((item, idx) => (
                                    <li className="text-gray-600 hover:text-gray-900" key={idx}>
                                        <a href={item.path} onClick={(e) => scrollToSection(e, item.path)}>{item.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </div>
                        <li className="flex gap-4 py-5 md:py-0">
                            <Link to="/signin" className="my-auto py-1 px-5 rounded-lg font-medium border border-blue-600 text-blue-600 text-center bg-white hover:bg-gray-100 active:bg-bg-white duration-150 block md:py-2 md:inline">
                                Log in
                            </Link>
                            <Link to="/signin" className="my-auto py-1 px-5 rounded-lg font-medium text-white text-center bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 block md:py-2 md:inline">
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* <Navbar1 /> */}

            <section id='hero' className="py-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 gap-y-8 items-center justify-between overflow-hidden flex flex-col-reverse md:flex md:flex-row md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        {/* <h1 className="text-sm text-blue-600 font-medium">
                            Over 200 successful deals
                        </h1> */}
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            {/* We help startups to grow and make money */}
                            Helping students choose their courses wisely
                        </h2>
                        <p>
                            With Course Compass, you can easily search and compare courses based on factors such as difficulty, workload, average grade, class size and overall quality.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link to="/signup" className="block py-2 px-4 text-center text-white font-medium bg-blue-600 duration-150 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg hover:shadow-none">
                                Get started
                            </Link>
                            {/* <Link to="/signup" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Get access
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </Link> */}
                        </div>
                    </div>
                    <div className="flex-none md:mt-0 md:max-w-lg">
                        <img
                            src={svg}
                            alt="img"
                        />
                    </div>
                </div>
            </section>
            {/* </div> */}


            <section id='features' className="py-14 pt-28">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="max-w-xl space-y-3">
                        <h3 className="text-blue-600 font-semibold">
                            Features
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Do more with less complexity
                        </p>
                        <p>
                        Our platform provides comprehensive reviews and ratings of courses and instructors, as well as a wealth of information about different institutions and programs.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}>
                                        <div className="w-12 h-12 border text-blue-600 rounded-full flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <section id='team' className="py-14 pt-28">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-xl space-y-3">
                        <h3 className="text-blue-600 font-semibold">
                            Team
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Meet our team
                        </p>
                        <p className="text-gray-600 mt-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                team.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-center">
                                        <div className="flex-none w-24 h-24">
                                            <img
                                                src={profileIcon}
                                                className="w-full h-full rounded-full"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                            <p className="text-gray-700">{item.title}</p>
                                            <div className="mt-3 flex gap-4 text-gray-400">
                                                <a href={item.twitter}>
                                                    <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                </a>
                                                <a href={item.linkedin}>
                                                    <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-14 my-14">
                <Contact1 />
            </section>

            <footer className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10 py-10 border-t items-center justify-between sm:flex">
                <p className="text-gray-600">© 2023 Course Compass</p>
                <div className="flex items-center gap-x-6 text-gray-400">
                    <a href="javascript:void()">
                        <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clip-path="url(#a)"><path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                    </a>
                    <a href="javascript:void()">
                        <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                    </a>
                    <a href="javascript:void()">
                        <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g fill="currentColor" clip-path="url(#clip0_910_44)"><path fill-rule="evenodd" d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z" clip-rule="evenodd" /><path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" /></g><defs><clipPath id="clip0_910_44"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                    </a>
                    <a href="javascript:void()">
                        <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_63)"><path d="M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z" /><path d="M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z" /></g><defs><clipPath id="clip0_17_63"><path d="M0 0h48v48H0z" /></clipPath></defs></svg>
                    </a>
                </div>
            </footer>
        </div>
        </>
    )
}