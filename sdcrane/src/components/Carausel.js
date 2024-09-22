import React, { useState, useEffect } from "react";
import im1 from "../assets/im/1.jpeg";
import im2 from "../assets/im/2.jpeg";
import im3 from "../assets/im/3.jpeg";
import im4 from "../assets/im/4.jpeg";
import { Typography, Box, Grid, Container } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

const images = [im1, im2, im3, im4]; // Array of images

const Carpet = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeEffect, setFadeEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeEffect(true); // Trigger fade effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFadeEffect(false); // Reset fade effect
      }, 3000); // Duration of the fade effect
    }, 6000); // Change image every 6 seconds (3 seconds for fade + 3 seconds for showing image)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "#edebe6", // Set background color to white
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Centering content horizontally
        px: { xs: 2, sm: 4 }, // Add horizontal padding on small devices
        m: 0, // Remove margin
        p: 0, // Remove padding
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Text Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: { xs: 2, md: 1 }, // Text comes first on small devices
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#ff8225",
                fontWeight: "bold",
                mb: "1rem",
                fontSize: {
                  xs: "1.8rem", // Small devices
                  sm: "2.5rem", // Medium devices
                  md: "3rem", // Larger devices
                  lg: "4rem", // Extra-large devices
                },
                fontFamily: "'Roboto Slab' ,serif",
              }}
            >
              <Typewriter
                words={["SD Cranes Engineering"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#8000ff",
                fontWeight: "302px",
                fontStyle: "oblique",
                shapeOutside: "border-box",
                mb: { xs: "3rem", sm: "3rem" },
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.4" },
                fontFamily: "'Roboto Slab' ,serif",
              }}
              ata-aos="fade-up"
              data-aos-anchor-placement="top-center" // Adjusting text size for responsiveness
            >
              We at SD Cranes Engineering are among the top leading
              manufacturers of material handling equipment,
              {/* such as Electric
              Overhead Travelling Cranes, Wire Rope Hoists, Electrical and
              Manual Chain Hoists, Cage Hoists, Jib Cranes, Goods Lifts, and
              Customized Design Equipment. */}
            </Typography>
          </Grid>

          {/* Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: { xs: 2, md: 1 }, // Image comes after text on small devices
              px: { xs: 0 }, // Remove horizontal padding on small devices
            }}
          >
            <Box
              component="div"
              sx={{
                marginTop: { md: "15px", lg: "50px", sm: "5px", xs: "3px" },
                position: "relative",
                width: "100%",
                maxWidth: "500px",
                height: "auto", // Maintain aspect ratio
                // aspectRatio: "16 / 9", // Aspect ratio to maintain (adjust if needed)
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
                display: "flex",
                justifyContent: "center", // Center image horizontally
                alignItems: "center", // Center image vertically
              }}
            >
              <Box
                component="img"
                src={images[currentImageIndex]}
                alt="Cranes"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Ensure the image is fully visible and maintains aspect ratio
                  transition:
                    "transform 3s ease-in-out, opacity 3s ease-in-out",
                  transform: fadeEffect ? "translateX(-100%)" : "translateX(0)",
                  opacity: fadeEffect ? 0 : 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Carpet;



