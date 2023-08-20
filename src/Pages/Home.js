import React, { useEffect, useState } from "react";
import Sidenav from "../Components/Sidenav";
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardToDisplay from "../Components/CardToDisplay";
import Header from "../Components/Header";
import BasicChart from "../Components/BasicChart";
import Stats from "../Components/Stats";
import CandleChart from "../Components/CandleChart";

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

          {Object.keys(coinData.Data).length > 0 ? (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CardToDisplay Data={coinData.Data} />
              </Grid>
            </Grid>
          ) : (
            "Loading ..."
          )}
          <Box sx={{ height: 30 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "60vh" }}>
                <CardContent>
                  <CandleChart />{" "}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "60vh" }}>
                <CardContent>
                  <Stats Data={coinData.Data} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ height: 30 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "60vh" }}>
                <CardContent>
                  <BasicChart Data={coinData} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "60vh" }}>
                <CardContent>
                  {/* <Stats Data={coinData.Data} /> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
