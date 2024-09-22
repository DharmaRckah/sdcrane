
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaWhatsapp, FaArrowUp, FaRegCommentDots } from "react-icons/fa";
// import About from "./About";
// import Products from "./Products";
// import ContactUs from "./ContactUs";
// import QualityPolicy from "./QualityPolicy";
// import DSlider from "./DSlider";
// import Carausel from "./Carausel";
// import ContactForm from "../pages/auth/ContactForm";

// const Home = () => {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 500 });

//     const handleScroll = () => {
//       if (window.pageYOffset > 300) {
//         setShowScrollTop(true);
//       } else {
//         setShowScrollTop(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "100%",
//         margin: "100 auto",
//         padding: "0",
//         overflowX: "hidden",
//         overflowY: "hidden", // Prevent horizontal scrolling
//       }}
//     >
//       <DSlider />
//       <section id="home" onClick={handleScrollToTop} data-aos="fade-up">
//         <Carausel />
//       </section>
//       <section id="products" data-aos="fade-up">
//         <Products />
//       </section>
//       <section id="qualitypolicy" data-aos="fade-up">
//         <QualityPolicy />
//       </section>
//       <section id="contactus" data-aos="fade-up">
//         <About />
//       </section>
//       <section id="about" data-aos="fade-up">
//         <ContactUs />
//       </section>

//       {/* WhatsApp Icon on the Right Side */}
//       <a
//         href="https://wa.me/6268301547"
//         target="_blank"
//         rel="noreferrer"
//         style={{
//           position: "fixed",
//           bottom: "22px",
//           right: "20px", // Positioned on the right side
//           backgroundColor: "#25D366",
//           borderRadius: "50%",
//           padding: "10px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           zIndex: 1000,
//           animation: "bounce 1s infinite",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <FaWhatsapp size={24} style={{ color: "#ffffff", cursor: "pointer" }} />
//       </a>

//       {/* Scroll to Top Icon on the Right Side */}
//       {showScrollTop && (
//         <div
//           onClick={handleScrollToTop}
//           style={{
//             position: "fixed",
//             bottom: "100px", // Adjusted position to be above the WhatsApp icon
//             right: "20px", // Positioned on the right side
//             backgroundColor: "blue",
//             borderRadius: "50%",
//             padding: "10px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//             zIndex: 1000,
//             cursor: "pointer",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <FaArrowUp size={24} style={{ color: "white" }} />
//         </div>
//       )}

//       {/* Contact/Chat Icon on the Left Side */}
//       <a
//         href="tel:+1234567890" // You can change this to any contact link, such as a mailto: or another chat service link
//         style={{
//           position: "fixed",
//           bottom: "22px", // Same bottom as WhatsApp icon
//           left: "20px", // Positioned on the left side
//           backgroundColor: "red",
//           borderRadius: "50%",
//           padding: "10px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           zIndex: 1000,
//           animation: "bounce 1s infinite",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <FaRegCommentDots
//           size={24}
//           style={{ color: "white", cursor: "pointer" }}
//         />
//       </a>

//       <style>
//         {`
//           @keyframes bounce {
//             0%, 20%, 50%, 80%, 100% {
//               transform: translateY(0);
//             }
//             40% {
//               transform: translateY(-5px);
//             }
//             60% {
//               transform: translateY(-2px);
//             }
//           }

//           /* Responsive styles for devices with max-width of 768px */
//           @media (max-width: 768px) {
//             /* Ensure WhatsApp, Scroll-to-Top, and Contact Icons are positioned properly */
//             a, div {
//               bottom: 20px;
//               padding: 5px;
//             }

//             div {
//               bottom: 80px; /* Adjusted for proper space above WhatsApp icon */
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaArrowUp, FaRegCommentDots } from "react-icons/fa";
import About from "./About";
import Products from "./Products";
import ContactUs from "./ContactUs";
import QualityPolicy from "./QualityPolicy";
import DSlider from "./DSlider";
import Carausel from "./Carausel";
import ContactForm from "../pages/auth/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down("sm")); // Fullscreen on small screens

  useEffect(() => {
    AOS.init({ duration: 500 });

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenContactForm = () => {
    setOpenContactForm(true);
  };

  const handleCloseContactForm = () => {
    setOpenContactForm(false);
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "100 auto",
        padding: "0",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <DSlider />
      <section id="home" onClick={handleScrollToTop} data-aos="fade-up">
        <Carausel />
      </section>
      <section id="products" data-aos="fade-up">
        <Products />
      </section>
      <section id="qualitypolicy" data-aos="fade-up">
        <QualityPolicy />
      </section>
      <section id="contactus" data-aos="fade-up">
        <About />
      </section>
      <section id="about" data-aos="fade-up">
        <ContactUs />
      </section>

      {/* WhatsApp Icon on the Right Side */}
      <a
        href="https://wa.me/6268301547"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "22px",
          right: "20px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          padding: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
          animation: "bounce 1s infinite",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaWhatsapp size={24} style={{ color: "#ffffff", cursor: "pointer" }} />
      </a>

      {/* Scroll to Top Icon on the Right Side */}
      {showScrollTop && (
        <div
          onClick={handleScrollToTop}
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            backgroundColor: "blue",
            borderRadius: "50%",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaArrowUp size={24} style={{ color: "white" }} />
        </div>
      )}

      {/* Contact/Chat Icon on the Left Side */}
      <div
        onClick={handleOpenContactForm}
        style={{
          position: "fixed",
          bottom: "22px",
          left: "20px",

          backgroundColor: "red",
          borderRadius: "50%",
          padding: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
          animation: "bounce 1s infinite",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaRegCommentDots
          size={24}
          style={{ color: "white", cursor: "pointer" }}
        />
      </div>

      {/* Contact Form Modal */}
      <Dialog
        open={openContactForm}
        onClose={handleCloseContactForm}
        maxWidth="sm"
        fullWidth
        fullScreen={isFullScreen} // Fullscreen on small devices
        PaperProps={{
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing(0),
          },
        }}
      >
       
       
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseContactForm}
            aria-label="close"
            sx={{ position: "absolute", right: 24, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
       
        <DialogContent>
          <ContactForm />
        </DialogContent>
      </Dialog>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-5px);
            }
            60% {
              transform: translateY(-2px);
            }
          }

          /* Responsive styles for devices with max-width of 768px */
          @media (max-width: 768px) {
            /* Ensure WhatsApp, Scroll-to-Top, and Contact Icons are positioned properly */
            a, div {
            
              bottom: 20px;
              padding: 5px;
            }

            div {
             top:"5px" /* Adjusted for proper space above WhatsApp icon */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
