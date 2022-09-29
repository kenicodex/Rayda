import { Box, Typography } from '@mui/material'
import React from 'react'
import Colors from '../Components/Colors'
import SizesComponent from '../Components/Sizes'
import { PdpHeader, Running, Size } from '../Components/Text'
import { useSelector } from 'react-redux'
import { decrease, increase } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

interface Showcart {
    showcart: Boolean;
}
interface Reduxcart {
    cart: any
}
function CartModal(props: Showcart) {
    const dispatch = useDispatch()
    const cart = useSelector((state: Reduxcart) => state.cart)
    const [showcart, setShowcart] = React.useState<Boolean>(false)
    React.useEffect(() => {
        setShowcart(props.showcart)
    }, [props.showcart])
    return (
        <Box sx={{ position: 'fixed', height: '100vh', width: '100%', display: showcart && cart.length >= 1 ? 'flex' : 'none', justifyContent: 'right', zIndex: 1, bgcolor: 'rgba(57, 55, 72, 0.22)' }}>
            <Box sx={{ px: '1.6rem', pt: '3.7rem', bgcolor: 'white', width: 'autyo', mr: { xs: 'auto', lg: '7.2rem' }, ml: { xs: 'auto', lg: '7.2rem' }, }}>
                {cart.map((item: any, index: React.Key | null | undefined) => {
                    return <>
                        {cart.length >= 1 ?
                            <Box key={index}>
                                <PdpHeader sx={{ fontSize: '1.6rem' }}>My Bag, {cart.length} item{cart.length <= 1 ? '' : 's'} </PdpHeader>
                                <Box sx={{ bgcolor: 'white', width: '375px', height: '677px', px: '1.6rem', display: 'flex', maxHeight: '250px', gap: '40px' }}>
                                    <Box>
                                        <Running sx={{ my: 0, fontSize: '1.6rem' }}>{item.name}</Running>
                                        <Running sx={{ my: 0, fontSize: '1.6rem' }}>{ }</Running>
                                        <Size sx={{ my: 2, fontSize: '1.6rem' }}>${item.price}</Size>
                                        <SizesComponent width='30px' font='10px' height='30px' />
                                        <Colors />
                                    </Box>

                                    <Box sx={{ display: 'flex', width: "100%", flexDirection: { xs: 'row', lg: 'row' }, height: '100%', gap: '1.2rem' }}>
                                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'column' }, justifyContent: 'space-between', height: { xs: '80px', lg: 'auto' } }}>
                                            <Box sx={{
                                                border: '1px solid #1D1F22', width: '24px', height: '24px', display: 'grid', placeItems: 'center', fontSize: '1.5rem', cursor: 'pointer'
                                            }} onClick={() => { dispatch(increase(item)) }}
                                            >+</Box>
                                            <Typography sx={{ width: '24px', height: '24px', display: 'grid', placeItems: 'center', fontSize: '1.5rem' }}>{item.number}</Typography>
                                            <Box sx={{
                                                border: '1px solid #1D1F22', width: '24px',
                                                height: '24px', display: 'grid', placeItems: 'center', fontSize: '1.5rem', cursor: 'pointer'
                                            }} onClick={() => { dispatch(decrease(item)) }}>-</Box>
                                        </Box>
                                        <Box component={'img'} src={process.env.PUBLIC_URL + '/productimages/' + item.imageUrl} sx={{ width: '120px', height: { xs: "auto", lg: '100%' } }} />
                                    </Box>
                                </Box>
                            </Box>
                            : <Box sx={{ width: "100%", color: 'black', bgcolor: "red" }}>You have not item in your cart</Box>
                        }
                    </>
                })}
            </Box>

        </Box>
    )
}

export default CartModal