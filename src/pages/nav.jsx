import '../css/nav.css'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars , FaTimes} from 'react-icons/fa'
 
function Navbar(){
    const [icon , setIcon] = useState(false)
    const handleClick = () => {
      setIcon(!icon)
    }
    const closeSideDrawer = () => {
      setIcon(false)
    }
    return(
        <>
         <nav className='navbar'>
            <Link to='/' className='nav-logo' onClick={closeSideDrawer}><p>LAPTOP SERVICE </p></Link>

            <div className='menu-icon' onClick={handleClick}>
              {
                icon ? <FaTimes className='fa-times'></FaTimes> : <FaBars className='fa-bars'></FaBars>
              }
            </div>


           <ul className= {
            icon ? 'nav-menu active' : 'nav-menu'
           }>
                  <li>
                  <Link to="/home" className='nav-links' onClick={closeSideDrawer} >Home</Link>
                </li>


                <li>
                  <Link to="/appointment" className='nav-links' onClick={closeSideDrawer} >Appointment</Link>
                </li>


                <li>
                  <Link to="/Service" className='nav-links' onClick={closeSideDrawer} >Service</Link>
                </li>


                <li>
                  <Link to="/ContactUs" className='nav-links' onClick={closeSideDrawer} >Contact Us</Link>
                </li>


                <li>
                  <Link to="/" className='nav-links' onClick={closeSideDrawer} >Logout</Link>
                </li>
                
                
           </ul>
         </nav>
       </>
    )
}
export default Navbar