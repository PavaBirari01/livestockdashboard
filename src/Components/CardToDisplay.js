import React from "react";
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardToDisplay = (props) => {
  const listItemData = [
    {
      text: "Market Cap 24 Hrs",
      dataToDisplay: `${props.Data?.market_data?.market_cap_change_percentage_24h_in_currency?.inr} %`,
    },
    {
      text: "All Time High",
      dataToDisplay: `₹ ${props.Data?.market_data?.ath?.inr}`,
    },
    {
      text: "All Time Low",
      dataToDisplay: `₹ ${props.Data?.market_data?.atl?.inr}`,
    },
    {
      text: "Positive Sentiments",
      dataToDisplay: `${props.Data?.sentiment_votes_up_percentage} %`,
    },
    {
      text: "High 24Hrs",
      dataToDisplay: `₹ ${props.Data?.market_data?.high_24h?.inr}`,
    },
    {
      text: "Low 24Hrs",
      dataToDisplay: `₹ ${props.Data?.market_data?.low_24h?.inr}`,
    },
  ];

  return (
    <>
      <Box sx={{ height: 60 }} />
      <Grid container spacing={2}>
        <Card sx={{ width: "100%", height: 60, marginLeft: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.Data.name}
            </Typography>
          </CardContent>
        </Card>
        {listItemData.map(({ text, dataToDisplay }, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Stack spacing={2} direction="row">
              <Card sx={{ width: "100%", height: 140 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {text}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {dataToDisplay}
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardToDisplay;
