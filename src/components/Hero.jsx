import React, { useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>Macbook pro</h1>
      </div>

      <video
        ref={videoRef}
        src="/videos/hero.map4"
        autoplay
        muted
        playsInline
      />

      <button>Buy</button>

      <p>From $1599 ro $133/mo for 12 month</p>
    </section>
  );
};

export default Hero;
