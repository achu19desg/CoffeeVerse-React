
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Promise from "./components/Promise"
import Opening from "./components/Opening"
import Footer from "./components/Footer"
import "./index.css"

export default function App(){
  return (
    <div className="index">
       <Hero />
       <Navbar />
        <Card />
        <Promise />
        <Opening />
         <Footer />
       
       </div>
     
  )
}

