import { Grid } from '@mui/material';
import logo from '../../assets/images/logo.svg';
import Carrousel from './Carrousel';
import styles from './styles.module.css'

export default function AboutUs() {
    return (

        <Grid container spacing={2} sx={{
            backdropFilter: 'blur(16px)',
            background: 'rgba(37, 38, 38, 0.80)',
            alignItems: 'stretch',
            minHeight: '80vh',

        }}>
            <Grid item xs={12} md={6}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <Carrousel />
            </Grid>
            <Grid item xs={12} md={6} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(37, 38, 38, 0.10)',
                pb: 4

            }}>
                <img src={logo} className={styles.logo} alt="Logo" />
            </Grid>
        </Grid >
    );
}
