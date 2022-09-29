import { Box } from '@mui/material'
import React from 'react'
import { RaydaBody } from '../Components/Box'
import CartItem from '../Components/CartItem'
import { PdpHeader, RaydaJumbo, Running } from '../Components/Text'
import { useSelector } from 'react-redux'
import { RaydaBtn } from '../Components/Button'
import { Checkout } from './checkout.js'
interface Carted {
  cart: any
}
function Cart() {
  const cart = useSelector((state: Carted) => state.cart)
  const [total, setTotal] = React.useState<number>(0)
  const [quantity, setQuantity] = React.useState<number>(0)
  React.useEffect(() => {
    let getTotal: Array<any> = [], getQuantity: Array<any> = [];
    cart.forEach((element: any) => {
      getTotal.push(parseInt(element.price) * element.number)
      getQuantity.push(element.number)
    });
    setTotal(getTotal.reduce((a, b) => a + b))
    setQuantity(getQuantity.reduce((a, b) => a + b))

  }, [cart, quantity, total])


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
      <Box sx={{ borderTop: '1px solid #E5E5E5', mt: '3rem' }}>

        <Running>Tax 21%:  <PdpHeader sx={{ ml: '2rem' }}> ${(21 / 100) * total}</PdpHeader></Running>
        <PdpHeader>Quantity:  {quantity} </PdpHeader>
        <Running>Total:  <PdpHeader sx={{ ml: '4rem' }}> ${total}</PdpHeader></Running>
        <RaydaBtn sx={{position:'relative'}}> ORDER<Checkout total={total} /> </RaydaBtn>

      </Box>
    </RaydaBody>
  )
}

export default Cart