export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  rating: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Coffee Maker",
    description:
      "Professional grade coffee maker with advanced brewing technology",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1594622848024-323bdec6ddb1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Fast Brewing", "Energy Saving"],
    rating: 4.8,
    stock: 15,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    features: ["Noise Cancelling", "Bluetooth 5.0"],
    rating: 4.5,
    stock: 20,
  },
  {
    id: 3,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60",
    features: ["Health Tracking", "Water Resistant"],
    rating: 4.7,
    stock: 10,
  },
  {
    id: 4,
    name: "Gaming Laptop",
    description: "High-performance gaming laptop with RTX graphics",
    price: 1499.99,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60",
    features: ["RTX Graphics", "High Refresh Rate"],
    rating: 4.9,
    stock: 5,
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    description: "True wireless earbuds with premium sound quality",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&auto=format&fit=crop&q=60",
    features: ["True Wireless", "Premium Sound"],
    rating: 4.6,
    stock: 25,
  },
  {
    id: 6,
    name: "Smart Speaker",
    description: "Voice-controlled smart speaker with premium audio",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&auto=format&fit=crop&q=60",
    features: ["Voice Control", "Premium Audio"],
    rating: 4.4,
    stock: 30,
  },
  {
    id: 7,
    name: "4K Monitor",
    description: "Ultra HD monitor with HDR support",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=60",
    features: ["4K Resolution", "HDR Support"],
    rating: 4.7,
    stock: 8,
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with customizable keys",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=60",
    features: ["RGB Lighting", "Mechanical Switches"],
    rating: 4.5,
    stock: 15,
  },
  {
    id: 9,
    name: "Gaming Mouse",
    description: "High-precision gaming mouse with RGB lighting",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=60",
    features: ["RGB Lighting", "High DPI"],
    rating: 4.6,
    stock: 20,
  },
  {
    id: 10,
    name: "Wireless Charger",
    description: "Fast wireless charging pad with multiple device support",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=60",
    features: ["Fast Charging", "Multi-Device"],
    rating: 4.3,
    stock: 25,
  },
  {
    id: 11,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with waterproof design",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=60",
    features: ["Waterproof", "Portable"],
    rating: 4.5,
    stock: 18,
  },
  {
    id: 12,
    name: "Smart Home Hub",
    description: "Central control for all your smart home devices",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1728971825338-be9230fd4029?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Voice Control", "Multi-Device"],
    rating: 4.7,
    stock: 12,
  },
  {
    id: 13,
    name: "VR Headset",
    description: "Immersive virtual reality headset with motion tracking",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&auto=format&fit=crop&q=60",
    features: ["Motion Tracking", "High Resolution"],
    rating: 4.8,
    stock: 8,
  },
  {
    id: 14,
    name: "Smart Thermostat",
    description: "Energy-saving smart thermostat with app control",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Energy Saving", "App Control"],
    rating: 4.6,
    stock: 15,
  },
  {
    id: 15,
    name: "Security Camera",
    description: "HD security camera with night vision and motion detection",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1617897711385-df9c86b7dfe3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Night Vision", "Motion Detection"],
    rating: 4.4,
    stock: 20,
  },
];
