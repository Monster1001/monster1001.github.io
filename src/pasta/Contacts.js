import './Contacts.css';
import './Home.css';
import React from "react"
import emailIcon from "../images/enviar.png"
import linkedinIcon from "../images/linkedin.png"
import githubIcon from "../images/github.png"
import whatsappIcon from "../images/whatsapp.png"
import { Link } from "react-router-dom";
import LinkedinBlack from "../images/linkedinBlack.png"
import EmailIcon from "../images/EmailIcon.png"
import githubBlackIcon from "../images/GitHubBlack.png"
import whatsappIconCard from "../images/WhatsAppIcon.png"
 function Contacts(){
    /* CSS scripts */
  function Remover(){
    const toggle = document.getElementById("toggle")
    const sideBar = document.getElementById("sideBar")
    const sideBarTitle = document.getElementById("sideBarTitle")

    var w = window.innerWidth
    if (w < 500) {
      toggle.classList.remove("active")
      sideBarTitle.classList.remove("active")
      sideBar.classList.remove("active")
      
    }
  }

  function Expandir() {
    

    const toggle = document.getElementById("toggle")
    const sideBar = document.getElementById("sideBar")
    const sideBarTitle = document.getElementById("sideBarTitle")
    const RodaPeSide = document.getElementById("RodaPeSide")
    
    var w = window.innerWidth

    if (w < 500) {
      toggle.classList.toggle("active")
      sideBarTitle.classList.toggle("active")
      sideBar.classList.toggle("active")
    }else if(w > 500){
      toggle.classList.toggle("active")
      sideBarTitle.classList.toggle("active")
      sideBar.classList.toggle("active")
      RodaPeSide.classList.toggle("active")
    }
  }

    return(
        <div className="App" onLoad={Remover}>
        <div id="toggle" className="active" onClick={Expandir}></div>
        <nav id="sideBar" className="active">
          <div >
            <p id="sideBarTitle" className="active">PORTFOLIO</p>
            <ul>
            <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/skills">SKILLS</Link>
              </li>
              <li>
                <Link to="/projects">PROJECTS</Link>
              </li>
            </ul>
            <div  id="icones-redes">
              <ul>
                <li>
                  <a href="mailto:maxlopes365@gmail.com" target="_blank"><img src={emailIcon} id="emailIcon" alt='Email'/></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/maximilianomarqueslopes/" target="_blank"><img src={linkedinIcon} id="linkedinIcon" alt='Linkedin'/></a>
                  
                </li>
                <li>
                <a href="https://github.com/Monster1001" target="_blank"><img src={githubIcon} id="githubIcon" alt='Github'/></a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=351933725264&text=Ol%C3%A1,%20gostaria%20de%20conversar%20com%20voc%C3%AA!" target="_blank"><img src={whatsappIcon} id="whatsappIcon" alt="Whatsapp"/></a> 
                </li>
              </ul>
              <p id='RodaPeSide'>Maximiliano Lopes @2022-09</p>
            </div>
          </div>
        </nav> 
        <div id='CardBoardContacts'>
            <ol>
                <p>
                  Contact me! 
                  <p id='PDois'>But you send first.</p>
                </p>
                
                <li>
                  <a href='mailto:maxlopes365@gmail.com' target="_blank"><img src={EmailIcon} id="EmailImg"/></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/maximilianomarqueslopes/' target="_blank"><img src={LinkedinBlack} id="LinkedinImg"/></a>
                </li>
                <li>
                    <a href='https://github.com/Monster1001' target="_blank"><img src={githubBlackIcon} id="GitImg"/></a>
                </li>
                <li>
                    <a href='https://api.whatsapp.com/send?phone=351933725264&text=Ol%C3%A1,%20gostaria%20de%20conversar%20com%20voc%C3%AA!' target="_blank"><img src={whatsappIconCard} id="WhatsImg"/></a>
                </li>
            </ol>
        </div>
      </div>
    )
}
export default Contacts