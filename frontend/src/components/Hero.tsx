import { useEffect, useState } from 'react'
import Graphics1 from "../assets/Graphics3.png"
import Navbar from './Navbar'

export default () => {

    // const [state, setState] = useState(false)

    // // Replace javascript:void(0) paths with your paths
    // const navigation = [
    //     { title: "Features", path: "javascript:void(0)" },
    //     { title: "Integrations", path: "javascript:void(0)" },
    //     { title: "Customers", path: "javascript:void(0)" },
    //     { title: "Pricing", path: "javascript:void(0)" }
    // ]

    // useEffect(() => {
    //     document.onclick = (e) => {
    //         const target = e.target;
    //         if (!target.closest(".menu-btn")) setState(false);
    //     };
    // }, [])


    // const Brand = () => (
    //     <div className="flex items-center justify-between py-5 md:block">
    //         <a href="javascript:void(0)">
    //             <img
    //                 src="https://www.floatui.com/logo.svg"
    //                 width={120}
    //                 height={50}
    //                 alt="Float UI logo"
    //             />
    //         </a>
    //         <div className="md:hidden">
    //             <button className="menu-btn text-gray-500 hover:text-gray-800"
    //                 onClick={() => setState(!state)}
    //             >
    //                 {
    //                     state ? (
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
    //                             <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    //                         </svg>
    //                     ) : (
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //                         </svg>
    //                     )
    //                 }
    //             </button>
    //         </div>
    //     </div>
    // )

    return (
        <div className='relative top-0'>
            <div className='absolute inset-0 blur-xl min-h-screen' style={{ background: "linear-gradient(143.6deg, rgba(132, 186, 252, 0.1) 20.79%, rgba(121,180,249,0.1) 40.92%, rgba(171,201,238,0) 70.35%)" }}></div>
            <div className='relative'>
                {/* <header>
                    <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                        <Brand />
                    </div>
                    <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                            <Brand />
                            <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                                <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                    {
                                        navigation.map((item, idx) => {
                                            return (
                                                <li key={idx} className="text-gray-700 hover:text-gray-900">
                                                    <a href={item.path} className="block">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                                    <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                        Sign in
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header> */}
                <section className='min-h-screen'>
                    <div className="max-w-screen-xl mx-auto px-8 py-40 md:py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                        <div className='flex flex-col justify-center space-y-5 max-w-xl animate-fade-up animate-duration-[1500ms]'>
                            {/* <a href="javascript:void(0)" className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white'>
                                <span className='inline-block rounded-full px-3 py-1 bg-indigo-600 text-white'>
                                    News
                                </span>
                                <p className='flex items-center'>
                                    Read the launch post from here
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </p>
                            </a> */}
                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl ">
                                Find Jobs, Employment & Career Opportunities
                            </h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-3 px-5 text-white text-lg bg-blue-500 duration-150 hover:bg-blue-600 active:bg-blue-900 rounded-full md:inline-flex">
                                    Explore Jobs
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-3 px-5 text-black rounded-full text-lg bg-slate-200 hover:bg-slate-300 active:bg-slate-400 duration-150 md:inline-flex">
                                    Publish Jobs
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className='flex-1 hidden md:block animate-fade animate-duration-[1200ms] animate-delay-300'>
                            {/* Replace with your image */}
                            <img src={Graphics1} className="" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}