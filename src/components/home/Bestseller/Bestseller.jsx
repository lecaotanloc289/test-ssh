import { Avatar, CardActions, CardHeader, CardMedia, Collapse, Container, Grid, IconButton, Rating, Stack, Typography, dividerClasses } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { red } from '@mui/material/colors';
import './Bestseller.scss'
import { Favorite, ShoppingCart, Visibility, VisibilityOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { image } from '../../../assets/images'

const items = [
  {
    Img: image.Bitmap,
    Name: "Samsung Galaxy Watch 3",
    Category: "Men Fashion",
    Price: 172500,
    Rating: 5
  },
  {
    Img: image.clock,
    Name: "Apple Watch 4 2020",
    Category: "Men Fashion",
    Price: 1999,
    Rating: 5
  },
  {
    Img: image.clock1,
    Name: "iPhone XS Max Pro",
    Category: "Men Fashion",
    Price: 1999,
    Rating: 5
  },
  {
    Img: image.Bitmap,
    Name: "Beats by Dre C 3450",
    Category: "Men Fashion",
    Price: 1999,
    Rating: 5
  },
  {
    Img: image.sweat,
    Name: "Airpods 2nd Gen",
    Category: "Men Fashion",
    Price: 1999,
    Rating: 5
  },
  {
    Img: image.Air,
    Name: "DonGarmin Watch Fit Xgho",
    Category: "Men Fashionen",
    Price: 1999,
    Rating: 5
  },
  {
    Img: image.iphone,
    Name: "Women Yellow Turtleneck",
    Category: "Men Fashion",
    Price: 1999,
    Rating: 4
  },
  {
    Img: image.Bitmap,
    Name: "Harman Kardon Speaker",
    Category: "Men Fashion",
    Price: 1999,
    Rating: 3.5
  }


]


const card = (
  <React.Fragment>
    <Stack className='stackheader' direction={'row'}>
       <div className='csale' >
          <p className="sale h9">SALE</p>
      </div> 
      <IconButton >
        <Favorite />   
      </IconButton>
    </Stack>

    <Stack className="img">
        <img src={image.Bitmap} alt="" />
    </Stack> 

    <Stack>
      <p className=""></p>
    </Stack>
    </React.Fragment>
  );


const Bestseller = () => { 
  return (
    <Container className='bestseller'  maxWidth="lg">
      <Stack className='stack1'>
        <p className="name h2">Best Seller Products</p>
        <p className="content content h8 regular dark-lightest95">Check our best seller products on Elma website right now</p>
      </Stack>

      < Stack className='stack2'>
       <Grid container spacing={2}>
          {
            items.map((item) => {
              return(
                <Grid item xs={3}>
                <Card className='card-item' >
                  <Stack className='stackheader' direction={'row'}>
                    <div className='csale' >
                        <p className="sale h9">SALE</p>
                    </div>
                    <IconButton className='heart'>
                      <Favorite />   
                    </IconButton>
                  </Stack>
                  <Stack className="img"  spacing={1}>
                      <img  style={{height: '180px'}} src={item.Img} alt="" />
                  </Stack> 
                  <Stack className="title" spacing={1}>
                      <p className="cate">{item.Category}</p>
                      <p className='name'>{item.Name}</p>
                      <Stack className='pr' direction={'row'}>
                         <p className="price h7 medium indigo">{item.Price}</p>
                         <Rating className ='rating' name="half-rating" defaultValue={item.Rating} precision={0.5} />
                      </Stack>
                  </Stack>

                  <Stack className="btncard" spacing={1}>
                    <Button className='btn btn1' variant='contained'>
                        <p className='normal h7 medium white'>
                          <ShoppingCart className='icon'/>
                          Add to cart</p>
                    </Button>
                    <Button className='btn btn2' variant='outlined' >
                      <p className='normal h7 medium indigo'>
                        <Visibility className='icon'/>
                        Quick view
                      </p>
                    </Button>
                  </Stack>
                </Card>
              </Grid>
              )
            })
          }  
      </Grid>

      </Stack>

    </Container>
  )
}

export default Bestseller
