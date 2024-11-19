import React, { useState } from 'react';
import { Grid, TextField, Button, MenuItem } from '@mui/material';

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    date: '',
    invoice: '',
    customerName: '',
    contactNumber: '',
    plateNumber: '',
    technician: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSearch(formData); // Pass search data to the parent component
  };

  const technicians = ['John Doe', 'Jane Smith', 'Mike Johnson'];

  return (
    <Grid container spacing={3} style={{ marginBottom: '20px' }}>
      <Grid item xs={6} sm={4}>
        <TextField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <TextField
          label="Invoice"
          name="invoice"
          value={formData.invoice}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <TextField
          label="Customer Name"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <TextField
          label="Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <TextField
          label="Plate Number"
          name="plateNumber"
          value={formData.plateNumber}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <TextField
          label="Technician"
          name="technician"
          value={formData.technician}
          onChange={handleChange}
          select
          fullWidth
        >
          {technicians.map((tech) => (
            <MenuItem key={tech} value={tech}>
              {tech}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchForm;
