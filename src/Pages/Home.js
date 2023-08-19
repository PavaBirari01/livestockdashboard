import React, { useEffect, useState } from "react";
import Sidenav from "../Components/Sidenav";
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardToDisplay from "../Components/CardToDisplay";
import Header from "../Components/Header";

const Home = () => {
  const [coinData, setCoinData] = useState({ Id: "bitcoin", Data: {} });
  useEffect(() => {
    fetchData();
  }, [coinData.Id]); // Fetch data when coinData.Id changes

  const API = `https://api.coingecko.com/api/v3/coins/` + coinData.Id;
  const fetchData = async () => {
    try {
      const data = await fetch(API);
      const jsonData = await data.json();
      console.log(jsonData, "p1");

      setCoinData({ Id: coinData.Id, Data: jsonData });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCoinChange = async (e) => {
    const selectedCoinId = e.target.value;
    setCoinData({ Id: selectedCoinId, Data: {} });
  };
  return (
    <>
      <Box sx={{ height: 30 }} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ height: 30 }} />

          <Header
            handleCoinChange={handleCoinChange}
            selectedCoin={coinData.Id}
          />
          <Box sx={{ height: 30 }} />

          {Object.keys(coinData.Data).length > 0 ? (
            <Grid container spacing={2}>
              <CardToDisplay Data={coinData.Data} />
            </Grid>
          ) : (
            "Loading ..."
          )}
          <Box sx={{ height: 30 }} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>p</CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
