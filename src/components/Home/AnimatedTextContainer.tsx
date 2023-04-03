import { ReactNode, useState } from "react";
import { useInterval } from "usehooks-ts";
import AnimatedText from "./AnimatedText";

const AnimatedTextContainer = () => {
  const childrenLength = 2;
  const [activeIndex, setActiveIndex] = useState<number>(1);

  useInterval(() => {
    setActiveIndex((prevIndex) => (activeIndex == childrenLength ? 1 : ++prevIndex));
    // 8s comes from the animation time
  }, 8000);

  console.log({ activeIndex });

  return (
    <div>
      <AnimatedText text="Hello I'm" animate={activeIndex === 1} />
      <AnimatedText text="Zac Clark" animate={activeIndex === 2} />
    </div>
  );
};

export default AnimatedTextContainer;
