import Header from "../header/Header"
import SectionFive from "../sectionFive/SectionFive"
import SectionFour from "c:/Users/tajud/Documents/disney-page/src/components/sectionFour/sectionFour"
import SectionOne from "../sectionOne/SectionOne"
import SectionThree from "../sectionThree/SectionThree"
import SectionTwo from "../sectionTwo/SectionTwo"
import "./Render.css"
import SectionSix from "../SectionSix/SectionSix"
import SectionSeven from "../SectionSeven/SectionSeven"

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