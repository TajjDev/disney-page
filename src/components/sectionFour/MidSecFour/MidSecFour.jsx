export default function MidSectionFour({sectionFourImg,sectionFourText,sectionFourP}){

    return(
        <div className="secFour">
            <a href="#">
            <img src={sectionFourImg} alt="" />
            <div id="theText4">
                <h3>{sectionFourText}</h3>
                <p>{sectionFourP}</p>
            </div>
            </a>
        </div>
    )
}