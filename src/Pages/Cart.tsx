import { Box } from '@mui/material'
import React from 'react'
import { RaydaBody } from '../Components/Box'
import CartItem from '../Components/CartItem'
import { RaydaJumbo } from '../Components/Text'
import { useSelector } from 'react-redux'
interface Carted {
  cart: any
}
function Cart() {
  const cart = useSelector((state: Carted) => state.cart)
  console.log(cart);
  return (
    <RaydaBody>
      <RaydaJumbo sx={{ mb: `${24}px`, py: 0, pb: { xs: '10px', lg: '55px' } }}>Cart {cart.length} </RaydaJumbo>
      <span>you have {cart.length} item{cart.length > 1 ? 's' : ''}</span>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {cart.map((item: any, index: React.Key | null | undefined) => {
          return <>

            <CartItem key={index} item={item} />
          </>
        })}
      </Box>

    </RaydaBody>
  )
}

export default Cart