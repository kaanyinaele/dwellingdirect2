import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  CssVarsProvider,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  Option,
  Stack,
  Textarea,
  Typography,
  useTheme,
} from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import UploadIcon from '@mui/icons-material/Upload';
import NavBar from '../dashboard/components/NavBar';

// Nigerian states array (unchanged)
const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River',
  'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT - Abuja', 'Gombe', 'Imo', 'Jigawa', 'Kaduna',
  'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo',
  'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

// Form data type (unchanged)
type ListingFormData = {
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
  images: FileList | null;
  video: File | null;
  contactEmail: string;
  contactPhone: string;
};

// Validation schema (unchanged)
const schema = yup.object({
  propertyTitle: yup.string().required('Property title is required'),
  state: yup.string().required('State is required'),
  address: yup.string().required('Address is required'),
  description: yup.string().required('Property description is required'),
  rentPrice: yup.number().positive('Rent price must be positive').required('Rent price is required'),
  agencyPrice: yup.number().positive('Agency price must be positive').required('Agency price is required'),
  contactEmail: yup.string().email('Invalid email').required('Contact email is required'),
  contactPhone: yup.string().required('Contact phone is required'),
}).required();

const ListingPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const { handleSubmit, control, formState: { errors } } = useForm<ListingFormData>({
    resolver: yupResolver(schema) as any,
    defaultValues: {
      propertyTitle: '',
      state: '',
      address: '',
      description: '',
      water: false,
      wifi: false,
      power: false,
      rentType: 'yearly',
      rentPrice: '',
      agencyPrice: '',
      images: null,
      video: null,
      contactEmail: '',
      contactPhone: '',
    },
  });

  const onSubmit = async (data: ListingFormData) => {
    setIsSubmitting(true);
    try {
      console.log(data);
      await new Promise(resolve => setTimeout(resolve, 2000));
      navigate('/dashboard/App');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CssVarsProvider>
      <CssBaseline />
      <NavBar />
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)', // Adjust this value based on your NavBar height
      }}>
        <Box sx={{ 
          width: '100%',
          maxWidth: '1200px', // Adjust this value to your desired maximum width
          margin: 'auto', 
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: 'background.surface',
        }}>
          <Typography level="h2" sx={{ mb: 2, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
            List Your Property
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              
              <Grid xs={4} sm={8} md={12}>
                <Controller
                  name="propertyTitle"
                  control={control}
                  render={({ field }) => (
                    <FormControl error={!!errors.propertyTitle} sx={{ width: '100%' }}>
                      <FormLabel>Property Title</FormLabel>
                      <Input {...field} placeholder="Enter property title" />
                      {errors.propertyTitle && (
                        <Typography level="body-xs" color="danger">
                          {errors.propertyTitle.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>

              <Grid xs={4} sm={4} md={6}>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <FormControl error={!!errors.state} sx={{ width: '100%' }}>
                      <FormLabel>State</FormLabel>
                      <Select {...field} placeholder="Select State">
                        {nigerianStates.map((state) => (
                          <Option key={state} value={state}>{state}</Option>
                        ))}
                      </Select>
                      {errors.state && (
                        <Typography level="body-xs" color="danger">
                          {errors.state.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>

              <Grid xs={4} sm={4} md={6}>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <FormControl error={!!errors.address} sx={{ width: '100%' }}>
                      <FormLabel>Full Address</FormLabel>
                      <Input {...field} placeholder="Enter full address" />
                      {errors.address && (
                        <Typography level="body-xs" color="danger">
                          {errors.address.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>

              <Grid xs={4} sm={8} md={12}>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <FormControl error={!!errors.description} sx={{ width: '100%' }}>
                      <FormLabel>Property Description</FormLabel>
                      <Textarea
                        {...field}
                        minRows={3}
                        placeholder="Describe your property"
                      />
                      {errors.description && (
                        <Typography level="body-xs" color="danger">
                          {errors.description.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>

              <Grid xs={4} sm={8} md={12}>
                <Typography level="body-sm">Amenities</Typography>
                <Stack 
                  direction={useMediaQuery(theme.breakpoints.up('sm')) ? 'row' : 'column'}
                  spacing={useMediaQuery(theme.breakpoints.up('sm')) ? 2 : 1}
                  sx={{ flexWrap: 'wrap' }}
                >
                  <Controller
                    name="water"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onChange={(event) => field.onChange(event.target.checked)}
                        label="Water Available"
                      />
                    )}
                  />
                  <Controller
                    name="wifi"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onChange={(event) => field.onChange(event.target.checked)}
                        label="WiFi Available"
                      />
                    )}
                  />
                  <Controller
                    name="power"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value}
                        onChange={(event) => field.onChange(event.target.checked)}
                        label="24-Hour Power"
                      />
                    )}
                  />
                </Stack>
              </Grid>

              <Grid xs={4} sm={4} md={4}>
                <Controller
                  name="rentType"
                  control={control}
                  render={({ field }) => (
                    <FormControl sx={{ width: '100%' }}>
                      <FormLabel>Rent Type</FormLabel>
                      <Select {...field} placeholder="Select Rent Type">
                        <Option value="yearly">Yearly Rent</Option>
                        <Option value="monthly">Shortlet</Option>
                      </Select>
                    </FormControl>
                  )}
                />
              </Grid>

              <Grid xs={4} sm={2} md={4}>
                <Controller
                  name="rentPrice"
                  control={control}
                  render={({ field }) => (
                    <FormControl error={!!errors.rentPrice} sx={{ width: '100%' }}>
                      <FormLabel>Rent Price (₦)</FormLabel>
                      <Input {...field} type="number" placeholder="Enter rent price" />
                      {errors.rentPrice && (
                        <Typography level="body-xs" color="danger">
                          {errors.rentPrice.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>

              <Grid xs={4} sm={2} md={4}>
                <Controller
                  name="agencyPrice"
                  control={control}
                  render={({ field }) => (
                    <FormControl error={!!errors.agencyPrice} sx={{ width: '100%' }}>
                      <FormLabel>Agency Price (₦)</FormLabel>
                      <Input {...field} type="number" placeholder="Enter agency price" />
                      {errors.agencyPrice && (
                        <Typography level="body-xs" color="danger">
                          {errors.agencyPrice.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>

              <Grid xs={4} sm={4} md={6}>
                <Controller
                  name="contactEmail"
                  control={control}
                  render={({ field }) => (
                    <FormControl error={!!errors.contactEmail} sx={{ width: '100%' }}>
                      <FormLabel>Contact Email</FormLabel>
                      <Input {...field} type="email" placeholder="Enter contact email" />
                      {errors.contactEmail && (
                        <Typography level="body-xs" color="danger">
                          {errors.contactEmail.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>

              <Grid xs={4} sm={4} md={6}>
                <Controller
                  name="contactPhone"
                  control={control}
                  render={({ field }) => (
                    <FormControl error={!!errors.contactPhone} sx={{ width: '100%' }}>
                      <FormLabel>Contact Phone</FormLabel>
                      <Input {...field} type="tel" placeholder="Enter contact phone" />
                      {errors.contactPhone && (
                        <Typography level="body-xs" color="danger">
                          {errors.contactPhone.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>

              <Grid xs={4} sm={4} md={6}>
                <Controller
                  name="images"
                  control={control}
                  render={({ field }) => (
                    <Box>
                      <Button
                        component="label"
                        startDecorator={<PhotoCamera />}
                        fullWidth
                        variant="outlined"
                      >
                        Upload Images
                        <input
                          hidden
                          accept="image/*"
                          multiple
                          type="file"
                          onChange={(e) => field.onChange(e.target.files)}
                        />
                      </Button>
                      {field.value && (
                        <Typography level="body-sm" mt={1}>
                          {(field.value as FileList).length} file(s) selected
                        </Typography>
                      )}
                    </Box>
                  )}
                />
              </Grid>

              <Grid xs={4} sm={4} md={6}>
                <Controller
                  name="video"
                  control={control}
                  render={({ field }) => (
                    <Box>
                      <Button
                        component="label"
                        startDecorator={<UploadIcon />}
                        fullWidth
                        variant="outlined"
                      >
                        Upload Video
                        <input
                          hidden
                          accept="video/*"
                          type="file"
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                        />
                      </Button>
                      {field.value && (
                        <Typography level="body-sm" mt={1}>
                          {(field.value as File).name}
                        </Typography>
                      )}
                    </Box>
                  )}
                />
              </Grid>

              <Grid xs={12} sm={8} md={12}>
                <Button
                  type="submit"
                  fullWidth
                  loading={isSubmitting}
                  loadingPosition="start"
                  variant="solid"
                  sx={{ mt: 2 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Listing'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default ListingPage;

