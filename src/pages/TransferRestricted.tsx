import { motion } from "framer-motion";
import { ShieldAlert, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TransferRestricted = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="card-surface max-w-md w-full text-center space-y-6 py-12 px-8"
      >
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <ShieldAlert className="h-8 w-8 text-destructive" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Transfer Restricted</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Can't initiate transfers to personnel who are not deployed to the US.
            Please contact your unit finance office for further assistance.
          </p>
        </div>

        <div className="pt-2 text-xs text-muted-foreground font-mono uppercase tracking-label">
          Error Code: XFER-DEPLOY-401
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full bg-foreground text-background py-3 rounded-lg font-semibold text-sm uppercase tracking-tight hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
          style={{ transitionDuration: "150ms" }}
        >
          <Home className="h-4 w-4" />
          Return to Dashboard
        </button>
      </motion.div>
    </div>
  );
};

export default TransferRestricted;
