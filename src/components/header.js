import React, { useState } from 'react'
import './header.css'
import gsap from 'gsap'
import Nav from './nav'




const Header=()=>{

    const [show,setshow]=useState(false);
    const [displaye,setdisplay]=useState('none');
    let styles={transition: 'all 1s ease-out'};
    const clickhandler=()=>{
        setshow(!show);
        //console.log(show)
        
        
    }
    let Navshow=null;
    if(show)
    Navshow=<Nav></Nav>
    return(
        
      <div>
      

      
      {Navshow}
      
        <div className="pt-3">

        
          <div className="container px-5  justify-content-center ">
              <span className=" d-inline-block ">
                    < a href="https://karanwadhwa03.github.io/Portfolio/">KARAN</a>
              </span>
              

                  
                <span className="align-middle right" onClick={clickhandler}> 
                        <span className="d-block"></span>
                        <span className="d-block"></span>
                </span>
                   
             
              
                <hr></hr>
          </div>
          
      </div>
      </div>
    )

}
export default Header