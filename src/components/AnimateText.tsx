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
    <div className="relative inline-block font-mono text-3xl text-center w-10/12">
      <span className="invisible">{text}</span>
      <span className="absolute top-0 left-0">
        <TypeAnimation
          key={key}
          sequence={[500, text]}
          wrapper="span"
          cursor={false}
          preRenderFirstString={false}
          repeat={0}
          speed={{ type: "keyStrokeDelayInMs", value: typeSpeed }}
        />
      </span>
    </div>
  );
};

export default AnimateText;
