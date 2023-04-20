import React, {useState, useEffect} from 'react';
import {IoIosArrowDropupCircle} from 'react-icons/io';
// import { Button } from './Styles';
  
const Scroll = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 5){
      setVisible(true)
    } 
    if (scrolled <= 5){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  useEffect(() => {
    toggleVisible();
  }, []);
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className='flex flex-end fixed right-4 bottom-24 md:right-7 md:bottom-24 sm:right-5 sm:bottom-24 lg:bottom-32 xl:right-5 z-10 hover:opacity-70 scale-150'>
     {visible && <IoIosArrowDropupCircle onClick={scrollToTop} className="scale-150 hidden sm:inline-block" />}
    </div>
  );
}
  
export default Scroll;
