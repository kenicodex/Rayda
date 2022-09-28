import { Box } from '@mui/material'
import React from 'react'
import { ColorBox } from './Box'
import { Size } from './Text'

function Colors() {
    return (
        <>

            <Size sx={{ mt: '0', mb: '8px' }}>COLOR: </Size>
            <Box sx={{ display: 'flex', gap: '1.0rem', mb: '36px' }}>{['#D3D2D5', ' #2B2B2B', ' #0F6450'].map((color, index) => {
                return <ColorBox sx={{ bgcolor: color }}> </ColorBox>
            })}</Box>
            </>
    )
}

export default Colors