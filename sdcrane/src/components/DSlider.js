import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import singleGrider from "../assets/passets/singleGrider.jpg";
import doubleGrider from "../assets/passets/doubleGrider.jpg";
import jib from "../assets/passets/jib.jpeg";

const DemoCarousel = () => {
  const carouselContainerStyle = {
    width: "100%",
    margin: "0 auto",
    height: "30%", // Default height for large screens
  };

  const carouselImageStyle = {
    width: "100%",
    objectFit: "cover", // Ensure images fill the container properly
    height: "40%", // Image height set to fill the container
  };

  return (
    <div style={{ marginTop: "70px" }}>
      {/* Define responsive styles */}
      <style>
        {`
          .carousel-container {
            height: 30%; /* Default height for large screens */
          }
          .carousel-container img {
            height: 100%; /* Default height for images */
          }
          @media (max-width: 1024px) {
            .carousel-container {
              height: 45%; /* Height for tablets */
            }
          }
          @media (max-width: 768px) {
            .carousel-container {
              height: 50%; /* Height for mobile devices */
            }
          }
          @media (max-width: 425px) {
            .carousel-container {
              height: 40%; /* Height for smaller mobile devices */
            }
            .carousel-container img {
              height: 80%; /* Adjust image height for smaller mobile devices */
            }
          }
        `}
      </style>

      <div className="carousel-container" style={carouselContainerStyle}>
        <Carousel
          showThumbs={false} // Hides thumbnail preview below the carousel
          autoPlay={true} // Enables autoplay
          infiniteLoop={true} // Infinite scroll of images
          dynamicHeight={true} // Set dynamicHeight to false as we control it manually
          showStatus={false} // Hides the image count/status
          interval={1000} // 1 seconds interval for autoplay
        >
          <div>
            <img
              src={singleGrider}
              alt="Slide 1"
              height={"40px"}
              style={carouselImageStyle} // Inline styling for image
            />
          </div>
          <div>
            <img
              src={doubleGrider}
              alt="Slide 2"
              style={carouselImageStyle} // Inline styling for image
            />
          </div>
          <div>
            <img
              src={doubleGrider}
              alt="Slide 3"
              style={{ ...carouselImageStyle, objectFit: "cover" }} // Inline styling for image
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default DemoCarousel;
