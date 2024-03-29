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
                                Hello Sir/Ma'am , My name is Karan . I am working as Software Developer from last one year . Currently i am associated with Sharechat at the post of software Developer .
                                Regarding My work at Sharechat i worked as backend engineer in Chat-Payments Team where my job is to develop the new features regarding payments like combo pack , vip pack and flash sale for cohorts
                                and ensuring payment flow is working smoothly . In past i also worked with samsung where my job is to make UI screens for TV plus App and to make internal tool to help developer and tester.
                            </div>
                    </div>
      
                </div>

                <div className="tabs">
                    <div className="tab">
                            <input type="checkbox" id="chckExp"></input>
                            <label className="tab-label" for="chckExp">Experience</label>
                            <div className="tab-content">
                                <div className="row">
                                    <div className="col">
                                        <b>ShareChat</b>
                                        <br/>
                                        <ul>
                                            <li>  Integrated and enhanced feature for Razorpay api in app for transactions which reduced the cost by
                                                almost ~10 -15%  </li>
                                            <li>
                                                 Developed many product features like Combo pack, VIP pack , FlashSale for particular cohorts which is
                                                live on app in which users can buy coins with dynamic discounts and it eventually helped in increasing
                                                revenue by 7-8%  </li>
                                            <li>Integrated smart and efficient CRON jobs to multiple micro-services in order to handle failed
                                                transactions increasing transaction efficiency to 100%</li>
                                            <li>Enhanced performance of the APIs by adding caching, using pub/sub and cloud task.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        Feb 2022 - <i> <b>Current</b></i>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col">
                                        <b>Samsung Electronics</b>
                                        <br/>
                                        <ul>
                                            <li>  Implemented UI for many pages in smart device app named TV PLUS  </li>
                                            <li>  Added KPI's (Key performance indicator) for site resource monitoring (Integrated data analytics pipeline for improvement marketing and customer experience).  </li>
                                            <li>  Developed backend services for internal tools helping in handling the app login usage for Developer / Tester separately  </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        Aug 2021 - Feb 2022
                                    </div>

                                </div>

                                    <div className="row">
                                    <div className="col">
                                           <b> Investwell </b>
                                            <br/>
                                            <ul>
                                            <li> <i> Working As Frontend Developer </i> </li>
                                               <li> Refined the code flow by redesigning the code structure from scratch <br/>thus improving the system’s performance by 5% </li>
<li>Implemented Many features as per the requirement for clients .</li>
<li> Improvised UI for many screen ,used React , SCSS and Redux state management for the same </li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                           Jan 2021 - July 2021
                                        </div>

                                    </div>

                            </div>
                    </div>

                </div>


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
                                        {/* <div className="col-md">
                                            <a href='https://leetcode.com/karancodechef1/'><img src={Leetcode} ></img>     </a>

                                        </div> */}
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
                                    <div className="text-center" >
                                            <a href={"https://karanwadhwa.hashnode.dev/"}   style={{
                                                fontSize: '20px',
                                                letterSpacing:'0', 
                                                textDecoration:'underline',
                                                 color: '#0000ff',
                                                
                                                

                                            }}> Visit My Blog</a>
                                        </div> 
                           
                            </div>
                    </div>
      
                </div>


                

            

        </div>
    )

}
export default Acc
