"use client";

import { TypeAnimation } from "react-type-animation";

interface AnimateTextProps {
  text: string;
  typeSpeed: number;
}

const AnimateText = ({ text, typeSpeed }: AnimateTextProps) => {
  return (
    <TypeAnimation
      sequence={[1000, text]}
      wrapper="span"
      cursor={false}
      preRenderFirstString={false}
      repeat={0}
      speed={{ type: "keyStrokeDelayInMs", value: typeSpeed }}
      className="inline-block font-mono"
    />
  );
};

export default AnimateText;
