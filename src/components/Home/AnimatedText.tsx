const AnimatedText = ({ text, animate }: { text: string; animate: boolean }) => {
  return <h1 className={"animated-text " + `${animate ? "animate" : ""}`}>{text}</h1>;
};

export default AnimatedText;
