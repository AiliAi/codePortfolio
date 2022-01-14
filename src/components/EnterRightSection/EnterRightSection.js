import "./enter-right-section.scss";
import React, { useRef, useEffect, useState } from "react";

function EnterrightSection(props) {
  const [isVisibleright, setVisibleright] = useState(false);
  const domRefright = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {

        setVisibleright(true);

        // No need to keep observing:
        observer.unobserve(domRefright.current);
      }
    });
    observer.observe(domRefright.current);
  }, []);

  return (
    <div
      className={`enter-right-section ${isVisibleright ? 'is-visible-right' : ''}`}
      ref={domRefright}
    >
      {props.children}
    </div>
  );
}

export default EnterrightSection;