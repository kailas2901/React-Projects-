import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'

const State = [
  {
    value: 'New York',
    label: 'NY',
  },
  {
    value: 'Washington DC',
    label: 'WDC',
  },
  {
    value: 'Californa',
    label: 'CLF',
  },
  {
    value: 'Texas',
    label: 'TX',
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
      <Grid container rowSpacing={1} sx={{ml:17}}>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField  
            required
            id="clinicName"
            name="clinicName"
            label="Clinic name"
            fullWidth
            autoComplete="given-name"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}columnSpacing={-1}>
          <TextField
            required
            id="clinicAlias"
            name="clinicAlias"
            label="Clinic Alias"
            fullWidth
            autoComplete="family-name"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3}>
          <TextField
            required
            id="specialityCode"
            name="specialityCode"
            label="Speciality Code"
            fullWidth
            autoComplete="speciality-code"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={5} sx={{ mr:-2}}>
          <TextField
          style={{ width: 440}} 
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="address-line1"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={5} sx={{ mr: 15}}>
          <TextField
          style={{ width: 435}}
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="address-line2"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField  
            required
            id="zip"
            name="zip"
            label="Zip"
            fullWidth
            autoComplete="postal-code"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="home city"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3}>
        <TextField
         style={{ width: 290}}
          id="outlined-select-currency"
          select
          label="State"
          value={State}
          onChange={handleChange}
          helperText="Please   select    your    State  "
        >
          {State.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
        <TextField
          required
          id="outlined-required"
          label="Clinic Name"
          defaultValue="Tensow Health"
          fullWidth
          autoComplete="Clini-Name"
          variant="outlined" 
        />
        </Grid>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField
            required
            id="fax"
            name="fax"
            label="Fax"
            fullWidth
            autoComplete="fax"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3}>
          <TextField
            required
            id="taxId"
            name="taxId"
            label="Tax ID"
            fullWidth
            autoComplete="tax-id"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField  
            required
            id="taxonomy"
            name="taxonomy"
            label="Taxonomy"
            fullWidth
            autoComplete="taxonomy"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField
            required
            id="contactName"
            name="contactName"
            label="Contact Name"
            fullWidth
            autoComplete="contact-name"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3}>
          <TextField
            required
            id="contactPhone"
            name="contactPhone"
            label="Contact Phone"
            fullWidth
            autoComplete="contact-phone"
            variant="outlined" 
          />
        </Grid>
      </Grid>
      
    </React.Fragment>
  );
}