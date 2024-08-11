import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import profileIcon from "/images/profileIcon.png"
import { Link } from "react-router-dom"
import logo from "/images/logo.svg"
import Select from 'react-select';
import { useApi } from '../ApiContext.jsx';

// Profile Dropdown
const ProfileDropDown = (props) => {

    const [state, setState] = useState(false)
    const profileRef = useRef()

    const navigation = [
        { title: "Profile", path: "#" },
        { title: "Log out", path: "/logout" },
    ]

    useEffect(() => {
        const handleDropDown = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setState(false);
            }
        }
        document.addEventListener('click', handleDropDown);

        // Cleanup: remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleDropDown);
        };
    }, []);

    

    return (
        <div className={`mx-2 relative ${props.class}`}>
            <div className="hidden lg:flex items-center space-x-4">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-gray-400"
                    onClick={() => setState(!state)}
                >
                    <img
                        src={profileIcon}
                        className="w-full h-full rounded-full"
                    />
                </button>
            </div>
            <ul className={`bg-white top-12 right-0 space-y-5 rounded-sm lg:absolute lg:border lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, idx) => (
                        <li key={idx}>
                            <Link key={idx} className="block text-gray-600 lg:hover:bg-gray-100 lg:p-2.5" to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default () => {
    const navigate = useNavigate();

    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);

    const [menuState, setMenuState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Courses", path: "/courses" },
        { title: "Contact", path: "/contact" },
        //   { title: "Guides", path: "javascript:void(0)" },
        //   { title: "Partners", path: "javascript:void(0)" },
    ]

    const { courses: data , loading, error } = useApi();
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        if (data)
            setCourses(data.map((course) => ({
                value: course.id,
                label: course.acronym + ' - ' + course.name + ' (' + course.instructor + ')',
            })));
    }, [data]); 

    useEffect(() => {
        if (course)
            navigate(`/courses/${course.value}`);
    }
    , [course]);

    return (
        <nav className="sticky top-0 border-b bg-white z-20 shadow-md">
            <div className="bg-white flex items-center justify-between space-x-8 py-2.5 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <Link to="/home">
                        <img
                            src={logo}
                            width="60"
                            // height={50}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="bg-white flex-1 flex items-center justify-between">
                    <div className={`bg-white border-b w-1/2 absolute z-20 top-16 right-0 p-4 lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="hidden lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="bg-white text-gray-600 hover:text-gray-900">
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>


                        <ProfileDropDown
                            class="bg-white lg:hidden"
                        />
                    </div>

                    {isAuth ?

                        <div className="flex-1 flex items-center justify-end space-x-6">
                            <form className="flex-1 flex items-center max-w-lg"
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    navigate(`/courses/${course.value}`)
                                }}
                            >
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg> */}
                                <Select
                                    className="w-full"
                                    id="course"
                                    name="course"
                                    options={courses}
                                    value={course}
                                    onChange={(selectedOption) => {setCourse(selectedOption)}}
                                    isSearchable
                                    placeholder="Search"
                                />
                            </form>
                            <ProfileDropDown
                                class="bg-white hidden lg:block"
                            />


                            <button
                                className="outline-none text-gray-400 block lg:hidden"
                                onClick={() => setMenuState(!menuState)}
                            >
                                {
                                    menuState ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>

                        : <div className="flex flex-1 items-center justify-end space-x-6 lg:space-x-8">
                            <Link className="my-auto py-1 px-3 lg:py-2 lg:px-5 rounded-lg font-medium border border-blue-600 text-blue-600 text-center bg-white hover:bg-gray-100 active:bg-white duration-150 block"
                                to="/login">Log In</Link>

                            <Link className="my-auto py-1 px-3 lg:py-2 lg:px-5 rounded-lg font-medium text-white text-center bg-blue-600 border border-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 block"
                                to="/signup">Sign Up</Link>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}