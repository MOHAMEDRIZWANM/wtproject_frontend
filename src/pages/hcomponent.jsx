import React from 'react'
import '../css/home.css'
function HomeComp(){
    return(
        <div className='container'>
            <div className='item1'></div>
            <div className='item2'>
                <p>Welcome to our laptop servicing application! We are dedicated to providing top-notch laptop repair and maintenance services to ensure that your device is running smoothly and efficiently.
                </p>
                <button className='item2-btn'>learn more</button>
            </div>
            <div className="six">
            <div className="inner-six1" align="center">
                <h1>Our Service</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, non!</p>
            </div>
            <div className="inner-six2">
                <div className="inner-six21">
                    <h3>DISPLAY REPAIR</h3>
                </div>
                <div className="inner-six22">
                    <h3>DISPLAY REPAIR</h3>
                </div> <br/><br/>
                <div className="inner-six23">
                    <h3>DISPLAY REPAIR</h3>
                </div>
                <div className="inner-six24"><h3>DISPLAY REPAIR</h3>

                </div>
            </div>
            <div className="inner-six3" align="center">
                <button >LOAD MORE SERVICE</button>
            </div>
        </div>
        </div> 
    )
}
export default HomeComp


