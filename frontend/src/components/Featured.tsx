import Jobcard from "./Jobcard";
const featuredJobs = [
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

function Featured(){
    return(
        <div className="p-10">
            <div className="flex justify-center">
                <div className="flex flex-col justify-center gap-1">
                    <h2 className="text-center text-3xl font-medium">Featured Jobs</h2>
                    <p className="text-lg font-extralight">Find the best jobs that suits you</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 p-5 md:p-10 gap-5 animate-fade-up animate-duration-[1200ms]">
                {
                    featuredJobs.map((job,index) => (
                        <div key={index}>
                            <Jobcard company={job.company} logo={job.logo} role={job.role} desc={job.desc} type={job.type} location={job.location} />
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <a href="/jobs">
                    <button className="text-white text-lg px-5 py-3 bg-blue-400 hover:bg-blue-500 rounded-full">Exlpore More Jobs</button>
                </a>
            </div>
        </div>
    )
}

export default Featured;