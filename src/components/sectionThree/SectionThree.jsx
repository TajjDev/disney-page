import MidSectionThree from "./MidSecThree/MidSecThree"
import "./SectionThree.css"
import ImageOne from "/src/assets/disney9.jpeg"
import ImageTwo from "/src/assets/disney10.jpeg"
import ImageThree from "/src/assets/disney11.jpeg"
import ImageFour from "/src/assets/disney12.jpeg"

export default function SectionThree(){
    const store=[
        {
            image:ImageOne,
            h3:`This month's recommended works`,
            p:"Introducing the distribution schedule of Disney Plus works. New movies and original works are appearing one after another!"
        },
        {
            image:ImageTwo,
            h3:"final season",
            p:`
            “Star Wars: The Bad Batch” Season 3 is now available exclusively. The story is finally coming to an end!`
        },
        {
            image:ImageThree,
            h3: `original series`,
            p:`All 6 episodes of “Iwaju” are now available exclusively! A science fiction animation set in Lagos, Nigeria in the near future.`
        },
        {
            image:ImageFour,
            h3:"disney plus",
            p:`
            Disney's official video distribution service. In addition to masterpieces and popular works, you can also enjoy unlimited viewing of foreign dramas and Japanese content.`
        },
    ]
    return(
        <div className="containcon3">
        <h3>Disney Plus recommended information</h3>
        <div className="contain3">
       
            
        {
            store.map((data,index)=>{
                return <MidSectionThree key={index}  sectionThreeImg={data.image} sectionThreeText={data.h3} sectionThreeP={data.p} />
            })
        }
      
    </div>
    </div>
    )
}