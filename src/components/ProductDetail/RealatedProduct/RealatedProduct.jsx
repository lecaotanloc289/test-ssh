import { Button, Card, CardActionArea, Container, Grid, Rating, Stack } from '@mui/material'
import React from 'react'
import './RealatedProduct.scss'
import { images } from '../../../assets/images'

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
      Img: images.iphone,
      Name: "iPhone XS Max Pro",
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
    }
  
]
const RealatedProduct = () => {
  return (
        <Container className='RealatedProduct' maxWidth='lg'>
            <Stack className='productstack1'>
                <Stack className="productname flex-space-between" direction={'row'}>
                    <p className="namecate h2 medium">Category</p>
                    <Button className='btnproduct ' variant='outlined'>
                        <p className='normal h7 medium indigo'>View All</p>
                    </Button>
                </Stack> 

                < Stack className='stack2'>
       <Grid container spacing={2}>
          {
            items.map((item) => {
              return(
                <Grid item xs={3}>
                <CardActionArea>
                <Card className='card-item' >
                  <Stack className='stackheader' direction={'row'}>
                    <div className='csale' >
                        <p className="sale h9">SALE</p>
                    </div>
                   
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

                
                </Card>
                </CardActionArea>
              </Grid>
              )
            })
          }  
      </Grid>

      </Stack>           
        </Stack>
        </Container>
  )
}

export default RealatedProduct
