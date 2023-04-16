// import { useState } from "react"
// import { Link } from "react-router-dom"

// export default () => {
//     const [state, setState] = useState(false)

//     const navigation = [
//         { title: "Features", path: "features" },
//         { title: "Team", path: "team" },
//     ]

    // const scrollToSection = (event, sectionId) => {
    //     event.preventDefault();
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //       section.scrollIntoView({ behavior: "smooth" });
    //     }
    // }

//     return (
//         <>
//             <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
//                 <div className="flex justify-between">
//                     <a href="javascript:void(0)">
//                         <img
//                             src="https://www.floatui.com/logo.svg"
//                             width={120}
//                             height={50}
//                             alt="Float UI logo"
//                         />
//                     </a>
//                     <button className="text-gray-500 outline-none md:hidden"
//                         onClick={() => setState(!state)}
//                     >
//                         {
//                             state ? (
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             ) : (

//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                                 </svg>
//                             )
//                         }
//                     </button>
//                 </div>
//                 <ul className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${state ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'}`}>
//                     <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
//                         {
//                             navigation.map((item, idx) => (
//                                 <li className="text-gray-500 hover:text-indigo-600" key={idx}>
//                                     <a href={item.path} onClick={(e) => scrollToSection(e, item.path)}>{item.title}
//                                     </a>
//                                 </li>
//                             ))
//                         }
//                     </div>
//                     <li className="order-2 py-5 md:py-0">
                        // <Link to="/signup" className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline">
                        //     Get started
                        // </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </>
//     )
            
// }


import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"


// Profile Dropdown
// const ProfileDropDown = (props) => {

//     const [state, setState] = useState(false)
//     const profileRef = useRef()

//     const navigation = [
//         { title: "Dashboard", path: "javascript:void(0)" },
//         { title: "Settings", path: "javascript:void(0)" },
//         { title: "Log out", path: "javascript:void(0)" },
//     ]

    
//     useEffect(() => {
//         const handleDropDown = (e) => {
//             if (!profileRef.current.contains(e.target)) setState(false)
//         }
//         document.addEventListener('click', handleDropDown)
//     }, [])

//     return (
//         <div className={`relative ${props.class}`}>
//             <div className="flex items-center space-x-4">
//                 <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
//                     onClick={() => setState(!state)}
//                 >
//                     <img
//                         src="https://randomuser.me/api/portraits/men/46.jpg"
//                         className="w-full h-full rounded-full"
//                     />
//                 </button>
//                 <div className="lg:hidden">
//                     <span className="block">Micheal John</span>
//                     <span className="block text-sm text-gray-500">john@gmail.com</span>
//                 </div>
//             </div>
//             <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
//                 {
//                     navigation.map((item, idx) => (
//                         <li>
//                             <a key={idx} className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" href={item.path}>
//                                 {item.title}
//                             </a>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

export default () => {

    const [menuState, setMenuState] = useState(false)

  // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Features", path: "features" },
        { title: "Team", path: "team" },
        { title: "Guides", path: "javascript:void(0)" },
        { title: "Partners", path: "javascript:void(0)" },
    ]

    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <nav className="bg-white border-b">
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <a href="javascript:void(0)">
                        <img
                            src="https://www.floatui.com/logo.svg" 
                            width={120} 
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-gray-600 hover:text-gray-900">
                                        <a href={item.path} onClick={scrollToSection()} >
                                            {item.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        {/* <ProfileDropDown 
                            class="mt-5 pt-5 border-t lg:hidden"
                        /> */}
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        {/* <form className="flex items-center space-x-2 border rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                                type="text"
                                placeholder="Search"
                            />
                        </form> */}
                        {/* <ProfileDropDown 
                            class="hidden lg:block"
                        /> */}

                        <Link to="/signup" className="py-2 px-5 rounded-lg whitespace-nowrap font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline">
                            Get started
                        </Link>

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
                </div>
            </div>
        </nav>
    )
}