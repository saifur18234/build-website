# 🛍️ TechStore - Quick Start Guide

## What's Been Built

A complete **full-stack e-commerce website** with:
- ✅ Modern React frontend
- ✅ Express.js backend with REST APIs
- ✅ Shopping cart functionality
- ✅ Product search & filtering
- ✅ Beautiful dark theme UI
- ✅ Responsive mobile design

## Files Created

```
├── server.js              # Express API backend (5000)
├── app.js                 # React application (JSX)
├── index.html             # Main HTML with React root
├── style.css              # Modern e-commerce styling
├── package.json           # Dependencies & scripts
├── .env                   # Environment config
├── README.md              # Full documentation
└── node_modules/          # Dependencies (installed)
```

## Quick Start

### 1️⃣ Backend Server (Already Running ✅)
The server is running on **http://localhost:5000**

**API Endpoints:**
- `GET /api/products` - All products
- `GET /api/categories` - Product categories
- `GET /api/search?q=<term>` - Search products
- `POST /api/cart` - Add to cart
- `DELETE /api/cart/:id` - Remove from cart

### 2️⃣ Open Frontend
Open `index.html` in your browser or serve with:
```bash
npx http-server
```
Then visit: **http://localhost:8000**

## Features

### 🎯 Product Catalog (6 Products)
1. Premium Headphones - $129.99 ⭐4.5
2. Smart Watch - $199.99 ⭐4.7
3. Wireless Mouse - $49.99 ⭐4.3
4. USB-C Cable - $14.99 ⭐4.2
5. Mechanical Keyboard - $89.99 ⭐4.6
6. Monitor Stand - $34.99 ⭐4.4

### 🛒 Shopping Features
- **Add to Cart** - Click any product's "Add to Cart" button
- **View Cart** - Click the cart icon (top-right) to open sidebar
- **Adjust Quantity** - Use +/- buttons in cart
- **Remove Items** - Click trash icon to remove
- **Live Total** - See total price update instantly

### 🔍 Search & Filter
- **Search Bar** - Type product names or features
- **Category Filter** - Filter by Electronics, Accessories, Peripherals
- **Combine Both** - Search + filter together for precise results

### 💫 Unique UI Features
- Dark theme with cyan accents
- Smooth animations & hover effects
- Responsive product grid
- Sliding cart sidebar
- Product ratings with star display
- Category badges on products
- Gradient hero section
- Professional footer with social links

## Tech Stack

**Frontend:**
- React 18 (via CDN)
- HTML5 & CSS3
- Font Awesome Icons
- Google Fonts (Poppins)

**Backend:**
- Node.js
- Express.js
- CORS enabled
- dotenv for config

## Testing the API

```bash
# Get all products
curl http://localhost:5000/api/products

# Search products
curl "http://localhost:5000/api/search?q=headphones"

# Get categories
curl http://localhost:5000/api/categories
```

## Stopping the Server

```bash
# Stop Node server (if running in terminal)
Ctrl + C

# Or find and stop the process
Get-Process node | Stop-Process -Force
```

## Next Steps (Future Enhancements)

- [ ] User authentication (login/signup)
- [ ] Database integration (MongoDB)
- [ ] Payment gateway (Stripe/PayPal)
- [ ] User accounts & order history
- [ ] Admin dashboard
- [ ] Product reviews submission
- [ ] Wishlist functionality
- [ ] Email notifications

## Troubleshooting

**Server won't start?**
```bash
# Make sure port 5000 is free
netstat -ano | findstr :5000

# Kill process using port 5000
taskkill /PID <PID> /F
```

**CORS errors?**
- Backend already has CORS enabled
- Make sure frontend requests to `http://localhost:5000`

**Frontend not loading products?**
- Check if server is running: `npm start`
- Open browser DevTools (F12) and check Network tab
- Verify API response in Console

---

🎉 **Your e-commerce website is ready to use!**

For more details, see **README.md**
