import { useState } from 'react'
import logo from "../assets/Logo.png"

export default () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Find Jobs", path: "/jobs" },
        { title: "Employers", path: "/emp/dashboard" },
        { title: "Candidates", path: "/can/dashboard" },
        { title: "About", path: "/about" }
    ]

    function handleScroll(){
        const navbar: Element | null = document.querySelector("nav");
        if(window.scrollY !== 0){
            navbar.classList.remove("p-5");
            navbar.classList.add("p-3");
            // navbar.classList.remove("");
            navbar.classList.add("shadow");
            navbar.classList.add("rounded-full");
            navbar.classList.add("m-5");
            // navbar.classList.add("backdrop-blur-lg");
        }
        else{
            navbar.classList.remove("p-3");
            navbar.classList.add("p-5");
            navbar.classList.remove("shadow");
            navbar.classList.remove("rounded-full");
            // navbar.classList.add("w-full");
            // navbar.classList.remove("p-5");
            navbar.classList.remove("m-5");
            // navbar.classList.remove("backdrop-blur-lg");
        } 
        
    }
    // document.addEventListener("scroll",handleScroll);

    return (
        <nav className="transition-all ease-linear duration-200 z-50 w-full top-0 fixed bg-white p-3 shadow" >
            <div className=" items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img className='w-full h-10' src={logo} alt="workRlay logo"/>
                        {/* <h1 className='text-3xl font-mono font-bold'>workRlay</h1> */}
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-700 hover:text-blue-600 text-lg">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                                <a href="/login" className="block py-3 text-center text-lg text-gray-700 hover:text-blue-600 border rounded-lg md:border-none">
                                    Log in
                                </a>
                            </li>
                            <li>
                                <a href="/signup" className="block py-2 px-3 text-lg text-center text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 active:shadow-none rounded-lg shadow md:inline">
                                    Sign Up
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}