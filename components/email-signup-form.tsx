"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Loader2, User, Store } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("customer");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, userType }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSuccess(true);
      toast({
        title: "Success!",
        description:
          "You've been added to our waitlist. We'll notify you when Bazaaro launches!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to sign up. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="max-w-md mx-auto bg-green-50 border-green-200">
        <CardContent className="text-center p-8">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            You're on the list!
          </h3>
          <p className="text-green-700">
            We'll notify you as soon as Bazaaro launches in your area.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto bg-white shadow-xl border-0">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Join the Waitlist
          </h3>
          <p className="text-gray-600">
            Be the first to know when Bazaaro launches
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label
              htmlFor="userType"
              className="text-base font-medium text-gray-900 mb-3 block"
            >
              I am a:
            </Label>
            <RadioGroup
              value={userType}
              onValueChange={setUserType}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                <RadioGroupItem value="customer" id="customer" />
                <Label
                  htmlFor="customer"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <User className="w-4 h-4" />
                  Customer (I want to find products)
                </Label>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                <RadioGroupItem value="store" id="store" />
                <Label
                  htmlFor="store"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Store className="w-4 h-4" />
                  Store Owner (I want to sell products)
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label
              htmlFor="email"
              className="text-base font-medium text-gray-900 mb-2 block"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 text-base"
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Joining Waitlist...
              </>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          No spam, just updates when we launch. Unsubscribe anytime.
        </p>
      </CardContent>
    </Card>
  );
}
