import "./navigation.scss";
import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navigation = () => {

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);

  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  isResponsiveclose ? disableBodyScroll(document) : enableBodyScroll(document);

  let boxClass = ["main-menu"];
  if (isMenu) {
    boxClass.push('menuq2');
  } else {
    boxClass.push('');
  }

  return (
    <nav className="main-nav">
      {/* Responsive Menu Button */}
      {isResponsiveclose === true ? <>
        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <AiOutlineClose />   </span>
      </> : <>
        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <AiOutlineMenu />   </span>
      </>}
      <ul className={boxClass.join(' ')}>
        <li className="menu-item" >
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={400}
            className='text-decoration'
            activeClass='active'
            onClick={toggleClass}
          >
            About
          </ScrollLink>
        </li>
        <li className="menu-item" >
          <ScrollLink
            to="works"
            spy={true}
            smooth={true}
            duration={500}
            className='text-decoration'
            activeClass='active'
            onClick={toggleClass}
          >
            Works
          </ScrollLink>
        </li>
        <li className="menu-item" >
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            className='text-decoration'
            activeClass='active'
            onClick={toggleClass}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>

    </nav>
  );
};

export default Navigation;
