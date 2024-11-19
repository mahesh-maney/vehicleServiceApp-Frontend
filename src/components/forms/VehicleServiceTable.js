import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const VehicleServiceTable = ({ records, onEdit, onDelete }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Invoice</TableCell>
          <TableCell>Customer Name</TableCell>
          <TableCell>Contact Number</TableCell>
          <TableCell>Plate Number</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {records.map((record) => (
          <TableRow key={record.id}>
            <TableCell>{record.date}</TableCell>
            <TableCell>{record.invoice}</TableCell>
            <TableCell>{record.customerName}</TableCell>
            <TableCell>{record.contactNumber}</TableCell>
            <TableCell>{record.plateNumber}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(record)}>Edit</Button>
              <Button onClick={() => onDelete(record.id)} color="error">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default VehicleServiceTable;
