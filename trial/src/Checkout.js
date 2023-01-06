import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ClinicDetails from './ClinicDetails';
import Providers from './Providers';
import Users from './Users';
import Location from './Location';
import AppointmentType from './AppointmentType';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PropTypes from 'prop-types';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';


const steps = ['Clinic Details', 'Providers', 'Users', 'Location', 'Appointment Type'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ClinicDetails />;
    case 1:
      return <Providers />;
    case 2:
      return <Users />;
    case 3:
      return <Location />;
    case 4:
      return <AppointmentType />;
    default:
      throw new Error('Unknown step');
  }
}
const style = {
  margin: 0,
  top: 'auto',
  left: 1155,
  bottom: 180,
  right: 'auto',
  position: 'fixed'
}
const style2 = {
  margin: 0,
  top: 'auto',
  left: 330,
  bottom: 180,
  right: 'auto',
  position: 'fixed'
}
const style3 = {
  margin: 0,
  top: 'auto',
  left: 330,
  bottom: 180,
  right: 'auto',
  position: 'fixed'
}


const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);

  };



  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(0,100,0) 0%,rgb(0,100,0) 50%,rgb(0,100,0) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(0,100,0) 0%,rgb(0,100,0) 50%,rgb(0,100,0) 100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));
  
  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(0,100,0) 0%, rgb(0,100,0) 50%, rgb(0,100,0) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(0,100,0) 0%, rgb(0,100,0) 50%, rgb(0,100,0) 100%)',
    }),
  }));
  
  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
  
    const icons = {
      1: <LocalPharmacyIcon />,
      2: <InfoIcon />,
      3: <AccountCircleIcon />,
      4: <LocationOnIcon />,
      5: <BookOnlineIcon />,
    };
  
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  
  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" >
      <Stepper alternativeLabel activeStep={activeStep}  connector={<ColorlibConnector />} sx={{ pt: 7, pb: 6, color:'green'}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                
                <Typography variant="h5" gutterBottom>
                  Thank you for your Patience.
                </Typography>
                <Typography variant="subtitle1">
                  An Update will be sent to your Email.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex',  justifyContent: 'space-between', alignItems: 'center'}}>
                {activeStep == 0 && (
                    <Button   variant="outlined" style={style3}>
                     Cancel
                    </Button>
                  
                  )}
                  {activeStep !== 0 && (
                    <Button variant="outlined" onClick={handleBack} style={style2}>
                      PREVIOUS
                    </Button>
                  
                  )}
                 
                  
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    style={style}
                    sx={{  backgroundColor: 'green',
                      '&:hover': {
                        backgroundColor: 'green',
                      },
                    }}
                  >
                  
                    {activeStep === steps.length - 1 ? 'CONFIRM' : 'NEXT'}
                  </Button>
                  
                
               

                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        {/* <Copyright /> */}
      </Container>
    </ThemeProvider>
  );
}