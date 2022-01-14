import "./button-up.scss";
import { useState } from "react";
import { IoIosArrowUp } from 'react-icons/io';
import { animateScroll as scroll } from 'react-scroll'


const ButtonUp = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  /**
   * When scrolled down 900px, shows the button
   */
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900) {
      setVisible(true)
    }
    else if (scrolled <= 900) {
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div id="up-button" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
      <IoIosArrowUp />
    </div>
  )
};

export default ButtonUp;