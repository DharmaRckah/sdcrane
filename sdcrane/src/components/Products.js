import React from "react";
import singleGrider from "../assets/passets/singleGrider.jpg";
import doubleGrider from "../assets/passets/doubleGrider.jpg";
import jib from "../assets/passets/jib.jpeg";
import genny from "../assets/passets/ganny.jpeg";
import goods from "../assets/passets/goodsLIft.jpeg";
import electricChain from "../assets/passets/electricChain.jpeg";
import mECrab from "../assets/passets/mECrabType.jpeg";
import ewire from "../assets/passets/ewire.jpeg";

const productData = [
  {
    title: "Single Girder E.O.T. Crane",
    image: singleGrider,
    description: `
      The crane having one main bridge girder, based on duty classification as per IS - 3177 & IS -4137.
      Ideal for light industrial applications. Cost-effective and successful in small & medium scale industries.
      Specifications include:
      - Working Load: 500 kg to 20,000 kg
      - Span Length: 3 to 30 meters
      - Height of Lift: As per customer requirements
      - Speeds: Selected depending on client's specifications
      - Control: Pendant push button or radio remote control
      - Drive System: Twin drive with built-in brakes
    `,
  },
  {
    title: "Double Girder E.O.T. Crane",
    image: doubleGrider,
    description: `
      Cranes with two main bridge girders, suitable for heavy-duty applications in foundries & steel plants.
      Customizable as per client requirements for high load capacity.
      Specifications include:
      - Working Load: 500 kg to 50,000 kg
      - Span Length: 5 to 30 meters
      - Height of Lift: As per customer requirements
      - Speeds: Selected depending on application
      - Control: Pendant push buttons or radio remote control
      - Drive System: Twin drive with built-in brakes
    `,
  },
  {
    title: "Electrical Wire Rope Hoist",
    image: ewire,
    description: `
      High-quality wire rope hoists with smooth operation and modular construction for easy repairs.
      Specifications include:
      - Capacity: Up to 50 tons
      - Wire Rope Diameter: 6 mm to 16 mm
      - Hoist Speed: Selected according to application
      - Anti-corrosive powder-coated body
    `,
  },
  {
    title: "M.E. Crab Hoist",
    image: mECrab,
    description: `
      Designed for various range applications with power travel crab and crab type hoist to reduce weight and cost.
      Features:
      - Works with any double girder crane
      - Easy maintenance
      - Sturdy design
    `,
  },
  {
    title: "Electrical and Manual Chain Hoist",
    image: electricChain,
    description: `
      Chain hoists with stable performance, safe usage, and flexible operations. Manufactured to ISO 9001:2008 standards.
      Features:
      - Chain sprocket type drive
      - Electric motor with magnetic brake
      - Grade 80 alloy load chain
      - Lightweight and easy to install
    `,
  },
  {
    title: "Gantry/Goliath E.O.T. Crane",
    image: genny,
    description: `
      Designed for quick assembly and cost-effective heavy load applications.
      Features:
      - Suitable for open areas
      - Extensive floor coverage
      - Cable reeling drum
    `,
  },
  {
    title: "Jib Crane",
    image: jib,
    description: `
      Ideal for assembly areas and small size machines with a horizontal member supporting a movable hoist.
      Features:
      - Lighter weight
      - Less maintenance
      - Suitable for critical shining
      - Rotation of 180 to 360 degrees
    `,
  },
  {
    title: "Goods Lift",
    image: goods,
    description: `
      Durable stainless steel lifts for carrying heavy goods between floors with high performance and efficiency.
      Features:
      - Low maintenance
      - Corrosion-proof
      - High tensile strength
    `,
  },
];

const Products = () => {
  return (
    <div className="container mx-auto  pt-20 px-4" data-aos="fade-right">
      <h2 className="text-3xl bg-yellow-500 text-white font-bold text-center py-3 w-full mb-8">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg mx-2 my-2 overflow-hidden hover:scale-105 transform transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
