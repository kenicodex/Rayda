import { styled, experimental_sx as sx } from '@mui/system'

export const RaydaBtn = styled('button')(
    sx({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px 32px",
        width: "292px",
        height: "52px",
        background: "#5ECE7B",
        border:'none',
        fontFamily: "'Raleway'",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "120%",
        textAlign: "center",
        color: "#FFFFFF",
        cursor:'pointer'
    })
)