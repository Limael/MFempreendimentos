import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: '50%',
                right: 0,
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
            }}
        >
            <ArrowForwardIosIcon />
        </IconButton>
    );
};

export default CustomRightArrow;
