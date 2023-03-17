import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material/";

export default function SortMovies({ movieType, handleChange }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Sort</InputLabel>
        <Select labelId='demo-simple-select-label' id='demo-simple-select' value={movieType} label='All' onChange={handleChange}>
          <MenuItem value=''>All</MenuItem>
          <MenuItem value='movie'>Movie</MenuItem>
          <MenuItem value='series'>Series</MenuItem>
          <MenuItem value='games'>Games</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
