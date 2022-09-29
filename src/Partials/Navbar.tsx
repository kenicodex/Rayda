import React from 'react'
import { Box } from '@mui/material'
import { BsCart } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import CartModal from './CartModal';
import CurrencyModal from './Currencymodal';

function Navbar() {
    const breakPoint: object = { display: { xs: 'none', lg: 'block', cursor: 'pointer' } }
    const [showcart, setShowcart] = React.useState<Boolean>(false)
    const [showcur, setShowcur] = React.useState<Boolean>(false)
    return (
        <>
            <Box sx={{
                px: { xs: '2rem', lg: '10.1rem'},
                display: 'flex',
                alignItems: { xs: 'center', lg: 'center' },
                height: { xs: '80px', lg: '80px' }, borderBottom: '1px solid grey',
                justifyContent: { xs: 'space-between', lg: 'space-between' },
            }}>
                <Box sx={{
                    display: 'flex', gap: '3.2rem', flexDirection: 'row', height: '100%', alignItems: 'center',
                    ...breakPoint,
                }}>
                    {['Women', 'Men', 'Kids'].map((x, i) => {
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
                                    // height: '50%'
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
                    <Box><BsCart onClick={() => { setShowcart(!showcart) }} size={'2rem'} /></Box>
                </Box>


            </Box >
            <CartModal showcart={showcart} />
            <CurrencyModal show={showcur}/>
        </>
    )
}

export default Navbar