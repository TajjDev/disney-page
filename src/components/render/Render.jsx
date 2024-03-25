import Header from "../header/Header"
import SectionOne from "../sectionOne/SectionOne"
import SectionTwo from "../sectionTwo/SectionTwo"
import "./Render.css"

export default function Render(){
    
    return(
      <main>
        <Header/>
        <SectionOne></SectionOne>
        <SectionTwo/>
      </main>
    )
}