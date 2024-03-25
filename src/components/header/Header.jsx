import "./Header.css"
import Menu from "./Menu"
import Disney22 from "/src/assets/disney.png"
import Srch from "/src/assets/search-icon.svg"

export default function Header(){
 const menus =[
     {
        src:"#",
        text:"Disney plus"
        
    }
    ,
    {
        src:"#",
        text:"Shopping"
    },
    {
        src:"#",
        text:"Movie"
    },
    {
        src:"#",
        text:"Tv"
    },
    {
        src:"#",
        text:"Parks & Resorts"
    },
    {
        src:"#",
        text:"Music"
    },
    {
        src:"#",
        text:"Live & Events"
    },
    {
        src:"#",
        text:"Games"
    },
    {
        src:"#",
        text:"Kids"
    },
    {
        src:"#",
        text:"Company Information"
    }
 ]
    return(
       <div id="head">
        <div className="imm">
        <img id="one" src={Disney22} alt="" />

        </div>
            <div className="menu">
                <ul>
              {menus.map((data,index)=>{
                return <li key={index}>
                    <Menu src={data.src} text={data.text}/>
                </li>
              })} 
              </ul>
            </div>
            <div className="srch">
                <input type="text" placeholder="search within the site" />
                <div className="img">
                <img src={Srch}  alt="" />
                </div>
            </div>
       </div>
    )
}