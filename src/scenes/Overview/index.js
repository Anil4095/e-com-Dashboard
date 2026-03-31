import React, {useState} from 'react';
import { FormControl, MenuItem, InputLabel, Box, Select } from '@mui/material';
import Header from 'components/Header';
import OverViewChart from 'components/OverViewChart';

const OverView = () => {
  const [view, setView] = useState('sales');

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="OVERVIEW" subtitle="Overview of general revenue and profit" />
      <Box height="75vh">
        <FormControl sx={{mt: "1rem"}}>
          <InputLabel>View</InputLabel>
          <Select value={view} label="View" onChange={(e) => setView(e.target.value)}>
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="profit">Profit</MenuItem>
          </Select>
        </FormControl>
        <OverViewChart view={view} />
      </Box>
    </Box>
  )
}

export default OverView
