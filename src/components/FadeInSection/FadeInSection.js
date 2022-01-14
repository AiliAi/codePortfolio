import "./fade-in-section.scss";
import React, { useRef, useEffect, useState } from "react";

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {

        setVisible(true);

        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`card fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;