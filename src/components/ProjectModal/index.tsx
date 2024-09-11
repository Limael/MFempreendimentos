import { Box, Typography, Dialog, DialogContent, Grid, Button, Divider } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Project } from '../../types/Projects';
import CustomLeftArrow from '../Projects/components/CustomLeftArrow';
import { useState, useEffect } from 'react';
import CustomRightArrow from '../Projects/components/CustomRightArrow ';

interface ProjectModalProps {
    open: boolean;
    project: Project | null;
    handleClose: () => void;
    projects: Project[];
    onSelectProject: (index: number) => void;
    selectedProjectIndex: number;
}

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
};

export default function ProjectModal({
    open,
    project,
    handleClose,

}: ProjectModalProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        if (project && project.images) {
            // Definir a primeira imagem como selecionada ao abrir o modal
            const firstImageKey = Object.keys(project.images)[0];
            setSelectedImage(project.images[firstImageKey].default);
        }
    }, [project]);

    // Função para definir a imagem selecionada no carrossel
    const handleImageSelect = (imageKey: string) => {
        if (project && project.images) {
            setSelectedImage(project.images[imageKey].default);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullScreen sx={{ p: 0 }}>
            <DialogContent sx={{ p: 0, display: 'flex', justifyContent: 'center', alignItems: 'stretch', backgroundColor: '#111', color: 'white' }}>
                {project && (
                    <Grid container spacing={2} sx={{ padding: '0px' }}>
                        {/* Informações sobre o projeto */}
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                background: 'rgba(37, 38, 38, 0.60)',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                pt={{ xs: 4, md: 0 }}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyItems: 'center',
                                }}
                            >
                                <Button
                                    sx={{
                                        background: 'rgba(37, 38, 38, 0.75)',
                                        backdropFilter: 'blur(16px)',
                                        border: '1px solid rgba(255, 255, 255, 0.50)',
                                        py: 0,
                                        gap: 1,
                                        borderRadius: '0px',
                                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                        mb: 4,
                                        ml: { xs: 4, md: 0 },
                                    }}
                                    onClick={handleClose}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, py: 2 }}>
                                        <ArrowBackIosNewIcon sx={{ color: '#fff' }} />
                                    </Box>
                                    <Divider orientation="vertical" flexItem sx={{ background: 'white' }} />
                                    <Box sx={{ color: 'white', fontFamily: 'Inter', fontSize: '14px', fontWeight: 300, textTransform: 'none', px: 1 }}>
                                        Voltar
                                    </Box>
                                </Button>

                                <Box
                                    sx={{
                                        width: { xs: '50%', md: '60%' },
                                        maxWidth: '364px',
                                        padding: '64px',
                                        background: '#373838',
                                        boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.32)',
                                        mb: 4,
                                        alignSelf: { xs: 'center' },
                                    }}
                                >
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                                        <strong>Local:</strong> {project.location}
                                    </Typography>
                                    {project.builtArea && (
                                        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                                            <strong>Área Construída:</strong> {project.builtArea}
                                        </Typography>
                                    )}
                                    <Typography variant="body1">
                                        <strong>Obra:</strong>
                                    </Typography>
                                    {project.description}
                                </Box>
                            </Box>
                        </Grid>

                        {/* Carrossel de imagens */}
                        <Grid item xs={12} md={6}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                pl: '0px!important',
                            }}>
                            <Box
                                component={'img'}
                                src={selectedImage || project.image} // Mostra a imagem selecionada ou a imagem principal
                                alt={project.title}
                                sx={{
                                    width: { xs: '100%', md: '100%' },
                                    height: '85%',
                                    maxHeight: '687px',
                                    minHeight: '85%',
                                }}
                                draggable={false}
                            />

                            <Box sx={{ width: '100%', mt: 2 }}>
                                <Carousel
                                    responsive={responsive}
                                    customLeftArrow={<CustomLeftArrow />}
                                    customRightArrow={<CustomRightArrow />}
                                    showDots={false}
                                    containerClass="carousel-container"
                                    itemClass="carousel-item"
                                    ssr
                                    keyBoardControl
                                >
                                    {project.images &&
                                        Object.keys(project.images).map((imageKey, index) => (
                                            <Box
                                                key={index}
                                                onClick={() => handleImageSelect(imageKey)} // Selecionar a imagem ao clicar
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    '&:hover': {
                                                        cursor: 'pointer',
                                                    },
                                                }}
                                            >
                                                <img
                                                    src={project.images[imageKey].default}
                                                    alt={project.title}
                                                    style={{
                                                        border: selectedImage === project.images[imageKey].default ? 'solid 2px white' : 'none',
                                                        width: '100%',
                                                        height: '96px', // Definir tamanho uniforme
                                                        maxWidth: '124px',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px',
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                </Carousel>
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </DialogContent>
        </Dialog>
    );
}
