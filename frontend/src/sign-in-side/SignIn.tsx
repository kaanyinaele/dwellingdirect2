   import * as React from 'react';
   import {
      CssVarsProvider,
      extendTheme,
      useColorScheme,
    } from '@mui/joy/styles';
    import GlobalStyles from '@mui/joy/GlobalStyles';
    import CssBaseline from '@mui/joy/CssBaseline';
    import Box from '@mui/joy/Box';
    import Button from '@mui/joy/Button';
    import Checkbox from '@mui/joy/Checkbox';
    import Divider from '@mui/joy/Divider';
    import FormControl from '@mui/joy/FormControl';
    import FormLabel from '@mui/joy/FormLabel';
    import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
    import Link from '@mui/joy/Link';
    import Input from '@mui/joy/Input';
    import Typography from '@mui/joy/Typography';
    import Stack from '@mui/joy/Stack';
    import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
    import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
    import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
    import GoogleIcon from './GoogleIcon';
    import { auth, googleProvider } from '../firebase-config';
    import { signInWithPopup } from 'firebase/auth';
    import { useNavigate } from 'react-router-dom';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import BackgroundImageLight from '../assets/images/black_on_white.png';
    import BackgroundImageDark from '../assets/images/white_on_trans.png';

    
    interface FormElements extends HTMLFormControlsCollection {
      email: HTMLInputElement;
      password: HTMLInputElement;
      persistent: HTMLInputElement;
    }
    
    /*interface SignInFormElement extends HTMLFormElement {
      readonly elements: FormElements;
    }*/
    
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

    
    // Define the custom theme without defaultColorScheme
    const customTheme = extendTheme({});

   
    
    export default function JoySignInSideTemplate() {
      const navigate = useNavigate();

        // Form submit handler
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const formElements = event.currentTarget.elements as FormElements;
    const data = {
      email: formElements.email.value,
      password: formElements.password.value,
      persistent: formElements.persistent.checked,
    };

    // Firebase Authentication: Sign in with email and password
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log('Signed in:', userCredential.user);

        // Navigate to the dashboard after successful sign-in
        navigate('/dashboard/App');
      })
      .catch((error) => {
        console.error('Error signing in:', error.message);
        alert('Sign-in failed: ' + error.message);
      });
  };

      const handleGoogleSignUp = () => {

        signInWithPopup(auth, googleProvider)
          .then((result) => {
            console.log('Signed up with Google:', result.user);
            navigate('/dashboard/App');
          })
          .catch((error) => {
            console.error('Error with Google Sign-Up:', error.message);
          });
      };

      return (
        <CssVarsProvider theme={customTheme} disableTransitionOnChange>
          <CssBaseline />
          <GlobalStyles
            styles={{
              ':root': {
                '--Form-maxWidth': '800px',
                '--Transition-duration': '0.4s', // set to `none` to disable transition
              },
            }}
          />
          <Box
            sx={(theme) => ({
              width: { xs: '100%', md: '50vw' },
              transition: 'width var(--Transition-duration)',
              transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              backdropFilter: 'blur(12px)',
              backgroundColor: 'rgba(255 255 255 / 0.2)',
              [theme.getColorSchemeSelector('dark')]: {
                backgroundColor: 'rgba(19 19 24 / 0.4)',
              },
            })}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100dvh',
                width: '100%',
                px: 2,
              }}
            >
              <Box
                component="header"
                sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}
              >
                <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                  <IconButton variant="soft" color="primary" size="sm">
                    <BadgeRoundedIcon />
                  </IconButton>
                  <Typography level="title-lg">DwellingDirect</Typography>
                </Box>
                <ColorSchemeToggle />
              </Box>
              <Box
                component="main"
                sx={{
                  my: 'auto',
                  py: 2,
                  pb: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  width: 400,
                  maxWidth: '100%',
                  mx: 'auto',
                  borderRadius: 'sm',
                  '& form': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  },
                  [`& .MuiFormLabel-asterisk`]: {
                    visibility: 'hidden',
                  },
                }}
              >
                <Stack sx={{ gap: 4, mb: 2 }}>
                  <Stack sx={{ gap: 1 }}>
                    <Typography component="h1" level="h3">
                      Sign in
                    </Typography>
                    <Typography level="body-sm">
                      New to company?{' '}
                      <Link href="/SignUp" level="title-sm">
                        Sign up!
                      </Link>
                    </Typography>
                  </Stack>
                  <Button
                    variant="soft"
                    color="neutral"
                    fullWidth
                    startDecorator={<GoogleIcon />}
                    onClick={handleGoogleSignUp}
                  >
                    Continue with Google
                  </Button>
                </Stack>
                <Divider
                  sx={(theme) => ({
                    [theme.getColorSchemeSelector('light')]: {
                      color: { xs: '#FFF', md: 'text.tertiary' },
                    },
                  })}
                >
                  or
                </Divider>
                <Stack sx={{ gap: 4, mt: 2 }}>
                  <form
                    onSubmit={handleFormSubmit} >
                    <FormControl required>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" name="email" />
                    </FormControl>
                    <FormControl required>
                      <FormLabel>Password</FormLabel>
                      <Input type="password" name="password" />
                    </FormControl>
                    <Stack sx={{ gap: 4, mt: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Checkbox size="sm" label="Remember me" name="persistent" />
                        <Link level="title-sm" href="#replace-with-a-link">
                          Forgot your password?
                        </Link>
                      </Box>
                      <Button type="submit" fullWidth>
                        Sign in
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </Box>
              <Box component="footer" sx={{ py: 3 }}>
                <Typography level="body-xs" sx={{ textAlign: 'center' }}>
                  © DwellingDirect {new Date().getFullYear()}
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