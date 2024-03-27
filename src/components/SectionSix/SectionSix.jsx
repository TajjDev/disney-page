import "./SectionSix.css"
import ImageOne from "/src/assets/disney22.png"
import ImageTwo from "/src/assets/disney23.png"
import ImageThree from "/src/assets/disney24.png"
import ImageFour from "/src/assets/disney25.png"
import MidSectionSix from "./MidSecSix/MidSecSix"

export default function SectionSix(){
    const store=[
        {
            image:ImageOne
        },
        {
            image:ImageTwo
        },
        {
            image:ImageThree
        },
        {
            image:ImageFour
        },
    ]
    return(
        <div className="containcon6">
            <div className="contain6">
       
            
                    {
                        store.map((data,index)=>{
                           return <MidSectionSix key={index}  sectionSixImg={data.image} />
                          })
                       }
            </div>
        </div>
       
    )
}