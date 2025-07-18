import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const destinations = [
  "Dubai",
  "Singapore",
  "Bali",
  "Thailand",
  "Maldives",
  "Indonesia",
  "Vietnam",
  "Bhutan",
  "Shimla",
  "Manali",
  "Kasol",
  "Jibhi",
  "Dharamshala",
  "Haridwar",
  "Rishikesh",
  "Mussoorie",
  "Auli",
  "Nainital",
  "Lansdowne",
  "Kedarnath",
  "Badrinath",
  "Gangotri",
  "Yamnotri",
  "Kainchi Dham",
  "Kailash Darshan",
  "Devi Darshan Himachal",
  "Other",
];

const PopupForm = ({
  open,
  setOpen,
}: {
  open: boolean,
  setOpen: (open: boolean) => void,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [customDestination, setCustomDestination] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => setShowThankYou(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalDestination =
      destination === "Other" ? customDestination : destination;
    const message = `Name: ${name}\nPhone: ${phone}\nDestination: ${finalDestination}`;
    const whatsappURL = `https://wa.me/917275223319?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
    setShowThankYou(true);
    setName("");
    setPhone("");
    setDestination("");
    setCustomDestination("");
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex min-h-screen items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <Dialog.Panel className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl flex overflow-hidden border border-gray-200">
          {/* Left: Form Section */}
          <div className="w-full sm:w-1/2 p-8">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setOpen(false)}
            >
              <X size={24} />
            </button>

            {showThankYou ? (
              <div className="flex h-full items-center justify-center text-center">
                <h3 className="text-2xl font-bold text-green-600">
                  ✅ Thank you! We’ll reach out on WhatsApp.
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-center mb-4">
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                    Limited Time Offer
                  </span>
                </div>

                <h2 className="text-center text-2xl font-bold text-blue-700">
                    🌍 Book Your First Trip & Get 75% Off!
                </h2>
                <p className="text-center text-gray-600 text-sm mb-6">
                  Unlock exclusive deals, personalized itineraries, and
                  unforgettable travel experiences with Himalayan Ape.
                </p>

                <div>
                  <label className="block text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Interested Destination
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-500"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  >
                    <option value="">Choose a destination</option>
                    <optgroup label="🌐 International">
                      <option>Dubai</option>
                      <option>Singapore</option>
                      <option>Bali</option>
                      <option>Thailand</option>
                      <option>Maldives</option>
                      <option>Indonesia</option>
                      <option>Vietnam</option>
                      <option>Bhutan</option>
                    </optgroup>
                    <optgroup label="🏞️ Domestic">
                      <option>Shimla</option>
                      <option>Manali</option>
                      <option>Kasol</option>
                      <option>Jibhi</option>
                      <option>Dharamshala</option>
                      <option>Haridwar</option>
                      <option>Rishikesh</option>
                      <option>Mussoorie</option>
                      <option>Auli</option>
                      <option>Nainital</option>
                      <option>Lansdowne</option>
                    </optgroup>
                    <optgroup label="🕉️ Religious">
                      <option>Kedarnath</option>
                      <option>Badrinath</option>
                      <option>Gangotri</option>
                      <option>Yamnotri</option>
                      <option>Kainchi Dham</option>
                      <option>Kailash Darshan</option>
                      <option>Devi Darshan Himachal</option>
                    </optgroup>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {destination === "Other" && (
                  <div>
                    <label className="block text-sm font-medium">
                      Please specify
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      value={customDestination}
                      onChange={(e) => setCustomDestination(e.target.value)}
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-xl hover:scale-105 transform transition-all duration-300 font-semibold shadow-md"
                >
                  Get personalized WhatsApp plan
                </button>
              </form>
            )}
          </div>

          {/* Right: Image Section */}
          <div
            className="hidden sm:block w-1/2 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80')",
            }}
          ></div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PopupForm;
