import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
            }}
        >
            <ArrowBackIosNewIcon />
        </IconButton>
    );
};

export default CustomLeftArrow;
