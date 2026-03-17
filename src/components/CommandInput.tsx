import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandInputProps {
  onCodeSubmit: (code: string) => void;
  isProcessing: boolean;
}

const VALID_CODES: Record<string, { label: string; apyBoost: number }> = {
  "SCRA-2024": { label: "SCRA Benefits", apyBoost: 1.2 },
  "OHA-2024": { label: "Overseas Housing Allowance", apyBoost: 0.8 },
  "BAH-2025": { label: "Basic Allowance Housing", apyBoost: 1.0 },
  "TSP-MAX": { label: "TSP Maximizer", apyBoost: 1.5 },
  "MLC-VET": { label: "Veteran Loyalty Credit", apyBoost: 0.5 },
};

const CommandInput = ({ onCodeSubmit, isProcessing }: CommandInputProps) => {
  const [code, setCode] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const upperCode = code.toUpperCase().trim();
    
    if (VALID_CODES[upperCode]) {
      onCodeSubmit(upperCode);
      setToastMessage(`SYSTEM OPTIMIZED — ${VALID_CODES[upperCode].label} activated`);
      setIsError(false);
      setShowToast(true);
      setCode("");
      setTimeout(() => setShowToast(false), 3000);
    } else if (upperCode) {
      setToastMessage("INVALID CODE — Authorization denied");
      setIsError(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-label ${
              isError
                ? "bg-destructive text-destructive-foreground"
                : "bg-benefit text-benefit-foreground"
            }`}
            style={{ boxShadow: isError ? "0 0 30px hsl(0 84% 60% / 0.3)" : "0 0 30px hsl(45 100% 50% / 0.3)" }}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-40">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="ENTER MILITARY CODE"
            disabled={isProcessing}
            className="w-full bg-background border-2 border-primary/30 p-4 rounded-lg font-mono text-center text-foreground text-sm uppercase tracking-label focus:border-primary focus:outline-none transition-all placeholder:text-muted-foreground/30 disabled:opacity-50"
            style={{ transitionDuration: "150ms", transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
          />
          <div className="absolute inset-0 pointer-events-none border border-primary/5 rounded-lg scale-[1.02]" />
        </form>
        <p className="text-center text-muted-foreground/40 text-[10px] font-mono mt-2 uppercase tracking-label">
          Try: SCRA-2024 · OHA-2024 · BAH-2025 · TSP-MAX · MLC-VET
        </p>
      </div>
    </>
  );
};

export { VALID_CODES };
export default CommandInput;
