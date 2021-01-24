import {React,useEffect} from 'react'
import IntroOverlay from './introoverlay'
import Content from './content'
import Boxes from './boxes'

import gsap from "gsap";
import Header from './header';


let tl = gsap.timeline();
const homeAnimation = completeAnimation => {
  tl.from(".select", 1.8, {
    y: 100,
    opacity:0,
    ease: "power4.out",
    delay: 2,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" }
    })
    .from(".bordered img", 1.6, {
      scale: 1.2,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4
      },
    //   onComplete: completeAnimation
    });
};

const Home=()=>{
    
    useEffect(() => {
        homeAnimation();
      }, []);

    return(
        <div>
           
            <IntroOverlay></IntroOverlay>
            <Header></Header>
            <Content></Content>
            <Boxes></Boxes>
        </div>

    )
}
export default Home