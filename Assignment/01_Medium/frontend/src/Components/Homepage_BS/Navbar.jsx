import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { Button } from "@chakra-ui/button" 
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if ( window.scrollY >= 35){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }

  }
  window.addEventListener("scroll", changeBackground)

  return( 
  
  
    <div style={{paddingLeft:"100px", paddingRight:"100px"}} className = { navbar ? "navbar active" : "navbar" }>

<div>
<Link to="/"><img src="https://i.ibb.co/8jW928K/medium-logo-removebg-preview.png" alt="medium-logo-removebg-preview" border="0"/></Link>
</div>
  
  <div className = "part-2">

    <div className = "links-box">  
      <ul className = "links">
        <li><Link to='' >Our Story</Link></li>
        <li><Link to='' >Membership</Link></li>
        <li><Link to='/login' >Write</Link></li>
        <li><Link to='/login' >Log in</Link></li>
      </ul>
    </div>
      
    <div>
      <Button  style = {{ background: navbar ? "green" : "black" ,color:"white",borderRadius:"20px",fontSize:"15px",fontWeight:"400", letterSpacing:".5px" }}><Link to='/sign'>Get started</Link></Button>
    </div>

    </div>
  </div>
  )
}

export default Navbar