
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/daisuNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingCard from './Components/PricingCard/PricingOption'
import PricingOption from './Components/PricingCard/PricingOption'
import ResultData from './Components/RerultData/ResultData'
 
const pricingPromice= fetch('pricingData.json')
.then(res=>res.json())

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
       <Suspense fallback={<span className="loading loading-spinner text-secondary"></span>}>
   <PricingOption key={pricingPromice.id} pricingPromice={pricingPromice}></PricingOption>
       </Suspense>
      </main>
      <footer>
        <ResultData></ResultData>
      </footer>

    </>
  )
}

export default App
