import React from 'react'
import { Box } from '@mui/material'
import { BsCart } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import CartModal from './CartModal';
import CurrencyModal from './Currencymodal';
import { useSelector } from "react-redux";

function Navbar() {
    const cart = useSelector((state: any) => state.cart)
    const [showcart, setShowcart] = React.useState<Boolean>(false)
    const [showcur, setShowcur] = React.useState<Boolean>(false)
    return (
        <>
            <Box sx={{
                px: { xs: '2rem', lg: '10.1rem' },
                display: 'flex',
                alignItems: { xs: 'center', lg: 'center' },
                height: { xs: '80px', lg: '80px' }, borderBottom: '1px solid grey',
                justifyContent: { xs: 'space-between', lg: 'space-between' },
            }}>
                <Box sx={{
                    display: { xs: 'none', lg: 'flex' }, gap: '3.2rem', flexDirection: 'row', height: '100%', alignItems: 'center',
                }}>
                    {['Women', 'Men', 'Kds'].map((x, i) => {
                        return (
                            <Box key={i} sx={{
                                fontFamily: "Raleway",
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                lineHeight: "1.9rem",
                                color: '#1D1F22',
                                textTransform: 'uppercase',
                                '&:hover': {
                                    color: 'green',
                                    cursor: 'pointer',
                                    borderBottom: '1px solid #5ECE7B',
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
                    <Box onClick={() => { setShowcur(!showcur) }}>
                        <BiDollar size={'2rem'} />
                        <FiChevronDown size={'2rem'} />
                    </Box>
                    <Box>{cart.length }
                        <BsCart onClick={() => {
                            if (cart.length >= 1) {
                                setShowcart(!showcart)
                            } else {
                                alert('cart is empty add items first')
                            }
                        }}
                            size={'2rem'} /></Box>
                </Box>


            </Box >
            <CartModal showcart={showcart} />
            <CurrencyModal show={showcur} />

        </>
    )
}

export default Navbar