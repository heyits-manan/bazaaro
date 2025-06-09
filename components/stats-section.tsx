export function StatsSection() {
  const stats = [
    {
      number: "10M+",
      label: "Products Available",
      description: "Across thousands of local stores"
    },
    {
      number: "2 Min",
      label: "Average Response Time",
      description: "From search to store offers"
    },
    {
      number: "50+",
      label: "Store Categories",
      description: "From groceries to electronics"
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Users find what they're looking for"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bazaaro by the Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've transformed their shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}