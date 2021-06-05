import React from 'react'
import './accordion.css'
import Image from './../components/kk.jpeg'
import First from './../assets/first.png'
import Second from './../assets/second.png'
import Third from './../assets/third.png'
import Leetcode from './../assets/leetocode.png'
import codeforces from './../assets/codeforces.png'
import codechef from './../assets/codechef.png'
import Hackerearth from './../assets/heackerearth.png'
import gfg from './../assets/gfg.png'
import Ivb from './../assets/iv.png'
import Github from './../assets/github.jpg'





const Acc=()=>{
    return (
        <div className="container px-5">
                <div className="tabs">
                    <div className="tab">
                            <input type="checkbox" id="chck1"></input>
                            <label className="tab-label" for="chck1">About</label>
                            <div className="tab-content">
                                
                            Hello Sir/Ma'am . My name is Karan . I am final year student .
                            I am Full Stack Developer specialized in javascript technologies like React And backend framework like Node . 
                            With That I Have immense knowledge About Data Structure And Algorithms. I Also Have Knowledge About Tools Like Figma,Git.
                            </div>
                    </div>
      
                </div>
{/*  */}
                <div className="tabs">
                    <div className="tab">
                            <input type="checkbox" id="chck2"></input>
                            <label className="tab-label" for="chck2">Education</label>
                            <div className="tab-content">
                                <div className="row">
                                        <div className="col-md">
                                          <span>  2017-2021 </span>
                                        </div>
                                        <div className="col-md">
                                            <div>
                                            YMCA University Of Sceience And Techology
                                            </div>
                                            <div>
                                                BTech. IT 
                                            </div>
                                        </div>
                                </div>

                                   
                             </div>
                    </div>
      
                </div>


                <div className="tabs">
                    <div className="tab">
                            <input type="checkbox" id="chck3"></input>
                            <label className="tab-label" for="chck3">Skills</label>
                            <div className="tab-content">
                                <div className="row">
                                   <div className="col-md-4">
                                       Language / KeySkill

                                   </div>
                                   <div className="col">
                                       C   / C++  ,   Javascript . 
                                       DataStructure And Algorithms

                                   </div>
                                </div>    
                                <div className="row mt-2">
                                   <div className="col-md-4">
                                       Frontend

                                   </div>
                                   <div className="col">
                                       HTML / CSS , Javascript , Jquery ,React , Bootstrap .

                                   </div>
                                </div>    
                                <div className="row mt-2">
                                   <div className="col-md-4">
                                       Backend & DataBase

                                   </div>
                                   <div className="col">
                                       NodeJs , Express , MongoDb , Mongoose .

                                   </div>
                                   
                                </div>  

                                <div className="row mt-2">
                                   <div className="col-md-4">
                                       Tools

                                   </div>
                                   <div className="col">
                                       Figma , Github .

                                   </div>
                                   
                                </div>    
                            
                            </div>
                    </div>
      
                </div>

                <div className="tabs">
                    <div className="tab">
                            <input type="checkbox" id="chck4"></input>
                            <label className="tab-label" for="chck4">Projects</label>
                            <div className="tab-content">

                                    <div className="row">
                                        <div className='col-md-4 p-3'>
                                        <div class="contain">
                                        <img src={First} alt="Avatar" class="image" style={{width:'100%'}}></img>
                                        <div class="overlay">
                                        <div class="text">Opportunity Geeks <br></br>
                                                
                                                "Node Mongo Express"
                                        </div>
                                       
                                        </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col text-center p-2">
                                              <a href='https://calm-meadow-69199.herokuapp.com/' style={{fontSize:'20px' , letterSpacing:'1px',}}> Live </a> 
                                            </div>
                                            <div className="col text-center p-2">
                                            <a href='https://github.com/karanwadhwa03' style={{fontSize:'20px' , letterSpacing:'1px',}}>
                        
                                                    <i class="fa fa-github"></i>    
                                            </a>
                                            </div>
                                        </div>

                                        </div>



                                        <div className='col-md-4 p-3'>
                                        <div class="contain">
                                        <img src={Second} alt="Avatar" class="image" style={{width:'100%'}}></img>
                                        <div class="overlay">
                                        <div class="text">Countries Api <br></br>
                                                
                                                "React"
                                        </div>
                                       
                                        </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col text-center p-2">
                                              <a href='https://karanwadhwa03.github.io/ReactCountriesApi/' style={{fontSize:'20px' , letterSpacing:'1px',}}> Live </a> 
                                            </div>
                                            <div className="col text-center p-2">
                                            <a href='https://github.com/karanwadhwa03' style={{fontSize:'20px' , letterSpacing:'1px',}}>
                        
                                                    <i class="fa fa-github"></i>    
                                            </a>
                                            </div>
                                        </div>

                                        </div>

                                        <div className='col-md-4 p-3'>
                                        <div class="contain">
                                        <img src={Third} alt="Avatar" class="image" style={{width:'100%'}}></img>
                                        <div class="overlay">
                                        <div class="text">BurgerBuilder <br></br>
                                                
                                                "React "
                                        </div>
                                       
                                        </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col text-center p-2">
                                              <a href='https://karanwadhwa03.github.io/BurgerBuilderUI/' style={{fontSize:'20px' , letterSpacing:'1px',}}> Live </a> 
                                            </div>
                                            <div className="col text-center p-2">
                                            <a href='https://github.com/karanwadhwa03' style={{fontSize:'20px' , letterSpacing:'1px',}}>
                        
                                                    <i class="fa fa-github"></i>    
                                            </a>
                                            </div>
                                        </div>

                                        </div>


                                    </div>
                                    <div className="text-center justify-content-center">
                                        For More Please Visit My 
                                        <a href='https://github.com/karanwadhwa03' style={{fontSize:'20px' , letterSpacing:'1px',}}> Github</a>

                                    </div>


                                    
                            
                            </div>

                    </div>


      
                </div>
                <div className="tabs">
                    <div className="tab">
                            <input type="checkbox" id="chck5"></input>
                            <label className="tab-label" for="chck5">WebLinks</label>
                            <div className="tab-content">
                                    <div className="row">
                                        <div className="col-md">
                                            <a href='https://www.interviewbit.com/profile/karan-wadhwa_137' ><img src={Ivb} style={{width:'200px',height:'auto'}} ></img>     </a>

                                        </div>
                                        <div className="col-md">
                                            <a href='https://codeforces.com/profile/JackSparrow03'><img src={codeforces} style={{width:'200px',height:'auto'}}></img>     </a>

                                        </div>
                                        <div className="col-md">
                                            <a href='https://leetcode.com/karancodechef1/'><img src={Leetcode} ></img>     </a>

                                        </div>
                                        <div className="col -md">
                                            <a href='https://www.codechef.com/users/karancodechef1'><img src={codechef} style={{width:'150px',height:'auto'}}></img>     </a>

                                        </div>


                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md">
                                            <a href='https://github.com/karanwadhwa03'><img src={Github} style={{width:'150px',height:'auto'}} ></img>     </a>

                                        </div>
                                        <div className="col-md">
                                            <a href='https://www.hackerearth.com/@karanwadhwa0309'><img src={Hackerearth} style={{width:'150px',height:'auto'}} ></img>     </a>

                                        </div>
                                        <div className="col-md">
                                            <a href='https://auth.geeksforgeeks.org/user/opportunity/profile'><img src={gfg} style={{width:'150px',height:'auto'}}></img>     </a>

                                        </div>
                                     


                                    </div>

                            </div>
                    </div>


                   
      
                </div>

                {/* HERE WRITE RO ADD ANY TAB COPY FROM FIRST ONE */}

                <div className="tabs">
                    <div className="tab">
                            <input type="checkbox" id="chck6"></input>
                            <label className="tab-label" for="chck6">PersonalDetails</label>
                            <div className="tab-content">
                                    <div className="row">
                                            <div className="col-md">
                                                    <span >Email Id :</span> karanwadhwa0309@gmail.com 
                                            </div>
                                            <div className="col-md">
                                                    <span >Phone No.  :</span> 8708245784
                                            </div>

                                        </div>     
                           
                            </div>
                    </div>
      
                </div>

                <div className="tabs">
                    <div className="tab">
                            <input type="checkbox" id="chck7"></input>
                            <label className="tab-label" for="chck7">Connect With Me</label>
                            <div className="tab-content">
                                    <div className="text-center">
                                        <a href='https://www.instagram.com/karan.wadhwa0309/'> <i class="fa fa-instagram"></i>
</a>
                                        <a href='https://www.linkedin.com/in/karan-wadhwa-383156173/'> < i class="fa fa-linkedin-square" style={{color:'blue'}} ></i>
</a>
                                    </div>  
                           
                            </div>
                    </div>
      
                </div>


                

            

        </div>
    )

}
export default Acc