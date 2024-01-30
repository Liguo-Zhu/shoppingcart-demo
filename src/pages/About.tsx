import { Box, Typography, Divider } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ margin: "25px" }}>
      <Typography
        fontSize={25}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        About Fresh Fruit Market
      </Typography>
      <Divider sx={{ marginTop: "10px" }}></Divider>
      <Typography fontWeight="bold" color="black" sx={{ marginTop: "10px" }}>
        Our Story
      </Typography>
      <Typography sx={{ marginTop: "5x", color: "GrayText" }}>
        FreshFruitMarket was born out of a love for wholesome, delicious fruits
        and a desire to make them accessible to everyone, everywhere. Inspired
        by the vibrant colors and irresistible flavors of nature's harvest, we
        embarked on a journey to create a platform where freshness meets
        convenience.
      </Typography>
      <Typography fontWeight="bold" color="black" sx={{ marginTop: "10px" }}>
        Our Promise
      </Typography>
      <Typography sx={{ marginTop: "5x", color: "GrayText" }}>
        We believe that every bite should be a celebration of flavor and
        nutrition. That's why we work tirelessly to source the finest fruits
        from trusted growers and suppliers. From orchards to your table, we
        ensure that each fruit is handpicked at the peak of ripeness,
        guaranteeing unparalleled taste and quality.
      </Typography>
      <Typography fontWeight="bold" color="black" sx={{ marginTop: "10px" }}>
        Our Selection
      </Typography>
      <Typography sx={{ marginTop: "5x", color: "GrayText" }}>
        Explore a cornucopia of fruits, from the classic favorites to exotic
        delights. Whether you're craving the sweetness of ripe berries, the
        crispness of apples, or the tropical allure of mangoes, our diverse
        selection has something for every taste bud and occasion.
      </Typography>
      <Typography fontWeight="bold" color="black" sx={{ marginTop: "10px" }}>
        Join Us
      </Typography>
      <Typography sx={{ marginTop: "5x", color: "GrayText" }}>
        Join us in celebrating the goodness of nature and the joy of healthy
        living. Experience the convenience of online fruit shopping with
        FreshFruitMarket, where every fruit tells a story of freshness, flavor,
        and goodness. Welcome to FreshFruitMarket - where freshness is our
        passion, and your satisfaction is our priority.
      </Typography>
    </Box>
  );
}
