import React from 'react'
import './Category.scss'
import { image } from '../../../assets/images'
import { Button, Card, Container, Grid, IconButton, Stack } from '@mui/material'
import { CameraAltRounded, Checkroom, Favorite, LocalAtm, PhoneAndroidRounded, PhoneIphoneRounded, SportsBaseball, SportsEsports, Tv } from '@mui/icons-material';

const items = [
    {
      Img: PhoneIphoneRounded,
      Name: "Category Name",
      View: "2,3k items"
    },
    {
        Img: CameraAltRounded,
        Name: "Category Name",
        View: "2,3k items"
    },
    {
        Img: Tv,
        Name: "Category Name",
        View: "2,3k items"
    },
    {
        Img: Checkroom,
        Name: "Category Name",
        View: "2,3k items"
    },
    {
        Img: SportsEsports,
        Name: "Category Name",
        View: "2,3k items"
    },
    {
        Img: SportsBaseball,
      Name: "Category Name",
      View: "2,3k items"
    }
]

const Category = () => {
  return (
    <Container className='category' maxWidth="lg">
        <Stack className='stack1'>
            <Stack className="name" direction={'row'}>
                <p className="namecate h2 medium">Category</p>
                <Button className=' ' variant='outlined' href='/categories'>
                    <p className='normal h7 medium indigo'>View All</p>
                </Button>
            </Stack>            
        </Stack>
        < Stack className='stack2'>
            <Grid container spacing={2}>
             {
                items.map((item) => {
                return(
                    <Grid item xs={2}>
                       <Stack className='stack'spacing={3}>
                            <item.Img className='icon' />
                            <Stack className='namecnt' spacing={1}>
                                <p className="name ">{item.Name}</p>
                                <p className="content ">{item.View}</p>
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

export default Category
