import { Box, Typography } from '@mui/material'
import React from 'react'

function CurrencyModal(props: any) {
  return (
    <Box sx={
      {
        position: "absolute",
        width: "114px",
        height: "auto",
        right: "10%",
        top: "65px", zIndex: 6,
        background: "#FFFFFF", boxShadow: 3,
        display: props.show ? 'block' : 'none'
      }
    }>{
        ['$ USD', '€ EUR', '¥ JPY'].map((cur, index) => {
          return <Typography key={index}
            sx={{
              width: "114px",
              height: "45px",
              left: "1248px",
              top: "127px",
              fontSize: '1.8rem',
              display: 'grid',
              placeItems: 'center',
              // display:'flex',
              '&:hover': {
                background: "#EEEEEE", cursor: 'pointer'
              }
            }}>
            {cur}
          </Typography>
        })}</Box>
  )
}

export default CurrencyModal