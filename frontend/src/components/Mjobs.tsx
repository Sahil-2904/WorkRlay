import Eside from "./Eside";
import Jobtable from "./Jobtable";

function Mjob(){
    return (
        <>
            <Eside />   
            <div className="flex flex-col w-3/4 mt-[100px] min-h-screen ml-[25%] bg-blue-50 p-10 gap-5">
                <h2 className="text-3xl font-medium">Manage Jobs!</h2>
                <div className="flex flex-col gap-10 p-10 bg-white rounded-xl shadow">
                    <Jobtable />
                </div>
            </div>
        </>
    )
}

export default Mjob;