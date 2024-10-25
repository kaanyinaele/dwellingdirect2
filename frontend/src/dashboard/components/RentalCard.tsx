/*import React, { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WifiIcon from '@mui/icons-material/Wifi';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import BoltIcon from '@mui/icons-material/Bolt';

type RentalCardProps = {
  id: string;
  propertyTitle: string;
  state: string;
  address: string;
  description: string;
  water: boolean;
  wifi: boolean;
  power: boolean;
  rentType: string;
  rentPrice: string;
  agencyPrice: string;
  images: string;
  rareFind: boolean;
};

export default function RentalCard(props: RentalCardProps) {
  const {
    propertyTitle,
    state,
    address,
    description,
    water,
    wifi,
    power,
    rentType,
    rentPrice,
    //agencyPrice,
    images,
  } = props;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 320,
        m: 2,
      }}
    >
      <AspectRatio ratio="4/3">
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Box
            component="img"
            src={images[currentImageIndex]}
            alt={`${propertyTitle} - Image ${currentImageIndex + 1}`}
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
          <IconButton
            aria-label="Like"
            variant="solid"
            color={isLiked ? 'danger' : 'neutral'}
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            sx={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              zIndex: 2,
            }}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          {images.length > 1 && (
            <>
              <IconButton
                aria-label="Previous image"
                variant="soft"
                color="neutral"
                size="sm"
                onClick={prevImage}
                sx={{
                  position: 'absolute',
                  left: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                aria-label="Next image"
                variant="soft"
                color="neutral"
                size="sm"
                onClick={nextImage}
                sx={{
                  position: 'absolute',
                  right: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          )}
        </Box>
      </AspectRatio>
      <CardContent>
        <Typography level="title-lg">{propertyTitle}</Typography>
        <Typography level="body-sm">{`${state}, ${address}`}</Typography>
        <Typography level="body-sm" sx={{ mt: 1, mb: 2 }}>
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {wifi && <Chip variant="soft" color="primary" size="sm" startDecorator={<WifiIcon />}>WiFi</Chip>}
          {water && <Chip variant="soft" color="primary" size="sm" startDecorator={<WaterDropIcon />}>Water</Chip>}
          {power && <Chip variant="soft" color="primary" size="sm" startDecorator={<BoltIcon />}>Power</Chip>}
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography level="title-lg">
            ₦{rentPrice}
            <Typography level="body-sm">{rentType === 'yearly' ? '/year' : '/day'}</Typography>
          </Typography>
          <Button variant="solid" color="primary" size="sm">
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}*/





import React, { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WifiIcon from '@mui/icons-material/Wifi';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import BoltIcon from '@mui/icons-material/Bolt';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

type RentalCardProps = {
  id: string;
  propertyTitle: string;
  state: string;
  address: string;
  description: string;
  water: boolean;
  wifi: boolean;
  power: boolean;
  rentType: 'yearly' | 'monthly';
  rentPrice: string;
  agencyPrice: string;
  images: string[];
  contactEmail: string;
  contactPhone: string;
};

export default function RentalCard(props: RentalCardProps) {
  const {
    propertyTitle,
    state,
    address,
    description,
    water,
    wifi,
    power,
    rentType,
    rentPrice,
    agencyPrice,
    images,
    contactEmail,
    contactPhone,
  } = props;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        maxWidth: 320,
        m: 2,
      }}
    >
      <AspectRatio ratio="4/3">
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Box
            component="img"
            src={images[currentImageIndex]}
            alt={`${propertyTitle} - Image ${currentImageIndex + 1}`}
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
          <IconButton
            aria-label="Like"
            variant="solid"
            color={isLiked ? 'danger' : 'neutral'}
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            sx={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              zIndex: 2,
            }}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          {images.length > 1 && (
            <>
              <IconButton
                aria-label="Previous image"
                variant="soft"
                color="neutral"
                size="sm"
                onClick={prevImage}
                sx={{
                  position: 'absolute',
                  left: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                aria-label="Next image"
                variant="soft"
                color="neutral"
                size="sm"
                onClick={nextImage}
                sx={{
                  position: 'absolute',
                  right: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          )}
        </Box>
      </AspectRatio>
      <CardContent>
        <Typography level="title-lg">{propertyTitle}</Typography>
        <Typography level="body-sm">{`${state}, ${address}`}</Typography>
        <Typography level="body-sm" sx={{ mt: 1, mb: 2 }}>
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {wifi && <Chip variant="soft" color="primary" size="sm" startDecorator={<WifiIcon />}>WiFi</Chip>}
          {water && <Chip variant="soft" color="primary" size="sm" startDecorator={<WaterDropIcon />}>Water</Chip>}
          {power && <Chip variant="soft" color="primary" size="sm" startDecorator={<BoltIcon />}>Power</Chip>}
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography level="title-lg">
            ₦{rentPrice}
            <Typography level="body-sm">{rentType === 'yearly' ? '/year' : '/month'}</Typography>
          </Typography>
          <Typography level="body-sm">
            Agency Fee: ₦{agencyPrice}
          </Typography>
        </Box>
        <Stack direction="column" spacing={1} sx={{ mb: 2 }}>
          <Typography level="body-sm" startDecorator={<EmailIcon />}>
            {contactEmail}
          </Typography>
          <Typography level="body-sm" startDecorator={<PhoneIcon />}>
            {contactPhone}
          </Typography>
        </Stack>
        <Button variant="solid" color="primary" size="sm" fullWidth>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}