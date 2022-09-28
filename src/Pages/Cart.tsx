import { Box } from '@mui/material'
import React from 'react'
import { RaydaBody } from '../Components/Box'
import CartItem from '../Components/CartItem'
import {  RaydaJumbo } from '../Components/Text'

function Cart() {
  return (
    <RaydaBody>
      <RaydaJumbo sx={{ mb: `${24}px`, py: 0, pb: { xs: '10px', lg: '55px' } }}>Cart</RaydaJumbo>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <CartItem />

        <CartItem />

        <CartItem />

        <CartItem />
      </Box>

    </RaydaBody>
  )
}

export default Cart