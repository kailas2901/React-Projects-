import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { color, fontSize, Stack } from '@mui/system';
import {  useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Home from './Home';
import Signup from './signup';
import Theme from './theme';
import { ThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import './fonts.css';
import ArgentumSansRegular from './components/fonts/argentum-sanssemibold.ttf';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";



export default function Login() {


  const theme = createTheme({

    typography: {
      h4:{
      fontFamily:'ArgentumSansRegular',
      },
    },
  });


    const navigate = useNavigate();
           navigate('/chat');

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    

    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


      
  return (
      <div style={{
      
        display: 'flex',
}}>
  <Theme />
      <Box
      width={397} 
      height={1024}
      sx={{
          backgroundColor:'#ECF1FF' , 
          justifyContent:'center' ,
          textAlign:'left'
      }}
      >
        <Box >
          <Box   sx={{
            marginLeft:'100px', marginTop:'300px',
        fontFamily: 'ArgentumSansRegular',
      }}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <Typography  fontFamily={'ArgentumSansRegular'} fontSize={'30px'} fontWeight={'500'} lineHeight={'37.68px'}   >AR</Typography>
          <Typography fontFamily={'ArgentumSansRegular'} fontSize={'30px'} fontWeight={'500'}  lineHeight={'37.68px'}    >Management</Typography>
          <Typography fontFamily={'ArgentumSansRegular'} fontSize={'30px'} fontWeight={'500'}  lineHeight={'37.68px'}    >Portal</Typography>
       </ThemeProvider>
       </Box>
        </Box>
      </Box>
    <Box
    width={500}
    
      component="form"
      sx={{
        mt:'112px' ,
        ml:'300px' 
        
      }}
      noValidate
      autoComplete="off"
    >
    <Box >
        <Typography fontFamily={'ArgentumSansRegular'} marginLeft={'12px'}  marginBottom={'24px'} lineHeight={'37.68px'} fontSize={'28px'} fontWeight={'500'} color={'#4376FB'}>AR Management Portal</Typography>
        <Typography marginLeft = {'72px'} fontWeight={'600'} lineHeight={'32.97px'} fontSize={'26px'}  variant='h5'color={'#666666 '}>Welcome Back...</Typography>
        <Typography marginLeft={'113px'} marginTop={'24px'} fontSize={'14'} fontWeight={'300'} lineHeight={'16.49px'}   color={'#808080'}>Enter Your Details</Typography>
        </Box>
      <TextField id="outlined-basic" label="Username" variant="outlined" placeholder='Enter Username' sx={{width:'43ch', mt:'48px', ml:'16px' }} /><br/>
        
        <FormControl     sx={{mt:'16px' , ml:'16px' , width: '43ch' }} InputProps={{ sx: { height: 62 } }} variant="outlined">
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
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          /><br/>
                  <Stack>
        <Button margin={2} variant="contained" style={{ backgroundColor: "#4376FB"}} color="success" onClick={navigate}>
        Login
      </Button>
      <div style={{
          justifyContent:'center' ,
          display: 'flex',
          alignItems: 'center'
}}>
      <Typography marginTop={1} variant="h7" >
  Don't have an account? 
</Typography>     
    
    <a href='/Signup' >Signup</a>
    </div>

   
    <Link marginTop={1} marginLeft={'110px'}  href="/forgot">Forgot Password?</Link>
      </Stack>
        </FormControl>

      
    </Box>
    </div>
  );
}
