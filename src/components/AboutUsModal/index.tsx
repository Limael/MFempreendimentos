import { Modal, Box, Grid, Button, Divider } from '@mui/material';
import Carrousel from './Carrousel';
import styles from './styles.module.css';
import logo from '../../assets/images/logo.svg';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type AboutUsModalProps = {
    open: boolean;
    handleClose: () => void;
};

const AboutUsModal = ({ open, handleClose }: AboutUsModalProps) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="about-us-modal-title"
            aria-describedby="about-us-modal-description"
            closeAfterTransition
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '95%', sm: '90%', md: '80%' },
                    maxWidth: '1000px',
                    bgcolor: 'rgba(37, 38, 38, 0.80)',
                    boxShadow: 24,
                    outline: 'none',
                    backdropFilter: 'blur(16px)',
                    p: { xs: 1, sm: 2 },
                    pb: 0,
                    maxHeight: '90vh', // Limita a altura máxima do modal
                    overflowY: 'auto', // Permite o scroll se o conteúdo for maior que o modal
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
                        mb: { xs: 2, md: 4 },
                        ml: { xs: 2, md: 0 },
                        position: 'absolute',
                        top: 16, right: 16,
                        zIndex: 1999999,
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

                <Grid container spacing={2}>
                    {/* Carrousel - Esquerda */}
                    <Grid item xs={12} md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: { xs: '200px', md: '300px' },
                            bgcolor: 'rgba(37, 38, 38)',
                        }}
                    >
                        <Carrousel />
                    </Grid>

                    {/* Logo - Direita */}
                    <Grid item xs={12} md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'rgba(37, 38, 38, 0.10)',
                            padding: { xs: 2, md: 4 },
                        }}
                    >
                        <img src={logo} className={styles.logo} alt="Logo" style={{ maxWidth: '80%', width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default AboutUsModal;
