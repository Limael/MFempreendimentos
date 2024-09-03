import { Grid, Typography, Link, Box } from "@mui/material";
import logo from '../../assets/images/dark-log.svg';
import styles from './styles.module.css';

const footerInfo = {
    address: {
        title: "Endereço",
        content: "R. Pacuçu, 30 - Vila A, Foz do Iguaçu - PR, 85860-230"
    },
    email: {
        title: "E-mail",
        content: "mfempreendimentos@e-mail.com",
        link: "mailto:mfempreendimentos@e-mail.com"
    },
    phone: {
        title: "Telefone",
        content: [
            "(45) 9 9999-999",
            "(45) 3000-0000"
        ]
    },
    social: {
        title: "Redes sociais",
        links: [
            { name: "Instagram", url: "https://instagram.com" },
            { name: "Facebook", url: "https://facebook.com" }
        ]
    }
};

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#f5f5f5', paddingBottom: '1rem', paddingTop: '3rem' }}>
            <Grid container spacing={4} justifyContent="space-evenly" px={12}>
                <Grid item xs={12} sm={6} md={2.4}>
                    <Typography textAlign={{
                        xs: 'center',
                        sm: 'left'
                    }} variant="body2" sx={{ fontWeight: 700, mb: 2 }} >{footerInfo.address.title}</Typography>
                    <Typography textAlign={{
                        xs: 'center',
                        sm: 'left'
                    }} variant="body1">
                        {footerInfo.address.content}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={2.4}>
                    <Typography textAlign={{
                        xs: 'center',
                        sm: 'left'
                    }} variant="body2" sx={{ fontWeight: 700, mb: 2 }}>{footerInfo.email.title}</Typography>
                    <Typography textAlign={{
                        xs: 'center',
                        sm: 'left'
                    }} variant="body1">
                        <Link sx={{ textDecoration: 'none', color: '#252626' }} href={footerInfo.email.link}>{footerInfo.email.content}</Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Typography textAlign={{
                        xs: 'center',
                        sm: 'left'
                    }} variant="body2" sx={{ fontWeight: 700, mb: 2 }}>{footerInfo.phone.title}</Typography>
                    {footerInfo.phone.content.map((phone, index) => (
                        <Typography textAlign={{
                            xs: 'center',
                            sm: 'left'
                        }} variant="body1" key={index}>
                            {phone}
                        </Typography>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Typography textAlign={{
                        xs: 'center',
                        sm: 'left'
                    }} variant="body2" sx={{ fontWeight: 700, mb: 2 }}>{footerInfo.social.title}</Typography>
                    {footerInfo.social.links.map((social, index) => (
                        <Typography textAlign={{
                            xs: 'center',
                            sm: 'left'
                        }} variant="body1" key={index}>
                            <Link sx={{ textDecoration: 'none', color: '#252626' }} href={social.url} target="_blank" rel="noopener">
                                {social.name}
                            </Link>
                        </Typography>
                    ))}
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        mt: { xs: 2, md: 0 },
                    }}>
                        <img src={logo} className={styles.image} alt="Logo" style={{ maxWidth: '150px', marginBottom: '1rem' }} />
                        <Typography variant="body1" sx={{ fontWeight: 700, textAlign: 'center' }}>
                            MF EMPREENDIMENTOS
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
                        2024 | MF Empreendimentos | Todos os direitos reservados
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
}
