import React, { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RoomIcon from '@mui/icons-material/Room';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material';
import { GoogleMap, InfoWindow, Marker, useLoadScript } from '@react-google-maps/api';

import distributorIcon from '@assets/images/layoutDefault/City.svg';

// === Types ===
interface Location {
  address: string
  mapsUrl: string
  name: string
  position: google.maps.LatLngLiteral
}

interface Region {
  center: google.maps.LatLngLiteral
  locations: Location[]
  name: string
}

declare global {
  interface Window {
    google: typeof google
  }
}

// === Constants ===
const MAP_WIDTH = '100%';
const MAP_HEIGHT = 690;
const MAP_ZOOM_DEFAULT = 8;
const MAP_ZOOM_REGION = 9;
const MAP_ZOOM_LOCATION = 13;
const MARKER_SIZE = 40;

const DEFAULT_CENTER: google.maps.LatLngLiteral = { lat: -6.2, lng: 106.8 };

// === Data distributor ===
const regions: Region[] = [
  {
    center: { lat: -6.2, lng: 106.8 },
    locations: [
      {
        address: 'Jl. Sudirman No.1, Jakarta Pusat',
        mapsUrl: 'https://maps.google.com/?q=-6.186,106.835',
        name: 'Jakarta Pusat',
        position: { lat: -6.186, lng: 106.835 }
      },
      {
        address: 'Jl. Yos Sudarso, Jakarta Utara',
        mapsUrl: 'https://maps.google.com/?q=-6.118,106.91',
        name: 'Jakarta Utara',
        position: { lat: -6.118, lng: 106.91 }
      },
      {
        address: 'Jl. Gajah Mada, Jakarta Barat',
        mapsUrl: 'https://maps.google.com/?q=-6.15,106.81',
        name: 'Jakarta Barat',
        position: { lat: -6.15, lng: 106.81 }
      },
      {
        address: 'Jl. TB Simatupang, Jakarta Selatan',
        mapsUrl: 'https://maps.google.com/?q=-6.3,106.82',
        name: 'Jakarta Selatan',
        position: { lat: -6.3, lng: 106.82 }
      },
      {
        address: 'l. Pemuda, Jakarta Timur',
        mapsUrl: 'https://maps.google.com/?q=-6.2,106.9',
        name: 'Jakarta Timur',
        position: { lat: -6.2, lng: 106.9 }
      },
      {
        address: 'Jl. Daan Mogot, Tangerang',
        mapsUrl: 'https://maps.google.com/?q=-6.178,106.63',
        name: 'Tangerang',
        position: { lat: -6.178, lng: 106.63 }
      },
      {
        address: 'Jl. BSD Raya, Tangerang Selatan',
        mapsUrl: 'https://maps.google.com/?q=-6.29,106.67',
        name: 'Tangerang Selatan',
        position: { lat: -6.29, lng: 106.67 }
      },
      {
        address: 'Jl. Veteran, Serang',
        mapsUrl: 'https://maps.google.com/?q=-6.12,106.15',
        name: 'Serang',
        position: { lat: -6.12, lng: 106.15 }
      },
      {
        address: 'l. Sultan Ageng Tirtayasa, Cilegon',
        mapsUrl: 'https://maps.google.com/?q=-6.016,106.05',
        name: 'Cilegon',
        position: { lat: -6.016, lng: 106.05 }
      }
    ],
    name: 'DKI Jakarta & Banten'
  },
  {
    center: { lat: -6.9, lng: 107.6 },
    locations: [
      {
        address: 'Jl. Ciumbuleuit No.107, Bandung',
        mapsUrl: 'https://maps.google.com/?q=-6.87,107.61',
        name: 'Bandung',
        position: { lat: -6.87, lng: 107.61 }
      },
      {
        address: 'Jl. Raya Pajajaran, Bogor',
        mapsUrl: 'https://maps.google.com/?q=-6.6,106.8',
        name: 'Bogor',
        position: { lat: -6.6, lng: 106.8 }
      }
    ],
    name: 'Jawa Barat'
  }
];

// === Styling ===
const containerStyle = {
  height: `${MAP_HEIGHT}px`,
  width: `${MAP_WIDTH}px`
};

const FrameFour: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? ''
  });

  const [expanded, setExpanded] = useState<string | false>(false);
  const [selected, setSelected] = useState<Location | null>(null);
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);

  const handleChange = (region: string, center: google.maps.LatLngLiteral) => {
    setExpanded(expanded === region ? false : region);

    if (mapRef) {
      mapRef.panTo(center);
      mapRef.setZoom(MAP_ZOOM_REGION);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        height: { md: `${MAP_HEIGHT}px`, xs: 'auto' },
        justifyContent: 'space-between',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      {/* === MAP === */}
      <Box sx={{ flex: '1', height: { md: `${MAP_HEIGHT}px`, xs: '300px' } }}>
        {isLoaded
          ? (
          <GoogleMap
            center={DEFAULT_CENTER}
            mapContainerStyle={containerStyle}
            zoom={MAP_ZOOM_DEFAULT}
            onLoad={(map: google.maps.Map) => setMapRef(map)}
          >
            {regions.flatMap((r) => r.locations.map((loc) => (
                <Marker
                  icon={{
                    scaledSize: new window.google.maps.Size(
                      MARKER_SIZE,
                      MARKER_SIZE
                    ),
                    url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                  }}
                  key={loc.name}
                  position={loc.position}
                  onClick={() => setSelected(loc)} />
            )))}

            {selected
              ? (
              <InfoWindow
                position={selected.position}
                onCloseClick={() => setSelected(null)}
              >
                <Box
                  sx={{
                    alignItems: 'flex-start',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    height: '131px',
                    width: '293px'
                  }}
                >
                <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                  <Box
                    alt="Distributor Icon"
                    component="img"
                    src={distributorIcon}
                    sx={{ height: 24, width: 24 }} />
                  <Typography
                    sx={{
                      color: '#1C252E',
                      fontFamily: 'Open Sauce One',
                      fontSize: { md: '20px', xs: '14px' },
                      fontWeight: 600,
                      lineHeight: '25px',
                      variant: 'subtitle1'
                    }}
                  >
                    Distributor {selected.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Alamat:</Typography>
                  <Typography variant="body2">{selected.address}</Typography>
                </Box>
                  <Button
                    href={selected.mapsUrl}
                    size="small"
                    sx={{ bgcolor: '#2044AD', borderRadius: 1 }}
                    target="_blank"
                    variant="contained"
                  >
                    Lihat di Maps
                  </Button>
                </Box>
              </InfoWindow>
              )
              : null}
          </GoogleMap>
          )
          : null}
      </Box>

      {/* === SIDEBAR === */}
      <Box
        sx={{
          bgcolor: '#2044AD',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          height: `${MAP_HEIGHT}px`,
          p: '42px 36px',
          width: { md: '427px', xs: '100%' }
        }}
      >
        <Typography sx={{ font: 'Open Sauce One', fontSize: '32px', fontWeight: 700 }}>
          Distributor Center
        </Typography>

        {regions.map((region) => (
          <Accordion
            expanded={expanded === region.name}
            key={region.name}
            sx={{
              '&:before': { display: 'none' },
              bgcolor: '#fff',
              borderRadius: '8px',
              boxShadow: 'none'
            }}
            onChange={() => handleChange(region.name, region.center)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <RoomIcon color="error" sx={{ mr: 1 }} />
              <Typography
                sx={{
                  color: '#000',
                  fontSize: '18px',
                  fontWeight: 700
                }}
              >
                {region.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {region.locations.map((loc) => (
                  <Typography
                    key={loc.name}
                    sx={{
                      '&:hover': { textDecoration: 'underline' },
                      color: '#000',
                      cursor: 'pointer',
                      fontSize: '16px'
                    }}
                    onClick={() => {
                      if (mapRef) {
                        mapRef.panTo(loc.position);
                        mapRef.setZoom(MAP_ZOOM_LOCATION);
                      }

                      setSelected(loc);
                    }}
                  >
                    {loc.name}
                  </Typography>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

FrameFour.displayName = 'FrameFour';
export default FrameFour;
