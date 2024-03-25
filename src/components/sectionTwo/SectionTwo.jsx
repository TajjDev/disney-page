import "./SectionTwo.css"
import MidSecOne from "./midSec/MidSecOne"
import MidSecTwo from "./midSec/MidSecTwo"

import ImageOne from "/src/assets/disney1.jpeg"
import ImageTwo from "/src/assets/disney2.jpeg"
import ImageThree from "/src/assets/disney3.jpeg"
import ImageFour from "/src/assets/disney4.jpeg"
import ImageFive from "/src/assets/disney5.jpeg"
import ImageSix from "/src/assets/disney6.jpeg"
import ImageSeven from "/src/assets/disney7.jpeg"
import ImageEight from "/src/assets/disney8.jpeg"
export default function SectionTwo(){
    let date ;
    date = new Date().toUTCString();
    date = date.split(' ').slice(1, 4).join(" ");
const store=[
    {
        image:ImageOne,
        h3:`"Pixar Best"`,
        p:"The ultimate best album of Pixar music! CD release/digital distribution on March 20th"
    },
    {
        image:ImageTwo,
        h3:"Held nationwide from May to June!",
        p:`"Disney on Classic ~ Gift of Dreams and Magic 2024" Orchestral performance of many popular works`
    },
    {
        image:ImageThree,
        h3: `Focus on Minnie in March `,
        p:`Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse!`
    },
    {
        image:ImageFour,
        h3:"disney palpalooza",
        p:`Tokyo Disneyland “Disney Palpalooza” 2nd “Donald's Quacky Duck City” held`
    },
]
const store1=[
    {
        image:ImageFive,
        h3:`NEWS`,
        p:"Movies that you can't miss are coming out one after another!",
        date:date
    },
    {
        image:ImageSix,
        h3:`NEWS`,
        p:`“Disney My Little Doll” A garden of happiness full of blooming white clover♪`,
        date:date
    },
    {
        image:ImageSeven,
        h3:`NEWS`,
        p:`EDisney “Winnie the Pooh” Ohisama Market <Held in Ibaraki/Mito from 3/28>`,
        date:date
    },
    {
        image:ImageEight,
        h3:`NEWS`,
        p:`The Disney movie “The Princess and the Frog”, full of wonderful music and magic`,
        date:date
    },
]
    return(
        <div className="containcon">
        <div className="contain">
            {
                store.map((data,index)=>{
                    return <MidSecOne key={index}  secOneImg={data.image} secOnetext={data.h3} secOnetextP={data.p} />
                })
            }
          
        </div>
        <h4>news</h4>
         <div className="contain">
            {
                store1.map((data1,index)=>{
                    return <MidSecTwo key={index}  secOneImg1={data1.image} secOnetext1={data1.h3} secOnetextP1={data1.p} secOneDate1={data1.date}/>
                })
            }
          
        </div>
        </div>
    )
}