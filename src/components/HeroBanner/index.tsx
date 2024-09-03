import { Box, Typography, Button, Divider } from '@mui/material';
import banner_background from '../../assets/images/banner-image.png';
import right_arrow from '../../assets/images/right-arrow.svg';
export default function HeroBanner() {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                backgroundImage: `url(${banner_background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '0 50px',
                color: 'white',

            }}
        >
            <Box sx={{ maxWidth: '500px' }}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    color={'#252626'}
                    fontWeight={700}
                    fontFamily={'Inter'}
                    sx={{
                        fontSize: {
                            xs: '2.25rem',
                            md: '4rem'
                        },
                        maxWidth: {
                            xs: '400px',
                            md: 'none'
                        },
                    }}
                >
                    PLANEJAMENTO, INOVAÇÃO E QUALIDADE
                </Typography>


                <Button
                    sx={{
                        background: 'rgba(37, 38, 38, 0.75)',
                        backdropFilter: 'blur(16px)',
                        py: 0,
                        gap: 1,
                        height: 52,
                        borderRadius: '0px',
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                    }}
                >

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
                        Conheça nossos trabalhos
                    </Box>
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ background: 'white', }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 32
                        }}
                    >
                        <img src={right_arrow} alt="Flecha apontando para direita" />
                    </Box>

                </Button>


            </Box>
        </Box >
    );
}
