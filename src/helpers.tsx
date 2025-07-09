import React, { useEffect, useState } from "react";

export const nlToBr = (text: string) =>
  (text || "").split("\n").map((l, index) => (
    <React.Fragment key={index}>
      {l}
      <br />
    </React.Fragment>
  ));

export const addPxSuffix = (value: string | number) => {
  if (typeof value === "number") return `${value}px`;
  else return value;
};

type WindowDimentions = {
  width: number | undefined;
  height: number | undefined;
};

export const useWindowDimensions = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};
