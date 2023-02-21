import { useEffect, useState } from "react";

const useDevice = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return {
    height,
    width,
    isMiniPhone: width < 576,
    isPhone: width < 992,
    isTablet: width < 1200 && width >= 992,
    isDesktop: width >= 1200,
  };
};

export default useDevice;