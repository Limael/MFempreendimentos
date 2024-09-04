import * as React from 'react';
import { Box, Tabs, Tab, Divider, Typography, Stack, Button } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { projectsCompleted, projectsInProgress, responsive } from './helpers/data';
import CustomLeftArrow from './components/CustomLeftArrow';
import { Project } from '../../types/Projects';
import { useState } from 'react';
import CustomRightArrow from './components/CustomRightArrow ';
import locationIcon from '../../assets/images/locationIcon.svg'
import bedIcon from '../../assets/images/bedIcon.svg'
import bathIcon from '../../assets/images/bathIcon.svg'
import coinIcon from '../../assets/images/coinIcon.svg'
import './styles.css'
export default function HouseProjects() {
    const [value, setValue] = useState(0);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(projectsInProgress[0]);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setSelectedProjectIndex(0);
    };

    const handleSelectProject = (index: number, projects: Project[]) => {
        setSelectedProject(projects[index]);
        setSelectedProjectIndex(index);
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
                <Tab label="Em andamento" />
                <Tab label="Finalizadas" />
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
                            <Stack
                                alignItems={'flex-start'}
                            >
                                <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left', mt: '2rem', fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
                                    {selectedProject?.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ textAlign: 'left', mt: '1rem', fontSize: { xs: '0.875rem', md: '1rem' } }}
                                >
                                    {selectedProject?.description}
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
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 32,
                                            py: 2
                                        }}
                                    >
                                        <img src={locationIcon} alt="Location" />
                                    </Box>
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        sx={{ background: 'white', }}
                                    />

                                    <Box
                                        sx={{
                                            color: 'white',
                                            fontFamily: 'Inter',
                                            fontSize: '14px',
                                            fontWeight: 300,
                                            textTransform: 'none',
                                            px: 1,
                                            width: '100%'
                                        }}
                                    >
                                        {selectedProject?.location}
                                    </Box>
                                </Button>

                                <Box
                                    display={'flex'}
                                    justifyContent={'space-around'}
                                    alignItems={'center'}
                                    sx={{ mt: 2 }}
                                    width={"100%"}
                                >
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                    >
                                        <Box
                                            component={'img'}
                                            src={bedIcon}
                                        />
                                        <Typography variant="subtitle1" sx={{ marginLeft: '0.5rem' }}>
                                            {selectedProject?.numberOfRooms}
                                        </Typography>
                                    </Box>
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                    >
                                        <Box
                                            component={'img'}
                                            src={bathIcon}
                                        />
                                        <Typography variant="subtitle1" sx={{ marginLeft: '0.5rem' }}>
                                            {selectedProject?.numberOfBathrooms}
                                        </Typography>
                                    </Box>
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                    >
                                        <Box
                                            component={'img'}
                                            src={coinIcon}
                                        />
                                        <Typography variant="subtitle1" sx={{ marginLeft: '0.5rem' }}>
                                            {selectedProject?.value}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{ width: { xs: '90%', md: '50%' }, mb: 4 }}>
                            <Box
                                component={'img'}
                                src={selectedProject?.image}
                                alt={selectedProject?.title}
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
                                infinite={false}
                                autoPlay={false}
                                containerClass="carousel-container"
                                itemClass="carousel-item"
                            >
                                {projectsInProgress.map((project, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                            cursor: 'pointer',
                                            mx: 4,
                                        }}
                                        onClick={() => handleSelectProject(index, projectsInProgress)}
                                    >
                                        <Box
                                            component={'img'}
                                            src={project.image}
                                            alt={project.title}
                                            draggable={false}
                                            sx={{
                                                width: '96px',
                                                height: '96px',
                                                borderRadius: '8px',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                                border: selectedProjectIndex === index ? '2px solid white' : '2px solid transparent',
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
