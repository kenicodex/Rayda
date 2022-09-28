import { styled, experimental_sx as sx } from '@mui/system'

export const RaydaJumbo = styled('p')(
    sx({
        fontFamily: "Raleway",
        fontSize: "4.2rem",
        fontWeight: "400",
        // lineHeight: "6.7rem",
        textAlign: "left",my:0,
        // mb: { xs: '20px', lg: '87px' }
    })
)
export const PdpHeader = styled('span')(
    sx({
        fontFamily: "'Raleway'",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "3rem",
        lineHeight: "2.7rem",
        color: "#1D1F22"
    })
)
export const Running = styled('p')(
    sx({
        fontFamily: "'Raleway'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "30px",
        lineHeight: "27px",
        display: "flex",
        alignItems: "center",
        color: "#1D1F22"
    })
)
export const Size = styled('p')(
    sx({
        fontFamily: "'Roboto Condensed'",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "18px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "#1D1F22"
    })
)
export const Sizes = styled('p')(
    sx({
        fontFamily: "'Source Sans Pro'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "1.6rem",
        textTransform: 'uppercase',
        // lineHeight: "1.8rem",
        // display: "flex",
        // alignItems: "center",
        textAlign: "center",
        letterSpacing: "0.05em",
        color: "inherit"
    })
)
export const ProductDescription = styled('p')(
    sx({
        width: "292px",
        height: "103px",
        bottom: "178px",
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "159.96%",
        color: "#1D1F22"
    })
)


