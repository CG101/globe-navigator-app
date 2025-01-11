import { Globe } from "lucide-react";

export const LoadingGlobe = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 animate-fade-in">
      <Globe className="w-16 h-16 text-primary animate-globe-spin" />
    </div>
  );
};