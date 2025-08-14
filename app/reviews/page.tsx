"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  CheckCircle, 
  XCircle, 
  ExternalLink,
  ArrowRight,
  Headphones,
  Keyboard,
  Mouse,
  Monitor,
  Gamepad,
  Speaker,
  Award,
  Users,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample brand review data - replace with your actual brand reviews
const brandReviews = [
  {
    id: 1,
    name: "HyperX",
    logo: "/api/placeholder/100/100",
    overallRating: 4.6,
    totalReviews: 15000,
    category: "Audio & Gaming",
    description: "HyperX is a division of HP Inc. that produces gaming peripherals, primarily headsets, keyboards, mice, and memory modules.",
    pros: [
      "Excellent build quality",
      "Great value for money",
      "Comfortable for long gaming sessions",
      "Good customer support",
      "Wide product range"
    ],
    cons: [
      "Some products can be pricey",
      "Limited wireless options",
      "Software could be improved"
    ],
    topProducts: [
      {
        name: "HyperX Cloud II Gaming Headset",
        price: 79.99,
        rating: 4.5,
        amazonLink: "https://amazon.com/dp/B00SAYCVTQ",
        category: "headsets"
      },
      {
        name: "HyperX Alloy Origins Core",
        price: 89.99,
        rating: 4.4,
        amazonLink: "https://amazon.com/dp/B07W6JFYWN",
        category: "keyboards"
      }
    ],
    lastUpdated: "2024-01-15",
    badge: "Top Pick"
  },
  {
    id: 2,
    name: "Logitech",
    logo: "/api/placeholder/100/100",
    overallRating: 4.4,
    totalReviews: 25000,
    category: "Peripherals",
    description: "Logitech is a Swiss company that designs and manufactures computer peripherals and software, including keyboards, mice, speakers, and webcams.",
    pros: [
      "Reliable and durable",
      "Excellent wireless technology",
      "Great software ecosystem",
      "Wide compatibility",
      "Good warranty support"
    ],
    cons: [
      "Premium pricing",
      "Some products lack innovation",
      "Software can be resource-heavy"
    ],
    topProducts: [
      {
        name: "Logitech G Pro X Mechanical Keyboard",
        price: 129.99,
        rating: 4.4,
        amazonLink: "https://amazon.com/dp/B07TKNJ8MW",
        category: "keyboards"
      },
      {
        name: "Logitech G502 HERO Gaming Mouse",
        price: 49.99,
        rating: 4.6,
        amazonLink: "https://amazon.com/dp/B07GBZ4Q68",
        category: "mice"
      }
    ],
    lastUpdated: "2024-01-10",
    badge: "Reliable"
  },
  {
    id: 3,
    name: "Razer",
    logo: "/api/placeholder/100/100",
    overallRating: 4.2,
    totalReviews: 18000,
    category: "Gaming",
    description: "Razer Inc. is a Singaporean-American multinational technology company that designs, develops, and sells consumer electronics, financial services, and gaming hardware.",
    pros: [
      "Cutting-edge technology",
      "Excellent RGB lighting",
      "Gaming-focused features",
      "Premium build quality",
      "Strong brand recognition"
    ],
    cons: [
      "Expensive pricing",
      "Software can be buggy",
      "Some products have durability issues",
      "Customer service varies"
    ],
    topProducts: [
      {
        name: "Razer DeathAdder V3 Pro",
        price: 159.99,
        rating: 4.6,
        amazonLink: "https://amazon.com/dp/B0B5B5B5B5",
        category: "mice"
      },
      {
        name: "Razer BlackShark V2 Pro",
        price: 179.99,
        rating: 4.3,
        amazonLink: "https://amazon.com/dp/B08F7PTF54",
        category: "headsets"
      }
    ],
    lastUpdated: "2024-01-12",
    badge: "Premium"
  },
  {
    id: 4,
    name: "SteelSeries",
    logo: "/api/placeholder/100/100",
    overallRating: 4.3,
    totalReviews: 12000,
    category: "Gaming",
    description: "SteelSeries is a Danish manufacturer of gaming peripherals and accessories, including headsets, keyboards, mice, and mousepads.",
    pros: [
      "Excellent audio quality",
      "Comfortable designs",
      "Good wireless performance",
      "Innovative features",
      "Professional-grade products"
    ],
    cons: [
      "High price point",
      "Limited budget options",
      "Software learning curve",
      "Some products are bulky"
    ],
    topProducts: [
      {
        name: "SteelSeries Arctis 7+",
        price: 149.99,
        rating: 4.4,
        amazonLink: "https://amazon.com/dp/B09B8W5FW7",
        category: "headsets"
      },
      {
        name: "SteelSeries Apex Pro",
        price: 199.99,
        rating: 4.5,
        amazonLink: "https://amazon.com/dp/B07V3QN8WT",
        category: "keyboards"
      }
    ],
    lastUpdated: "2024-01-08",
    badge: "Audio Expert"
  }
];

const categories = [
  { id: "all", name: "All Brands", icon: Award },
  { id: "headsets", name: "Headsets", icon: Headphones },
  { id: "keyboards", name: "Keyboards", icon: Keyboard },
  { id: "mice", name: "Gaming Mice", icon: Mouse },
  { id: "monitors", name: "Monitors", icon: Monitor },
  { id: "controllers", name: "Controllers", icon: Gamepad },
  { id: "audio", name: "Audio", icon: Speaker }
];

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const filteredReviews = brandReviews.filter(review => {
    const hasCategoryProducts = review.topProducts.some(product => 
      selectedCategory === "all" || product.category === selectedCategory
    );
    return hasCategoryProducts;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.overallRating - a.overallRating;
      case "reviews":
        return b.totalReviews - a.totalReviews;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleAmazonClick = (product: any) => {
    console.log(`Affiliate click: ${product.name}`);
    window.open(product.amazonLink, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : i < rating
            ? "text-yellow-400 fill-current opacity-50"
            : "text-gray-400"
        }`}
      />
    ));
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
              Brand Reviews
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In-depth analysis of gaming gear brands. We test products, analyze customer feedback, and provide honest recommendations.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
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

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/5 border border-white/20 rounded-md px-3 py-2 text-white"
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Brand Reviews Grid */}
          <div className="space-y-8">
            {sortedReviews.map((review) => (
              <Card key={review.id} className="bg-black/20 backdrop-blur-sm border-white/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-2xl">{review.name}</CardTitle>
                          <Badge variant="secondary">{review.badge}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            {renderStars(review.overallRating)}
                            <span>{review.overallRating}/5</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{review.totalReviews.toLocaleString()} reviews</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>Updated {new Date(review.lastUpdated).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{review.category}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <CardDescription className="text-base">
                    {review.description}
                  </CardDescription>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Pros */}
                    <div>
                      <h4 className="font-semibold mb-3 text-green-400 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Pros
                      </h4>
                      <ul className="space-y-2">
                        {review.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="font-semibold mb-3 text-red-400 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        Cons
                      </h4>
                      <ul className="space-y-2">
                        {review.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <XCircle className="h-3 w-3 text-red-400 mt-0.5 flex-shrink-0" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Top Products */}
                  <div>
                    <h4 className="font-semibold mb-4 text-primary">Top Products</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {review.topProducts.map((product, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium">{product.name}</h5>
                            <div className="flex items-center gap-1">
                              {renderStars(product.rating)}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary">${product.price}</span>
                            <Button
                              size="sm"
                              onClick={() => handleAmazonClick(product)}
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="h-3 w-3" />
                              View on Amazon
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedReviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No brand reviews found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
} 