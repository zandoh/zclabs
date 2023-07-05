import AnimatedText from "./AnimatedText";

const AnimatedTextContainer = () => {
  return (
    <div className="flex flex-col">
      <AnimatedText text="Hello I'm" />
      <AnimatedText text="Zac Clark" />
    </div>
  );
};

export default AnimatedTextContainer;
