import * as React from 'react';
import { Box, Tabs, Tab, Divider, Typography, Slide, Grid } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { projectsCompleted, projectsInProgress, responsive } from './helpers/data';
import CustomLeftArrow from './components/CustomLeftArrow';
import ProjectModal from '../ProjectModal';
import { Project } from '../../types/Projects';
import { useState } from 'react';
import CustomRightArrow from './components/CustomRightArrow ';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Projects() {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setSelectedProjectIndex(0);
    };

    const handleClickOpen = (index: number, projects: Project[]) => {
        setSelectedProject(projects[index]);
        setSelectedProjectIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    const handleSelectProject = (index: number, projects: Project[]) => {
        setSelectedProject(projects[index]);
        setSelectedProjectIndex(index);
    };

    return (
        <Box sx={{ width: '100%', background: 'rgba(37, 38, 38, 1)', color: 'white', paddingY: '3rem' }}>
            <Typography variant="h4" align="center" mb={2} fontWeight={600}>
                Obras
            </Typography>
            <Typography variant="body2" align="center" fontWeight={300} mb={4}>
                Conheça nosso portifólio de obras.
            </Typography>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="project tabs"
                sx={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.50)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.50)',
                    backdropFilter: 'blur(16px)',
                    pl: 9,
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
                <Tab label="Todas" />
            </Tabs>

            {value === 0 && (
                <>
                    <Box ml={6}>
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
                                        alignItems: 'flex-start',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            textAlign: 'start',
                                            padding: '10px',
                                            borderRadius: '8px',
                                            margin: '10px',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                        onMouseEnter={() => setHoverIndex(index)}
                                        onMouseLeave={() => setHoverIndex(null)}
                                        onClick={() => handleClickOpen(index, projectsInProgress)}
                                    >
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: '100%',
                                                height: {
                                                    xs: '400px',
                                                    md: '687px',
                                                },
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Box
                                                component={'img'}
                                                src={project.image}
                                                alt={project.title}
                                                draggable={false}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '8px',
                                                    objectFit: 'cover',
                                                    objectPosition: 'center',
                                                }}
                                            />
                                            {/* Slide overlay */}
                                            <Slide
                                                direction="up"
                                                in={hoverIndex === index}
                                                timeout={500}
                                                mountOnEnter
                                                unmountOnExit
                                            >
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        color: 'white',
                                                        flexDirection: 'column',
                                                    }}
                                                >
                                                    <AddCircleOutlineIcon sx={{ fontSize: 40, mb: 1 }} />
                                                    <Typography variant="body1">Ver Mais</Typography>
                                                </Box>
                                            </Slide>
                                        </Box>
                                        <Typography variant="subtitle1" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                                            {project.title}
                                        </Typography>
                                    </Box>
                                    {index < projectsInProgress.length - 1 && (
                                        <Divider sx={{ mt: 2.4, background: '#A7A7A7' }} orientation="vertical" flexItem />
                                    )}
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                    <ProjectModal
                        open={open}
                        project={selectedProject}
                        handleClose={handleClose}
                        projects={projectsInProgress}
                        onSelectProject={(index) => handleSelectProject(index, projectsInProgress)}
                        selectedProjectIndex={selectedProjectIndex}
                    />
                </>
            )}

            {value === 1 && (
                <>
                    <Box ml={6}>
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
                            {projectsCompleted.map((project, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            textAlign: 'start',
                                            padding: '10px',
                                            borderRadius: '8px',
                                            margin: '10px',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                        onMouseEnter={() => setHoverIndex(index)}
                                        onMouseLeave={() => setHoverIndex(null)}
                                        onClick={() => handleClickOpen(index, projectsCompleted)}
                                    >
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: '100%',
                                                height: {
                                                    xs: '400px',
                                                    md: '687px',
                                                },
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Box
                                                component={'img'}
                                                src={project.image}
                                                alt={project.title}
                                                draggable={false}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '8px',
                                                    objectFit: 'cover',
                                                    objectPosition: 'center',
                                                }}
                                            />
                                            {/* Slide overlay */}
                                            <Slide
                                                direction="up"
                                                in={hoverIndex === index}
                                                timeout={500}
                                                mountOnEnter
                                                unmountOnExit
                                            >
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        color: 'white',
                                                        flexDirection: 'column',
                                                    }}
                                                >
                                                    <AddCircleOutlineIcon sx={{ fontSize: 40, mb: 1 }} />
                                                    <Typography variant="body1">Ver Mais</Typography>
                                                </Box>
                                            </Slide>
                                        </Box>
                                        <Typography variant="subtitle1" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                                            {project.title}
                                        </Typography>
                                    </Box>
                                    {index < projectsCompleted.length - 1 && (
                                        <Divider sx={{ mt: 2.4, background: '#A7A7A7' }} orientation="vertical" flexItem />
                                    )}
                                </Box>
                            ))}
                        </Carousel>
                    </Box>

                    <ProjectModal
                        open={open}
                        project={selectedProject}
                        handleClose={handleClose}
                        projects={projectsCompleted}
                        onSelectProject={(index) => handleSelectProject(index, projectsCompleted)}
                        selectedProjectIndex={selectedProjectIndex}
                    />
                </>
            )}

            {value === 2 && (
                <Grid container spacing={2} sx={{ padding: '0 10%' }}>
                    {[...projectsInProgress, ...projectsCompleted].map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    textAlign: 'start',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                                onClick={() => handleClickOpen(index, [...projectsInProgress, ...projectsCompleted])}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        height: {
                                            xs: '300px',
                                            md: '400px',
                                        },
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Box
                                        component={'img'}
                                        src={project.image}
                                        alt={project.title}
                                        draggable={false}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '8px',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                    />
                                    {/* Slide overlay */}
                                    <Slide
                                        direction="up"
                                        in={hoverIndex === index}
                                        timeout={500}
                                        mountOnEnter
                                        unmountOnExit
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                color: 'white',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <AddCircleOutlineIcon sx={{ fontSize: 40, mb: 1 }} />
                                            <Typography variant="body1">Ver Mais</Typography>
                                        </Box>
                                    </Slide>
                                </Box>
                                <Typography variant="subtitle1" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                                    {project.title}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}

            <ProjectModal
                open={open}
                project={selectedProject}
                handleClose={handleClose}
                projects={[...projectsInProgress, ...projectsCompleted]}
                onSelectProject={(index) => handleSelectProject(index, [...projectsInProgress, ...projectsCompleted])}
                selectedProjectIndex={selectedProjectIndex}
            />

        </Box>
    );
}
