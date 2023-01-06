import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Providers() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  return (
    <React.Fragment>
      <Typography  gutterBottom>
        
      </Typography>
      <Grid container rowSpacing={2} sx={{ml:17}}>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField  
            required
            id="Full Name"
            name="Full Name"
            label="Full name"
            fullWidth
            autoComplete="given-name"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField
            required
            id="Middle Name"
            name="Middle Name"
            label="Middle Name"
            fullWidth
            autoComplete="Middle Name"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField
            required
            id="Last Name"
            name="Last Name"
            label="Last Name"
            fullWidth
            autoComplete="Last Name"
            variant="outlined" 
          />
        </Grid>

        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField  
            required
            id="Select"
            name="Select"
            label="Select"
            fullWidth
            autoComplete="Role"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{  mr: 2}}>
          <TextField
            required
            id="Number"
            name="Number"
            label="Number"
            fullWidth
            autoComplete="given-number"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{ mr: 2}}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="username-email"
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={4} sm={3} >
          <TextField
            required
            id="Username"
            name="Username"
            label="Username"
            fullWidth
            autoComplete="username"
            variant="outlined" 
          />
          </Grid>
 

        <Grid item  xs={6} sm={2} sx={{ml:2}} >
        <FormControl sx={{  width: '32ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput  
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </Grid>
 
      </Grid>
    </React.Fragment>
  );
}