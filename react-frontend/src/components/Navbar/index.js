import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const pageLinks = ['/products', '/pricing', '/blog'];
const settings = ['Orders'];
// const loggedIn = true;


function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLink = (link) => {
    handleCloseNavMenu();
    handleCloseUserMenu();
    navigate(link);
  };

  const logoutuser = () => {
    console.log('logout');
    };


  return (
    <AppBar position="static" style={{background:'none', boxShadow:'none', padding: 0, maxWidth: '100% !important'}}>
      <Container maxWidth="false">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", padding: 0}}>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => handleLink('/')}
            sx={{
              display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start' },
              fontFamily: 'Montserrat',
              fontWeight:700,
              color: '#EA526F',
              fontSize:'36px',
              textDecoration: 'none',
              padding: '32px 0',
              width: '100%',
              lineHeight: '1.2',
              "&:hover": {
                color: '#52796f',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in',
              },
            }}
          >
            {/* <MenuBookIcon sx={{fontSize: '40px', mr: '3px', color: '#000000' }}/> */}
            StudyPerks
          </Typography>

 {/* Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: '#2E3E46'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
               <MenuItem key={'Products'} 
              onClick={() => handleLink('/products')}
               >
                  <Typography textAlign="center">Study Rooms</Typography>
                </MenuItem>
                <MenuItem key={'Suppliers'} 
              onClick={() => handleLink('/suppliers')}
              
               >
                  <Typography textAlign="center">Suppliers</Typography>
                </MenuItem>
                <MenuItem key={'Restaurants'} 
               onClick={() => handleLink('/restaurants')}
             
               >
                  <Typography textAlign="center">Restaurants</Typography>
                </MenuItem>
                <MenuItem key={'contact'} 
               onClick={() => handleLink('/contact')}
              
               >
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
        
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => handleLink('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none', flexDirection: 'row', alignItems: 'start', justifyContent: 'start'},
              flexGrow: 1,
              fontFamily: 'montserrat',
              fontWeight: 600,
              letterSpacing: '0rem',
              color: '#2E3E46',
              textDecoration: 'none',
            }}
          >
            StudyPerks
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex', flexDirection: "row",    justifyContent: "end" } }}>
           
            <Button
                key={'products'}
                onClick={() => handleLink('/products')}
                sx={{ my: 2, color: '#07060A', display: 'block', "&:hover": {
                  color: '#52796f',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in'}}}
              >
                Rooms
              </Button>
        
          
             
              <Button
                key={'contact'}
                onClick={() => handleLink('/contact')}
                sx={{ my: 2, color: '#07060A', display: 'block', "&:hover": {
                  color: '#52796f',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in'}}}
              >
                Perks
              </Button>
              
            
              <Button
                key={'register'}
                onClick={() => handleLink('/signup')}
                sx={{ my: 2, color: '#EA526F', display: 'block', "&:hover": {
                  color: '#07060A',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in'}}}
              >
                Register
              </Button>
             
            
          </Box>
          
{/* End mobile */}

          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
            
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="K" src="/static/images/avatar/2.jpg" sx={{backgroundColor:'#EA526F'}}/>
              </IconButton>
            
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right-start',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right-start',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              disableScrollLock={true}
            >
              <MenuItem key='profile' onClick={() => handleLink('/account')}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem key='logout' onClick={() => {logoutuser(); handleCloseUserMenu() }} >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
