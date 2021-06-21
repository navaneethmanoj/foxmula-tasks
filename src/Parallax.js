import React, { useState, useEffect } from "react";
import "./Parallax.css";

function Parallax() {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="parallax">
        
        <img src="sky.png" alt="bg" className="bg-image" />
        <img src="landscape.png" alt="bg" className="parallax-image" />
        <div
          className="content"
          style={{ transform: `translateY(${offset * 0.4}px` }}
        >
          <h1>TREKK</h1>
        </div>
      </div>
      <img src="brownbg.jpg" className="bg-image" alt="" />
    </div>
  );
}

export default Parallax;
