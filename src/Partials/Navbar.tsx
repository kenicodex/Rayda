import React from 'react'
import { Box, Typography } from '@mui/material'
import { BsCart } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { PdpHeader, Running, Size } from '../Components/Text';
import SizesComponent from '../Components/Sizes';
import Colors from '../Components/Colors';

function Navbar() {
    const breakPoint: object = { display: { xs: 'none', lg: 'block', cursor: 'pointer' } }
    const [showcart, setShowcart] = React.useState<Boolean>(false)
    return (
        <>
            <Box sx={{
                px: '10.1rem',
                display: 'flex',
                alignItems: { xs: '', lg: 'center' },
                height: { xs: 'auto', lg: '80px' },
                justifyContent: { xs: 'none', lg: 'space-between' },
            }}>
                <Box sx={{
                    display: 'flex', gap: '3.2rem', flexDirection: 'row', border: '1px solid #5ECE7B', height: '100%', alignItems: 'center'
                }}>
                    {['Women', 'Men', 'Kids'].map((x, i) => {
                        return (
                            <Box sx={{
                                fontFamily: "Raleway",
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                lineHeight: "1.9rem",
                                color: '#1D1F22',
                                textTransform: 'uppercase',
                                ...breakPoint,
                                '&:hover': {
                                    color: 'green',
                                    cursor: 'pointer',
                                    borderBottom: '1px solid #5ECE7B',
                                    height: '50%'
                                }
                            }}>
                                {x}
                            </Box>
                        )
                    })}
                </Box>

                <Box component={'img'} src={process.env.PUBLIC_URL + '/images/brand.png'} sx={{ height: '2.9rem' }} />

                <Box sx={{
                    display: 'flex', gap: '3.2rem',
                }}>
                    <Box sx={breakPoint} >
                        <BiDollar size={'2rem'} />
                        <FiChevronDown size={'2rem'} />
                    </Box>
                    <Box sx={breakPoint}><BsCart onClick={() => { setShowcart(!showcart) }} size={'2rem'} /></Box>
                </Box>


            </Box >

            <Box sx={{ position: 'fixed', height: '100vh', width: '100%', display: showcart ? 'flex' : 'none', justifyContent: 'right', zIndex: 1, bgcolor: 'rgba(57, 55, 72, 0.22)' }}>
                <Box sx={{ px: '1.6rem', pt: '3.7rem', bgcolor: 'white', width: 'autyo', mr: { xs: 'auto', lg: '7.2rem' }, ml: { xs: 'auto', lg: '7.2rem' }, }}>

                    <PdpHeader sx={{ fontSize: '1.6rem' }}>My Bag, 3 items</PdpHeader>
                    <Box sx={{ bgcolor: 'white', width: '375px', height: '677px', px: '1.6rem', display: 'flex', maxHeight: '250px', gap: '40px' }}>
                        <Box>
                            {/* <CartItem /> */}
                            <Running sx={{ my: 0, fontSize: '1.6rem' }}>Apollo</Running>
                            <Running sx={{ my: 0, fontSize: '1.6rem' }}>Running Short</Running>
                            <Size sx={{ my: 2, fontSize: '1.6rem' }}>$50.00</Size>
                            <SizesComponent width='30px' font='10px' height='30px' />
                            <Colors />
                        </Box>

                        <Box sx={{ display: 'flex', width: "100%", flexDirection: { xs: 'row', lg: 'row' }, height: '100%', gap: '1.2rem' }}>
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'column' }, justifyContent: 'space-between', height: { xs: '80px', lg: 'auto' } }}>
                                <Box sx={{ border: '1px solid #1D1F22', width: '24px', height: '24px', display: 'grid', placeItems: 'center', fontSize: '1.5rem' }}>+</Box>
                                <Typography sx={{ width: '24px', height: '24px', display: 'grid', placeItems: 'center', fontSize: '1.5rem' }}>1</Typography>
                                <Box sx={{ border: '1px solid #1D1F22', width: '24px', height: '24px', display: 'grid', placeItems: 'center', fontSize: '1.5rem' }}>-</Box>
                            </Box>
                            <Box component={'img'} src={process.env.PUBLIC_URL + '/productimages/bag.png'} sx={{ width: '120px', height: { xs: "auto", lg: '100%' } }} />
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default Navbar