import React, { useState } from 'react'

function NavBar() {
  const [mode, setMode] = useState("LightMode")
  const handleMode = () =>{
    if(mode==="LightMode"){
      setMode("DrakMode");
      const body = document.body.style;
      const Nav = document.querySelector(".navbar").style;
      const formArea = document.querySelector(".form-control").style;
      const navbar = document.querySelector(".navbar-brand").style;
      body.backgroundColor="#132845";
      body.color="white";
      navbar.color="white"
      Nav.backgroundColor= "#6794cf";
      formArea.backgroundColor= "#6794cf";
      formArea.color="white";

      
     
      
    }
    else{
      setMode("LightMode")
      const body = document.body.style;
      const Nav = document.querySelector(".navbar").style;
      const formArea = document.querySelector(".form-control").style;
      body.backgroundColor="#d6d6d6";
      body.color="";
      Nav.backgroundColor= "#edf0f2";
      formArea.backgroundColor= "#edf0f2";
      formArea.color="";
      

     
      
    }
  }
  return (
    <div className='navBarsec'>
        <nav className="navbar border border-light rounded my-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <i className="navText ri-ai-generate-text mx-2"></i>
                    TextDude
                </a>
                <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={handleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode}</label>
</div>
            </div>
        </nav>
      
    </div>
  )
}

export default NavBar