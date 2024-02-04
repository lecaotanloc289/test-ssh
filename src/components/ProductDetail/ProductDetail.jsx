import { Container, Stack } from '@mui/material'
import React from 'react'
import CardProduct from './CardProduct/CardProduct'
import TabProduct from './TabProduct/TabProduct'
import { Description } from '@mui/icons-material'
import Descriptions from './Descriptions/Descriptions'
import Review from './Review/Review'
import Comment from './Comment/Comment'
import RealatedProduct from './RealatedProduct/RealatedProduct'

const ProductDetail = () => {
  return (
    <div>
        <CardProduct/>
        <TabProduct/>
        <Descriptions/>
        <Review/>
        <Comment/>
        <RealatedProduct/>
    </div>
  )
}

export default ProductDetail
