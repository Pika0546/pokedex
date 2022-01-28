import React from 'react'
import { useState, useEffect } from 'react';
import './ScrollToTopBtn.scss';

const ScrollToTopBtn = () => {
    const [isDisplay, setIsDisplay] = useState(false);
    const handleScrollTop =()=>{
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setIsDisplay(true);
        }
        else {
            setIsDisplay(false);
        }
    }

    const scrollTop=()=>{
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    useEffect(() => {
        document.addEventListener("scroll", handleScrollTop)        
        return () => {
            document.removeEventListener("scroll", handleScrollTop);
        }
    }, []);
    return (
      <>
         {isDisplay ?  
            <button className="scroll-top" onClick={scrollTop}>
                <i className="fas fa-angle-double-up"></i>
            </button> : ""
        }
      </>
    )
}

export default ScrollToTopBtn
