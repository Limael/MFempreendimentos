import { Box, Grid, Typography } from '@mui/material';

import target_icon from '../../assets/images/target_icon.svg'
import star_icon from '../../assets/images/star_icon.svg'
import eye_icon from '../../assets/images/eye_icon.svg'

const data = [
    {
        icon: star_icon,
        title: 'VALORES',
        description: 'Agir com ética, respeito e responsabilidade com colaboradores, parceiros e clientes, bem como com a sociedade e o meio ambiente.',
    },
    {
        icon: target_icon,
        title: 'MISSÃO',
        description: 'Entregar a melhor transformação de projeto em realidade para o bem estar das pessoas.',
    },
    {
        icon: eye_icon,
        title: 'VISÃO',
        description: 'Ser reconhecida como melhor opção de investimento em negócios imobiliários até 2025, trazendo retorno financeiro aos sócios e acionistas.',
    },
];

export default function ValuesMissionVision() {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#222', padding: '20px', py: 0 }}>
            <Grid container spacing={2}

            >
                {data.map((item, index) => (
                    <Grid item xs={12} md={4} key={index}
                        sx={{
                            borderLeft: {
                                xs: 'none',
                                md: index === 1 ? '1px solid rgba(255, 255, 255, 0.50)' : 'none'
                            },
                            borderRight: {
                                xs: 'none',
                                md: index === 1 ? '1px solid rgba(255, 255, 255, 0.50)' : 'none'
                            },

                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: 'white',
                                padding: '40px 20px',
                                height: '100%',
                                alignItems: {
                                    xs: 'center',
                                    md: 'flex-start',
                                },
                                textAlign: {
                                    xs: 'center',
                                    md: 'left',
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    background: '#373838',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 'min-content',
                                    padding: '16px',
                                    marginBottom: '20px',
                                }}
                            >
                                <img src={item.icon} alt="icone" style={{
                                    width: 24,
                                    height: 24,
                                }} />
                            </Box>

                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 2,
                                    fontSize: '24px',
                                    fontFamily: 'Inter',
                                }}>
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 300,
                                    fontFamily: 'Inter',
                                    width: '251px',
                                }}>
                                {item.description}
                            </Typography>
                        </Box>

                    </Grid>

                ))}
            </Grid>
        </Box>
    );
}
