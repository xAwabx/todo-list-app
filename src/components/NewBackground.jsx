import React, { useEffect, useRef } from "react";
import VANTA from "vanta";

const MyComponent = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    VANTA.DOTS({
      el: "background-3d",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0,
      backgroundColor: 0xffffff,
      size: 9.7,
      spacing: 100.0,
      showLines: false,
    });

    return () => {
      if (vantaRef.current) {
        vantaRef.current.vanta.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="background-3d">
      {/* Your content here */}
    </div>
  );
};

export default MyComponent;
