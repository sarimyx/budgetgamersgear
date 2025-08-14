"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Send,
  Shield,
  CreditCard,
  Package,
  AlertTriangle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqData = [
  {
    question: "How do I request a refund or chargeback?",
    answer: "If you need to request a refund or have chargeback concerns, please contact our support team with your order details. We'll work with you to resolve any issues promptly. Include your order number, purchase date, and reason for the request.",
    category: "billing"
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase for most items. Products must be in original condition with all packaging. Some items may have different return policies - please check the product page for specific details.",
    category: "returns"
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) is available for an additional fee. International shipping times vary by location.",
    category: "shipping"
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Some restrictions may apply to certain products or destinations.",
    category: "shipping"
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the order history section.",
    category: "orders"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Amazon Pay. All transactions are secure and encrypted.",
    category: "billing"
  },
  {
    question: "Are your products authentic?",
    answer: "Yes, all products sold through our affiliate links are authentic and sourced directly from authorized retailers. We only partner with reputable sellers to ensure quality.",
    category: "products"
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our customer support team through the contact form on this page, by email at support@budgetgamersgear.com, or by phone during business hours. We typically respond within 24 hours.",
    category: "support"
  }
];

const supportCategories = [
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description: "Refunds, chargebacks, payment issues",
    color: "text-blue-400"
  },
  {
    icon: Package,
    title: "Orders & Shipping",
    description: "Order tracking, delivery, returns",
    color: "text-green-400"
  },
  {
    icon: Shield,
    title: "Product Support",
    description: "Product questions, warranty claims",
    color: "text-purple-400"
  },
  {
    icon: AlertTriangle,
    title: "Technical Issues",
    description: "Website problems, account issues",
    color: "text-orange-400"
  }
];

export default function ContactPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleFAQToggle = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: ""
    });
    alert("Thank you for your message! We'll get back to you within 24 hours.");
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Need help? Our support team is here to assist you with any questions, concerns, or issues you may have.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-black/20 backdrop-blur-sm border-white/10 text-center">
              <CardContent className="pt-6">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-2">support@budgetgamersgear.com</p>
                <p className="text-xs text-muted-foreground">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-sm border-white/10 text-center">
              <CardContent className="pt-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-2">+1 (555) 123-4567</p>
                <p className="text-xs text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-sm border-white/10 text-center">
              <CardContent className="pt-6">
                <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-2">Available during business hours</p>
                <p className="text-xs text-muted-foreground">Instant support</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 rounded-md px-3 py-2 text-white"
                    >
                      <option value="">Select a category</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="orders">Orders & Shipping</option>
                      <option value="products">Product Support</option>
                      <option value="technical">Technical Issues</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="bg-white/5 border-white/20 text-white placeholder:text-muted-foreground"
                      placeholder="Please provide detailed information about your issue..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Support Categories */}
            <div className="space-y-6">
              <Card className="bg-black/20 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Support Categories
                  </CardTitle>
                  <CardDescription>
                    Choose the category that best describes your issue for faster support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supportCategories.map((category, index) => {
                      const Icon = category.icon;
                      return (
                        <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                          <Icon className={`h-6 w-6 ${category.color}`} />
                          <div>
                            <h4 className="font-medium">{category.title}</h4>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-black/20 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find quick answers to common questions below.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="bg-black/20 backdrop-blur-sm border-white/10">
                <CardHeader 
                  className="cursor-pointer hover:bg-white/5 transition-colors"
                  onClick={() => handleFAQToggle(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    {activeFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </CardHeader>
                {activeFAQ === index && (
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 