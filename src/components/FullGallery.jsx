import React, { useState } from "react";
import { motion } from "framer-motion";

const FullGallery = () => {
  const [filter, setFilter] = useState("All");

  const galleryData = [
    {
      category: "Manali",
      images: [
        "https://i.postimg.cc/kXxG6hKq/GOPR0969.jpg",
        "https://i.postimg.cc/PrGNqkLS/GOPR1009.jpg",
        "https://i.postimg.cc/8cv5bZYd/GOPR1065.jpg",
        "https://i.postimg.cc/dVw18mjd/GOPR1066.jpg",
        "https://i.postimg.cc/52gtpYsr/IMG-3518.jpg",
        "https://i.postimg.cc/XvDY6MSc/IMG-3522.jpg",
        "https://i.postimg.cc/d00VfsXV/IMG-3527.jpg",
        "https://i.postimg.cc/RF6VMPvr/IMG-3531.jpg",
        "https://i.postimg.cc/0j7kSb6c/IMG-3559.jpg",
        "https://i.postimg.cc/XN57mD2d/IMG-3572.jpg",
        "https://i.postimg.cc/fTjWTSQb/IMG-3587.jpg",
        "https://i.postimg.cc/nctcJY55/IMG-3605.jpg",
        "https://i.postimg.cc/HkYYJWT9/IMG-3608.jpg",
        "https://i.postimg.cc/cLFsfqHy/IMG-3610.jpg",
        "https://i.postimg.cc/rpbMYSxf/IMG-3620.jpg",
        "https://i.postimg.cc/hjdcFf0c/IMG-3629.jpg",
        "https://i.postimg.cc/hPggw4QR/IMG-3637.jpg",
        "https://i.postimg.cc/WzcjsT9r/IMG-3642.jpg",
        "https://i.postimg.cc/QCgDtwPz/IMG-3644.jpg",
        "https://i.postimg.cc/VLR1cyXr/IMG-3646.jpg",
        "https://i.postimg.cc/nhhxFd1d/IMG-3650.jpg",
        "https://i.postimg.cc/mgpstQXT/IMG-3653.jpg",
        "https://i.postimg.cc/8CFVWj9M/IMG-3660.jpg",
        "https://i.postimg.cc/J08w9Kn5/IMG-3675.jpg",
        "https://i.postimg.cc/Cx5yTRFX/IMG-3680.jpg",
        "https://i.postimg.cc/DyBVMrK1/IMG-3690.jpg",
        "https://i.postimg.cc/JhH90SHQ/IMG-3706.jpg",
        "https://i.postimg.cc/ZRkXdjrz/IMG-3709.jpg",
        "https://i.postimg.cc/d3wXW1HW/IMG-3716.jpg",
        "https://i.postimg.cc/3N1qzTz3/IMG-3732.jpg",
        "https://i.postimg.cc/7Pnj53hj/IMG-3741.jpg",
        "https://i.postimg.cc/QxNw1FWC/IMG-3751.jpg",
        "https://i.postimg.cc/DyCDg7qg/IMG-3757.jpg",
        "https://i.postimg.cc/cLrzkPhN/IMG-3770.jpg",
        "https://i.postimg.cc/fRprG5qS/IMG-3778.jpg",
        "https://i.postimg.cc/rp4PMW7n/IMG-3780.jpg",
        "https://i.postimg.cc/pTYcnvWK/IMG-3792.jpg",
        "https://i.postimg.cc/LXM0X5pH/IMG-3799.jpg",
        "https://i.postimg.cc/SQYJqKKX/IMG-3804.jpg",
      ],
    },

    // 🌲 Kasol Images
    {
      category: "Kasol",
      images: [
        "https://i.postimg.cc/pL2QcjBb/GOPR0702.jpg",
        "https://i.postimg.cc/5trwtRWb/GOPR0703.jpg",
        "https://i.postimg.cc/8kMh14Kg/GOPR0722.jpg",
        "https://i.postimg.cc/nh04yLds/GOPR0731.jpg",
        "https://i.postimg.cc/7LzLgsTx/GOPR0746.jpg",
        "https://i.postimg.cc/4xqdHkyL/GOPR0750.jpg",
        "https://i.postimg.cc/tCmR8Q3q/GOPR0810.jpg",
        "https://i.postimg.cc/MH3xkVjP/GOPR0826.jpg",
        "https://i.postimg.cc/J729L122/GOPR0840.jpg",
        "https://i.postimg.cc/2yMJFwWD/GOPR0841.jpg",
        "https://i.postimg.cc/P5QHhgZv/GOPR0842.jpg",
        "https://i.postimg.cc/GtD0fVd2/GOPR0959.jpg",
        "https://i.postimg.cc/YCpVNhGj/GOPR0962.jpg",
        "https://i.postimg.cc/jdYB58RH/GOPR0983.jpg",
      ],
    },

    // 🏘️ Shimla Images
    {
      category: "Shimla",
      images: [
        "https://i.postimg.cc/yYwhB5BK/2017-09-25-22-10-54-01.jpg",
        "https://i.postimg.cc/ZqL685NY/2017-09-25-22-18-38-01.jpg",
        "https://i.postimg.cc/J0sJC32t/DSCN1050-01.jpg",
        "https://i.postimg.cc/mZnCNqP9/DSCN1102-01.jpg",
        "https://i.postimg.cc/J4BJTqX2/FKN-7884-01.jpg",
        "https://i.postimg.cc/pLfjvLqQ/IMG-0072-01.jpg",
        "https://i.postimg.cc/MpQCKhQm/IMG-20170820-125852-01.jpg",
        "https://i.postimg.cc/GpP6vGzB/IMG-20171103-150342-HDR-01.jpg",
        "https://i.postimg.cc/R0xj3X15/IMG-20180207-173512-BURST15-01.jpg",
        "https://i.postimg.cc/507vrKpZ/IMG-20180210-092756-01.jpg",
        "https://i.postimg.cc/43GzH9mF/IMG-20180401-073448-01.jpg",
        "https://i.postimg.cc/6qFZW7kc/IMG-2586-01.jpg",
        "https://i.postimg.cc/pdPFLM6w/IMG-3034-01-01.jpg",
        "https://i.postimg.cc/rmmR5Ccg/IMG-3613-01.jpg",
        "https://i.postimg.cc/XvxyZDMp/IMG-3790-01.jpg",
        "https://i.postimg.cc/nzPj2jhx/IMG-4282-01.jpg",
        "https://i.postimg.cc/8cvRrBB9/IMG-4304-01.jpg",
        "https://i.postimg.cc/cLSmwjzm/IMG-4329-01.jpg",
        "https://i.postimg.cc/vHW7Yhm6/IMG-4335-01.jpg",
        "https://i.postimg.cc/c4YhKZFC/IMG-4820-01-01.jpg",
        "https://i.postimg.cc/j2yfjqRr/IMG-5281-01.jpg",
        "https://i.postimg.cc/7YM78LB3/IMG-5282-01.jpg",
        "https://i.postimg.cc/LssjVM3z/IMG-5323-01.jpg",
        "https://i.postimg.cc/Hn0JgStY/IMG-5488-01.jpg",
        "https://i.postimg.cc/mrhFHyTj/IMG-5594-01.jpg",
        "https://i.postimg.cc/tTxZrRZV/IMG-5600-01.jpg",
        "https://i.postimg.cc/tRFnWTGK/IMG-7511-01.jpg",
        "https://i.postimg.cc/L5FqGdLQ/IMG-7535-01.jpg",
        "https://i.postimg.cc/qM0hLTkz/IMG-7577-01-01.jpg",
        "https://i.postimg.cc/9Fp4gnM1/IMG-7745-01.jpg",
        "https://i.postimg.cc/wjj1CQRz/IMG-7784-01.jpg",
        "https://i.postimg.cc/7LCf6PNQ/IMG-7787-01.jpg",
        "https://i.postimg.cc/htZXcQVd/IMG-7797-01-01.jpg",
        "https://i.postimg.cc/W4QtJRWp/IMG-7807-01.jpg",
        "https://i.postimg.cc/hjTvLC6L/IMG-7835-01.jpg",
        "https://i.postimg.cc/prvTqfMg/IMG-8092-01.jpg",
        "https://i.postimg.cc/7hNLc5xb/IMG-8968-01.jpg",
        "https://i.postimg.cc/tRd77Mhy/IMG-9020-01.jpg",
        "https://i.postimg.cc/xT08m3Rm/IMG-9024-01.jpg",
        "https://i.postimg.cc/7Ym6nJsW/IMG-9042-01.jpg",
        "https://i.postimg.cc/W1z4Wpxb/IMG-9069-01.jpg",
        "https://i.postimg.cc/8zYzqQVd/IMG-9071-02.jpg",
        "https://i.postimg.cc/1zN3SC9k/IMG-9078-01.jpg",
        "https://i.postimg.cc/26R8SQyV/IMG-9686-01.jpg",
        "https://i.postimg.cc/ZnJbrJrm/IMG-9694-01.jpg",
        "https://i.postimg.cc/50B9YXQp/IMG-9695-01.jpg",
        "https://i.postimg.cc/zvpJ74jg/IMG-9719-01.jpg",
        "https://i.postimg.cc/Y2xqtmHC/IMG-9723-01.jpg",
        "https://i.postimg.cc/0225j2kd/IMG-9724-01.jpg",
        "https://i.postimg.cc/CLPhqTdy/IMG-9737-01.jpg",
        "https://i.postimg.cc/yN9stDjB/IMG-9744-01.jpg",
        "https://i.postimg.cc/Y0Scr06v/IMG-9763-01.jpg",
        "https://i.postimg.cc/j23pLTcZ/IMG-9770-01.jpg",
        "https://i.postimg.cc/MZs2s0wV/IMG-9772-01.jpg",
        "https://i.postimg.cc/0QnR1Dwg/IMG-9826-01-01.jpg",
        "https://i.postimg.cc/tCY081Rf/IMG-9843-01.jpg",
        "https://i.postimg.cc/vHkRyQcm/IMG-9958-01.jpg",
        "https://i.postimg.cc/Jn4ZPC3N/sd-7901-01.jpg",
      ],
    },
  ];

  const filteredImages =
    filter === "All"
      ? galleryData.flatMap((item) => item.images)
      : galleryData.find((item) => item.category === filter)?.images || [];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {["All", "Kasol", "Manali", "Shimla"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border ${
              filter === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600"
            } hover:bg-blue-700 hover:text-white transition`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((url, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={url}
              alt={`Image ${idx}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FullGallery;
