import { Box, Typography } from '@mui/material'
import React from 'react'
import { decrease, increase } from '../redux/cartSlice'
import Colors from './Colors'
import SizesComponent from './Sizes'
import { PdpHeader, Running, Size } from './Text'
import { useDispatch } from 'react-redux'

function CartItem(props: any) {
    const dispatch = useDispatch()
    return (
        <Box sx={{
            borderTop: '1px solid #E5E5E5',
            height: { xs: 'auto', lg: 336 }, pt: '24px',
            display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: { xs: 'center', lg: 'space-between' }
        }}>
            <Box sx={{ order: { xs: 2, lg: 1 } }}>
                <PdpHeader sx={{ lineHeight: '0' }}>{props.item.brand}</PdpHeader>
                <Running>{props.item.name}</Running>
                <Size>${props.item.price}</Size>

                <SizesComponent width='6.3rem' height='4.5rem' font='1.5rem' />
                <Colors />
            </Box>
            <Box sx={{ order: { xs: 1, lg: 2 }, display: 'flex', gap: '24px', flexDirection: { xs: 'column', lg: 'row' } }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'row', lg: 'column' }, order: { xs: 2, lg: 1 }, justifyContent: 'space-between', height: { xs: '80px', lg: 'auto' } }}>
                    <Box sx={{ border: '1px solid #1D1F22', width: '45px', height: '45px', display: 'grid', placeItems: 'center', fontSize: '2.2rem', cursor:'pointer' }}
                        onClick={() => { dispatch(increase(props.item)) }}>+</Box>
                    <Typography sx={{ width: '20px', height: '20px', display: 'grid', placeItems: 'center', fontSize: '2.2rem' }}>{props.item.number}</Typography>
                    <Box sx={{ border: '1px solid #1D1F22', width: '45px', height: '45px', display: 'grid', placeItems: 'center', fontSize: '2.2rem', cursor:'pointer'  }}
                    onClick={() => { dispatch(decrease(props.item)) }}>-</Box>
                </Box>
                <Box component={'img'} src={process.env.PUBLIC_URL + '/productimages/' + props.item.imageUrl} sx={{ order: { xs: 1, lg: 2 }, width: { xs: 'auto', lg: '200px' }, height: { xs: "auto", lg: '100%' } }} />
            </Box>
        </Box>
    )
}

export default CartItem