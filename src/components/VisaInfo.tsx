import { ChevronLeft } from "lucide-react";
import { useState } from "react";

const countries = [
  { 
    name: "United States",
    info: "Tourist visa (B1/B2): Required for most visitors. Processing time: 3-6 months. Valid for up to 10 years with multiple entries."
  },
  { 
    name: "United Kingdom",
    info: "Standard Visitor visa: Required for most visitors. Processing time: 3 weeks. Valid for 6 months, 2, 5, or 10 years."
  },
  { 
    name: "Canada",
    info: "Temporary Resident Visa (TRV): Required for most visitors. Processing time: 2-4 weeks. Usually valid for the duration of stay or up to 10 years."
  },
  { 
    name: "Australia",
    info: "eVisitor (subclass 651): Required for most visitors. Processing time: 1-2 business days. Valid for 12 months with multiple entries."
  },
];

interface VisaInfoProps {
  onBack: () => void;
}

export const VisaInfo = ({ onBack }: VisaInfoProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="animate-fade-in">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-primary hover:opacity-80"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Visa Information</h2>
        <div className="grid gap-3">
          {countries.map((country) => (
            <div key={country.name} className="space-y-2">
              <button
                onClick={() => setSelectedCountry(selectedCountry === country.name ? null : country.name)}
                className="w-full p-4 text-left bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <span className="text-gray-800 font-medium">{country.name}</span>
              </button>
              {selectedCountry === country.name && (
                <div className="p-4 bg-gray-50 rounded-lg animate-scale-up">
                  <p className="text-gray-600 text-sm">{country.info}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};