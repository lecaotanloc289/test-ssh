import { Button, ButtonGroup, Container, FormControl, IconButton, InputLabel, MenuItem, Stack, TextField } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react'
import './CardProduct.scss'
import { images } from '../../../assets/images'
import { ShoppingCart, StarOutline } from '@mui/icons-material'
import icons from '../../../assets/icons';

const CardProduct = () => {
    // const [age, setAge] = React.useState<String | Number>('');
    const [open, setOpen] = React.useState(false);

    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };


    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
    <Container className='productdetail' maxWidth="lg">
        <div className='cardcontainer'>
            <Stack className='stack' direction={'row'} spacing={10}>
                <Stack className='stack1' spacing={2}>
                    <div className="img-product">
                        <img className="imagecard" src={images.Cameradetail} alt="" />
                    </div>
                    <Stack className='img-detail' direction={'row'}>
                        <div className="imagedetail">
                            <img className="image-detail" src={images.Detail1} alt="" />
                        </div>
                        <div className="imagedetail">
                            <img className="image-detail" src={images.Detail2} alt="" />
                        </div>
                        <div className="imagedetail">
                            <img className="image-detail" src={images.Detail3} alt="" />
                        </div>
                    </Stack>
                </Stack>
                <Stack className='stack2' spacing={2}>
                    <Stack spacing={2}>
                        <p className="title">Sony Alpha Mirrorless 4K Video Camera (Body Only)</p>
                        <Stack className='info' direction={'row'}>
                            <div className='inforbuy'><StarOutline className='iconstar'/>4.6</div>
                            <p className="h81 dark-lightest95">261 Product sold</p>
                            <p className="h81 dark-lightest95">3,1k Product watched</p>
                        </Stack>
                        <p className="h8 regular dark-lighter5a">Sony α, is a camera system introduced on 5 June 2006.
                        It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount…<Button>Reade more</Button></p>
                    </Stack>
                    
                    <Stack className='stack4' direction={'row'} spacing={5}>
                        <Stack className='center' spacing={1}>
                            <p className='dark-lighter5a' >
                                Open the select
                            </p>
                            <FormControl >
                                <InputLabel  id="demo-controlled-open-select-label"></InputLabel>
                                <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                value={type}

                                label=""
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Red</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>  

                        <Stack className='center' spacing={1}>
                            <p className='dark-lighter5a'>
                               Quantity
                            </p>
                            <TextField
                                className='input div input'
                                id="outlined-number"
                                label=""
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Stack>
                    </Stack>

                    <Stack className='stack3' direction={'row '} spacing={2}>
                            <p className="price h3">1.999.999</p>
                            <Stack direction={'row'} spacing={2}>
                                <Button className=' learn-more' variant='outlined' >
                                <p className='normal h7 medium indigo'>Buy now</p>
                                </Button>
                                <Button className=' btn1' variant='contained'>
                                     <p className='normal h7 medium white'>Add to cart</p>
                                     <ShoppingCart/>
                                </Button>
                            </Stack>
                    </Stack>
                
                               
                </Stack>
                

             </Stack>
        </div>

    </Container>
  )
}

export default CardProduct
