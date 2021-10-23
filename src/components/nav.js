import React from 'react'
import Pdf from './../assets/KaranCV.pdf'

const Nav=()=>{

    return(
       <div className="container px-5 navi trans">
            <div className="row">
                         
           <div className="col">
               
                   <a href={Pdf} className="btn btn-primary" download style={{fontSize:'16px',color:'white',letterSpacing:'1px',fontWeight:'500'}}>RESUME</a>
                   
                   

           </div>
           <div className="col">
           <div className="row">
               <div className="col-sm-6">

               </div>
               <div className="col">
                    <a href='https://www.linkedin.com/in/karan-wadhwa-383156173/'>
                        
                    < i class="fa fa-linkedin-square" style={{color:'blue'}} ></i>

                    </a>

                </div>
                <div className="col">
               
                <a href='https://github.com/karanwadhwa03'>
                        
                <i class="fa fa-github"></i>    
                        </a>


                </div>
                <div className="col d-none d-sm-block">
                <a href='mailto:karanwadhwa0309@gmail.com'>
                    <i class="fa fa-envelope"></i>

                </a>


                </div>
           </div>

           </div>
           </div> 
       </div>
    )
}
export default Nav;