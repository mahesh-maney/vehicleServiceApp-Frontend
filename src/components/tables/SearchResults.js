import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SearchResults = ({ results }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Invoice</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Contact Number</TableCell>
            <TableCell>Plate Number</TableCell>
            <TableCell>Technician</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell>{result.date}</TableCell>
              <TableCell>{result.invoice}</TableCell>
              <TableCell>{result.customerName}</TableCell>
              <TableCell>{result.contactNumber}</TableCell>
              <TableCell>{result.plateNumber}</TableCell>
              <TableCell>{result.technician}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SearchResults;
