# auto-refresh stock prices

To auto-refresh stock prices on a stock website, you can use JavaScript to periodically fetch updated stock data and refresh the relevant parts of the webpage. Here's a step-by-step guide:

### 1. **Set up your HTML structure**
Create a basic HTML structure to display stock prices. For example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stock Prices</title>
  <style>
    body { font-family: Arial, sans-serif; }
    .stock { margin: 10px 0; }
  </style>
</head>
<body>
  <h1>Live Stock Prices</h1>
  <div id="stocks">
    <div class="stock" id="AAPL">AAPL: <span class="price">Loading...</span></div>
    <div class="stock" id="TSLA">TSLA: <span class="price">Loading...</span></div>
  </div>
  <script src="stocks.js"></script>
</body>
</html>
```

---

### 2. **Write the JavaScript to Fetch Prices**
Use JavaScript to fetch stock data periodically (e.g., every 5 seconds) using an API like Yahoo Finance, Alpha Vantage, or a free alternative.

#### Example (`stocks.js`):
```javascript
// Set API endpoint (replace with your API)
const API_URL = "https://api.example.com/stock_prices";

// List of stock symbols to track
const stockSymbols = ["AAPL", "TSLA"];

// Function to fetch stock prices
async function fetchStockPrices() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    // Update prices on the page
    stockSymbols.forEach(symbol => {
      const stockElement = document.getElementById(symbol);
      if (stockElement && data[symbol]) {
        stockElement.querySelector(".price").textContent = `$${data[symbol].toFixed(2)}`;
      }
    });
  } catch (error) {
    console.error("Error fetching stock prices:", error);
  }
}

// Auto-refresh prices every 5 seconds
setInterval(fetchStockPrices, 5000);

// Initial fetch
fetchStockPrices();
```

---

### 3. **Set up a Backend API (Optional)**
If you have your own backend server, it can query stock prices from a third-party API and send them to the front-end. 

#### Example in Node.js:
```javascript
const express = require("express");
const fetch = require("node-fetch");

const app = express();
const API_KEY = "YOUR_API_KEY"; // Use a real API key
const STOCK_API_URL = "https://api.example.com/stocks";

app.get("/stock_prices", async (req, res) => {
  try {
    const response = await fetch(`${STOCK_API_URL}?apikey=${API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching stock prices:", error);
    res.status(500).send("Error fetching stock prices");
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

---

### 4. **Host the Website**
- Host your website on a platform like **Netlify**, **Vercel**, or any static hosting service.
- If you need a backend API, host it on services like **Heroku**, **Render**, or **AWS Lambda**.

---

### 5. **Tips for Production**
- Use **WebSocket** for real-time updates to reduce latency and avoid excessive API calls.
- Implement caching for API responses to reduce API usage.
- Ensure you adhere to the API provider's rate limits.
- Add error handling and fallback mechanisms for when the API is unavailable.

This setup ensures stock prices are refreshed automatically and displayed live on your website.
