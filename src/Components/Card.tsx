import React from 'react'
import { Box, Typography } from '@mui/material'
import { BsCart } from "react-icons/bs";
import './card.css'
import { addcart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux'

function Card(props: any) {
    const dispatch =  useDispatch()
    
    const [show, setShow] = React.useState(false)
    return (
        <Box onClick={() => { localStorage.setItem('item', props.index); window.location.assign('/pdp') }}
            onMouseOver={() => { setShow(true) }} onMouseOut={() => { setShow(false) }}
            sx={{
                display: 'flex', flexDirection: 'column', gap: '24px', p: '1.6rem', position: 'relative'
            }} className={'card'}>
            <Box>
                <Box component={'img'} src={process.env.PUBLIC_URL + '/productimages/' + props.imageUrl} sx={{
                    maxHeight: '361.38037109375px',
                    maxWidth: '79.15833129882812rem',
                }} />
            </Box>
            <Box>
                <Typography sx={{
                    fontFamily: "Raleway",
                    fontSize: "1.8rem",
                    fontWeight: "300",
                    lineHeight: "2.9rem",
                    textAlign: "left",
                    color: ' #1D1F22',
                    opacity: .8
                }}>
                    {props.name}
                </Typography>
                <Typography sx={{
                    fontFamily: "Raleway",
                    fontSize: "1.8rem",
                    fontWeight: "500",
                    lineHeight: "2.9rem",
                    letterSpacing: "0em",
                }}>
                    ${props.price}
                </Typography>
            </Box>
            <Box sx={{
                height: '52px', width: '52px', bgcolor: '#5ECE7B', display: show ? "flex" : "none",
                borderRadius: '100%', position: 'absolute', right: '3.1rem',
                bottom: '72px', alignItems: 'center', justifyContent: 'center'
            }}>
                <BsCart size={'2.4rem'} color="#FFFFFF" onClick={() => { dispatch(addcart(props)) }} />
            </Box>
        </Box>
    )
}

export default Card