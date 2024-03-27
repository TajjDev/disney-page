import "./SectionSeven.css"
import ImageOne from "/src/assets/disney26.jpeg"
import ImageTwo from "/src/assets/disney27.jpeg"
import ImageThree from "/src/assets/disney28.jpeg"
import ImageFour from "/src/assets/disney27.jpeg"
import ImageFive from "/src/assets/disney28.jpeg"
import MidSectionSeven from "./MidSecSeven/MidSecSeven"

export default function SectionSeven(){
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
        {
            image:ImageFive
        }
    ]
    return(
        <div className="containcon7">
            <h3>Special</h3>
            <div className="contain7">
       
            
                    {
                        store.map((data,index)=>{
                           return <MidSectionSeven key={index}  sectionSevenImg={data.image} />
                          })
                       }
            </div>
        </div>
       
    )
}