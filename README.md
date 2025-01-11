## Live Demo

live demo of the my assignment at: [Deployed Website](https://kavyakapoorassignment.vercel.app/)


# Bitcoin Dashboard

This project implements a Bitcoin Dashboard as per the provided [Figma design](https://www.figma.com/design/VRj5MqVPoQdj5N7AwmYc98/KoinX---Frontend-Intern-Assignment?node-id=1-496&t=1LdrRo03ZP8Skxhq-0). It fetches real-time cryptocurrency data using Coingecko's APIs and embeds TradingView charts for visualization. The application is responsive and matches the design specifications.

## Features

1. **Bitcoin Price Display**: 
   - Fetches Bitcoin price in USD and INR using Coingecko's `/simple/price` API.
   - Displays the 24-hour change in USD price.

2. **Advanced Chart Component**: 
   - Embeds TradingView's advanced BTCUSD chart widget.
   - Customized to align with the Figma design.

3. **Trending Coins (24h)**:
   - Fetches the top 3 trending coins using Coingecko's `/search/trending` API.
   - Displays coin logo, name, and symbol.

4. ** Also** :
   - Displays trending coin details such as logo, symbol, price, 24-hour change, and a price graph.
   - Uses the `sparkline` data from the API for price graphs.
   - Presented as a horizontally scrollable carousel.

5. **Responsiveness**:
   - Fully responsive layout that adapts to various screen sizes.

---

## API Details

### Coingecko API Documentation
- **Base URL**: [Coingecko API](https://www.coingecko.com/api/documentation)

### `/simple/price` Endpoint
Fetch Bitcoin price in USD and INR:
- **Parameters**:
  - `ids`: bitcoin
  - `vs_currencies`: inr,usd
  - `include_24hr_change`: true
- **Sample Response**:
  ```json
  {
    "bitcoin": {
      "inr": 5697177,
      "inr_24h_change": 3.6596920153414336,
      "usd": 68726,
      "usd_24h_change": 3.6767559459431545
    }
  }
