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

          {/* Mock Phone and Signup Form Container */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-12">
            {/* Mock Phone Interface */}
            <div className="relative bg-black rounded-[3rem] shadow-2xl p-2 max-w-[300px] mx-auto h-[640px] transition-all duration-300 hover:shadow-3xl">
              {/* Phone Frame */}
              <div className="bg-white rounded-[2.5rem] h-full relative overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 bg-white text-black text-xs font-medium">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    <span className="ml-2">100%</span>
                  </div>
                </div>

                {/* Watermark Text */}
                <div className="bg-gray-100 py-2 px-4 text-center border-b border-gray-200">
                  <span className="text-sm font-bold text-gray-600">
                    DEMO INTERFACE - NOT ACTUAL UI
                  </span>
                </div>

                {/* App Header */}
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-4 text-white">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">Bazaaro</h2>
                    <div className="flex items-center gap-3">
                      <Filter className="w-5 h-5" />
                      <MoreVertical className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="px-6 py-4 bg-gray-50">
                  <div
                    className={`flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border-2 transition-all duration-200 ${
                      isSearchFocused
                        ? "border-blue-500 shadow-lg"
                        : "border-gray-200"
                    }`}
                  >
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      className="flex-1 text-sm text-gray-700 bg-transparent outline-none"
                      placeholder="Nike Air Max 270..."
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                    />
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Smartphone className="w-3 h-3 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Search Results */}
                <div className="px-6 pb-6 bg-gray-50 flex-1 overflow-y-auto">
                  <div className="text-xs text-gray-500 mb-4 flex items-center justify-between">
                    <span>3 stores nearby</span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Live results
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    {stores.map((store, index) => (
                      <div
                        key={store.id}
                        className={`bg-white border-2 rounded-2xl p-4 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md ${
                          store.id === 1
                            ? "border-blue-200 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        } ${
                          selectedStore === store.id
                            ? "ring-2 ring-blue-500"
                            : ""
                        }`}
                        onClick={() => setSelectedStore(store.id)}
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                                store.id === 1 ? "bg-blue-100" : "bg-gray-100"
                              }`}
                            >
                              {store.image}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm text-gray-900">
                                  {store.name}
                                </span>
                                {store.verified && (
                                  <CheckCircle className="w-3 h-3 text-blue-500" />
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  <span className="text-xs text-gray-600">
                                    {store.rating}
                                  </span>
                                </div>
                                <span className="text-xs text-gray-400">•</span>
                                <div className="text-xs text-gray-500 flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {store.distance}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
                            <Share className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-colors" />
                          </div>
                        </div>

                        <div className="flex justify-between items-end">
                          <div className="flex items-baseline gap-2">
                            <div
                              className={`text-lg font-bold ${
                                store.id === 1
                                  ? "text-blue-600"
                                  : "text-gray-700"
                              }`}
                            >
                              {store.price}
                            </div>
                            {store.originalPrice && (
                              <div className="text-xs text-gray-400 line-through">
                                {store.originalPrice}
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              {store.deliveryTime}
                            </div>
                            {store.inStock ? (
                              <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                <CheckCircle className="w-3 h-3" />
                                In Stock
                              </div>
                            ) : (
                              <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                                Call Store
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-2 mt-3">
                          <button
                            className={`flex-1 text-xs px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                              store.id === 1
                                ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl"
                                : "bg-gray-700 text-white hover:bg-gray-800"
                            }`}
                          >
                            {store.inStock ? "Reserve" : "Call Store"}
                          </button>
                          <button className="text-xs px-4 py-2 rounded-xl font-medium border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-1">
                            <Navigation className="w-3 h-3" />
                            Directions
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bg-white border-t border-gray-200 px-6 py-3">
                  <div className="flex justify-around">
                    <div className="flex flex-col items-center gap-1">
                      <Search className="w-5 h-5 text-blue-600" />
                      <span className="text-xs text-blue-600 font-medium">
                        Search
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Heart className="w-5 h-5 text-gray-400" />
                      <span className="text-xs text-gray-400">Saved</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span className="text-xs text-gray-400">Nearby</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Signup Form */}
            <div className="flex flex-col justify-center">
              <EmailSignupForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
