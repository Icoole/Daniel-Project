import { useEffect, useState } from "react";
import { useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  className?: string;
  prefix?: string;
  showCents?: boolean;
}

const AnimatedCounter = ({ value, className = "", prefix = "$", showCents = true }: AnimatedCounterProps) => {
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      const whole = Math.floor(v);
      // const cents = Math.floor((v - whole) * 100);
      setDisplay(whole.toLocaleString("en-US"));
    });
    return unsubscribe;
  }, [spring]);

  const cents = Math.floor((value % 1) * 100).toString().padStart(2, "0");

  return (
    <span className={`font-mono tabular-nums ${className}`}>
      {prefix}{display}
      {showCents && <span className="text-balance-cents">.{cents}</span>}
    </span>
  );
};

export default AnimatedCounter;
