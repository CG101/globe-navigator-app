import { useState, useEffect } from "react";
import { LoadingGlobe } from "@/components/LoadingGlobe";
import { InfoBox } from "@/components/InfoBox";
import { VisaInfo } from "@/components/VisaInfo";
import { ApplicationCenters } from "@/components/ApplicationCenters";
import { FileText, Building2, ClipboardList, HelpCircle } from "lucide-react";

type Screen = "main" | "visa" | "centers" | "checklist" | "need-visa";

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
              icon={<FileText className="w-6 h-6" />}
              onClick={() => handleScreenChange("visa")}
            />
            <InfoBox
              title="Application Centers"
              icon={<Building2 className="w-6 h-6" />}
              onClick={() => handleScreenChange("centers")}
            />
            <InfoBox
              title="Visa Checklist"
              icon={<ClipboardList className="w-6 h-6" />}
              onClick={() => handleScreenChange("checklist")}
            />
            <InfoBox
              title="Do I Need a Visa?"
              icon={<HelpCircle className="w-6 h-6" />}
              onClick={() => handleScreenChange("need-visa")}
            />
          </div>
        )}

        {currentScreen === "visa" && (
          <VisaInfo onBack={() => handleScreenChange("main")} />
        )}

        {currentScreen === "centers" && (
          <ApplicationCenters onBack={() => handleScreenChange("main")} />
        )}

        {/* Note: The new screens will need to be implemented separately */}
        {currentScreen === "checklist" && (
          <div className="animate-fade-in">
            <button
              onClick={() => handleScreenChange("main")}
              className="mb-6 flex items-center text-primary hover:opacity-80"
            >
              <span>Back</span>
            </button>
            <h2 className="text-2xl font-bold text-gray-800">Visa Checklist</h2>
            <p className="text-gray-600 mt-4">Coming soon...</p>
          </div>
        )}

        {currentScreen === "need-visa" && (
          <div className="animate-fade-in">
            <button
              onClick={() => handleScreenChange("main")}
              className="mb-6 flex items-center text-primary hover:opacity-80"
            >
              <span>Back</span>
            </button>
            <h2 className="text-2xl font-bold text-gray-800">Do I Need a Visa?</h2>
            <p className="text-gray-600 mt-4">Coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;