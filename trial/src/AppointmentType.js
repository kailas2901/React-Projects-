import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'

const PatientR = [
  {
    value: 'ABC',
    label: 'abc',
  },
  {
    value: 'CDE',
    label: 'cde',
  },
  {
    value: 'EFG',
    label: 'efg',
  },
  {
    value: 'HIJ',
    label: 'hijjjjjjjjjjjjj',
  },
];
const DefaultInterval = [
    {
      value: 'DefaultIntervalC',
      label: 'Default Interval',
    },
    {
      value: 'CDE',
      label: 'cde',
    },
    {
      value: 'EFG',
      label: 'efg',
    },
    {
      value: 'HIJ',
      label: 'hij',
    },
  ];

export default function ClinicDetails() {
  const handleChange = (event) => {
    const [state, setState] = React.useState('EUR');
    setState(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography  gutterBottom>
        
      </Typography>
      <Grid container rowSpacing={2} sx={{ml:17}}>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField  
            required
            id="Appointment type"
            name="Appointment type"
            label="Appointment type"
            fullWidth
            autoComplete="appointment-type"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3}sx={{ mr: 2}}>
        <TextField
        style={{ width: 290}}
          id="PatientRequired"
          select
          label="PatientRequired"
          value={PatientR}
          onChange={handleChange}
          helperText="Please select the Patient "
        >
          {PatientR.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={4} sm={3}sx={{ mr: 2}}>
        <TextField
        style={{ width: 290}}
          id="Default Interval"
          select
          label="Default Interval"
          value={DefaultInterval}
          onChange={handleChange}
          helperText="Please select the Interval "
        >
          {DefaultInterval.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
       
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField  
            required
            id="Appointment type"
            name="Appointment type"
            label="Appointment type"
            fullWidth
            autoComplete="appointment-type"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3}sx={{ mr: 2}}>
        <TextField
        style={{ width: 290}}
          id="outlined-select-currency"
          select
          label="Patient Requied"
          value={PatientR}
          onChange={handleChange}
          helperText="Please select the Patient "
        >
          {PatientR.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
        <TextField
        style={{ width: 290}}
          id="Default Interval"
          select
          label="Default Interval"
          value={DefaultInterval}
          onChange={handleChange}
          helperText="Please select the Interval "
        >
          {DefaultInterval.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        
        
  
      </Grid>
      
    </React.Fragment>
  );
}