import React from 'react'
import { Box } from '@mui/material'
import Card from '../Components/Card'
import { products } from '../dummy'
import { RaydaJumbo } from '../Components/Text'
import { RaydaBody } from '../Components/Box'

function Category() {
    return (
        <RaydaBody>

            <RaydaJumbo>   Women</RaydaJumbo>

            <Box sx={{ display: 'flex', gap: { xs: '2rem', lg: '3rem' }, flexWrap: 'wrap', mx: 0 }}>
                {products.map(({ id, imageUrl, brand, name, price }, index) =>
                    <Card id={id} imageUrl={imageUrl} name={brand + " " + name} price={price} index={index} />)}
            </Box>
        </RaydaBody>
    )
}

export default Category