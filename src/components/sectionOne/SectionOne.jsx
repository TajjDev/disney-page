import "./SectionOne.css"
import ImgOne from "/src/assets/ddisney.png"

export default function SectionOne(){

    return(
        <div id="sectionOne">
            <div className="text">
                <h3>Three Display & Pixar "tear-jerking <br />masterpieces" to be released in theathers</h3> <br />
                <p>Three masterpieces nominated for the Academy Award for Best Animated Features are coming to the big screen </p>
            </div>
            <div className="image">
                <img src={ImgOne} alt="" />
            </div>
        </div>
    )
}