import { ChevronLeft, Navigation } from "lucide-react";

const centers = [
  {
    name: "VFS Global Visa Application Center - Gauteng",
    address: "2nd Floor, Rivonia Village Office Park, Corner Rivonia Boulevard and Mutual Road, Rivonia, Johannesburg",
    coordinates: { lat: -26.0474, lng: 28.0603 },
  },
  {
    name: "VFS Global Visa Application Center - Western Cape",
    address: "47 Shortmarket Street, Greenmarket Square, Cape Town",
    coordinates: { lat: -33.9249, lng: 18.4241 },
  },
  {
    name: "VFS Global Visa Application Center - KwaZulu-Natal",
    address: "3rd Floor, Musgrave Towers, 115 Musgrave Road, Durban",
    coordinates: { lat: -29.8497, lng: 31.0218 },
  },
  {
    name: "VFS Global Visa Application Center - Eastern Cape",
    address: "Office 7C, Moffett on Main Lifestyle Centre, 17th Avenue, Walmer, Port Elizabeth",
    coordinates: { lat: -33.9608, lng: 25.6022 },
  },
  {
    name: "VFS Global Visa Application Center - Free State",
    address: "Suite 1, First Floor, Southern Life Gardens, 70 Second Avenue, Westdene, Bloemfontein",
    coordinates: { lat: -29.0852, lng: 26.1596 },
  },
  {
    name: "VFS Global Visa Application Center - Mpumalanga",
    address: "Shop 34B, Riverside Mall, Corner of R40 and White River Road, Nelspruit",
    coordinates: { lat: -25.4753, lng: 30.9694 },
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
        <h2 className="text-2xl font-bold text-gray-800">Visa Application Centers in South Africa</h2>
        <p className="text-gray-600">Select a center near you to get directions:</p>
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