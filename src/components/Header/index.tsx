import { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, Container, Drawer, List, ListItem, ListItemText, Divider, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import facebook from '../../assets/images/facebook_icon.svg';
import instagram from '../../assets/images/instagram_icon.svg';
import whatsapp from '../../assets/images/whatsapp_icon.svg';
import logo from '../../assets/images/logo.svg';

import { RefObject } from 'react';
import AboutUsModal from '../AboutUsModal';

type HeaderProps = {
    projectsRef: RefObject<HTMLElement>;
    houseProjectsRef: RefObject<HTMLElement>;
}

export default function Header({ projectsRef, houseProjectsRef }: HeaderProps) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleDrawer = (open: boolean | ((prevState: boolean) => boolean)) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };
    const openAboutUsModal = () => {
        setModalOpen(true);
    };

    const closeAboutUsModal = () => {
        setModalOpen(false);
    };

    const scrollToRef = (ref: RefObject<HTMLElement>) => {
        if (ref.current) {
            const offsetTop = ref.current.offsetTop;
            const offset = 100;

            window.scrollTo({
                top: offsetTop - offset,
                behavior: 'smooth',
            });
        }
        setDrawerOpen(false);
    };

    const drawerList = (
        <Box
            sx={{
                width: 250,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                bgcolor: '#252626',
                color: 'white',
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', p: 2 }}>
                <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white', alignSelf: 'end' }}>
                    <CloseIcon />
                </IconButton>

                <List sx={{ mt: 2 }}>
                    <ListItem button onClick={openAboutUsModal}>
                        <ListItemText primary="Sobre nós" />
                    </ListItem>
                    <ListItem button onClick={() => scrollToRef(houseProjectsRef)}>
                        <ListItemText primary="Incorporação" />
                    </ListItem>
                    <ListItem button onClick={() => scrollToRef(projectsRef)}>
                        <ListItemText primary="Obras" />
                    </ListItem>

                </List>
            </Box>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            <Box display="flex" justifyContent="center" mb={2}>
                <IconButton sx={{ color: 'white' }} href='https://www.facebook.com/mf.incorporadora/' target='_blank'
                >
                    <img src={facebook} alt="Facebook" style={{ width: 24, height: 24 }} />
                </IconButton>
                <IconButton sx={{ color: 'white' }} href='https://www.instagram.com/mf.empreendimentos/' target='_blank' >
                    <img src={instagram} alt="Instagram" style={{ width: 24, height: 24 }} />
                </IconButton>
                <IconButton href='https://api.whatsapp.com/send?phone=5545991291013' target="_blank" sx={{ color: 'white' }}>
                    <img src={whatsapp} alt="Whatsapp" style={{ width: 24, height: 24 }} />
                </IconButton>
            </Box>
        </Box>
    );

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    background: 'rgba(37, 38, 38, 0.32)',
                    height: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    backdropFilter: 'blur(16px)',
                    position: 'fixed',
                    zIndex: 1
                }}>
                <Container>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Link href="/" underline="none" color={'inherit'}>
                            <Box display="flex" alignItems="center">
                                <img src={logo} alt="Logo" style={{ marginRight: 16 }} />
                                <Typography variant="h6" sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '.85rem' }}>
                                    MF EMPREENDIMENTOS
                                </Typography>
                            </Box>
                        </Link>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                            <Button onClick={openAboutUsModal} sx={{ color: 'white', fontFamily: 'Inter', fontSize: '.85rem', fontWeight: 400, textTransform: 'none' }}>
                                SOBRE NÓS
                            </Button>
                            <Button onClick={() => scrollToRef(houseProjectsRef)} sx={{ color: 'white', fontFamily: 'Inter', fontSize: '.85rem', fontWeight: 400, textTransform: 'none' }}>
                                INCORPORAÇÃO
                            </Button>
                            <Button onClick={() => scrollToRef(projectsRef)} sx={{ color: 'white', fontFamily: 'Inter', fontSize: '.85rem', fontWeight: 400, textTransform: 'none' }}>
                                OBRAS
                            </Button>
                        </Box>

                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    backgroundColor: '#252626',
                                    color: 'white',
                                    width: 250,
                                }
                            }}
                        >
                            {drawerList}
                        </Drawer>

                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 2
                        }}>
                            <IconButton
                                href='https://www.facebook.com/mf.incorporadora/' target='_blank'
                                sx={{
                                    color: 'white',
                                    border: '1px #fff solid',
                                    borderRadius: '8px',
                                    padding: '0',
                                    width: '52px',
                                    height: '52px'
                                }}>
                                <img src={facebook} alt="Facebook" />
                            </IconButton>
                            <IconButton
                                href='https://www.instagram.com/mf.empreendimentos/' target='_blank'
                                sx={{
                                    color: 'white',
                                    border: '1px #fff solid',
                                    borderRadius: '8px',
                                    padding: '0',
                                    width: '52px',
                                    height: '52px'
                                }}>
                                <img src={instagram} alt="Instagram" />
                            </IconButton>

                            <Button
                                sx={{
                                    background: 'rgba(37, 38, 38, 0.75)',
                                    backdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255, 255, 255, 0.50)',
                                    py: 0,
                                    gap: 1,
                                    borderRadius: '0px',
                                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                                }}
                                href='https://api.whatsapp.com/send?phone=5545991291013'
                                target="_blank"

                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 32
                                    }}
                                >
                                    <img src={whatsapp} alt="Whatsapp" />
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
                                        px: 1
                                    }}
                                >
                                    Entre em contato
                                </Box>
                            </Button>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >
            <AboutUsModal open={modalOpen} handleClose={closeAboutUsModal} />

        </>

    );
}
