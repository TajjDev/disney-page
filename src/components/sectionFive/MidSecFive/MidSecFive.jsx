export default function MidSectionFive({sectionFiveImg,sectionFiveText,sectionFiveP}){

    return(
        <div className="secFive">
            <a href="#">
            <img src={sectionFiveImg} alt="" />
            <div id="theText5">
                <h3>{sectionFiveText}</h3>
                <p>{sectionFiveP}</p>
            </div>
            </a>
        </div>
    )
}