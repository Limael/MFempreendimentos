import { useState, useEffect } from 'react';
import { Box, Typography, Slide } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { housesProjects, responsive } from './helpers/data';
import CustomLeftArrow from './components/CustomLeftArrow';
import './styles.css';
import HouseModal from './components/HouseModal';
import { HouseProject } from '../../types/HouseProjects';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate, useLocation, useParams } from 'react-router-dom'; // Importar hooks para navegação e parâmetros
import CustomRightArrow from './components/CustomRightArrow ';

export default function HouseProjects() {
    const [open, setOpen] = useState(false);
    const [selectedHouse, setSelectedHouse] = useState<HouseProject | null>(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const navigate = useNavigate(); // Hook para navegar entre rotas
    const location = useLocation(); // Hook para obter a localização atual
    const { title } = useParams<{ title: string }>(); // Obter o parâmetro da URL

    // Verificar se o usuário veio de uma rota interna ou externa
    const [isInternalNavigation, setIsInternalNavigation] = useState(true);

    const handleClickOpen = (index: number, projects: HouseProject[]) => {
        const project = projects[index];
        setSelectedHouse(project);
        setOpen(true);
        // Atualizar a URL sem recarregar a página
        navigate(`/projeto/${project.title.replace(/\s+/g, '-').toLowerCase()}`, { state: { background: location } });
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedHouse(null);
        // Se for uma navegação interna, voltar à página anterior
        if (isInternalNavigation) {
            navigate(-1);
        } else {
            // Apenas fechar o modal se a navegação for externa
            navigate('/');
        }
    };

    // useEffect para abrir o modal automaticamente se houver um título na URL
    useEffect(() => {
        if (title) {
            const project = housesProjects.find(
                (p) => p.title.replace(/\s+/g, '-').toLowerCase() === title.toLowerCase()
            );
            if (project) {
                setSelectedHouse(project);
                setOpen(true);
            }
        }

        // Verificar se o usuário veio de uma página interna ou externa
        if (!location.state || !location.state.background) {
            setIsInternalNavigation(false);
        }
    }, [title, location]);

    return (
        <>
            <Box sx={{ width: '100%', background: 'rgba(37, 38, 38, 1)', color: 'white', paddingY: '3rem' }}>
                <Typography variant="h4" align="center" mb={2}>
                    Incorporação
                </Typography>
                <Typography variant="body2" align="center" fontWeight={300} mb={4}>
                    Conheça nossos empreendimentos.
                </Typography>
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
                        {housesProjects.map((project, index) => (
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
                                    onClick={() => handleClickOpen(index, housesProjects)}
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
                                            src={project.images[Object.keys(project.images)[0]].default}
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
                                        {/* Slide Overlay on the image */}
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
                                                <Typography variant="h6" mb={1}>{project.title}</Typography>
                                                <AddCircleOutlineIcon fontSize={'large'} sx={{ mb: 1 }} />
                                                <Typography variant="body1">VER MAIS</Typography>
                                            </Box>
                                        </Slide>
                                    </Box>
                                    <Typography variant="subtitle1" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                                        {project.title}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Carousel>
                </Box>
                <HouseModal open={open} handleClose={handleClose} project={selectedHouse} />
            </Box>
        </>
    );
}
