// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import { Carousel } from "react-responsive-carousel";
// import singleGrider from "../assets/passets/singleGrider.jpg";
// import doubleGrider from "../assets/passets/doubleGrider.jpg";
// import jib from "../assets/passets/jib.jpeg";

// const DemoCarousel = () => {
//   const carouselContainerStyle = {
//     width: "100%",
//     margin: "0 auto",
//     height: "30%", // Default height for large screens
//   };

//   const carouselImageStyle = {
//     width: "100%",
//     objectFit: "cover", // Ensure images fill the container properly
//     height: "40%", // Image height set to fill the container
//   };

//   return (
//     <div style={{ marginTop: "70px" }}>
//       {/* Define responsive styles */}
//       <style>
//         {`
//           .carousel-container {
//             height: 30%; /* Default height for large screens */
//           }
//           .carousel-container img {
//             height: 100%; /* Default height for images */
//           }
//           @media (max-width: 1024px) {
//             .carousel-container {
//               height: 45%; /* Height for tablets */
//             }
//           }
//           @media (max-width: 768px) {
//             .carousel-container {
//               height: 50%; /* Height for mobile devices */
//             }
//           }
//           @media (max-width: 425px) {
//             .carousel-container {
//               height: 40%; /* Height for smaller mobile devices */
//             }
//             .carousel-container img {
//               height: 80%; /* Adjust image height for smaller mobile devices */
//             }
//           }
//         `}
//       </style>

//       <div className="carousel-container" style={carouselContainerStyle}>
//         <Carousel
//           showThumbs={false} // Hides thumbnail preview below the carousel
//           autoPlay={true} // Enables autoplay
//           infiniteLoop={true} // Infinite scroll of images
//           dynamicHeight={true} // Set dynamicHeight to false as we control it manually
//           showStatus={false} // Hides the image count/status
//           interval={1000} // 1 seconds interval for autoplay
//         >
//           <div>
//             <img
//               src={singleGrider}
//               alt="Slide 1"
//               height={"40px"}
//               style={carouselImageStyle} // Inline styling for image
//             />
//           </div>
//           <div>
//             <img
//               src={doubleGrider}
//               alt="Slide 2"
//               style={carouselImageStyle} // Inline styling for image
//             />
//           </div>
//           <div>
//             <img
//               src={doubleGrider}
//               alt="Slide 3"
//               style={{ ...carouselImageStyle, objectFit: "cover" }} // Inline styling for image
//             />
//           </div>
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default DemoCarousel;
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import singleGrider from "../assets/im/1.jpeg";
import doubleGrider from "../assets/im/2.jpeg";
import jib from "../assets/im/3.jpeg";
import t1 from "../assets/im/4.jpeg";
import t2 from "../assets/im/loadTest.jpeg";
import t3 from "../assets/im/measurment.jpeg";

const DemoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6;

  const slides = [singleGrider, doubleGrider, jib, t1, t2, t3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 2000); // Auto slide every 2 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);

  const carouselContainerStylemm = {
    width: "100%",
    height: "90vh", // 80% of the viewport height
    margin: 0, // No margin at the top or bottom
    position: "relative", // Ensure buttons are positioned correctly
  };

  const carouselImageStylemm = {
    width: "100%",
    height: "100%",
    objectFit: "contain", // Ensure images fill the container properly
  };

  return (
    <div>
      <style>
        {`
          .carousel-containermm {
            height: 90vh; /* 80% of the viewport height */
          }
          @media (max-width: 768px) {
            .carousel-containermm {
              height: 90vh; /* Maintain 80% height for mobile devices */
              /* Remove top margin */
            }
          }
        `}
      </style>

      <div className="carousel-container" style={carouselContainerStylemm}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          dynamicHeight={false}
          showStatus={false}
          interval={1000}
          onChange={(index) => setCurrentIndex(index)} // Update state on change
        >
          {slides.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                scale: currentIndex === index ? 1 : 1.1,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={carouselImageStylemm}
              />
            </motion.div>
          ))}
        </Carousel>

        {/* Previous Button */}
        <button
          type="button"
          className="absolute top-1/2 left-2 transform -translate-y-1/2  flex items-center justify-center h-12 w-12 bg-white/40 hover:bg-white/70 rounded-full focus:outline-none"
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)
          }
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center h-12 w-12 bg-white/40 hover:bg-white/70 rounded-full focus:outline-none"
          onClick={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DemoCarousel;
