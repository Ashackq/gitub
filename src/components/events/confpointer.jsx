import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

function getAnimationSettings(angle, originX) {
  return {
    particleCount: 3,
    angle,
    spread: 55,
    origin: { x: originX },
    colors: ["#bb0000", "#ffffff"]
  };
}

export default function SchoolPride() {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();
  const targetRef = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(60, 0));
      refAnimationInstance.current(getAnimationSettings(120, 1));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 16));
      setTimeout(() => {
        clearInterval(intervalId);
        setIntervalId(null);
      },100); //
    }
  }, [nextTickAnimation, intervalId]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startAnimation();
        observer.unobserve(entries[0].target);
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [intervalId, startAnimation]);

  return (
    <>
      
      <div  ref={targetRef}>
        Scroll to this part to trigger the animation
      </div>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
