import { Button, Container, Grid, Rating, Stack } from '@mui/material'
import React from 'react'
import './Productlist.scss'
import { images } from '../../../assets/images'
import { ChevronRightRounded } from '@mui/icons-material'

const items = [
    {
        Img: images.Bitmap,
        Name: "Samsung Galaxy Watch 3",
        Category: "Men Fashion",
        Price: 172500,
        Rating: 5
      },
      {
        Img: images.clock,
        Name: "Apple Watch 4 2020",
        Category: "Men Fashion",
        Price: 1999,
        Rating: 5
      },
      {
        Img: images.clock1,
        Name: "iPhone XS Max Pro",
        Category: "Men Fashion",
        Price: 1999,
        Rating: 5
      },
      {
        Img: images.Bitmap,
        Name: "Beats by Dre C 3450",
        Category: "Men Fashion",
        Price: 1999,
        Rating: 5
      },
      {
        Img: images.sweat,
        Name: "Airpods 2nd Gen",
        Category: "Men Fashion",
        Price: 1999,
        Rating: 5
      },
      {
        Img: images.Air,
        Name: "DonGarmin Watch Fit Xgho",
        Category: "Men Fashionen",
        Price: 1999,
        Rating: 5
      },
      {
        Img: images.iphone,
        Name: "Women Yellow Turtleneck",
        Category: "Men Fashion",
        Price: 1999,
        Rating: 4
      },
      {
        Img: images.Bitmap,
        Name: "Harman Kardon Speaker",
        Category: "Men Fashion",
        Price: 1999,
        Rating: 3.5
      },
      {
        Img: images.Bitmap,
        Name: "Samsung Galaxy Watch 3",
        Category: "Men Fashion",
        Price: 172500,
        Rating: 5
      }
    
]

const list =[
    {
        Title : "Product list 1"
    },
    {
        Title : "Product list 2"
    },
    {
        Title : "Product list 3"
    }
]

const Productlist = () => {
  return (
    <Container className ="productlist" maxWidth="lg">
        <Grid className='cnt' container spacing={2}>
            {
                list.map((items) => {
                    return(
                        <Grid items xs={4}>
                            <Stack direction={'row'}>
                                <p className="title ">{items.Title}</p>
                            </Stack>
                        </Grid>
                    )
                } )
            }
        </Grid>
           
            <Grid className='grid2'container spacing={1}>
             {
                items.map((item) => {
                return(
                    <Grid xs={4}>
                            <Stack className='stackn' direction={'row'}>
                                <Stack className='image'>
                                    <img className="img" src={item.Img} alt="" />
                                </Stack>
                                <Stack spacing={0.5}>
                                    <p className="name ">Money Guarantee</p>
                                    <Stack className='pr' spacing={3} direction={'row'}>
                                        <p className="content h8 regular ">$1,725.00</p>
                                        <Rating name="read-only" className ='rating'  defaultValue={item.Rating} precision={0.5} />
                                    </Stack>
                                </Stack>
                         </Stack>    
                    </Grid>
                )
                })
             }  
            </Grid>

            <Grid className='cnt2' container spacing={4}>
            {
                list.map((items) => {
                    return(
                        <Grid items xs={4}>
                            <Stack direction={'row'}>
                            <Button className='btn1' variant='text'>
                                    <p className='normal h7 medium indigo'>View More Products…</p>
                                    <ChevronRightRounded className='icon indigo'/>
                             </Button>
                            </Stack>
                        </Grid>
                    )
                } )
            }
        </Grid>
    </Container>
  )
}

export default Productlist
