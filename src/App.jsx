import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import NavBar from './components/navBar/NavBar'
import Card from './components/premiumCard/Card'
import Cards from './components/premiumCard/Cards'
import PremiumCard from './components/premiumCard/PremiumCard'
import Review from './components/review/Review'

const data = fetch('cardData.json')
.then(res => res.json())

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Review />
      <PremiumCard />
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Cards data={data} />
      </Suspense>
    </>
  )
}

export default App
