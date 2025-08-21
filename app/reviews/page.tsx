"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  CheckCircle,
  XCircle,
  ExternalLink,
  Headphones,
  Keyboard,
  Mouse,
  Monitor,
  Gamepad,
  Speaker,
  Award,
  Users,
  Clock,
  ChevronDown,
  Star as StarIcon,
  MessageSquare,
  SortAsc
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

const sortOptions = [
  { value: "rating", label: "Highest Rated", icon: StarIcon },
  { value: "reviews", label: "Most Reviews", icon: MessageSquare },
  { value: "name", label: "Alphabetical", icon: SortAsc }
];

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSortDropdownOpen(false);
      }
    };

    // Close dropdown when pressing Escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSortDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

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

  const handleAmazonClick = (product: { name: string; amazonLink: string }) => {
    console.log(`Affiliate click: ${product.name}`);
    window.open(product.amazonLink, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : i < rating
              ? "text-yellow-400 fill-current opacity-50"
              : "text-gray-400"
          }`}
      />
    ));
  };

  const selectedSortOption = sortOptions.find(option => option.value === sortBy);

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
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-8 border border-white/10 relative z-10">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              <div className="flex flex-wrap gap-2 w-full">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="flex items-center gap-2 flex-shrink-0"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{category.name}</span>
                      <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                    </Button>
                  );
                })}
              </div>

              {/* Sort Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <Button
                  variant="outline"
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsSortDropdownOpen(!isSortDropdownOpen);
                    }
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={isSortDropdownOpen}
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 min-w-[200px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    {selectedSortOption && (
                      <>
                        <selectedSortOption.icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{selectedSortOption.label}</span>
                        <span className="sm:hidden">{selectedSortOption.label.split(':')[0]}</span>
                      </>
                    )}
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSortDropdownOpen ? 'rotate-180' : ''}`} />
                </Button>

                {isSortDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 right-0 mt-1 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-[9999]"
                    role="listbox"
                    aria-label="Sort options"
                  >
                    {sortOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setIsSortDropdownOpen(false);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSortBy(option.value);
                              setIsSortDropdownOpen(false);
                            }
                          }}
                          role="option"
                          aria-selected={sortBy === option.value}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black ${
                            sortBy === option.value 
                              ? 'bg-primary/20 text-primary border-l-2 border-primary' 
                              : 'text-white'
                          }`}
                        >
                          <Icon className={`h-4 w-4 ${sortBy === option.value ? 'text-primary' : 'text-muted-foreground'}`} />
                          <span className="text-sm">{option.label}</span>
                          {sortBy === option.value && (
                            <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Brand Reviews Grid */}
          <div className="space-y-8">
            {sortedReviews.map((review) => (
              <Card key={review.id} className="bg-black/20 backdrop-blur-sm border-white/10 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 min-w-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <CardTitle className="text-xl sm:text-2xl break-words">{review.name}</CardTitle>
                          <Badge variant="secondary" className="w-fit">{review.badge}</Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
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
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm text-muted-foreground">{review.category}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 space-y-6">
                  <CardDescription className="text-base break-words">
                    {review.description}
                  </CardDescription>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Pros */}
                    <div className="min-w-0">
                      <h4 className="font-semibold mb-3 text-green-400 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" />
                        Pros
                      </h4>
                      <ul className="space-y-2">
                        {review.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="break-words">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="min-w-0">
                      <h4 className="font-semibold mb-3 text-red-400 flex items-center gap-2">
                        <XCircle className="h-4 w-4 flex-shrink-0" />
                        Cons
                      </h4>
                      <ul className="space-y-2">
                        {review.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <XCircle className="h-3 w-3 text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="break-words">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Top Products */}
                  <div className="min-w-0">
                    <h4 className="font-semibold mb-4 text-primary">Top Products</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {review.topProducts.map((product, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <h5 className="font-medium break-words">{product.name}</h5>
                            <div className="flex items-center gap-1 flex-shrink-0">
                              {renderStars(product.rating)}
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <span className="text-lg font-bold text-primary">${product.price}</span>
                            <Button
                              size="sm"
                              onClick={() => handleAmazonClick(product)}
                              className="flex items-center gap-2 w-full sm:w-auto"
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