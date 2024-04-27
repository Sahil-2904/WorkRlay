export default () => {

    const tableItems = [
        {
            name: "Solo learn app",
            date: "Oct 9, 2023",
            status: "Active",
            price: "$35.000",
            plan: "Monthly subscription"
        },
        {
            name: "Window wrapper",
            date: "Oct 12, 2023",
            status: "Active",
            price: "$12.000",
            plan: "Monthly subscription"
        },
        {
            name: "Unity loroin",
            date: "Oct 22, 2023",
            status: "Archived",
            price: "$20.000",
            plan: "Annually subscription"
        },
        {
            name: "Background remover",
            date: "Jan 5, 2023",
            status: "Active",
            price: "$5.000",
            plan: "Monthly subscription"
        },
        {
            name: "Colon tiger",
            date: "Jan 6, 2023",
            status: "Active",
            price: "$9.000",
            plan: "Annually subscription"
        },
    ]


    return (
        <div className="w-full mx-auto ">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        My Job Listings
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="mt-3 md:mt-0">
                    <a
                        href="/emp/post"
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-blue-600 rounded-lg hover:bg-blue-500 active:bg-blue-700 md:text-sm"
                    >
                        Add job
                    </a>
                </div>
            </div>
            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b bg-blue-100 w-full">
                        <tr className="">
                            <th className="py-3 px-6">Title</th>
                            <th className="py-3 px-6">Applications</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6">Created & Expired</th>
                            <th className="py-3 px-6">Action</th>
                            <th className="py-3 px-6"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr className="text-lg" key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "Active" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.plan}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="text-right whitespace-nowrap">
                                        <a href="javascript:void()" className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                                            Manage
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
