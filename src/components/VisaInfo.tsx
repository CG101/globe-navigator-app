import { ChevronLeft } from "lucide-react";
import { useState } from "react";

const countries = [
  { name: "United States", pdfUrl: "#" },
  { name: "United Kingdom", pdfUrl: "#" },
  { name: "Canada", pdfUrl: "#" },
  { name: "Australia", pdfUrl: "#" },
];

interface VisaInfoProps {
  onBack: () => void;
}

export const VisaInfo = ({ onBack }: VisaInfoProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleCountryClick = (pdfUrl: string) => {
    // In a premium version, this would handle PDF download
    alert("Premium Feature: PDF Download");
  };

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
            <button
              key={country.name}
              onClick={() => handleCountryClick(country.pdfUrl)}
              className="w-full p-4 text-left bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <span className="text-gray-800">{country.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};