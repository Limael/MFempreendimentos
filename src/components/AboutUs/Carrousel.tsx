import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Slide } from '@mui/material';


const steps = [
    {
        label: 'SOBRE NÓS',
        description: `
        A MF Empreendimentos é uma construtora e incorporadora responsável, que iniciou suas atividades no Paraná e vem expandindo e se destacando no mercado a cada dia.<br /><br />
        Especializada na execução de obras de alto padrão e formada por um time de engenharia experiente e preparado para planejar, executar e oferecer soluções inteligentes e tecnológicas para seus projetos, nosso objetivo é oferecer respostas completas e personalizadas para cada cliente, aliando inovação construtiva e arquitetônica, otimizando assim os custos sem comprometer a qualidade final dos serviços prestados.<br /><br />
        Nos últimos anos, a MF tem lançado empreendimentos que unem conforto, modernidade, sustentabilidade e mobilidade reforçando a preocupação constante da nossa empresa com soluções sustentáveis, inovadoras e valorização do investimento.
        `,
    },
    {
        label: 'NOSSA CULTURA',
        description: `
        O planejamento é essencial para o sucesso de qualquer empreendimento, pois garante a realização do projeto dentro dos parâmetros desejados, este conceito é a base cultural da nossa empresa.<br /><br />
        Pensando nisso, a MF Empreendimentos tem levado otimização e organização para suas obras, por meio de um planejamento estratégico e realista, baseado em uma rígida metodologia criada visando o controle de qualidade dos serviços oferecidos.
        `
    },
];

export default function Carrousel() {
    const customTheme = createTheme({
        components: {
            MuiMobileStepper: {
                styleOverrides: {
                    dot: {
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    dotActive: {
                        backgroundColor: 'white',
                    },
                },
            },
        },
    });

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [direction, setDirection] = React.useState<'left' | 'right'>('right');
    const maxSteps = steps.length;

    const handleNext = () => {
        setDirection('right');
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setDirection('left');
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{
                maxWidth: {
                    xs: "100%",
                    sm: 400
                }, flexGrow: 1
            }}>
                <Box sx={{
                    maxWidth: {
                        xs: 370,
                        sm: 400
                    }, width: '80%', p: 2, position: 'relative', height: { xs: 520, sm: 480 }
                }}>
                    <Slide direction={direction} in={true} mountOnEnter unmountOnExit>
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '32px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    mb: 2,
                                }}
                            >
                                {steps[activeStep].label}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    color: 'white',
                                    fontFamily: 'Inter',
                                    fontWeight: 300
                                }}
                                dangerouslySetInnerHTML={{ __html: steps[activeStep].description }}
                            />
                        </Box>
                    </Slide>
                </Box>

                <MobileStepper
                    variant="dots"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                        background: 'none',
                        justifyContent: 'center',
                        pb: 8
                    }}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                            sx={{
                                color: '#fff',

                            }}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft
                                    sx={{
                                        fontSize: '32px'
                                    }}
                                />
                            ) : (
                                <KeyboardArrowRight
                                    sx={{
                                        fontSize: '32px'
                                    }}
                                />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button sx={{
                            color: '#fff',

                        }} size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight
                                    sx={{
                                        fontSize: '32px'
                                    }}
                                />
                            ) : (
                                <KeyboardArrowLeft
                                    sx={{
                                        fontSize: '32px'
                                    }}
                                />
                            )}

                        </Button>
                    }
                />
            </Box>
        </ThemeProvider>
    );
}
