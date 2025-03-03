// import React, { useState, useEffect } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import { Carousel } from "react-responsive-carousel";
// import { motion } from "framer-motion";
// import singleGrider from "../assets/im/1.jpeg";
// import doubleGrider from "../assets/im/2.jpeg";
// import jib from "../assets/im/3.jpeg";
// import t1 from "../assets/im/4.jpeg";
// import t2 from "../assets/im/loadTest.jpeg";
// import t3 from "../assets/im/measurment.jpeg";

// const DemoCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalSlides = 6;

//   const slides = [singleGrider, doubleGrider, jib, t1, t2, t3];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     }, 2000); // Auto slide every 2 seconds
//     return () => clearInterval(interval);
//   }, [totalSlides]);

//   const carouselContainerStylemm = {
//     width: "100%",
//     margin: 0, // No margin at the top or bottom
//     position: "relative", // Ensure buttons are positioned correctly
//   };

//   const carouselImageStylemm = {
//     width: "100%",
//     height: "100%",
//     objectFit: "contain", // Ensure images fill the container properly
//   };

//   return (
//     <div>
//       <style>
//         {`
//           .carousel-container {
//             width: 100%;
//             margin: 0;
//             position: relative;
//           }

//           /* Large screens (greater than 768px) */
//           @media (min-width: 768px) {
//             .carousel-container {
//               height: 100vh; /* Set height to 100% of the viewport for larger screens */
//             }
//           }

//           /* Small screens (less than or equal to 768px) */
//           @media (max-width: 768px) {
//             .carousel-container {
//               height: auto; /* Let height adjust naturally on smaller screens */
//             }
//           }
//         `}
//       </style>

//       <div className="carousel-container" style={carouselContainerStylemm}>
//         <Carousel
//           showThumbs={false}
//           autoPlay={true}
//           infiniteLoop={true}
//           dynamicHeight={false}
//           showStatus={false}
//           interval={2000}
//           onChange={(index) => setCurrentIndex(index)} // Update state on change
//         >
//           {slides.map((image, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 1.1 }}
//               animate={{
//                 opacity: currentIndex === index ? 1 : 0,
//                 scale: currentIndex === index ? 1 : 0,
//               }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 style={carouselImageStylemm}
//               />
//             </motion.div>
//           ))}
//         </Carousel>

//         {/* Previous Button */}
//         {/* <button
//           type="button"
//           className="absolute top-1/2 left-2 transform -translate-y-1/2 flex items-center justify-center h-12 w-12 bg-white/40 hover:bg-white/70 rounded-full focus:outline-none"
//           onClick={() =>
//             setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)
//           }
//         >
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         <button
//           type="button"
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center h-12 w-12 bg-white/40 hover:bg-white/70 rounded-full focus:outline-none"
//           onClick={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
//         >
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default DemoCarousel;
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import singleGrider from "../assets/im/sdc-2.jpg";
import doubleGrider from "../assets/im/sdc-3.jpg";
import jib from "../assets/im/sdc-5.jpg";
import t1 from "../assets/im/sdc-6.jpg";
import t2 from "../assets/im/sdc-7.jpg";
import t3 from "../assets/im/sdc-10.jpg";

const DemoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6;
  const slides = [singleGrider, doubleGrider, jib, t1, t2, t3];

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 2000); // Auto-slide every 2 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleManualSlide = (index) => {
    setCurrentIndex(index);
  };

  const carouselContainerStyle = {
    width: "100%",
    margin: 0,
    position: "relative",
    zIndex: -1000, // Set z-index to -1000
  };

  const carouselImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  return (
    <div>
      <style>
        {`
          .carousel-container {
            width: 100%;
            margin: 0;
            position: relative;
          }

          /* Large screens (greater than 768px) */
          @media (min-width: 768px) {
            .carousel-container {
              height: 80vh; /* Set height to 80% of the viewport for larger screens */
            }
          }

          /* Small screens (less than or equal to 768px) */
          @media (max-width: 768px) {
            .carousel-container {
              height: auto; /* Let height adjust naturally on smaller screens */
            }
          }
        `}
      </style>

      <div className="carousel-container" style={carouselContainerStyle}>
        <Carousel
          showThumbs={false}
          autoPlay={false} // Disable default autoPlay
          infiniteLoop={true}
          dynamicHeight={false}
          showStatus={false}
          selectedItem={currentIndex}
          onChange={(index) => handleManualSlide(index)}
        >
          {slides.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                scale: currentIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={carouselImageStyle}
              />
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DemoCarousel;
