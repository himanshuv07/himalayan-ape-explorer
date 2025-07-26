import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const destinations = [
  "Dubai", "Singapore", "Bali", "Thailand", "Maldives", "Indonesia", "Vietnam", "Bhutan",
  "Shimla", "Manali", "Kasol", "Jibhi", "Dharamshala", "Haridwar", "Rishikesh", "Mussoorie", "Auli", "Nainital", "Lansdowne",
  "Kedarnath", "Badrinath", "Gangotri", "Yamnotri", "Kainchi Dham", "Kailash Darshan", "Devi Darshan Himachal", "Other"
];

type PopupFormProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const PopupForm: React.FC<PopupFormProps> = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [customDestination, setCustomDestination] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  // ✅ Show only on first page load (not route switch)
  useEffect(() => {
    const hasShown = sessionStorage.getItem("popupShown");
    if (!hasShown) {
      setOpen(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, [setOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalDestination = destination === "Other" ? customDestination : destination;
    const message = `Name: ${name}\nPhone: ${phone}\nDestination: ${finalDestination}`;
    const whatsappURL = `https://wa.me/917275223319?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    setShowThankYou(true);
    setTimeout(() => {
      setOpen(false);
      setShowThankYou(false);
    }, 3000);

    setName("");
    setPhone("");
    setDestination("");
    setCustomDestination("");
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <Dialog.Panel className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl flex overflow-hidden border border-gray-200">
          {/* Left: Form */}
          <div className="w-full sm:w-1/2 p-8">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
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
                  🌍 Book Now & Unlock up to 75% Off!
                </h2>
                <p className="text-center text-gray-600 text-sm mb-6">
                  Exclusive deals, custom itineraries, and wild adventures with Himalayan Ape!
                </p>

                <div>
                  <label className="block text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border px-4 py-3 text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-lg border px-4 py-3 text-sm"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Interested Destination</label>
                  <select
                    className="mt-1 w-full rounded-md border px-4 py-2 bg-white"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  >
                    <option value="">Choose a destination</option>
                    <optgroup label="🌐 International">
                      {destinations.slice(0, 8).map((d) => <option key={d} value={d}>{d}</option>)}
                    </optgroup>
                    <optgroup label="🏞️ Domestic">
                      {destinations.slice(8, 18).map((d) => <option key={d} value={d}>{d}</option>)}
                    </optgroup>
                    <optgroup label="🕉️ Religious">
                      {destinations.slice(18).map((d) => <option key={d} value={d}>{d}</option>)}
                    </optgroup>
                  </select>
                </div>

                {destination === "Other" && (
                  <div>
                    <label className="block text-sm font-medium">Please specify</label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-lg border px-4 py-3 text-sm"
                      value={customDestination}
                      onChange={(e) => setCustomDestination(e.target.value)}
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl hover:scale-105 transition-all"
                >
                  Get WhatsApp Itinerary
                </button>
              </form>
            )}
          </div>

          {/* Right: Image */}
          <div
            className="hidden sm:block w-1/2 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80')",
            }}
          />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PopupForm;
