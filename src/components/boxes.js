import React from 'react'
import Image from './first.jpg';
import './boxes.css'
import Bg1 from './../assets/bg1.jpg'
import Bg3 from './../assets/bg3.jpg'

const Boxes=()=>{
    return(
        <div className="container px-5 bordered">
            <div className="row">
               <div className="col-md-4 bordered p-3 hovered">
                    
                    <span className="first">
                    <i class='fas fa-desktop' ></i>
                    <h1>Web Developer</h1>
                   
                    </span>
                    <img src={Image} className=""
                    style={{width:'100%'}}></img>
               </div>

               <div className="col-md-4 bordered p-3 hovered">
                    
                    <span className="first">
                    <i class='fas fa-code' ></i>
                    <h1>Programmer</h1>
                   
                    </span>
                    <img src={Bg1} style={{width:'100%'}}></img>
               </div>
               <div className="col-md-4 bordered p-3 hovered">
                    
                    <span className="first">
                    <i class='fas fa-desktop' ></i>
                    <h1>Web Developer</h1>
                   
                    </span>
                    <img src={Bg3} style={{width:'100%'}}></img>
               </div>

            </div>
        </div>
    )

}
export default Boxes