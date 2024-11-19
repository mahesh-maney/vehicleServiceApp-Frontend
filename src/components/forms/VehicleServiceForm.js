import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SearchForm = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    customerName: '',
    plateNumber: '',
    technician: '',
    date: '',
    chassisNo: '',
  });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSearch(searchData);
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: '20px' }}>
      <Grid item xs={6}>
        <TextField
          label="Customer Name"
          name="customerName"
          value={searchData.customerName}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Plate Number"
          name="plateNumber"
          value={searchData.plateNumber}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Technician"
          name="technician"
          value={searchData.technician}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Date"
          name="date"
          type="date"
          value={searchData.date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Chassis Number"
          name="chassisNo"
          value={searchData.chassisNo}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSubmit}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchForm;
