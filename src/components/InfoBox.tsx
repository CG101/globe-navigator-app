import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfoBoxProps {
  title: string;
  icon: ReactNode;
  onClick: () => void;
  className?: string;
}

export const InfoBox = ({ title, icon, onClick, className }: InfoBoxProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300",
        "transform hover:scale-105 animate-scale-up",
        "flex items-center gap-4",
        className
      )}
    >
      <div className="text-primary">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </button>
  );
};