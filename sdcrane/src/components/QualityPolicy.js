import React from "react";
import loadimg from "../assets/im/loadTest.jpeg";
import measurmentimg from "../assets/im/measurment.jpeg";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

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
      {/* Main header section with background */}
      <div
        className="bg-cover bg-center py-8 px-4 mb-6"
        style={{ backgroundImage: "url(/path-to-your-background-image.jpg)" }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: { xs: "h5.fontSize", sm: "h4.fontSize" },
            backgroundColor: "#f7bb05", // For readability
            padding: { xs: 1, sm: 2 },
            borderRadius: "8px",
          }}
        >
          Quality Policy
        </Typography>
      </div>

      {/* Cards section */}
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {qualityData.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card className="shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out h-full flex flex-col">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] object-fill md:h-[250px] lg:h-[300px]"
                />
              </div>
              <CardContent className="flex-grow">
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
