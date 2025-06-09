import { Zap, Shield, MapPin, DollarSign, Clock, Users } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Results",
      description: "Get real-time responses from local stores within seconds of your search.",
      color: "text-yellow-500 bg-yellow-100"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Compare Prices",
      description: "See prices from multiple stores sorted by best value to save money every time.",
      color: "text-green-500 bg-green-100"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Find Nearby",
      description: "Discover local businesses and get turn-by-turn directions to their location.",
      color: "text-blue-500 bg-blue-100"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "No more calling stores or driving around. Know availability before you go.",
      color: "text-purple-500 bg-purple-100"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Stores",
      description: "All partner stores are verified with ratings and reviews from real customers.",
      color: "text-red-500 bg-red-100"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Support Local",
      description: "Help local businesses thrive by connecting directly with your community.",
      color: "text-orange-500 bg-orange-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Bazaaro?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing how you shop locally with technology that puts convenience and community first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}