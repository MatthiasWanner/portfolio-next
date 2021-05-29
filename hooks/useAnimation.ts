import { useState, useEffect } from "react";

export function useAnimation() {
  const [isAnimate, setIsAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimate((prevState) => !prevState);
    }, 300);
  }, []);

  return isAnimate;
}
