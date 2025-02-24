import useCopy from "@/hooks/useCopy";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Copy } from "lucide-react";

export default function CopyScript({ script, className, ...props }) {
  const { copy, status } = useCopy();
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #10181E 0%, #0E1F25 100%)",
        border: "1px solid #004B53",
        padding: "21px 26px",
        borderRadius: 24,
        color: "#A1FFFF",
      }}
      className={cn("flex gap-2", className)}
    >
      <span className="flex-1 font-code">{script}</span>

      <button
        onClick={() => {
          copy(script);
        }}
      >
        {status === "success" ? <Check /> : <Copy />}
      </button>
    </div>
  );
}
