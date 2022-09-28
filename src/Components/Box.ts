import { styled, experimental_sx as sx } from '@mui/system'


export const RaydaBody = styled('div')(
    sx({
        pt: { xs: '20px', lg: '60px' }, px: { xs: '2rem', lg: '10rem' }, mb: { xs: '30px', lg: '191px' }, maxWidth: '1440px', mx: 'auto'
    })
)
// let props:any;
export const SizesBox = styled('div')(
    
    sx({
        width: '6.3rem', height: '4.5rem', display: 'grid', placeItems: 'center', border: '1px solid #1D1F22',
        '&:hover': {
            bgcolor: '#1D1F22',
            color: 'white',
            cursor: 'pointer'
        }
    })
)
export const ColorBox = styled('div')(
    sx({
        width: '3.2rem', height: '3.2rem',
        '&:hover': {
            cursor: 'pointer',
            border: '1px solid #5ECE7B',
            boxSizing: 'content-box'
        }
    })
)