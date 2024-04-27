function Cside(){
    const options = [
        {title:"Dashboard",link:"/can/dashboard"},
        {title:"My Profile",link:"/can/profile"},
        // {title:"Post a New Post",link:"/emp/post"},
        {title:"Applied Jobs",link:"/can/jobs"},
        // {title:"All Applicants",link:"/emp/applicants"},
        {title:"Message",link:"/can/messages"},
        {title:"Change Password",link:"/can/changepass"},
        {title:"Delete Profile",link:"/can/delete"},
        {title:"Logout",link:"/can/logout"}
    ]
    return (
        <>
            <aside className="z-40 fixed p-7 flex flex-col w-1/4 h-full top-[100px] shadow-xl">
                <div className=" h-full overflow-y-auto ">
                    {
                        options.map((option,index) => (
                            <a key={index} className="flex items-center px-5 py-4 text-gray-600 transition-colors duration-300 transform rounded-xl hover:bg-blue-100 hover:text-blue-600" href={option.link}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                </svg>

                                <span className="mx-3 text-lg font-medium">{option.title}</span>
                            </a>
                        ))
                    }
                </div>
                
            </aside>
        </>
    )
}

export default Cside;