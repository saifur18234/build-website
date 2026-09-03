# TechStore - Full Stack E-Commerce Website

A modern, full-stack e-commerce application built with **React** (Frontend) and **Node.js/Express** (Backend).

## Features

### 🛍️ Unique Features
- **Smart Product Search** - Search products by name or description
- **Category Filtering** - Filter products by categories (Electronics, Accessories, Peripherals)
- **Product Ratings** - Each product has ratings and reviews count
- **Dynamic Shopping Cart** - Add, remove, and update quantities in real-time
- **Cart Persistence** - Cart sidebar with smooth animations
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Beautiful gradient hero section and intuitive navigation

### Core Features
✅ Product catalog with 6 curated tech products
✅ Advanced shopping cart management
✅ Product filtering and search functionality
✅ Category-based browsing
✅ Responsive sidebar cart
✅ Checkout simulation
✅ Beautiful dark theme UI
✅ Star ratings and reviews

## Tech Stack

### Frontend
- **React 18** (via CDN)
- **HTML5** & **CSS3**
- **Babel Standalone** (for JSX transformation)
- **Font Awesome Icons**
- **Google Fonts (Poppins)**

### Backend
- **Node.js**
- **Express.js**
- **CORS**
- **dotenv**

## Project Structure

```
.
├── index.html          # Main HTML file with React root
├── app.js              # React application (JSX)
├── style.css           # Complete styling for e-commerce UI
├── server.js           # Express backend server
├── package.json        # Dependencies and scripts
└── assets/             # Images and static files
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Start the backend server:**
```bash
npm start
```
The server will run on `http://localhost:5000`

3. **Open the frontend:**
Open `index.html` in your browser or serve it with a local server:
```bash
# Using Python
python -m http.server 8000

# Or using Node http-server
npx http-server
```

Visit `http://localhost:8000` (or your server URL)

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/categories` - Get all categories
- `GET /api/search?q=<term>&category=<cat>` - Search products

### Shopping Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add to cart (`{productId, quantity}`)
- `PUT /api/cart/:productId` - Update quantity (`{quantity}`)
- `DELETE /api/cart/:productId` - Remove from cart

### Checkout
- `POST /api/checkout` - Process checkout (`{email, address}`)

## Product Catalog

1. **Premium Headphones** - $129.99 ⭐ 4.5/5 (128 reviews)
2. **Smart Watch** - $199.99 ⭐ 4.7/5 (95 reviews)
3. **Wireless Mouse** - $49.99 ⭐ 4.3/5 (234 reviews)
4. **USB-C Cable** - $14.99 ⭐ 4.2/5 (512 reviews)
5. **Mechanical Keyboard** - $89.99 ⭐ 4.6/5 (178 reviews)
6. **Monitor Stand** - $34.99 ⭐ 4.4/5 (89 reviews)

## How to Use

### 1. Browse Products
- View all tech products in the main grid
- See product images, names, descriptions, and prices

### 2. Search & Filter
- Use the search bar to find products by name or description
- Click category buttons to filter by type
- Combine search and filter for precise results

### 3. Shopping
- Click "Add to Cart" to add products to your cart
- View cart by clicking the cart icon in the navbar
- Adjust quantities or remove items from the cart

### 4. Checkout
- Click "Proceed to Checkout" in the cart sidebar
- Enter email and address
- Get order confirmation with order ID

## Key Components

### Frontend (React)
- **App Component** - Main application container
- **ProductCard Component** - Individual product display
- **ShoppingCart Component** - Cart sidebar with items

### Backend (Express)
- **Products Routes** - Product listing and search
- **Cart Routes** - Cart CRUD operations
- **Checkout Route** - Order processing

## Styling Highlights

- **Color Scheme**: Dark theme with cyan accents (#38bdf8)
- **Responsive Grid**: Auto-fill product grid for all screen sizes
- **Smooth Animations**: Transitions and hover effects throughout
- **Accessible Design**: Semantic HTML and ARIA labels
- **Mobile Optimized**: Breakpoints for tablets and phones

## Environment Variables

Create a `.env` file (optional):
```
PORT=5000
```

## Future Enhancements

- User authentication & profiles
- Wishlist functionality
- Product reviews & ratings submission
- Payment gateway integration
- Order history
- Admin dashboard
- Email notifications
- Inventory management

## License

© 2026 TechStore. All rights reserved.

## Author

MD. Saifur Rahman
- GitHub: [@saifur18234](https://github.com/saifur18234)
- Email: saifurrahman@gmail.com
