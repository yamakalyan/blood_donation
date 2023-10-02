import React, { useState } from 'react'
import {BsFillCapslockFill} from 'react-icons/bs'
export default function Scroll() {
    const [scroolBtn, setScrollBtn] = useState(false)
    
    const handleScroll =()=>{
        const takeUp = document.documentElement.scrollTop
        if (takeUp > 300) {
            setScrollBtn(true)
        } else if(takeUp <= 300){
            setScrollBtn(false)
        }
    }

    const handleScrollingTop =()=>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    }
    window.addEventListener('scroll', handleScroll)

  return (
    <div>
        <button className='up-btn' style={{display : scroolBtn ? "inline" : "none"}} onClick={handleScrollingTop}> <BsFillCapslockFill /> </button>
    </div>
  )
}
