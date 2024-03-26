export default function MidSectionThree({sectionThreeImg,sectionThreeText,sectionThreeP}){

    return(
        <div className="secThree">
            <a href="#">
            <img src={sectionThreeImg} alt="" />
            <div id="theText3">
                <h3>{sectionThreeText}</h3>
                <p>{sectionThreeP}</p>
            </div>
            </a>
        </div>
    )
}