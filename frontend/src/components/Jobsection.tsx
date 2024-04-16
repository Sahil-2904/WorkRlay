import Filter from "./Filter";
import Jobcard from "./Jobcard";

const jobs = [
    {
        company:"Tailwind",
        logo:"https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
        role:"Software Developer",
        desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        type:"Full Time",
        location:"Remote"
    },
    {
        company:"Tailwind",
        logo:"https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
        role:"Software Developer",
        desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        type:"Full Time",
        location:"Remote"
    },
    {
        company:"Tailwind",
        logo:"https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
        role:"Software Developer",
        desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        type:"Full Time",
        location:"Remote"
    },
    {
        company:"Tailwind",
        logo:"https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
        role:"Software Developer",
        desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        type:"Full Time",
        location:"Remote"
    },
    {
        company:"Tailwind",
        logo:"https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
        role:"Software Developer",
        desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        type:"Full Time",
        location:"Remote"
    },
    {
        company:"Tailwind",
        logo:"https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
        role:"Software Developer",
        desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        type:"Full Time",
        location:"Remote"
    }
]

function Jobsection(){
    return(
        <>
            <div className="flex justify-between p-10 gap-10">
                <div className="flex w-1/3">
                    <Filter/>
                </div>
                <div className="flex flex-col justify-center w-2/3 gap-y-5">
                    <div className="flex justify-between">
                        <p>Show <em className="font-semibold">{jobs.length}</em> jobs</p>
                        <p>Search options</p>
                    </div>
                    <div className="flex flex-col justify-center gap-y-5">
                        {
                            jobs.map((job,index) => (
                                <div key={index}>
                                    <Jobcard company={job.company} logo={job.logo} role={job.role} desc={job.desc} type={job.type} location={job.location} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Jobsection;