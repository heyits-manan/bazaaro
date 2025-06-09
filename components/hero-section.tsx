"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Store, MapPin, Star, Smartphone } from "lucide-react";
import { EmailSignupForm } from "./email-signup-form";

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium"
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
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <Search className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Search Item</h3>
              <p className="text-sm text-gray-600">
                Type what you need and we'll find local stores with it in stock
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <Store className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Get Offers</h3>
              <p className="text-sm text-gray-600">
                Nearby stores respond with prices, ratings, and availability
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Find & Go</h3>
              <p className="text-sm text-gray-600">
                Choose the best offer and get directions to the store
              </p>
            </div>
          </div>

          {/* Mock Phone Interface */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto mb-12 border">
            <div className="bg-gray-100 rounded-2xl p-4">
              <div className="flex items-center gap-3 bg-white rounded-lg p-3 mb-4 shadow-sm">
                <Search className="w-5 h-5 text-gray-400" />
                <span className="text-gray-500 text-sm">Nike Shoes</span>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-sm text-gray-900">
                      ShoeWorld
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-600">4.8</span>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    Rs. 3700
                  </div>
                  <div className="text-xs text-gray-500">0.3 miles away</div>
                </div>
                <div className="bg-gray-50 border rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-sm text-gray-900">
                      Shoe Hub
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-600">4.6</span>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-700">
                    Rs. 4000
                  </div>
                  <div className="text-xs text-gray-500">0.5 miles away</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <EmailSignupForm />
        </div>
      </div>
    </div>
  );
}
