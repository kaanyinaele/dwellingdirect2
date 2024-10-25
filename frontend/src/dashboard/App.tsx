import React, { useState, useEffect } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
//import IconButton from '@mui/joy/IconButton';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import AspectRatio from '@mui/joy/AspectRatio';
import { Search, FilterList } from '@mui/icons-material';

import NavBar from './components/NavBar';

type PropertyListing = {
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

const amenityIcons = {
  water: '💧',
  wifi: '📶',
  power: '⚡'
};

export default function RentalDashboard() {
  //const { mode, setMode } = useColorScheme();
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError('Failed to load properties. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = properties.filter(property =>
    property.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.body' }}>
        <NavBar />
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
          <Typography level="h2" sx={{ mb: 2 }}>Find Your Perfect Rental</Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Input
              startDecorator={<Search />}
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ flexGrow: 1 }}
            />
            <Button
              variant="outlined"
              color="neutral"
              startDecorator={<FilterList />}
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </Button>
            
          </Box>
          {showFilters && (
            <Box sx={{ mb: 3, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 'sm' }}>
              <Typography level="body-sm">Filter options will be displayed here</Typography>
            </Box>
          )}
          {isLoading ? (
            <Typography>Loading properties...</Typography>
          ) : error ? (
            <Typography color="danger">{error}</Typography>
          ) : (
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 2 }}>
              {filteredProperties.map((property) => (
                <Card key={property.id} variant="outlined">
                  <AspectRatio ratio="16/9">
                    <img
                      src={property.images[0] || 'https://via.placeholder.com/300x200'}
                      alt={property.propertyTitle}
                      style={{ objectFit: 'cover' }}
                    />
                  </AspectRatio>
                  <Box sx={{ p: 2 }}>
                    <Typography level="h4" sx={{ mb: 0.5 }}>{property.propertyTitle}</Typography>
                    <Typography level="body-sm" sx={{ mb: 1 }}>{property.address}, {property.state}</Typography>
                    <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                      {Object.entries(amenityIcons).map(([key, icon]) => 
                        property[key as keyof PropertyListing] && (
                          <Chip key={key} size="sm" variant="soft">{icon} {key}</Chip>
                        )
                      )}
                    </Box>
                    <Typography level="h4" sx={{ fontWeight: 'bold', mb: 1 }}>₦{property.rentPrice}</Typography>
                    <Typography level="body-sm" sx={{ mb: 1 }}>{property.rentType === 'yearly' ? 'Yearly' : 'Shortlet'} rental</Typography>
                    <Typography level="body-sm" sx={{ mb: 1 }}>Agency Fee: ₦{property.agencyPrice}</Typography>
                    <Typography level="body-sm" sx={{ mb: 1 }}>Contact: {property.contactEmail} | {property.contactPhone}</Typography>
                    <Button fullWidth variant="solid" color="primary">View Details</Button>
                  </Box>
                </Card>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

