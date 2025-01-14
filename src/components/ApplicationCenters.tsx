import { ChevronLeft, Navigation } from "lucide-react";
import { useState } from "react";

const centers = {
  "South Africa": [
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
  ],
  "United Kingdom": [
    {
      name: "VFS Global UK Visa Application Centre - London",
      address: "66 Wilson Street, London, EC2A 2BT",
      coordinates: { lat: 51.5208, lng: -0.0870 },
    },
    {
      name: "VFS Global UK Visa Application Centre - Manchester",
      address: "50 Broadway, Salford Quays, Manchester M50 2UW",
      coordinates: { lat: 53.4723, lng: -2.2935 },
    },
  ],
  "United States": [
    {
      name: "VFS Global USA Application Center - New York",
      address: "145 West 45th Street, Floor 4, New York, NY 10036",
      coordinates: { lat: 40.7573, lng: -73.9842 },
    },
    {
      name: "VFS Global USA Application Center - Washington DC",
      address: "1025 Vermont Avenue NW, Suite 200, Washington, DC 20005",
      coordinates: { lat: 38.9020, lng: -77.0307 },
    },
  ],
  "Australia": [
    {
      name: "VFS Global Australia Visa Application Centre - Sydney",
      address: "Level 5, 338 Pitt Street, Sydney NSW 2000",
      coordinates: { lat: -33.8736, lng: 151.2075 },
    },
    {
      name: "VFS Global Australia Visa Application Centre - Melbourne",
      address: "Level 3, 280 Collins Street, Melbourne VIC 3000",
      coordinates: { lat: -37.8156, lng: 144.9666 },
    },
  ],
  "Canada": [
    {
      name: "VFS Global Canada Visa Application Centre - Toronto",
      address: "208 Bloor Street West, 3rd Floor, Toronto, ON M5S 3B4",
      coordinates: { lat: 43.6685, lng: -79.3989 },
    },
    {
      name: "VFS Global Canada Visa Application Centre - Vancouver",
      address: "1285 West Pender Street, Suite 300, Vancouver, BC V6E 4B1",
      coordinates: { lat: 49.2866, lng: -123.1218 },
    },
  ],
};

interface ApplicationCentersProps {
  onBack: () => void;
}

export const ApplicationCenters = ({ onBack }: ApplicationCentersProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("South Africa");

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
        <h2 className="text-2xl font-bold text-gray-800">Visa Application Centers</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(centers).map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCountry === country
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {country}
            </button>
          ))}
        </div>
        <div className="grid gap-4">
          {centers[selectedCountry].map((center) => (
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