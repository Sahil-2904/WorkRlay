import Eside from "./Eside";

function Edash(){
    const data = [
        {name:"Job Posted",number:"20",image:""},
        {name:"Application",number:"40",image:""},
        {name:"Messages",number:"5",image:""},
    ]
    return(
        <>
            <Eside />
            <aside className="flex flex-col w-3/4 mt-[100px] h-screen ml-[25%] overflow-y-auto bg-blue-50 p-10 gap-5">
                <div className="flex">
                    <h2 className="text-3xl font-medium">Dashboard Home!</h2>
                </div>
                <div className="flex py-2 gap-7">
                    {
                        data.map((d,index) => (
                            <div className="flex flex-col bg-white shadow p-7 rounded-xl">
                                <h2>{d.number}</h2>
                                <h6>{d.name}</h6>
                            </div>
                        ))
                    }
                </div>
            </aside>
        </>
    )
}

export default Edash;