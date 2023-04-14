const AnimatedText = ({ text, animate }: { text: string; animate: boolean }) => {
  return (
    <h1 className={"animated-text text-app-onyx dark:text-app-antiFlashWhite " + `${animate ? "animate" : ""}`}>
      {text}
    </h1>
  );
};

export default AnimatedText;
