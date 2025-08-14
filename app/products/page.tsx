"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Star, 
  ShoppingCart, 
  ExternalLink,
  Headphones,
  Keyboard,
  Mouse,
  Monitor,
  Gamepad,
  Speaker
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample product data - replace with your actual Amazon affiliate products
const products = [
  {
    id: 1,
    name: "HyperX Cloud II Gaming Headset",
    category: "headsets",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 12500,
    image: "/api/placeholder/300/200",
    description: "7.1 Surround Sound, Memory Foam, Detachable Mic",
    amazonLink: "https://amazon.com/dp/B00SAYCVTQ",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Logitech G Pro X Mechanical Keyboard",
    category: "keyboards",
    price: 129.99,
    originalPrice: 149.99,
    rating: 4.4,
    reviews: 3200,
    image: "/api/placeholder/300/200",
    description: "GX Blue Clicky Switches, RGB, Detachable Cable",
    amazonLink: "https://amazon.com/dp/B07TKNJ8MW",
    badge: "Editor's Choice"
  },
  {
    id: 3,
    name: "Razer DeathAdder V3 Pro",
    category: "mice",
    price: 159.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviews: 8900,
    image: "/api/placeholder/300/200",
    description: "30K DPI Optical Sensor, Wireless, 90hr Battery",
    amazonLink: "https://amazon.com/dp/B0B5B5B5B5",
    badge: "Premium Pick"
  },
  {
    id: 4,
    name: "ASUS TUF Gaming VG27AQ",
    category: "monitors",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.3,
    reviews: 2100,
    image: "/api/placeholder/300/200",
    description: "27\" 1440p, 165Hz, G-Sync Compatible",
    amazonLink: "https://amazon.com/dp/B07W6JFYWN",
    badge: "Best Value"
  },
  {
    id: 5,
    name: "SteelSeries Arctis 7+",
    category: "headsets",
    price: 149.99,
    originalPrice: 169.99,
    rating: 4.4,
    reviews: 5600,
    image: "/api/placeholder/300/200",
    description: "Wireless, 30hr Battery, ClearCast Mic",
    amazonLink: "https://amazon.com/dp/B09B8W5FW7",
    badge: "Wireless"
  },
  {
    id: 6,
    name: "Corsair K70 RGB MK.2",
    category: "keyboards",
    price: 169.99,
    originalPrice: 189.99,
    rating: 4.5,
    reviews: 4200,
    image: "/api/placeholder/300/200",
    description: "Cherry MX Red, PBT Keycaps, Media Controls",
    amazonLink: "https://amazon.com/dp/B07DGR98VQ",
    badge: "Premium"
  }
];

const categories = [
  { id: "all", name: "All Products", icon: Filter },
  { id: "headsets", name: "Headsets", icon: Headphones },
  { id: "keyboards", name: "Keyboards", icon: Keyboard },
  { id: "mice", name: "Gaming Mice", icon: Mouse },
  { id: "monitors", name: "Monitors", icon: Monitor },
  { id: "controllers", name: "Controllers", icon: Gamepad },
  { id: "audio", name: "Audio", icon: Speaker }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  const handleAmazonClick = (product: typeof products[0]) => {
    // Track affiliate click
    console.log(`Affiliate click: ${product.name}`);
    window.open(product.amazonLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary/15 -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-primary/10 rotate-45 animate-pulse delay-2000"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-primary to-purple-400 bg-clip-text text-transparent">
              Gaming Gear Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the best gaming equipment at unbeatable prices. All products are carefully tested and recommended by our team.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/5 border border-white/20 h-fit rounded-md px-3 py-2 text-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group bg-black/20 backdrop-blur-sm border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="animate-pulse">
                      {product.badge}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      <Badge variant="destructive" className="text-xs">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleAmazonClick(product)}
                      className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Amazon
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="group-hover:border-primary group-hover:text-primary"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
} 