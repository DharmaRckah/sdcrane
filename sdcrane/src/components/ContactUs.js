
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";

const ContactUs = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fcba03",
        color: "#fff",
        p: 3,
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Company Profile
          </Typography>
          <Typography variant="body2">
            We at SD Cranes Engineering are among the top leading manufacturers
            of material handling equipment.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact Info
          </Typography>
          <Typography variant="body2">
            Plot No. 177, Khejda Bramad, Behind ISRO, Bhopal, Pin - 462001
            <br />
            <br />
            <Link
              href="tel:+918602168085"
              color="inherit"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <PhoneIcon sx={{ mr: 1 }} />
              8602168085
            </Link>
            <br />
            <Link
              href="mailto:sdcranese@g.nail.com"
              color="inherit"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <MailIcon sx={{ mr: 1 }} />
              sdcranese@g.nail.com
            </Link>
            <br />
            <Link
              href="https://wa.me/918602168085"
              color="inherit"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <WhatsAppIcon sx={{ mr: 1 }} />
              Chat with us on WhatsApp
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit">
              Home
            </Link>
            <br />
            <Link href="#" color="inherit">
              Products
            </Link>
            <br />
            <Link href="#qualitypolicy" color="inherit">
              Quality Policy
            </Link>
            <br />
            <Link href="#" color="inherit">
              About
            </Link>
            <br />
            <Link href="#" color="inherit">
              Contact Us
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          textAlign: "center",
          mt: 2,
          borderTop: "1px solid #444",
          pt: 1,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} SD Cranes Engineering. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUs;
