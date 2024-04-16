import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Featured from "@/components/Featured"
function Home(){
    return (
        <div className="Home">
            <Navbar />
            <Hero />
            <Featured />
            <Footer />
        </div>
    )
}

export default Home