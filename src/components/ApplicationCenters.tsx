import { ChevronLeft, Navigation } from "lucide-react";

const centers = [
  {
    name: "Main Center",
    address: "123 Main St, City, Country",
    coordinates: { lat: 0, lng: 0 },
  },
  {
    name: "Downtown Center",
    address: "456 Downtown Ave, City, Country",
    coordinates: { lat: 0, lng: 0 },
  },
];

interface ApplicationCentersProps {
  onBack: () => void;
}

export const ApplicationCenters = ({ onBack }: ApplicationCentersProps) => {
  const openMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    const wazeUrl = `https://waze.com/ul?q=${encodedAddress}`;

    const userChoice = window.confirm(
      "Choose a navigation app:\nOK for Google Maps, Cancel for Waze"
    );

    window.open(userChoice ? googleMapsUrl : wazeUrl, "_blank");
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
        <h2 className="text-2xl font-bold text-gray-800">Application Centers</h2>
        <div className="grid gap-4">
          {centers.map((center) => (
            <div
              key={center.name}
              className="bg-white rounded-lg shadow p-4 space-y-2"
            >
              <h3 className="font-semibold text-gray-800">{center.name}</h3>
              <button
                onClick={() => openMaps(center.address)}
                className="flex items-center gap-2 text-primary hover:opacity-80"
              >
                <Navigation className="w-4 h-4" />
                <span>{center.address}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};