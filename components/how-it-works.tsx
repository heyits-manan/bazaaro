import { Search, Bell, Store, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search for What You Need",
      description: "Type in any product you're looking for — from groceries to electronics to specialty items.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Stores Get Notified",
      description: "Local stores in your area receive an instant notification about your search request.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Receive Real Offers",
      description: "Stores respond with availability, prices, and their ratings — all in real-time.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Choose & Navigate",
      description: "Compare offers, choose the best one, and get directions to complete your purchase.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Bazaaro Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to find exactly what you need from local stores near you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-xl ${step.color} flex items-center justify-center mb-6`}>
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gray-900 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting arrows for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 4l12 12-12 12v-8H4v-8h12V4z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}