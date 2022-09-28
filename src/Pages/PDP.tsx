import React from 'react'
import { Box } from '@mui/material'
import { products } from '../dummy'
import { PdpHeader, ProductDescription, Running, Size } from '../Components/Text';
import { RaydaBtn } from '../Components/Button';
import Colors from '../Components/Colors';
import SizesComponent from '../Components/Sizes';


interface Item {
  name: string | null;
  brand: string | null;
  imageUrl: string | null;
  inStock: number | null;
  price: number | null;
  extraImages: Array<any>;
}
function PDP() {
  let index: any = localStorage.getItem('item')
  const [item, setItem] = React.useState<Item>({ imageUrl: '', brand: '', name: '', inStock: 0, price: 0, extraImages: [] })
  React.useEffect(() => {
    if (localStorage.getItem('item') !== null) {
      setItem(products[index])
    } else {
      window.location.assign('/category')
    }
  }, [item, index])

  return (
    <Box sx={{ maxWidth: '1440px', mx: 'auto', display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, pt: { xs: '20px', lg: '72px' }, pl: { xs: '2.0rem', lg: '9.6rem' }, alignItems: { xs: 'center', lg: 'flex-start' } }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'row', lg: 'column' }, gap: '32px', mr: { xs: '0', lg: '4rem' }, my: { xs: '1rem', lg: '0' }, order: { xs: 2, lg: 1 } }}>
        {item.extraImages.map((image, index) => {
          return <Box key={index} component={'img'} src={process.env.PUBLIC_URL + '/productimages/' + image} sx={{ width: { xs: "40px", lg: '80px' }, height: { xs: '40px', lg: '80px' } }} />
        })}
      </Box>

      <Box sx={{ mr: { xs: '', lg: '10rem' }, order: { xs: 1, lg: 2 } }}>
        <Box component={'img'}
          src={process.env.PUBLIC_URL + '/productimages/' + item.imageUrl}
          sx={{
            width: { xs: "100%", lg: '610px' },
            height: { xs: '100%', lg: '511px' }
          }} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 3, lg: 3 } }}>

        <PdpHeader sx={{ mt: '0', mb: '16px' }}>{item.brand}</PdpHeader>

        <Running sx={{ mt: '0', mb: '43px' }}>{item.name}</Running>

        <SizesComponent width='6.3rem' height='4.5rem' font='1.5rem'/>
        <Colors />

        <Size>PRICE:</Size>
        <Size sx={{ fontFamily: 'Raleway' }}>${item.price}</Size>

        <RaydaBtn sx={{ mb: { xs: '20px', lg: '40px' } }}>ADD TO CART</RaydaBtn>

        <ProductDescription>
          Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.

        </ProductDescription>
      </Box>
    </Box>
  )


}

export default PDP