"use client";

import { useState } from "react";
import { Headphones, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border-b border-white/10 bg-black/40 backdrop-blur-md supports-[backdrop-filter]:bg-black/40 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Headphones className="h-8 w-8 text-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Budget Gamers Gear
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
                onClick={closeMenu}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-white hover:text-primary hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-black relative z-50 ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="py-4 space-y-2 border-t border-white/20">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-white hover:text-primary hover:bg-white/20 transition-all duration-200 rounded-md transform hover:translate-x-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar; 