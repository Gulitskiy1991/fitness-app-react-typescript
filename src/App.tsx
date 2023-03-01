import { useEffect } from "react"
import { useState } from "react"
import Home from "./components/home/Home"
import Benefits from "./components/benefits/Benefits"
import Navbar from "./components/navbar/Navbar"
import OurClasses from "./components/ourclasses/OurClasses"
import ContactUs from "./components/contactus/ContactUs"
import Footer from "./components/footer/Footer"
import { SelectedPage } from "./shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfpage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfpage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !== 0) setIsTopOfpage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  )
}

export default App
