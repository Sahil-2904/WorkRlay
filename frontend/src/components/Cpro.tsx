import Eside from "./Eside";

function Cpro(){
    return (
        <>
            <Eside />
            <div className="flex flex-col w-3/4 mt-[100px] min-h-screen ml-[25%] bg-blue-50 p-10 gap-5">
                <div className="flex">
                    <h2 className="text-3xl font-medium">Employer Profile!</h2>
                </div>
                <div className="flex flex-col p-10 gap-5 bg-white rounded-lg shadow">
                    <div className="flex">
                        <h2 className="text-xl font-medium">My Profile</h2>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col w-1/3">
                            <label className="block text-sm text-gray-500">Logo</label>
                            <label className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>

                                <h2 className="mt-1 font-medium tracking-wide text-gray-700">Browse Logo</h2>

                                <p className="mt-2 text-xs tracking-wide text-gray-500 ">Upload or darg & drop your file PNG, JPG </p>

                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                        <div className="flex flex-col w-2/3 gap-y-3">
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
                                    <label htmlFor="Phone" className="text-lg font-normal">Phone</label>
                                    <input type="tel" name="Phone" id="Phone" className="flex p-3 bg-blue-50 rounded-xl"/>
                                </div>
                                <div className="flex flex-col w-1/2 p-1 gap-1 font">
                                    <label htmlFor="Account type" className="text-lg font-normal">Account type</label>
                                    <input type="text" name="Account type" id="Account type" value="Employer" className="flex p-3 bg-blue-50 rounded-xl"/>
                                </div>
                            </div>
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
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h5>About Company</h5>
                        <textarea name="aboutc" id="aboutc" className="flex p-5 bg-blue-50 rounded-2xl h-72 resize-none"></textarea>
                        <button type="submit" className="flex text-lg text-white p-3 bg-blue-400 hover:bg-blue-500 rounded-xl w-1/6 justify-center">Save</button>
                    </div>
                </div>
                <div className="flex flex-col gap-5 p-10 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-medium">Contact Information</h2>
                    <div className="flex flex-col">
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
                    <button type="submit" className="flex text-lg text-white p-3 bg-blue-400 hover:bg-blue-500 rounded-xl w-1/6 justify-center">Save</button>
                </div>
            </div>
        </>
    )
}

export default Cpro;