import { useState } from "react";
import useInterval from "../../hooks/useInterval";
import AnimatedText from "./AnimatedText";

const AnimatedTextContainer = () => {
  const childrenLength = 2;
  const [activeIndex, setActiveIndex] = useState<number>(1);

  useInterval(() => {
    setActiveIndex((prevIndex) => (activeIndex == childrenLength ? 1 : ++prevIndex));
    // 4s comes from the animation time
  }, 4000);

  return (
    <div>
      <AnimatedText text="Hello I'm" animate={activeIndex === 1} />
      <AnimatedText text="Zac Clark" animate={activeIndex === 2} />
    </div>
  );
};

export default AnimatedTextContainer;
