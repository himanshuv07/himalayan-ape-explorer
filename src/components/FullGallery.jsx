import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FullGallery = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const manali = import.meta.glob("../assets/Manali/*", {
        eager: true,
        as: "url",
      });
      const shimla = import.meta.glob("../assets/Shimla/*", {
        eager: true,
        as: "url",
      });
      const kasol = import.meta.glob("../assets/Kasol/*", {
        eager: true,
        as: "url",
      });

      const manaliImages = Object.values(manali).map((src) => ({
        src,
        location: "Manali",
      }));
      const shimlaImages = Object.values(shimla).map((src) => ({
        src,
        location: "Shimla",
      }));
      const kasolImages = Object.values(kasol).map((src) => ({
        src,
        location: "Kasol",
      }));

      const all = [...shimlaImages, ...manaliImages, ...kasolImages];
      console.log("Loaded images:", all); // 🐞 Debug log

      setImages(all);
    };

    importImages();
  }, []);

  const filteredImages =
    selectedLocation === "All"
      ? images
      : images.filter((img) => img.location === selectedLocation);

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Explore Our Travel Gallery
        </h1>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {["All", "Shimla", "Manali", "Kasol"].map((loc) => (
            <button
              key={loc}
              onClick={() => setSelectedLocation(loc)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold shadow-sm transition ${
                selectedLocation === loc
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 hover:bg-blue-100"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredImages.map((img, i) => (
            <motion.img
              key={i}
              src={img.src}
              alt={`${img.location} ${i}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullGallery;
