import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Link as RouterButton } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" sx={{ fontSize: 'lg', fontWeight: 'lg' }}>
        The power to do more
      </Typography>
      <Typography
        level="h1"
        sx={{
          fontWeight: 'xl',
          fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
        }}
      >
        Find Your Perfect Space To Rent, Buy, or Lease with Ease
      </Typography>
      <Typography
        textColor="text.secondary"
        sx={{ fontSize: 'lg', lineHeight: 'lg' }}
      >
        "Browse listings, filter by location, and get real-time details. Whether it’s a rental or purchase, your next space is just a few clicks away."
      </Typography>
      <Button component={RouterButton} to="/SignUp" size="lg" endDecorator={<ArrowForward fontSize="large" />}>
        Get Started
      </Button>
      <Typography>
        Already a member?{''} 
        <Link component={RouterLink} to="/SignIn" sx={{ fontWeight: 'lg' }}> Sign in </Link>
      </Typography>
      
    </TwoSidedLayout>
  );
}