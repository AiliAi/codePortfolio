import "./enter-left-section.scss";
import React, { useRef, useEffect, useState } from "react";

function EnterLeftSection(props) {
  const [isVisibleLeft, setVisibleLeft] = useState(false);
  const domRefLeft = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {

        setVisibleLeft(true);

        // No need to keep observing:
        observer.unobserve(domRefLeft.current);
      }
    });
    observer.observe(domRefLeft.current);
  }, []);

  return (
    <div
      className={`enter-left-section ${isVisibleLeft ? 'is-visible-left' : ''}`}
      ref={domRefLeft}
    >
      {props.children}
    </div>
  );
}

export default EnterLeftSection;