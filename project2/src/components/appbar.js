import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 
  const style = {

    background : '#FFFFFF'
};

  return (
    <AppBar position="static" style={{ background: '#FFFFFF' }} elevation={0}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
        
          <Typography
            variant="h6"
            
            href="/"
            sx={{
              mr:4,
              display: {  md: 'flex' },
           
              fontWeight: 520,
              
              color: 'blue',
              textDecoration: 'none',
            }}
          >
            AR Management Portal
          </Typography>


        
      
          <Box sx={{ flexGrow:2, ml:40, display: { md: 'flex' } }}>
          <Typography   sx={{
              mt:1 ,
              flexGrow: 1 ,
              fontWeight: 300,
              color: 'blue',
              textAlign:'right',
              textDecoration: 'none',
            }}
            >
                HENRY


              </Typography>
              
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ mr:5,p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
     
         


            {/* <Menu
              sx={{ mt: '30px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
      
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
