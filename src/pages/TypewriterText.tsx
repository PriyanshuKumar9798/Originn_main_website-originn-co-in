import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 100, className = "" }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      <span className={`inline-block w-1 ml-3 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>
        |
      </span>
    </span>
  );
};

export default TypewriterText;