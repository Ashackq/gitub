import React, { useCallback, useRef, useEffect } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "absolute",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  right: 0,
  top: 0,
  zIndex: 100,
};

export default function Realistic() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  useEffect(() => {
    const handleMouseClick = () => {
      makeShot(0.25, {
        spread: 26,
        startVelocity: 55,
      });

      makeShot(0.2, {
        spread: 60,
      });

      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    };

    // Trigger the animation when the component mounts
    handleMouseClick();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, [makeShot]);

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
