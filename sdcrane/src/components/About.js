// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Paper,
//   Link,
//   IconButton,
//   Stack,
// } from "@mui/material";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import PhoneIcon from "@mui/icons-material/Phone";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";

// const About = () => {
//   return (
//     <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
//       <Paper elevation={3} sx={{ p: 4 }}>
//         <Box mt={4}>
//           <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
//             Company Profile
//           </Typography>
//           <Typography variant="body1" paragraph>
//             We at <strong>SD Cranes Engineering</strong> are among the top
//             leading manufacturers of material handling equipment, such as
//             Electric Overhead Travelling Cranes, Wire Rope Hoists, Electrical
//             and Manual Chain Hoists, Cage Hoists, Jib Cranes, Goods Lifts, and
//             Customized Design Equipment. The company is a leading manufacturer
//             of cranes and crane machines, committed to providing our customers
//             with the best material handling solutions tailored to their
//             requirements.
//           </Typography>
//         </Box>
//         <Box>
//           <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
//             SD Cranes Engineering
//           </Typography>

//           <Typography variant="h6" gutterBottom>
//             Office Address:
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Plot No. 177, Khejda Bramad, Behind ISRO, Bhopal, Pin - 462001
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Mobile: 8602168085
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Email:{" "}
//             <Link href="mailto:sdcranese@g.nail.com">
//               <IconButton aria-label="email">
//                 <MailOutlineIcon />
//               </IconButton>
//               sdcranese@g.nail.com
//             </Link>
//           </Typography>

//           <Typography variant="h6" gutterBottom>
//             Work Shop Address:
//           </Typography>
//           <Typography variant="body1" paragraph>
//             H I Sector H, Industrial Area Govindpura, Bhopal, Pin - 462023
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Website:{" "}
//             <Link href="http://www.sderanes.com" target="_blank">
//               www.sderanes.com
//             </Link>
//           </Typography>

//           <Box mt={2}>
            
//             <Stack
//               direction={{ xs: "row", sm: "row" }} // Stack vertically on small screens
//               spacing={1} // Space between items
//               alignItems="center"
//             >
//               <Box display="flex" alignItems="left">
//                 <IconButton aria-label="call" href="tel:+8602168085">
//                   <PhoneIcon />
//                 </IconButton>
                
//               </Box>
//               <Box display="flex" alignItems="left">
//                 <IconButton
//                   aria-label="whatsapp"
//                   href="https://wa.me/8602168085"
//                   target="_blank"
//                   sx={{ color: "green" }}
//                 >
//                   <WhatsAppIcon  sx={{paddingBottom:"5px"}}/>
//                 </IconButton>

//               </Box>
//               <Box display="flex" alignItems="left">
//                 <IconButton
//                   aria-label="instagram"
//                   href="https://www.instagram.com/sd_cranes_engineering/"
//                   target="_blank"
//                   sx={{ color: "#8a3ab9" }}
//                 >
//                   <InstagramIcon />
//                 </IconButton>
               
//               </Box>
//               <Box display="flex" alignItems="left">
//                 <IconButton
//                   aria-label="facebook"
//                   href="https://www.facebook.com/sdcranesengineering"
//                   target="_blank"
//                   sx={{ color: "#1877F2" }}
//                 >
//                   <FacebookIcon />
//                 </IconButton>
                
//               </Box>
//             </Stack>
//           </Box>

         
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default About;
import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    h4: {
      fontFamily: "'Merriweather', serif",
      color: "#ff8225", // Orange accent for titles
    },
    h5: {
      fontFamily: "'Roboto Condensed', sans-serif",
      color: "#333",
    },
    body1: {
      fontFamily: "'Open Sans', sans-serif",
      color: "#555",
      lineHeight: 1.8,
    },
  },
});

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            backgroundColor: "#f9f9f9",
          }}
        >
          {/* Company Profile */}
          <Box mt={4}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Company Profile
            </Typography>
            <Typography variant="body1" paragraph>
              We at <strong>SD Cranes Engineering</strong> are among the top
              leading manufacturers of material handling equipment such as
              Electric Overhead Travelling Cranes, Wire Rope Hoists, Electrical
              and Manual Chain Hoists, Cage Hoists, Jib Cranes, Goods Lifts, and
              Customized Design Equipment. Our company is committed to providing
              customers with tailored material handling solutions.
            </Typography>
          </Box>

          {/* SD Cranes Engineering Info */}
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              SD Cranes Engineering
            </Typography>

            <Typography variant="h6" gutterBottom>
              Office Address:
            </Typography>
            <Typography variant="body1" paragraph>
              Plot No. 177, Khejda Bramad, Behind ISRO, Bhopal, Pin - 462001
            </Typography>
            <Typography variant="body1" paragraph>
              Mobile: 8602168085
            </Typography>

            {/* Contact Info */}
            <Typography variant="body1" paragraph>
              Email:{" "}
              <Link
                href="mailto:sdcranese@g.nail.com"
                underline="none"
                sx={{ color: "#ff8225", fontWeight: "bold" }}
              >
                <IconButton
                  aria-label="email"
                  sx={{
                    color: "#ff8225",
                    fontSize: "2rem",
                  }}
                >
                  <MailOutlineIcon fontSize="large" />
                </IconButton>
                sdcranese@g.nail.com
              </Link>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Work Shop Address:
            </Typography>
            <Typography variant="body1" paragraph>
              H I Sector H, Industrial Area Govindpura, Bhopal, Pin - 462023
            </Typography>
            <Typography variant="body1" paragraph>
              Website:{" "}
              <Link
                href="http://www.sderanes.com"
                target="_blank"
                underline="none"
                sx={{ color: "#040080", fontWeight: "bold" }}
              >
                www.sderanes.com
              </Link>
            </Typography>

            {/* Social Icons and Contact Links */}
            <Box mt={3}>
              <Typography variant="h5" gutterBottom>
                Connect with Us:
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="flex-start"
                alignItems="center"
              >
                <IconButton
                  aria-label="call"
                  href="tel:+8602168085"
                  sx={{
                    fontSize: "2rem",
                    color: "#ff8225",
                    "&:hover": { color: "#e67617" },
                  }}
                >
                  <PhoneIcon fontSize="large" />
                </IconButton>

                <IconButton
                  aria-label="whatsapp"
                  href="https://wa.me/8602168085"
                  target="_blank"
                  sx={{
                    fontSize: "2rem",
                    color: "green",
                    "&:hover": { color: "#128C7E" },
                  }}
                >
                  <WhatsAppIcon fontSize="large" />
                </IconButton>

                <IconButton
                  aria-label="instagram"
                  href="https://www.instagram.com/sd_cranes_engineering/"
                  target="_blank"
                  sx={{
                    fontSize: "2rem",
                    color: "#E1306C",
                    "&:hover": { color: "#C13584" },
                  }}
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>

                <IconButton
                  aria-label="facebook"
                  href="https://www.facebook.com/sdcranesengineering"
                  target="_blank"
                  sx={{
                    fontSize: "2rem",
                    color: "#1877F2",
                    "&:hover": { color: "#145dbf" },
                  }}
                >
                  <FacebookIcon fontSize="large" />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default About;
