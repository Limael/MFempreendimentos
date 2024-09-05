import * as React from 'react';
import { Box, Tabs, Tab, Divider, Typography, Stack, Button } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { house1, house2, responsive } from './helpers/data';
import CustomLeftArrow from './components/CustomLeftArrow';
import locationIcon from '../../assets/images/locationIcon.svg';
import bedIcon from '../../assets/images/bedIcon.svg';
import bathIcon from '../../assets/images/bathIcon.svg';
import coinIcon from '../../assets/images/coinIcon.svg';
import './styles.css';
import { useState } from 'react';
import CustomRightArrow from './components/CustomRightArrow ';

export default function HouseProjects() {
    const [value, setValue] = useState(0);
    const [selectedImageHouse1, setSelectedImageHouse1] = useState<string>(house1.images[Object.keys(house1.images)[0]].default);
    const [selectedImageHouse2, setSelectedImageHouse2] = useState<string>(house2.images[Object.keys(house2.images)[0]].default);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleSelectImage = (imageKey: string, house: 'house1' | 'house2') => {
        if (house === 'house1') {
            setSelectedImageHouse1(house1.images[imageKey].default);
        } else {
            setSelectedImageHouse2(house2.images[imageKey].default);
        }
    };

    return (
        <Box sx={{ width: '100%', background: 'rgba(37, 38, 38, 1)', color: 'white', paddingY: '3rem' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="project tabs"
                sx={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.50)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.50)',
                    backdropFilter: 'blur(16px)',
                    pl: { xs: 2, sm: 9 },
                    pt: 1,
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'rgba(255, 255, 255, 0.50)',
                    },
                    '& .MuiTab-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-selected': {
                            color: 'white',
                        },
                    },
                }}
            >
                <Tab label="Casa 1" />
                <Tab label="Casa 2" />
            </Tabs>

            {value === 0 && (
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                background: 'rgb(54 55 55 / 60%)',
                                backdropFilter: 'blur(20px)',
                                width: { xs: '90%', md: '40%' },
                                mb: 2,
                                mr: { md: -8 },
                                ml: { md: 8 },
                                position: 'relative',
                                p: { xs: 2, md: 16 },
                            }}
                        >
                            <Stack alignItems={'flex-start'}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left', mt: '2rem', fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
                                    {house1.title}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ textAlign: 'left', mt: '1rem', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                    {house1.description}
                                </Typography>

                                <Button
                                    sx={{
                                        background: 'rgba(37, 38, 38, 0.75)',
                                        backdropFilter: 'blur(16px)',
                                        border: '1px solid rgba(255, 255, 255, 0.50)',
                                        py: 0,
                                        gap: 1,
                                        borderRadius: '0px',
                                        width: '100%',
                                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                        mt: 2,
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, py: 2 }}>
                                        <img src={locationIcon} alt="Location" />
                                    </Box>
                                    <Divider orientation="vertical" flexItem sx={{ background: 'white' }} />
                                    <Box
                                        sx={{
                                            color: 'white',
                                            fontFamily: 'Inter',
                                            fontSize: '14px',
                                            fontWeight: 300,
                                            textTransform: 'none',
                                            px: 1,
                                            width: '100%',
                                        }}
                                    >
                                        {house1.location}
                                    </Box>
                                </Button>

                                <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} sx={{ mt: 2 }} width={'100%'}>
                                    <Box display={'flex'} alignItems={'center'}>
                                        <Box component={'img'} src={bedIcon} />
                                        <Typography variant="subtitle1" sx={{ marginLeft: '0.5rem' }}>
                                            {house1.numberOfRooms}
                                        </Typography>
                                    </Box>
                                    <Box display={'flex'} alignItems={'center'}>
                                        <Box component={'img'} src={bathIcon} />
                                        <Typography variant="subtitle1" sx={{ marginLeft: '0.5rem' }}>
                                            {house1.numberOfBathrooms}
                                        </Typography>
                                    </Box>
                                    <Box display={'flex'} alignItems={'center'}>
                                        <Box component={'img'} src={coinIcon} />
                                        <Typography variant="subtitle1" sx={{ marginLeft: '0.5rem' }}>
                                            {house1.value}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>

                        <Box
                            sx={{
                                width: { xs: '90%', md: '50%' },
                                mb: 4,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                component={'img'}
                                src={selectedImageHouse1}
                                alt={house1.title}
                                sx={{
                                    width: '100%',
                                    height: { xs: '300px', md: '500px' },
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                            />

                            <Carousel
                                responsive={responsive}
                                customRightArrow={<CustomRightArrow />}
                                customLeftArrow={<CustomLeftArrow />}
                                ssr={true}
                                infinite={true}
                                autoPlay={false}
                                containerClass="carousel-container-houses"
                                itemClass="carousel-item"
                            >
                                {Object.keys(house1.images).map((imageKey) => (
                                    <Box
                                        key={imageKey}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                            cursor: 'pointer',
                                            mx: 4,
                                            mt: { xs: 2, md: 0 },
                                        }}
                                        onClick={() => handleSelectImage(imageKey, 'house1')}
                                    >
                                        <Box
                                            component={'img'}
                                            src={house1.images[imageKey].default}
                                            alt={house1.title}
                                            draggable={false}
                                            sx={{
                                                width: '96px',
                                                height: '96px',
                                                borderRadius: '8px',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                                border: selectedImageHouse1 === house1.images[imageKey].default ? '2px solid white' : '2px solid transparent',
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Carousel>
                        </Box>
                    </Box>
                </>
            )}

            {value === 1 && (
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                background: 'rgb(54 55 55 / 60%)',
                                backdropFilter: 'blur(20px)',
                                width: { xs: '90%', md: '40%' },
                                mb: 2,
                                mr: { md: -8 },
                                ml: { md: 8 },
                                position: 'relative',
                                p: { xs: 2, md: 16 },
                            }}
                        >
                            <Stack alignItems={'flex-start'}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left', mt: '2rem', fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
                                    {house2.title}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ textAlign: 'left', mt: '1rem', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                    {house2.description}
                                </Typography>

                                <Button
                                    sx={{
                                        background: 'rgba(37, 38, 38, 0.75)',
                                        backdropFilter: 'blur(16px)',
                                        border: '1px solid rgba(255, 255, 255, 0.50)',
                                        py: 0,
                                        gap: 1,
                                        borderRadius: '0px',
                                        width: '100%',
                                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                        mt: 2,
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, py: 2 }}>
                                        <img src={locationIcon} alt="Location" />
                                    </Box>
                                    <Divider orientation="vertical" flexItem sx={{ background: 'white' }} />
                                    <Box
                                        sx={{
                                            color: 'white',
                                            fontFamily: 'Inter',
                                            fontSize: '14px',
                                            fontWeight: 300,
                                            textTransform: 'none',
                                            px: 1,
                                            width: '100%',
                                        }}
                                    >
                                        {house2.location}
                                    </Box>
                                </Button>

                                <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} sx={{ mt: 2 }} width={'100%'}>
                                    <Box display={'flex'} alignItems={'center'}>
                                        <Box component={'img'} src={bedIcon} />
                                        <Typography variant="subtitle1" sx={{ marginLeft: '0.5rem' }}>
                                            {house2.numberOfRooms}
                                        </Typography>
                                    </Box>
                                    <Box display={'flex'} alignItems={'center'}>
                                        <Box component={'img'} src={bathIcon} />
                                        <Typography variant="subtitle1" sx={{ marginLeft: '0.5rem' }}>
                                            {house2.numberOfBathrooms}
                                        </Typography>
                                    </Box>
                                    <Box display={'flex'} alignItems={'center'}>
                                        <Box component={'img'} src={coinIcon} />
                                        <Typography variant="subtitle1" sx={{ marginLeft: '0.5rem' }}>
                                            {house2.value}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>

                        <Box
                            sx={{
                                width: { xs: '90%', md: '50%' },
                                mb: 4,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                component={'img'}
                                src={selectedImageHouse2}
                                alt={house2.title}
                                sx={{
                                    width: '100%',
                                    height: { xs: '300px', md: '500px' },
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                            />

                            <Carousel
                                responsive={responsive}
                                customRightArrow={<CustomRightArrow />}
                                customLeftArrow={<CustomLeftArrow />}
                                ssr={true}
                                infinite={true}
                                autoPlay={false}
                                containerClass="carousel-container-houses"
                                itemClass="carousel-item"
                            >
                                {Object.keys(house2.images).map((imageKey) => (
                                    <Box
                                        key={imageKey}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                            cursor: 'pointer',
                                            mx: 4,
                                        }}
                                        onClick={() => handleSelectImage(imageKey, 'house2')}
                                    >
                                        <Box
                                            component={'img'}
                                            src={house2.images[imageKey].default}
                                            alt={house2.title}
                                            draggable={false}
                                            sx={{
                                                width: '96px',
                                                height: '96px',
                                                borderRadius: '8px',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                                border: selectedImageHouse2 === house2.images[imageKey].default ? '2px solid white' : '2px solid transparent',
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Carousel>
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
}
