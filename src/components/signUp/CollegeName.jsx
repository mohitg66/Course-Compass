import { useEffect, useRef, useState } from "react"

export default () => {

    const menuItems = [
        {
            name: "IIITD",
            avatar: "https://www.iiitd.ac.in/sites/default/files/images/logo/logo.jpg"
        }, {
            name: "NSUT",
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
        }, {
            name: "DTU",
            avatar: "https://randomuser.me/api/portraits/men/86.jpg"
        }, {
            name: "IGDTU",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
        }, {
            name: "GGSIPU",
            avatar: "https://randomuser.me/api/portraits/men/46.jpg"
        },
    ]

    const [selectedItem, setSelectedItem] = useState({
        item: menuItems[0],
        idx: 0
    })
    const [state, setState] = useState(false)

    const listboxRef = useRef()

    const handleSearch = (e) => {
        const menuEls = document.querySelectorAll('.menu-el-js')
        const searchVal = e.target.value.toLocaleLowerCase()
        const alrtEl = document.getElementById("li-alert")
        const handleAlert = () => {
            if (listboxRef.current && listboxRef.current.offsetHeight < 5) alrtEl.classList.remove("hidden")
            else alrtEl.classList.add("hidden")
        }
        handleAlert()
        setTimeout(() => handleAlert(), 100)

        menuEls.forEach((el, idx) => {
            el.classList.remove("hidden")
            if (!menuItems[idx].name.toLocaleLowerCase().includes(searchVal)) {
                el.classList.add("hidden")
            }
        })
    }

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".label-button")) setState(false)
        };
    }, [])

    return (
        <div className="relative w-full text-base z-20">
            {
                state ? (
                    <div className="label-button flex items-center gap-1 px-2 border rounded-lg shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Type to search"
                            className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                            onChange={handleSearch}
                        />
                        <button
                            onClick={() => setState(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                    </div>
                ) : (

                    <button className="label-button flex items-center gap-2 w-full px-3 py-2 text-gray-500 bg-white border rounded-md shadow-sm cursor-default outline-none focus:border-blue-600"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-labelledby="listbox-label"
                        onClick={() => setState(true)}
                    >
                        <img src={selectedItem.item.avatar} className="w-6 h-6 rounded-full object-contain" />
                        <div className="flex-1 text-left flex items-center gap-x-1">
                            {selectedItem.item.name}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                )
            }

            {
                state ? (
                    <div className="relative w-full">
                        <ul ref={listboxRef} className="absolute w-full mt-3 overflow-y-auto bg-white border rounded-md shadow-sm max-h-64" role="listbox">
                            <li id="li-alert" className="hidden px-3 py-2 text-center text-gray-600">Not results available</li>
                            {
                                menuItems.map((el, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => setSelectedItem({
                                            item: el,
                                            idx
                                        })}
                                        role="option"
                                        aria-selected={selectedItem.idx == idx ? true : false}
                                        className={`${selectedItem.idx == idx ? 'text-blue-600 bg-blue-50' : ''} menu-el-js flex items-center justify-between gap-2 px-3 py-2 cursor-default duration-150 text-gray-500 hover:text-blue-600 hover:bg-blue-50`}
                                    >
                                        <img src={el.avatar} className="w-6 h-6 rounded-full object-contain" />
                                        <div className="flex-1 text-left flex items-center gap-x-1">
                                            {el.name}
                                        </div>
                                        {
                                            selectedItem.idx == idx ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            ) : ''
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ) : ''
            }
        </div>
    )
}