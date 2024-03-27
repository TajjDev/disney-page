import "./SectionFive.css"
import ImageOne from "/src/assets/disney17.jpeg"
import ImageTwo from "/src/assets/disney18.jpeg"
import ImageThree from "/src/assets/disney19.jpeg"
import ImageFour from "/src/assets/disney20.jpeg"
import ImageFive from "/src/assets/disney21.jpeg"
import MidSectionFive from "./MidSecFive/MidSecFive"

export default function SectionFive(){
    const store=[
        {
            image:ImageOne,
            h3:`Chip & Dale `,
            p:"Cute  chipmunk character, Chip has a black nose and one tooth in the middle, and Da..."
        },
        {
            image:ImageTwo,
            h3:"Rapunzel",
            p:`Rapunzel, a vivacious girl with long vlonde hair who lives in a high tower, grows...`
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
        {
            image:ImageFive,
            h3:`Chip & Dale birthday`,
            p:" commemorative goods"
        },
    ]
    return(
        <div className="containcon5">
        <h3>Character introduction</h3>
        <div className="contain5">
       
            
        {
            store.map((data,index)=>{
                return <MidSectionFive key={index}  sectionFiveImg={data.image} sectionFiveText={data.h3} sectionFiveP={data.p} />
            })
        }
      
    </div>
    </div>
    )
}