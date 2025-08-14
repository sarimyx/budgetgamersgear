"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  CreditCard,
  Lock,
  Truck,
  Shield,
  ExternalLink,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample cart data - in a real app, this would come from your cart state management
const cartItems = [
  {
    id: 1,
    name: "HyperX Cloud II Gaming Headset",
    price: 79.99,
    originalPrice: 99.99,
    quantity: 1,
    image: "/api/placeholder/80/80",
    amazonLink: "https://amazon.com/dp/B00SAYCVTQ",
    category: "headsets"
  },
  {
    id: 2,
    name: "Logitech G Pro X Mechanical Keyboard",
    price: 129.99,
    originalPrice: 149.99,
    quantity: 1,
    image: "/api/placeholder/80/80",
    amazonLink: "https://amazon.com/dp/B07TKNJ8MW",
    category: "keyboards"
  }
];

const shippingOptions = [
  {
    id: "standard",
    name: "Standard Shipping",
    price: 0,
    delivery: "3-5 business days",
    description: "Free shipping on orders over $50"
  },
  {
    id: "express",
    name: "Express Shipping",
    price: 9.99,
    delivery: "1-2 business days",
    description: "Priority handling and tracking"
  },
  {
    id: "overnight",
    name: "Overnight Shipping",
    price: 19.99,
    delivery: "Next business day",
    description: "Guaranteed next-day delivery"
  }
];

export default function CheckoutPage() {
  const [selectedShipping, setSelectedShipping] = useState("standard");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
    phone: ""
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingOptions.find(option => option.id === selectedShipping)?.price || 0;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shippingCost + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    // In a real app, you would update the cart state here
    console.log(`Update quantity for item ${itemId} to ${newQuantity}`);
  };

  const handleRemoveItem = (itemId: number) => {
    // In a real app, you would remove the item from cart
    console.log(`Remove item ${itemId}`);
  };

  const handleAmazonCheckout = () => {
    // Redirect to Amazon with affiliate links
    const amazonLinks = cartItems.map(item => item.amazonLink).join(',');
    console.log("Redirecting to Amazon with affiliate links:", amazonLinks);
    // In a real implementation, you might want to redirect to a specific Amazon cart or product page
    alert("Redirecting to Amazon to complete your purchase...");
  };

  const handleSecureCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle secure checkout process
    console.log("Processing secure checkout:", { formData, total });
    alert("Processing your order securely...");
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

      {/* Checkout Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-primary to-purple-400 bg-clip-text text-transparent">
              Checkout
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Items */}
              <Card className="bg-black/20 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Your Cart ({cartItems.length} items)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <ShoppingCart className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-lg font-bold text-primary">${item.price}</span>
                            <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                            <Badge variant="destructive" className="text-xs">
                              {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Information */}
              <Card className="bg-black/20 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-2">
                        Street Address *
                      </label>
                      <Input
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-2">
                          City *
                        </label>
                        <Input
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium mb-2">
                          State *
                        </label>
                        <Input
                          id="state"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                          ZIP Code *
                        </label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Options */}
              <Card className="bg-black/20 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Shipping Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {shippingOptions.map((option) => (
                      <div
                        key={option.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-colors ${selectedShipping === option.id
                          ? "border-primary bg-primary/10"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                          }`}
                        onClick={() => setSelectedShipping(option.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="shipping"
                                value={option.id}
                                checked={selectedShipping === option.id}
                                onChange={() => setSelectedShipping(option.id)}
                                className="text-primary"
                              />
                              <h4 className="font-medium">{option.name}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {option.description} • {option.delivery}
                            </p>
                          </div>
                          <span className="font-bold">
                            {option.price === 0 ? "FREE" : `$${option.price}`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="bg-black/20 backdrop-blur-sm border-white/10 sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Order Details */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>{shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-white/20 pt-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Security Notice */}
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-green-400">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm font-medium">Secure Checkout</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Your payment information is encrypted and secure.
                      </p>
                    </div>

                    {/* Checkout Options */}
                    <div className="space-y-3">
                      <Button
                        onClick={handleAmazonCheckout}
                        className="w-full bg-orange-600 hover:bg-orange-700"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Checkout with Amazon
                      </Button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-white/20" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">Or</span>
                        </div>
                      </div>

                      <Button
                        onClick={handleSecureCheckout}
                        className="w-full"
                      >
                        <Lock className="mr-2 h-4 w-4" />
                        Secure Checkout
                      </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span>SSL Secure</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="h-3 w-3 text-blue-400" />
                        <span>Protected</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 