import Anav from "@/components/Anav";
import Eside from "@/components/Eside";

function Echange(){
    return (
        <>
            <Anav />
            <Eside />
            <div className="flex flex-col w-3/4 mt-[100px] h-screen ml-[25%] overflow-y-auto bg-[#f8fafc] p-10 gap-5">
                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                        </div> 
                        <div className="mb-6">
                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                            <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                        </div> 
                        <button type="submit" className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Change Password</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Echange;