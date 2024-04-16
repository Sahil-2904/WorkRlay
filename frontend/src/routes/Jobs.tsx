import Footer from "@/components/Footer";
import Jobcard from "@/components/Jobcard";
import Navbar from "@/components/Navbar";
import React from "react";
import Jobsection from "@/components/Jobsection"

function Jobs() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center bg-gradient-to-tl from-blue-200 via-blue-300 to-blue-400/80 p-10">
                <div className="flex flex-col justify-center p-8">
                    <h2 className=" text-4xl text-center">Find Jobs</h2>
                    <div className="flex justify-center items-center py-4 overflow-x-auto whitespace-nowrap">
                        <a href="/" className="text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </a>

                        <span className="mx-5 text-gray-500  rtl:-scale-x-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>

                        <a href="/jobs" className="text-gray-600  hover:underline">
                            Jobs
                        </a>

                    </div>
                </div>
            </div>
            <Jobsection />
            <Footer />
        </>
    )
}

export default Jobs;