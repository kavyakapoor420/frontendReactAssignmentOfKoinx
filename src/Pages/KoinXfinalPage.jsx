

import BitCoinPriceChart from "../Components/BitCoinPriceChart"
import Section from "../Components/Section"
import TopOfPage from "../Components/TopOfpage"
import Performance from "../Components/Performace"
import Sentiment from "../Components/Sentiment"
import AboutBitcoin from "../Components/AboutBitcoin"
import Tokenomics from "../Components/Tokenomics"
import GetStarted from "../Components/GetStarted"
import TrendingCoins24h from "../Components/TrendingCoin24h"
import Suggestion from "../Components/Suggestion"
import CardForTeam from "../Components/CardForTeam"

const KoinXfinalPage = () => {
  return (
   
    <div className="h-full w-screen bg-slate-200/40">
    <TopOfPage/>

    <div className="w-screen lg:flex">
      <div className="lg:w-8/12 lg:ml-14 mx-4">
          <BitCoinPriceChart/>
           <Section/>
           <Performance/>
           <Sentiment/>
           <AboutBitcoin/>
           <Tokenomics/>
           <CardForTeam/>
      </div>
      <div className="lg:w-4/12 lg:mr-14 mx-4">
        <GetStarted/>
        <TrendingCoins24h/>
      </div>
      
    </div>
      <Suggestion/>
  </div>
  )
}

export default KoinXfinalPage