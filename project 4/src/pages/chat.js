import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { styles } from '@material-ui/pickers/views/Calendar/Calendar';
import { Stack } from '@mui/system';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Block } from '@mui/icons-material';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


export default function Chat(){
  

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black'
      },
    
    
  table: {
    minWidth: '1024',
  },
  chatSection: {
    height: '150vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '3px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});

const Chat = () => {
}
  const classes = useStyles();

  const styles = {
      backgroundColor:'#F4F5FF'
  }




  return (
      <div style={{ backgroundColor:'#F4F5FF'}}>
        <Grid  container spacing={2} >
            <Grid item xs={5 } style={{backgroundColor:'#F4F5FF',marginTop:'3.5px'}} >
            <Box sx={{marginTop:'10px'}}>
                <List>
                    
                <ListItem>
                <Typography variant='h4' sx={{ marginTop:'-9px'}} className="header-message">Chats</Typography>

              <Box sx={{ marginLeft:'370px'  }}>
                <ListItemIcon  >
                <SearchOutlinedIcon />
                    <MoreVertSharpIcon />
                   
                    <ListItemIcon>
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                </ListItemIcon>
                </ListItemIcon>
                
               
                
                </Box>
                
                
                </ListItem>
                </List>
                <Divider />
                </Box>
                </Grid>
                <Grid item xs={7}>
                    <List>
                <ListItem button key="Travis Howard">
                        <ListItemIcon>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                        </ListItemIcon>
                        <ListItemText primary="Elmer(Physician)" secondary="Typing..." ></ListItemText>
                        <Box>
                        <ListItemIcon><MoreVertSharpIcon /></ListItemIcon>
                        </Box>
                        
                    </ListItem>
                    </List>
               
                <Divider />
                {/* <List>
                <ListItem>
                <Typography variant='h4' sx={{ marginTop:'-12px'}} className="header-message">Chats</Typography>

              <Box sx={{ marginLeft:'370px'  }}>
                <ListItemIcon  >
                <SearchOutlinedIcon />
                    <MoreVertSharpIcon />
                    <ListItemIcon>
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                </ListItemIcon>
                </ListItemIcon>
               
                
                </Box>
                
                
                </ListItem>
                </List> */}
               
                
                </Grid>
                
        </Grid>
        
        <Grid container sx={{backgroundColor:'#F4F5FF'}} component={Paper} className={classes.chatSection}>
            <Grid item xs={5} style={{backgroundColor:'#F4F5FF'}}  className={classes.borderRight500}>
                <List>
                <Box sx={{ backgroundColor:'white' }}>
                    <ListItem button key="RemySharp">
                        
                        <ListItemIcon>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                        </ListItemIcon>
                        
                        <ListItemText primary="Elmer(Physician)" secondary="Review your medical report" ></ListItemText>
                       
                        
                        
                        <Box sx={{ alignItems:'baseline'}}>
                        <Box sx={{ marginLeft:'18px' }}>
                        <ListItemIcon  align="right" ><StarOutlineIcon /></ListItemIcon>
                        </Box>
                        <Typography variant='caption' fontWeight={100} fontSize={'1px'}> Just Now</Typography>
                        
                        </Box>
                         
                        

                    </ListItem>
                    </Box>
                </List>
            



                <List>
                    <ListItem disablePadding button key="RemySharp">
                        <ListItemIcon>
                            <Avatar alt="Nikitha (Nurse)" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Nikitha (Nurse)" secondary="Your medicine are here in the.......">Remy Sharp</ListItemText>
                        <ListItemText  align="right"></ListItemText>
                        <Box sx={{ alignItems:'baseline'}}>
                            <Box sx={{marginLeft:'60px'}}>
                        <ListItemIcon  sx={{ display:'flex',alignItems:'flex-end',marginLeft:'30px' }} ><StarOutlineIcon /></ListItemIcon>
                        </Box>
                        <Box sx={{marginLeft:'18px' }}>
                        <Typography variant='caption' fontSize={'1px'}>5 minutes ago</Typography>
                        </Box>
                        </Box>
                         
                    </ListItem>
                    <ListItem button key="Alice">
                        <ListItemIcon>
                            <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Robin (frontdesk)" secondary="Check your appoinment letter........">Alice</ListItemText>
                        <Box sx={{ alignItems:'baseline'}}>
                            <Box sx={{marginLeft:'50px'}}>
                        <ListItemIcon  align="right" ><StarOutlineIcon /></ListItemIcon>
                        </Box>
                        <Box sx={{marginLeft:'3px' }}>
                        <Typography variant='caption' fontSize={'1px'}>20 minutes ago</Typography>
                        </Box>
                        </Box>
                         
                    </ListItem>
                    <ListItem button key="CindyBaker">
                        <ListItemIcon>
                            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Alex Jafer" secondary="Sir your appoinment is......">Cindy Baker</ListItemText>
                        <Box sx={{ alignItems:'baseline'}}>
                            <Box sx={{marginLeft:'30px' }}>
                        <ListItemIcon  align="right" ><StarOutlineIcon /></ListItemIcon>
                        </Box>
                        <Box sx={{marginLeft:'4px'}}>
                        <Typography variant='caption' fontSize={'1px'}>1 Hour ago</Typography>
                        </Box>
                        </Box>
                         
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={7} style={{backgroundColor:'#F4F5FF'}}>
                <List className={classes.messageArea}>
                   
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                            {/* <Box border={1} borderColor={'black'} sx={{ width:'325px' ,height:'50px' , borderRadius:'10px' , marginLeft:'429px'}}>
                                    <Box sx={{ marginTop:'6px' , marginLeft:'25px' }} >
                                <Typography sx={{ mt:'10px' }}  fontWeight={400} >Sure, I’ll do it.</Typography>
                                </Box>
                                <Box sx={{ marginLeft:'272px',marginTop:'-6px' }}>
                                    <Typography variant='caption'>4:30PM</Typography>
                                </Box>
                                </Box> */}
                                <Box borderTop={1} sx={{ width:'325px' , height:'50px' ,borderRadius:'10px',color:'white' ,backgroundColor:'#4F53B2' }}>
                                    
                                <Box sx={{ marginTop:'8px' , marginLeft:'25px' }} >
                                <Typography variant='subtitle1' fontWeight={200} sx={{marginTop:'2px' }} >Review your medical report</Typography>

                                </Box>
                                <Box sx={{ marginLeft:'272px',marginTop:'-3px' }}>
                                    <Typography variant='caption'>4:05PM</Typography>
                                </Box>s
                        
                                </Box>

                            </Grid>
                            <Grid item xs={12}>
                                
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <Box border={1} borderColor={'black'} sx={{ width:'325px' ,height:'50px' , borderRadius:'10px' , marginLeft:'429px'}}>
                                    <Box sx={{ marginTop:'10px' , marginLeft:'25px' }} >
                                <Typography sx={{ mt:'12px' }}  fontWeight={400} >Sure, I’ll do it.</Typography>
                                </Box>
                                <Box sx={{ marginLeft:'272px',marginTop:'-6px' }}>
                                    <Typography variant='caption'>4:30PM</Typography>
                                </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="Seen"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
                
                <Grid container style={{padding: '20px' , marginTop:'338px'}}>
                    <Grid xs={12} align="left">
                    
                    <TextField   id="outlined-basic" label="Type Your Message Here" variant="outlined" fullWidth InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SentimentSatisfiedSharpIcon />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <SendIcon />
            </InputAdornment>
          ),
        }} />
                    
                    </Grid>
                    {/* <Grid xs={1}>
                    
                        
                        </Grid>
                    <Grid item xs={9}>
                        
                    </Grid>
                    <Grid xs={1} align="right">
                        
                    </Grid> */}
                    
                </Grid>
            </Grid>
        </Grid>

      </div>
  );
}