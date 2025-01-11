import { useState, useEffect } from "react";
import { LoadingGlobe } from "@/components/LoadingGlobe";
import { InfoBox } from "@/components/InfoBox";
import { VisaInfo } from "@/components/VisaInfo";
import { ApplicationCenters } from "@/components/ApplicationCenters";
import { Passport, Building2 } from "lucide-react";

type Screen = "main" | "visa" | "centers";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<Screen>("main");
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    // Initial loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const handleScreenChange = async (screen: Screen) => {
    setTransitioning(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCurrentScreen(screen);
    setTransitioning(false);
  };

  if (loading || transitioning) {
    return <LoadingGlobe />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto">
        {currentScreen === "main" && (
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Travel Assistant
            </h1>
            <InfoBox
              title="Visa Information"
              icon={<Passport className="w-6 h-6" />}
              onClick={() => handleScreenChange("visa")}
            />
            <InfoBox
              title="Application Centers"
              icon={<Building2 className="w-6 h-6" />}
              onClick={() => handleScreenChange("centers")}
            />
          </div>
        )}

        {currentScreen === "visa" && (
          <VisaInfo onBack={() => handleScreenChange("main")} />
        )}

        {currentScreen === "centers" && (
          <ApplicationCenters onBack={() => handleScreenChange("main")} />
        )}
      </div>
    </div>
  );
};

export default Index;