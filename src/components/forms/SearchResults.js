import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

const SearchResults = ({ results, page, setPage, rowsPerPage, setRowsPerPage }) => {
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
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
            {results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.invoice}</TableCell>
                <TableCell>{row.customerName}</TableCell>
                <TableCell>{row.contactNumber}</TableCell>
                <TableCell>{row.plateNumber}</TableCell>
                <TableCell>{row.technician}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={results.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default SearchResults;
