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

const data = fetch('cardData.json')
.then(res => res.json())

const pricingData = fetch('pricing.json')
.then(res => res.json())

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Review />
      <PremiumCard />
      <Suspense fallback={
         <div className=' flex justify-center items-center w-full my-30'>
          <span className="loading loading-spinner loading-xl"></span>
          </div>
        }>
        <Cards data={data} />
      </Suspense>
      <Account />
      <Suspense>
        <Pricings pricingData={pricingData}></Pricings>
      </Suspense>
      <WorkFlow />
      <Footer></Footer>
    </>
  )
}

export default App
