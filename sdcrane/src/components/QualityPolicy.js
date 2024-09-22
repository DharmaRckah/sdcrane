import React from "react";
import loadimg from "../assets/im/loadTest.jpeg";
import measurmentimg from "../assets/im/measurment.jpeg";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const qualityData = [
  {
    title: "Load Test",
    image: loadimg,
    description: `
      We provide a full range of load test services for your lifting
      equipment. We offer equipment tested with safe working load and
      overload testing is also done.
    `,
  },
  {
    title: "Measurements",
    image: measurmentimg,
    description: `
      We have at our disposal the latest technology for carrying out
      accurate measurements.
    `,
  },
];

const QualityPolicy = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ padding: { xs: 2, sm: 4 }, backgroundColor: "#f4f4f4" }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#ff8225",
          marginBottom: { xs: 2, sm: 4 },
          fontSize: { xs: "h5.fontSize", sm: "h4.fontSize" },
        }}
      >
        Quality Policy
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {qualityData.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography   
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#ff8225" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default QualityPolicy;
