import React from "react";
import Search from "@mui/icons-material/Search";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import FlexBetween from "./FlexBetween.js";

const DataGridCustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <TextField
        label="Search..."
        variant="standard"
        sx={{ mb: "0.5rem", width: "15rem" }}
        // onChange={(e)=> setSearchInput(e.target.value)}
        // value={searchInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
