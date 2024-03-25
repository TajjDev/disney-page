import "./MidSecTwo.css"
 export default function MidSecTwo({secOneImg1,secOnetext1,secOnetextP1,secOneDate1}){
    return(
        <div className="secOne1">
            <a href="#">
            <img src={secOneImg1} alt="" />
            <div id="theText1">
                <h3>{secOnetext1}</h3>
                <p>{secOnetextP1}</p>
                <h6>{secOneDate1}</h6>
            </div>
            </a>
        </div>
    )
 }