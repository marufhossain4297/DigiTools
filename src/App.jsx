import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import NavBar from './components/navBar/NavBar'
import Cards from './components/premiumCard/Cards'
import PremiumCard from './components/premiumCard/PremiumCard'
import Review from './components/review/Review'
import Account from './components/account/Account'
import Pricings from './components/pricing/Pricings'
import WorkFlow from './components/workflow/WorkFlow'
import Footer from './components/footer/Footer'
import Carts from './components/carts/Carts'
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify'
const data = fetch('cardData.json')
  .then(res => res.json())

const pricingData = fetch('pricing.json')
  .then(res => res.json())

function App() {
  const [product, setProduct] = useState('product')
  return (
    <>
      <NavBar />
      <Banner />
      <Review />
      <PremiumCard product={product} setProduct={setProduct} />
      <Suspense fallback={
        <div className=' flex justify-center items-center w-full my-30'>
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }>
        {
          product === 'product' ? <Cards data={data} /> : <Carts data={data}></Carts>
        }
      </Suspense>
      <Account />
      <Suspense>
        <Pricings pricingData={pricingData}></Pricings>
      </Suspense>
      <WorkFlow />
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
