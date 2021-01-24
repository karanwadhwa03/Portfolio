import React from 'react'
import './content.css'
import Image from './kk.jpeg'
import {ReactComponent as Arrow} from './arrowright.svg'
import {Link} from 'react-router-dom'

const content=()=>{
    return(
        <div className="container px-5 ">
            <div className="container">

            
            <div className="row mt-5">

           
            <div className="col-md-8 align-items-center black">
                <div className="line select">
                    Hi I Am  Karan  👋
                </div>
                <div className="line select">
                    <span>
                    Full Stack Web Developer <i class='fas fa-desktop' ></i>

                    </span>
                    

                </div>
                <div className="line select" >
                    <span>
                    Competitive Programmer <i class='fas fa-code'></i>
                    </span>
                    

                </div>
                <div className="about">

                <Link to='/about' >
                   <span className="arrow" style={{color:'blue',letterSpacing:'1.5px'}}> More About Me <Arrow></Arrow></span>
                    </Link>
                    
                        
                        

                </div>


            </div>
            <div className="col-md-4 p-3">
                <img src={Image} style={{width:'100%'}}></img>

            </div>

            </div>

            </div>
            <hr></hr>
        </div>
    )
}
export default content