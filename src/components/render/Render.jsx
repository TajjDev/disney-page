import Header from "../header/Header"
import SectionFour from "../sectionFour/SectionFour"
import SectionOne from "../sectionOne/SectionOne"
import SectionThree from "../sectionThree/SectionThree"
import SectionTwo from "../sectionTwo/SectionTwo"
import "./Render.css"

export default function Render(){
    
    return(
      <main>
        <Header/>
        <SectionOne></SectionOne>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
      </main>
    )
}