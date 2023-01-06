import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import { Stack } from '@mui/system';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';



export default function Login(){


  


    const theme = createTheme({

        typography: {
          h4:{
          fontFamily:'Roboto',
          },
        },
      });
      
    //  const navigate = useNavigate();
    //  navigate('/chat');
    


      const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

      const handleChange = (newValue) => {
        setValue(newValue);
      };
      const styles = {
          width:'100%' ,
          height:'100%',
     }


return(
    <div style={styles}>
        <Stack sx={{backgroundColor:'#F4F5FF' , height:'720px'}} >
           <Box width={600} height={450} sx={{backgroundColor:'white' , ml: '370px' , mt:'140px' , borderRadius: 2 }}>
               <Box  sx={{marginLeft:'144px', marginTop:'65px'}}>


            <ThemeProvider theme={theme}>
                <CssBaseline />
            <Typography sx={{ml:'50px',mb:'18px'}} fontWeight={'600'} fontSize={'28px'} color={'#23254F'}>
                Welcome Back
            </Typography>
            <Typography  sx={{ml:'18px', mb:'18px'}}  fontWeight={'200'} lineHeight={'18.15px'} fontSize={'13px'} color={'#737373'}>Enter your credentials to acess your account</Typography>
            </ThemeProvider>


    <Box sx={{marginLeft:'-45px'}}>
    <TextField sx={{mt: '20px',mb:'18px', width:'400px' }} id="outlined-basic" label="Enter your 12-character unique ID " variant="outlined" /> <br />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker 
         
          label="Enter your Date Of Birth"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField  sx={{ width:'400px' ,mb:'18px' }} {...params} />}
        />
    </LocalizationProvider>
        
        <Button margin={2} variant="contained"  sx={{ width:'400px'  , height:'45px',mt:'10px' ,backgroundColor:'#4F53B2','&:hover': {
      backgroundColor: '#7478d6',
  }
  }}  >
        Login
      </Button>
        </Box>
    </Box>
    </Box>
    </Stack>
    </div>
);

}