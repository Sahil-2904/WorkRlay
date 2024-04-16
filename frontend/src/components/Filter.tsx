function Filter(){
    return(
        <div className="flex flex-col gap-y-5 h-3/5 w-full shadow-sm bg-gradient-to-r from-blue-400/90 via-blue-400 to-blue-500/90 p-8 rounded-2xl text-white">
            <div className="flex flex-col gap-y-3">
                <p className="text-lg font-medium">Search By Keyword</p>
                <form onSubmit={(e) => e.preventDefault()} className="w-full">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" placeholder="Role or company" className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-blue-600"/>
                    </div>
                </form>
            </div>
            <div className="flex flex-col gap-y-3">
                <p className="text-lg font-medium">Location</p>
                <form onSubmit={(e) => e.preventDefault()} className="w-full">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" placeholder="Location" className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-blue-600"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Filter;