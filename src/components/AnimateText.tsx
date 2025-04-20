"use client";

import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

interface AnimateTextProps {
  text: string;
  typeSpeed: number;
}

const AnimateText = ({ text, typeSpeed }: AnimateTextProps) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [text]);

  return (
    <TypeAnimation
      key={key}
      sequence={[1000, text]}
      wrapper="span"
      cursor={false}
      preRenderFirstString={false}
      repeat={0}
      speed={{ type: "keyStrokeDelayInMs", value: typeSpeed }}
      className="inline-block font-mono text-2xl"
    />
  );
};

export default AnimateText;
