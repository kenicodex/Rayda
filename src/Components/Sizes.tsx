import { Box } from '@mui/material'
import React from 'react'
import { SizesBox } from './Box'
import { Size, Sizes } from './Text'

interface Prrr {
    width: string;
    height: string;
    font:string;
}
function SizesComponent(props: Prrr) {
    return (
        <>
            <Size sx={{ mt: '0', mb: '8px' }}>Size: </Size>
            <Box sx={{ display: 'flex', gap: '1.2rem', mb: '24px' }}>{['xs', 's', 'm', 'l'].map((size, index) => {
                return <SizesBox sx={{ width: props.width, height:props.height,}}><Sizes sx={{ fontSize: props.font}}> {size}</Sizes></SizesBox>
            })}</Box>

        </>
    )
}

export default SizesComponent