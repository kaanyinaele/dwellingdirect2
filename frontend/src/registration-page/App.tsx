import * as React from 'react';
import {
  CssVarsProvider,
  extendTheme,
  useColorScheme,
} from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
//import Stack from '@mui/joy/Stack';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import BackgroundImageLight from '../assets/images/black_on_white.png';
import BackgroundImageDark from '../assets/images/white_on_trans.png';

// Function for light/dark mode toggle
function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <IconButton
      aria-label="toggle light/dark mode"
      size="sm"
      variant="outlined"
      disabled={!mounted}
      onClick={(event) => {
        setMode(mode === 'light' ? 'dark' : 'light');
        onClick?.(event);
      }}
      {...other}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

// Real-time geolocation
const useGeoLocation = () => {
  const [location, setLocation] = React.useState({ latitude: '', longitude: '' });

  React.useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        });
      });
    }
  }, []);

  return location;
};

// Theme setup
const customTheme = extendTheme({});

export default function RegistrationPage() {
  const { latitude, longitude } = useGeoLocation();
  const [country, setCountry] = React.useState('');
  const [email] = React.useState('example@example.com'); // Prefilled email
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      email: email,
      country,
      latitude,
      longitude,
    };

    console.log('Form Data:', userData);
    
    // Navigate to the next page (e.g., dashboard) after successful submission
    navigate('/dashboard/App');  // Change '/dashboard' to the actual route
  };

  return (
    <CssVarsProvider theme={customTheme} disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{
        gridRow: 'span 3',
         display: { xs: 'none', md: 'flex' },
          justifyContent: 'flex-end',
           backdropFilter: 'blur(12px)',
            backgroundColor: 'background.level1',
            backgroundSize: 'cover',
             width: { xs: '100%', md: '50vw' },
             }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh', width: '100%', px: 2 }}>
          <Box component="header" sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton variant="soft" color="primary" size="sm">
                <BadgeRoundedIcon />
              </IconButton>
              <Typography level="title-lg">DwellingDirect</Typography>
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box component="main" sx={{ my: 'auto', py: 2, pb: 5, display: 'flex', flexDirection: 'column', gap: 2, width: 400, maxWidth: '100%', mx: 'auto', borderRadius: 'sm' }}>
            <Typography component="h1" level="h3">Register</Typography>
            <Divider />
            <form onSubmit={handleSubmit}>
              <FormControl required>
                <FormLabel>First Name</FormLabel>
                <Input type="text" name="firstName" />
              </FormControl>
              <FormControl required>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" name="lastName" />
              </FormControl>
              <FormControl required>
                <FormLabel>Phone Number</FormLabel>
                <Input type="tel" name="phone" />
              </FormControl>
              <FormControl required>
                <FormLabel>Email</FormLabel>
                <Input type="email" /*value={email} readOnly*/ />
              </FormControl>
              <FormControl required>
                <FormLabel>Country</FormLabel>
                <Input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
              </FormControl>
              <FormControl required>
                <FormLabel>Location</FormLabel>
                <Typography level="body-sm">Location: {latitude}, {longitude}</Typography>
              </FormControl>
             

              <Button type="submit" fullWidth>
                Register
              </Button>
            </form>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" sx={{ textAlign: 'center' }}>
              © Your company {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
          sx={(theme) => ({
            height: '100%',
            position: 'fixed',
            right: 0,
            top: 0,
            bottom: 0,
            left: { xs: 0, md: '50vw' },
            transition:
              'background-image var(--Transition-duration), left var(--Transition-duration) !important',
            transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
            backgroundColor: 'background.level1',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage:
              `url(${BackgroundImageLight})`,
            [theme.getColorSchemeSelector('dark')]: {
              backgroundImage:
                `url(${BackgroundImageDark})`,
            },
          })}
        />
    </CssVarsProvider>
  );
}
