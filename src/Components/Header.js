import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Header = (props) => {
  const coins = [
    // { value: "avalanche-2", label: "Avalanche (AVAX)" },
    // { value: "binancecoin", label: "Binance (BNB)" }
    { value: "avalanche-2", label: "Avalanche (AVAX)" },
    { value: "binancecoin", label: "Binance (BNB)" },
    { value: "bitcoin", label: "Bitcoin (BTC) " },
    { value: "cardano", label: "Cardano (ADA)" },
    { value: "decentraland", label: "Decentraland (MANA)" },
    { value: "dogecoin", label: "Dogecoin (DOGE)" },
    { value: "ethereum", label: "Ethereum (ETH)" },
    { value: "ripple", label: "Ripple (XRP)" },
    { value: "solana", label: "Solana (SOL)" },
    { value: "tether", label: "Tether (USDT)" },
  ];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="coin-select-label">Select Coin</InputLabel>
        <Select
          labelId="coin-select-label"
          id="coin-select"
          value={props.selectedCoin}
          label="Select Coin"
          onChange={props.handleCoinChange}
        >
          {coins.map((coin) => (
            <MenuItem key={coin.value} value={coin.value}>
              {coin.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Header;
