import { Button, Card, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import { image } from '../../../assets/images'
import './Brand.scss'

const item =[
    {
        img : image.Apple
    },
    {
      img : image.Asus
    },
     {
      img : image.Samsung
    },
     {
      img : image.Sony
    },
     {
      img : image.Wacom
    },
     {
      img : image.Xiaomi
    },

]

const Trademark = () => {
  return (
    <Container maxWidth="lg">
      < Stack className='stack'>
        <Grid container spacing={2}>
          {
            item.map((item) => {
              return(
                <Grid item xs={2} spacing={1}>
                <Stack className='card-item'  >
                  <Stack className="img">
                      <Button>
                        <img className="image" src={item.img} alt="" />
                      </Button>
                  </Stack> 
                </Stack>
              </Grid>
              )
            })
          }  
      </Grid>
      </Stack>
    </Container>
  )
}

export default Trademark
