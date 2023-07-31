import { useEffect, useRef } from "react";

export const useAnimationFrame = (callback: (deltatime: number) => void, maxValue: number) => {
  const requestRef = useRef(0);
  const previousTimeRef = useRef(0);

  const countUp = (time: number) => {
    if (previousTimeRef.current > maxValue) return cancelAnimationFrame(requestRef.current)

    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime)
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(countUp);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(countUp);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
}
