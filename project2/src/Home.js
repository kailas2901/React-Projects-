import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AppBar from './components/appbar';




const columns = [
  {
  id: 'no',label:'No',minWidth:50, align:'left'  },
  { id: 'Firstname', label: 'FirstName' },
  { id: 'Lastname', label: 'Lastname' },
  {
    id: 'LastNote',
    label: 'LastNote',
    align: 'right',
    minWidth:50,
    format: (value) => value.toLocaleString('en-US'),
 
  },
  {
    id: 'MRN',
    label: 'MRN',
    align: 'right',
    minWidth:50,
    
  },
  {
    id: 'DOS',
    label: 'DOS',
    align: 'right',
    minWidth:50,
    
  },
  {
    id: 'Payor',
    label: 'Payor',
    align: 'right',
    minWidth:50,
  },
  {
    id: 'Billed',
    label: 'Billed',
    align: 'right',
    minWidth:50,
  },
  {
    id: 'InsuranceBalance',
    label: 'Insurance Balance',
    align: 'right',
    minWidth:50,
  },
  {
    id: 'Status',
    label: 'Status',
    align: 'right',
    minWidth:50,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Issuetype',
    label: 'Issuetype',
    align: 'right',
    minWidth:50,
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(no,Firstname, Lastname, Lastnote, MRN , DOS, Payor , Billed ,InsuranceBalance, Status, Issuetype) {
  return {no, Firstname, Lastname, Lastnote, MRN, DOS, Payor , Billed , InsuranceBalance, Status , Issuetype };
}

const rows = [
  createData(1,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(2,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(3,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(4,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(5,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(6,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(7,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(8,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(9,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(10,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(11,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(12,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(13,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(14,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(15,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(16,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(17,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(18,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(20,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(21,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(22,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(23,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(24,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
  createData(25,'Harry', 'Jhon', 'Abcd123', '000', '900' , 'pqr' , 'pqr' ,'pqr','pqr', 'pqr'),
];

export default function Home() {

  const options = top100Films.map((option) => {
  const firstLetter = option.title[0].toUpperCase();
    
    return {
      firstLetter: /[0-24]/.test(firstLetter) ? '0-24' : firstLetter,
      ...option,
    };
  });

  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };

  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    
    }
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    const navigate = useNavigate();
    navigate('/');
  

 
  return (
    
<div>
  < AppBar />
      <Grid container style = {
        {
         flex: 1
        }
       } >

        <Stack spacing={6} sx={{ margin:4 , width: 200 ,marginTop: 5 }}>

    

        <Autocomplete
        sx={{width:230}}
           id="grouped-demo"
           options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
           groupBy={(option) => option.firstLetter}
           getOptionLabel={(option) => option.title}
           renderInput={(params) => <TextField {...params} label="Filters"  />}
        />

        <Autocomplete
          {...defaultProps}
          id="disable-close-on-select"
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params} label="Status" variant="standard" />
          )}
        />

        <TextField label="Issue Type" variant="standard" />
       
      
        <TextField label="Resolution Due" variant="standard" />

      
        <TextField label="Action Due" variant="standard" />
       
      
        <TextField label="Priority" variant="standard" />


        <TextField label="Clinic" variant="standard" />


        <Autocomplete
          {...defaultProps}
          id="disable-close-on-select"
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params} label="Assigned to" variant="standard" />
          )}
        />
    
        <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={navigate}>
             Apply
            </Button>
            <Button variant="outlined" >
             Reset
            </Button>
        </Stack>

    </Stack>
  

 
          <Stack direction="row" spacing={8} sx={{ mr:5,m:3  ,marginTop: 5 }}>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Stack>
    </Grid>

    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [

  { title: 'Se7en', year: 1995 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  
];