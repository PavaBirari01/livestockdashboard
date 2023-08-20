import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

const Stats = (props) => {
  const listItemData = [
    {
      text: "Market Cap ",
      dataToDisplay: `₹ ${props.Data?.market_data?.market_cap?.inr || ""}`,
    },
    {
      text: "Price Change",
      dataToDisplay: `₹ ${
        props.Data?.market_data?.price_change_24h_in_currency?.inr || ""
      }`,
    },
    {
      text: "Total Volume",
      dataToDisplay: `₹ ${props.Data?.market_data?.total_volume?.inr || ""}`,
    },
    {
      text: "Positive Sentiments",
      dataToDisplay: `${props.Data?.sentiment_votes_up_percentage || ""} %`,
    },
    {
      text: "Circulating Supply",
      dataToDisplay: `${props.Data?.market_data?.circulating_supply || ""}`,
    },
    {
      text: "Public Interest",
      dataToDisplay: `${props.Data?.public_interest_score || ""}`,
    },
  ];
  const isNarrowScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={2}>
      {listItemData.map(({ text, dataToDisplay }, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Card sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent style={{ flex: 1 }}>
              <Typography gutterBottom variant="h6" component="div">
                {text}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  whiteSpace: isNarrowScreen ? "normal" : "nowrap",
                  overflow: "hidden",
                }}
              >
                {dataToDisplay}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Stats;
