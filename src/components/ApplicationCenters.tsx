import { ChevronLeft, Navigation, Clock, Phone, Globe, Mail } from "lucide-react";
import { useState } from "react";

const centers = {
  "South African Visas": [
    {
      name: "VFS Global Visa Application Center - Gauteng",
      address: "2nd Floor, Rivonia Village Office Park, Corner Rivonia Boulevard and Mutual Road, Rivonia, Johannesburg",
      coordinates: { lat: -26.0474, lng: 28.0603 },
      hours: "Monday to Friday: 08:00 - 16:00",
      phone: "+27 12 425 3000",
      email: "info.savisa@vfshelpline.com",
      website: "https://www.vfsglobal.com/dha/southafrica",
    },
    {
      name: "VFS Global Visa Application Center - Western Cape",
      address: "47 Shortmarket Street, Greenmarket Square, Cape Town",
      coordinates: { lat: -33.9249, lng: 18.4241 },
      hours: "Monday to Friday: 08:00 - 16:00",
      phone: "+27 21 401 1000",
      email: "info.savisa@vfshelpline.com",
      website: "https://www.vfsglobal.com/dha/southafrica",
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
  "UK Visas": [
    {
      name: "UK Visa Application Centre - Johannesburg",
      address: "2nd Floor, 24 Central Building, 6 Gwen Lane, Sandton, Johannesburg",
      coordinates: { lat: -26.1052, lng: 28.0560 },
      hours: "Monday to Friday: 08:30 - 16:30",
      phone: "+27 27 836 9166",
      email: "info.ukvisa@vfshelpline.com",
      website: "https://www.vfsglobal.co.uk/southafrica/how_to_apply.html",
    },
    {
      name: "UK Visa Application Centre - Cape Town",
      address: "2nd Floor, Picbel Parkade, 58 Strand Street, Cape Town",
      coordinates: { lat: -33.9205, lng: 18.4233 },
      hours: "Monday to Friday: 08:30 - 16:30",
      phone: "+27 21 401 2000",
      email: "info.ukvisa@vfshelpline.com",
      website: "https://www.vfsglobal.co.uk/southafrica/how_to_apply.html",
    },
    {
      name: "UK Visa Application Centre - Durban",
      address: "Unit 1, Level 2, Durban Bay House, 333 Anton Lembede Street, Durban",
      coordinates: { lat: -29.8579, lng: 31.0292 },
    },
  ],
  "US Visas": [
    {
      name: "U.S. Consulate General - Johannesburg",
      address: "1 Sandton Drive, Sandhurst, Johannesburg",
      coordinates: { lat: -26.1033, lng: 28.0566 },
    },
    {
      name: "U.S. Consulate General - Cape Town",
      address: "2 Reddam Avenue, Westlake Business Park, Tokai, Cape Town",
      coordinates: { lat: -34.0741, lng: 18.4436 },
    },
  ],
  "Australian Visas": [
    {
      name: "Australian Visa Application Centre - Pretoria",
      address: "Ground Floor, Brooklyn Bridge Office Park, 570 Fehrsen Street, Brooklyn, Pretoria",
      coordinates: { lat: -25.7461, lng: 28.2314 },
    },
    {
      name: "Australian Visa Application Centre - Cape Town",
      address: "2nd Floor, Norton Rose House, 8 Riebeek Street, Cape Town",
      coordinates: { lat: -33.9205, lng: 18.4233 },
    },
  ],
  "Canadian Visas": [
    {
      name: "Canada Visa Application Centre - Johannesburg",
      address: "2nd Floor, West Tower, Sandton City, Rivonia Road, Sandton",
      coordinates: { lat: -26.1070, lng: 28.0520 },
    },
    {
      name: "Canada Visa Application Centre - Cape Town",
      address: "2nd Floor, Icon Building, 24 Hans Strijdom Avenue, Cape Town City Centre",
      coordinates: { lat: -33.9180, lng: 18.4233 },
    },
  ],
  "Schengen Visas": [
    {
      name: "German Visa Application Centre",
      address: "47 Oxford Road, Forest Town, Johannesburg, 2193",
      coordinates: { lat: -26.1544, lng: 28.0417 },
      hours: "Monday to Friday: 08:00 - 15:00",
      phone: "+27 12 346 0052",
      email: "info.gesa@vfshelpline.com",
      website: "https://www.germany-visa.co.za",
    },
    {
      name: "French Visa Application Centre",
      address: "The Central, Lower Ground Floor, 96 Rivonia Road, Sandton, Johannesburg",
      coordinates: { lat: -26.1086, lng: 28.0567 },
      hours: "Monday to Friday: 08:00 - 16:00",
      phone: "+27 12 425 3000",
      email: "info.frsa@vfshelpline.com",
      website: "https://france-visas.gouv.fr",
    },
    {
      name: "Italian Visa Application Centre",
      address: "1st Floor, The Towers, 2 Heerengracht Street, Cape Town",
      coordinates: { lat: -33.9187, lng: 18.4232 },
      hours: "Monday to Friday: 08:30 - 16:00",
      phone: "+27 21 401 1000",
      email: "info.itsa@vfshelpline.com",
      website: "https://vistoperitalia.esteri.it",
    },
    {
      name: "Spanish Visa Application Centre",
      address: "2nd Floor, 1 Sandton Drive, Sandhurst, Johannesburg",
      coordinates: { lat: -26.1067, lng: 28.0567 },
      hours: "Monday to Friday: 09:00 - 16:00",
      phone: "+27 12 425 3000",
      email: "info.essa@vfshelpline.com",
      website: "http://www.exteriores.gob.es",
    },
    {
      name: "Netherlands Visa Application Centre",
      address: "2nd Floor, Rivonia Village Office Park, Rivonia Boulevard, Johannesburg",
      coordinates: { lat: -26.0474, lng: 28.0603 },
      hours: "Monday to Friday: 08:30 - 15:30",
      phone: "+27 12 425 3000",
      email: "info.nlsa@vfshelpline.com",
      website: "https://www.netherlandsandyou.nl",
    },
    {
      name: "Belgian Visa Application Centre",
      address: "The Central, Lower Ground Floor, 96 Rivonia Road, Sandton, Johannesburg",
      coordinates: { lat: -26.1086, lng: 28.0567 },
      hours: "Monday to Friday: 08:00 - 15:00",
      phone: "+27 12 425 3000",
      email: "info.besa@vfshelpline.com",
      website: "https://diplomatie.belgium.be",
    },
    {
      name: "Swiss Visa Application Centre",
      address: "1st Floor, The Place, 1 Sandton Drive, Sandton, Johannesburg",
      coordinates: { lat: -26.1070, lng: 28.0562 },
      hours: "Monday to Friday: 08:00 - 15:00",
      phone: "+27 12 425 3000",
      email: "info.chsa@vfshelpline.com",
      website: "https://www.eda.admin.ch",
    },
  ],
};

interface ApplicationCentersProps {
  onBack: () => void;
}

export const ApplicationCenters = ({ onBack }: ApplicationCentersProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("South African Visas");

  const openMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    const wazeUrl = `https://waze.com/ul?q=${encodedAddress}`;

    const userChoice = window.confirm(
      "Choose a navigation app:\nOK for Google Maps, Cancel for Waze"
    );

    window.open(userChoice ? googleMapsUrl : wazeUrl, "_blank");
  };

  const openWebsite = (url: string) => {
    window.open(url, "_blank");
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

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Visa Application Centers in South Africa</h2>
        <p className="text-gray-600">Select which country's visa you want to apply for:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(centers).map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCountry === country
                  ? "bg-primary text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {country}
            </button>
          ))}
        </div>
        <div className="grid gap-6">
          {centers[selectedCountry].map((center) => (
            <div
              key={center.name}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 space-y-4 border border-gray-100"
            >
              <h3 className="font-bold text-xl text-gray-800">{center.name}</h3>
              
              <div className="grid gap-3 text-gray-600">
                <button
                  onClick={() => openMaps(center.address)}
                  className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
                >
                  <Navigation className="w-4 h-4 flex-shrink-0" />
                  <span className="text-left">{center.address}</span>
                </button>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0 text-primary" />
                  <span>{center.hours}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                  <a href={`tel:${center.phone}`} className="hover:text-primary transition-colors">
                    {center.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                  <a href={`mailto:${center.email}`} className="hover:text-primary transition-colors">
                    {center.email}
                  </a>
                </div>
                
                <button
                  onClick={() => openWebsite(center.website)}
                  className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
                >
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  <span>Visit Website</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
