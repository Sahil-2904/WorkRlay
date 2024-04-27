import Eside from "./Eside";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

function Pjob(){
    return (
        <>
            <Eside />
            <div className="flex flex-col w-3/4 mt-[100px] min-h-screen ml-[25%] bg-blue-50 p-10 gap-5">
                <h2 className="text-3xl font-medium">Post a New Job!</h2>
                <div className="flex flex-col gap-10 p-10 bg-white rounded-xl shadow">
                    <div className="flex flex-col gap-5">
                        <h3 className="flex text-xl font-medium">Post Job</h3>
                        <div className="flex gap-10">
                            <div className="flex gap-3">
                                <RiMoneyRupeeCircleLine className="w-24 h-24 bg-blue-50 text-blue-500 p-3 rounded-full" />
                                <h5 className="flex items-center text-xl">Payments</h5>
                            </div>
                            <div className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 bg-blue-50 text-blue-500 p-3 rounded-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                                <h5 className="flex items-center text-xl">Payments</h5>
                            </div>
                            <div className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 bg-blue-50 text-blue-500 p-3 rounded-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                                <h5 className="flex items-center text-xl">Payments</h5>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col p-1 gap-1">
                            <label htmlFor="Job Title" className="text-lg font-normal">Job Title</label>
                            <input type="text" name="Job Title" id="Job Title" className="flex p-3 bg-blue-50 rounded-xl"/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h5 className="font-medium">Job Description</h5>
                            <textarea name="jobdesc" id="jobdesc" className="flex p-5 bg-blue-50 rounded-2xl h-60 resize-none"></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-2">
                            <div className="flex flex-col w-1/2 p-1 gap-1">
                                <label htmlFor="Comapnay name" className="text-lg font-normal">Company Name</label>
                                <input type="text" name="Company name" id="Comapany name" className="flex p-3 bg-blue-50 rounded-xl"/>
                            </div>
                            <div className="flex flex-col w-1/2 p-1 gap-1 font">
                                <label htmlFor="Email" className="text-lg font-normal">Email</label>
                                <input type="text" name="Email" id="Email" className="flex p-3 bg-blue-50 rounded-xl"/>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col w-1/2 p-1 gap-1">
                                <label htmlFor="Job Type" className="text-lg font-normal">Job Type</label>
                                <select id="type" className="flex p-3 bg-blue-50 rounded-xl">
                                    <option value="">Select</option>
                                    <option value="Employer">Employer</option>
                                    <option value="Worker">Worker</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-1/2 p-1 gap-1">
                                <label htmlFor="Gender" className="text-lg font-normal">Gender</label>
                                <select id="Gender" className="flex p-3 bg-blue-50 rounded-xl">
                                    <option value="">Select</option>
                                    <option value="Employer">Male</option>
                                    <option value="Worker">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col w-1/2 p-1 gap-1">
                                <label htmlFor="Experience" className="text-lg font-normal">Experience</label>
                                <input type="text" name="Experience" id="Experience" className="flex p-3 bg-blue-50 rounded-xl"/>
                            </div>
                            <div className="flex flex-col w-1/2 p-1 gap-1 font">
                                <label htmlFor="Offered Salary" className="text-lg font-normal">Offered Salary</label>
                                <input type="text" name="Offered Salary" id="Offered Salary" className="flex p-3 bg-blue-50 rounded-xl"/>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col p-1 w-2/3">
                                <label htmlFor="Deadline" className="text-lg font-medium">Application Deadline</label>
                                <input type="text" name="Deadline" id="Deadline" className="flex p-3 bg-blue-50 rounded-xl" />
                            </div>
                            <div className="flex flex-col p-1 w-1/3">
                                <label htmlFor="Required Urgently" className="text-lg font-normal">Required Urgently</label>
                                <select id="type" className="flex p-3 bg-blue-50 rounded-xl">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <div className="flex flex-col w-1/2 p-1 gap-1">
                                    <label htmlFor="Country" className="text-lg font-normal">Country</label>
                                    <input type="text" name="Country" id="Country" className="flex p-3 bg-blue-50 rounded-xl"/>
                                </div>
                                <div className="flex flex-col w-1/2 p-1 gap-1 font">
                                    <label htmlFor="City" className="text-lg font-normal">City</label>
                                    <input type="text" name="City" id="City" className="flex p-3 bg-blue-50 rounded-xl"/>
                                </div>
                            </div>
                            <div className="flex flex-col p-1 gap-1">
                                <label htmlFor="Complete Address" className="text-lg font-normal">Complete Address</label>
                                <input type="text" name="Complete Address" id="Complete Address" className="flex p-3 bg-blue-50 rounded-xl"/>
                            </div>
                        </div>
                        <iframe className="h-[500px]" src="https://maps.google.com/maps?q=Pune&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                    
                    <button type="submit" className="flex text-lg text-white p-3 bg-blue-400 hover:bg-blue-500 rounded-xl w-1/6 justify-center">Next</button>
                </div>
                
            </div>
        </>
    )
}

export default Pjob;