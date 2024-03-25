import "./MidSecOne.css"
 export default function MidSecOne({secOneImg,secOnetext,secOnetextP}){
    return(
        <div className="secOne">
            <a href="#">
            <img src={secOneImg} alt="" />
            <div id="theText">
                <h3>"{secOnetext}</h3>
                <p>{secOnetextP}</p>
            </div>
            </a>
        </div>
    )
 }