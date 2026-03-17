import { motion } from "framer-motion";

interface StatusBarProps {
  activeCodes: string[];
  codeLabels: Record<string, { label: string }>;
}

const StatusBar = ({ activeCodes, codeLabels }: StatusBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="card-surface flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6"
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-label">
          {activeCodes.length > 0
            ? "Benefits active — system optimized"
            : "All systems nominal"}
        </span>
      </div>
      {activeCodes.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeCodes.map((code) => (
            <span
              key={code}
              className="text-[10px] font-mono uppercase tracking-label px-2 py-1 rounded bg-benefit/10 text-benefit border border-benefit/20"
            >
              {codeLabels[code]?.label || code}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default StatusBar;
