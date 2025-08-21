import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Hexagons */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary/15 -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-primary/10 rotate-45 animate-pulse delay-2000"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Hero Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"></div>
          </div>
          
          <Badge variant="secondary" className="mb-4 relative">
            <Star className="h-3 w-3 mr-1 animate-spin" style={{ animationDuration: '3s' }} />
            Honest Reviews from Gamers Like You
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-primary to-purple-400 bg-clip-text text-transparent">
            Find the Best Affordable Gaming Gear
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We test, review, and recommend gaming headsets, keyboards, mice, and more — all without breaking the bank. Trusted opinions, no fluff.
          </p>
          <a href="/products">
            <Button size="lg" className="text-lg px-8 py-6 relative overflow-hidden group">
              <span className="relative z-10">Explore Products</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
          </a>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Why Trust Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team consists of real gamers dedicated to helping you get the most value for your money. No paid hype, just honest, hands-on reviews and recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative z-10">
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors relative">
                <Shield className="h-8 w-8 text-primary" />
                <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping"></div>
              </div>
              <h3 className="font-semibold mb-2">Unbiased Reviews</h3>
              <p className="text-muted-foreground">No paid promotions, just honest opinions from real gamers.</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors relative">
                <Users className="h-8 w-8 text-primary" />
                <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping delay-500"></div>
              </div>
              <h3 className="font-semibold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">Reviews and recommendations from gamers like you.</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors relative">
                <Star className="h-8 w-8 text-primary" />
                <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping delay-1000"></div>
              </div>
              <h3 className="font-semibold mb-2">Quality Tested</h3>
              <p className="text-muted-foreground">Every product is thoroughly tested before we recommend it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-primary/20 rotate-45 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary/15 -rotate-12 animate-pulse delay-1000"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Our Top Picks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle>Top Pick 1</CardTitle>
                  <Badge variant="secondary" className="animate-pulse">Best Value</Badge>
                </div>
                <CardDescription>Short description of Top Pick 1.</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <a href="/products">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle>Top Pick 2</CardTitle>
                  <Badge variant="secondary" className="animate-pulse delay-500">Editor&apos;s Choice</Badge>
                </div>
                <CardDescription>Short description of Top Pick 2.</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <a href="/products">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle>Top Pick 3</CardTitle>
                  <Badge variant="secondary" className="animate-pulse delay-1000">Most Popular</Badge>
                </div>
                <CardDescription>Short description of Top Pick 3.</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <a href="/products">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
