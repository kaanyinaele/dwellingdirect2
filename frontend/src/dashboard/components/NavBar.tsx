/*import * as React from 'react';
import {
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Drawer,
  Typography,
  List,
  ListItem,
} from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Link, useNavigate } from 'react-router-dom';
import ColorSchemeToggle from './ColorSchemeToggle';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false); // Close drawer on navigation
  };

  const drawerContent = (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <List>
        <ListItem>
          <Typography
            level="body-lg"
            onClick={() => handleNavigate('/listing')}
            sx={{ cursor: 'pointer' }}
          >
            Listing
          </Typography>
        </ListItem>

        <ListItem>
          <Typography
            level="body-md"
            onClick={() => handleNavigate('/profile')}
            sx={{ cursor: 'pointer' }}
          >
            View Profile
          </Typography>
        </ListItem>

        <ListItem>
          <Typography
            level="body-md"
            onClick={() => handleNavigate('/HeroLeft01')}
            sx={{ cursor: 'pointer' }}
          >
            Logout
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        px: 1.5,
        py: 1,
        backgroundColor: 'background.body',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 10000,
      }}
    >
     
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <IconButton size="sm" variant="soft">
          <MapsHomeWorkIcon />
        </IconButton>
        <Typography component="h1" sx={{ fontWeight: 'xl' }}>
          DwellingDirect
        </Typography>
        <Link to="/listing/Listing" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography component="h1" level="body-lg" sx={{ ml: 1, fontWeight: 'x1' }}>
            Listing
          </Typography>
        </Link>
      </Box>

      
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, alignItems: 'center' }}>
        <Avatar
          variant="outlined"
          size="sm"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          onClick={handleProfileClick}
          sx={{ cursor: 'pointer' }}
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">Afolabi P.O</Typography>
          <Typography level="body-xs">officialpryz@test.com</Typography>
        </Box>
        <ColorSchemeToggle />

        
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ mt: 1.5 }}
          placement="bottom-end"
        >
          <MenuItem onClick={() => handleNavigate('/profile')}>View Profile</MenuItem>
          <MenuItem onClick={() => console.log('/Settings')}>Settings</MenuItem>
          <MenuItem onClick={() => handleNavigate('/HeroLeft01')}>Logout</MenuItem>
          <MenuItem onClick={() => handleNavigate('/listing/Listing')}>Listing</MenuItem>
        </Menu>
      </Box>

     
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <IconButton size="sm" variant="soft" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}*/



import * as React from 'react';
import {
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Drawer,
  Typography,
  List,
  ListItem,
} from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Link, useNavigate } from 'react-router-dom';
import ColorSchemeToggle from './ColorSchemeToggle';
//import LogoIcon from '../assets/images/favicon_io (1)/favicon.ico';  // Adjust the path based on your folder structure


export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false); // Close drawer on navigation
  };

  const drawerContent = (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <List>
        <ListItem>
          <Typography
            level="body-lg"
            onClick={() => handleNavigate('/listing')}
            sx={{
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            Listing
          </Typography>
        </ListItem>

        <ListItem>
          <Typography
            level="body-md"
            onClick={() => handleNavigate('/profile')}
            sx={{
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            View Profile
          </Typography>
        </ListItem>

        <ListItem>
          <Typography
            level="body-md"
            onClick={() => handleNavigate('/HeroLeft01')}
            sx={{
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            Logout
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        px: 2,
        py: 1,
        backgroundColor: 'background.body',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 10000,
      }}
    >
      {/* Left Section with Logo and Listing Text */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton size="md" variant="soft">
          <MapsHomeWorkIcon />

        </IconButton>
        <Typography component="h1" sx={{ fontWeight: 'xl', fontSize: '1.2rem' }}>
          DwellingDirect
        </Typography>
        <Link to="/listing/Listing" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            component="h1"
            level="body-lg"
            sx={{ ml: 1, fontWeight: 'x1', '&:hover': { textDecoration: 'underline' } }}
          >
            Listing
          </Typography>
        </Link>
      </Box>

      {/* Right Section with Profile and Color Scheme Toggle */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, alignItems: 'center' }}>
        <Avatar
          variant="outlined"
          size="sm"
          src="/path-to-your-avatar.jpg"
          onClick={handleProfileClick}
          sx={{ cursor: 'pointer', border: '2px solid', borderColor: 'divider' }}
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">Afolabi P.O</Typography>
          <Typography level="body-xs">officialpryz@test.com</Typography>
        </Box>
        <ColorSchemeToggle />

        {/* Profile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ mt: 1.5 }}
          placement="bottom-end"
        >
          <MenuItem onClick={() => handleNavigate('/profile')}>View Profile</MenuItem>
          <MenuItem onClick={() => console.log('/Settings')}>Settings</MenuItem>
          <MenuItem onClick={() => handleNavigate('/framesx-web-block/blocks/HeroLeft01')}>Logout</MenuItem>
          <MenuItem onClick={() => handleNavigate('/listing/Listing')}>Listing</MenuItem>
        </Menu>
      </Box>

      {/* Mobile Hamburger Menu */}
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <IconButton size="sm" variant="soft" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
