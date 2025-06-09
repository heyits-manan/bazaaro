import { MapPin, Mail, Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smartphone className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">Bazaaro</span>
          </div>
          <p className="text-gray-400 max-w-md mx-auto">
            Connecting local shoppers with nearby stores for a better shopping
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Local Focus</h3>
            <p className="text-gray-400 text-sm">
              Supporting local businesses and communities nationwide
            </p>
          </div>
          <div>
            <Mail className="w-6 h-6 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Join our waitlist for launch updates and exclusive offers
            </p>
          </div>
          <div>
            <Smartphone className="w-6 h-6 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Mobile First</h3>
            <p className="text-gray-400 text-sm">
              Designed for seamless shopping on your mobile device
            </p>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2025 Bazaaro. All rights reserved. Coming soon to your city.
          </p>
        </div>
      </div>
    </footer>
  );
}
