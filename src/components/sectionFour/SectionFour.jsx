import "./SectionFour.css"
import ImageOne from "/src/assets/disney13.jpeg"
import ImageTwo from "/src/assets/disney14.jpeg"
import ImageThree from "/src/assets/disney15.jpeg"
import ImageFour from "/src/assets/disney16.jpeg"
import MidSectionFour from "./MidSecFour/MidSecFour"

export default function SectionFour(){
    const store=[
        {
            image:ImageOne,
            h3:`Chip & Dale birthday`,
            p:" commemorative goods"
        },
        {
            image:ImageTwo,
            h3:"Casual Mickey items",
            p:`URBAN RESEARCH and others`
        },
        {
            image:ImageThree,
            h3: `Recommended gift items for the`,
            p:` welcome season`
        },
        {
            image:ImageFour,
            h3:"Disney Plastic Gamaguchi and others",
            p:`Chara Marche`
        },
    ]
    return(
        <div className="containcon4">
        <h3>Goods featuring popular characters are available!</h3>
        <div className="contain4">
       
            
        {
            store.map((data,index)=>{
                return <MidSectionFour key={index}  sectionFourImg={data.image} sectionFourText={data.h3} sectionFourP={data.p} />
            })
        }
      
    </div>
    </div>
    )
}