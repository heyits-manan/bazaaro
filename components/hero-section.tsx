"use client";

import { Badge } from "@/components/ui/badge";
import {
  Search,
  Store,
  MapPin,
  Star,
  Smartphone,
  ArrowLeft,
  Filter,
  MoreVertical,
  Heart,
  Share,
  Phone,
  Clock,
  CheckCircle,
  Navigation,
} from "lucide-react";
import { EmailSignupForm } from "./email-signup-form";
import { useState } from "react";

export function HeroSection() {
  const [selectedStore, setSelectedStore] = useState<number | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const stores = [
    {
      id: 1,
      name: "ShoeWorld",
      price: "Rs. 3,700",
      originalPrice: "Rs. 4,500",
      rating: 4.8,
      distance: "0.3 miles",
      inStock: true,
      deliveryTime: "15 min",
      verified: true,
      image: "🟦",
    },
    {
      id: 2,
      name: "Shoe Hub",
      price: "Rs. 4,000",
      originalPrice: null,
      rating: 4.6,
      distance: "0.5 miles",
      inStock: true,
      deliveryTime: "20 min",
      verified: false,
      image: "🟧",
    },
    {
      id: 3,
      name: "Sports Zone",
      price: "Rs. 4,200",
      originalPrice: "Rs. 4,800",
      rating: 4.7,
      distance: "0.7 miles",
      inStock: false,
      deliveryTime: "25 min",
      verified: true,
      image: "🟩",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div
        className="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Bazaaro Logo */}
      <div className="absolute top-6 left-6 z-20">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
          Bazaaro
        </h1>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium animate-bounce"
          >
            🚀 Coming Soon to Your City
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find What You Need,
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Right Now
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Bazaaro connects you instantly with local stores that have exactly
            what you're looking for. Search, compare prices, and get directions
            — all in real-time.
          </p>

          {/* Demo Flow */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Search className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Search Item</h3>
              <p className="text-sm text-gray-600">
                Type what you need and we'll find local stores with it in stock
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Store className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Get Offers</h3>
              <p className="text-sm text-gray-600">
                Nearby stores respond with prices, ratings, and availability
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Find & Go</h3>
              <p className="text-sm text-gray-600">
                Choose the best offer and get directions to the store
              </p>
            </div>
          </div>

          {/* Email Signup Form */}
          <div className="flex flex-col justify-center">
            <EmailSignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}
