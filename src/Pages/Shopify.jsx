import React from 'react'
import Navbar from '../components/Navbar'
import Shopifyhero from '../Sections/shopify/Shopifyhero'
import ShopifyIncluded from '../Sections/shopify/Shopifyincluded'
import ShopifyWhyChoose from '../Sections/shopify/Shopifywhychoose'
import ShopifyProcess from '../Sections/shopify/Shopifyprocess'
import ShopifyCTA from '../Sections/shopify/Shopifycta'
import Footer from "../sections/Footer";
const Shopify = () => {
  return (
    <div id='shopify'>
     <Navbar/>
     <Shopifyhero/>
    <ShopifyIncluded/>
    <ShopifyWhyChoose/>
    <ShopifyProcess/>
    <ShopifyCTA/> 
    <Footer/>
    </div>
  )
}

export default Shopify
