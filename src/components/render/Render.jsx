import Header from "../header/Header"
import SectionFive from "../sectionFive/SectionFive"
import SectionOne from "../sectionOne/SectionOne"
import SectionThree from "../sectionThree/SectionThree"
import SectionTwo from "../sectionTwo/SectionTwo"
import "./Render.css"
import SectionSix from "../SectionSix/SectionSix"
import SectionSeven from "../SectionSeven/SectionSeven"
import SectionFour from "../sectionFour/sectionFour"

export default function Render(){
    
    return(
      <main>
        <Header/>
        <SectionOne></SectionOne>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
      </main>
    )
}