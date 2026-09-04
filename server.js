const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Products database (in-memory for now)
const products = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 129.99,
    category: 'Electronics',
    image: 'https://via.placeholder.com/300x300?text=Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    category: 'Electronics',
    image: 'https://via.placeholder.com/300x300?text=SmartWatch',
    description: 'Advanced smartwatch with health tracking',
    rating: 4.7,
    reviews: 95
  },
  {
    id: 3,
    name: 'Wireless Mouse',
    price: 49.99,
    category: 'Accessories',
    image: 'https://via.placeholder.com/300x300?text=Mouse',
    description: 'Ergonomic wireless mouse with precision control',
    rating: 4.3,
    reviews: 234
  },
  {
    id: 4,
    name: 'USB-C Cable',
    price: 14.99,
    category: 'Accessories',
    image: 'https://via.placeholder.com/300x300?text=USBCable',
    description: 'Durable 6ft USB-C charging and data cable',
    rating: 4.2,
    reviews: 512
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: 89.99,
    category: 'Peripherals',
    image: 'https://via.placeholder.com/300x300?text=Keyboard',
    description: 'RGB mechanical keyboard for gaming and typing',
    rating: 4.6,
    reviews: 178
  },
  {
    id: 6,
    name: 'Monitor Stand',
    price: 34.99,
    category: 'Accessories',
    image: 'https://via.placeholder.com/300x300?text=MonitorStand',
    description: 'Adjustable monitor stand with storage',
    rating: 4.4,
    reviews: 89
  }
];

// Routes

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// Search products
app.get('/api/search', (req, res) => {
  const { q, category } = req.query;
  let results = products;
  
  if (q) {
    results = results.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase())
    );
  }
  
  if (category) {
    results = results.filter(p => p.category === category);
  }
  
  res.json(results);
});

// Get categories
app.get('/api/categories', (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json(categories);
});

// Cart operations (in-memory)
const cart = [];

app.get('/api/cart', (req, res) => {
  res.json(cart);
});

app.post('/api/cart', (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  
  if (!product) return res.status(404).json({ message: 'Product not found' });
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity
    });
  }
  
  res.json(cart);
});

app.delete('/api/cart/:productId', (req, res) => {
  const index = cart.findIndex(item => item.id === parseInt(req.params.productId));
  if (index > -1) {
    cart.splice(index, 1);
  }
  res.json(cart);
});

app.put('/api/cart/:productId', (req, res) => {
  const { quantity } = req.body;
  const item = cart.find(item => item.id === parseInt(req.params.productId));
  
  if (!item) return res.status(404).json({ message: 'Item not in cart' });
  
  if (quantity <= 0) {
    const index = cart.indexOf(item);
    cart.splice(index, 1);
  } else {
    item.quantity = quantity;
  }
  
  res.json(cart);
});

// Checkout simulation
app.post('/api/checkout', (req, res) => {
  const { email, address } = req.body;
  
  if (!email || !address) {
    return res.status(400).json({ message: 'Email and address required' });
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const orderId = `ORD-${Date.now()}`;
  
  const order = {
    orderId,
    email,
    address,
    items: cart,
    total: total.toFixed(2),
    status: 'Pending',
    createdAt: new Date()
  };
  
  // Clear cart after checkout
  cart.length = 0;
  
  res.json(order);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🛍️  E-Commerce Server running on http://localhost:${PORT}`);
});
