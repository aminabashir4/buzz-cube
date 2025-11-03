"use client";

export default function PricingSection() {
  const plans = [
    {
      title: "Basic",
      price: "$10.90",
      period: "per month",
      features: [
        "50GB Storage",
        "Bandwidth 10 GB",
        "Up to 3 Databases",
        "E-mail accounts YES",
        "Up to 10 free SMS",
      ],
    },
    {
      title: "Startup",
      price: "$79.90",
      period: "per month",
      features: [
        "500GB Storage",
        "Bandwidth 45 GB",
        "Up to 15 Databases",
        "E-mail accounts YES",
        "Up to 150 free SMS",
      ],
      highlight: true,
    },
    {
      title: "Entreprise",
      price: "$400.90",
      period: "per month",
      features: [
        "Unlimited Storage",
        "Unlimited Bandwidth",
        "Up to 90 Databases",
        "E-mail accounts YES",
        "Up to 500 free SMS",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f6f6f6] px-4 py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 leading-tight font-heading">
          Our Pricing Plans
        </h2>
        <p className="text-base md:text-xl text-black mb-4 max-w-2xl mx-auto">
          Choose the plan that best fits your needs. Upgrade, downgrade, or cancel anytime — no hidden fees.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 justify-center items-stretch max-w-5xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl shadow-lg text-center px-12 py-12 transition-all duration-300 ${
              plan.highlight
                ? "scale-105 shadow-2xl bg-[#00FF8C] text-black"
                : "hover:-translate-y-1 bg-white"
            }`}
          >
            <h3
              className={`text-lg font-semibold uppercase mb-6 ${
                plan.highlight ? "text-black" : "text-[#00FF8C]"
              }`}
            >
              {plan.title}
            </h3>

            <h2
              className={`text-4xl font-bold ${
                plan.highlight ? "text-black" : "text-gray-800"
              }`}
            >
              {plan.price}
            </h2>
            <p
              className={`text-sm mb-6 ${
                plan.highlight ? "text-black" : "text-gray-500"
              }`}
            >
              {plan.period}
            </p>

            <ul
              className={`space-y-2 mb-8 ${
                plan.highlight ? "text-black" : "text-gray-700"
              }`}
            >
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-full font-medium transition-all ${
                plan.highlight
                  ? "bg-white text-black hover:bg-gray-100"
                  : "border border-[#00FF8C] text-[#00FF8C] hover:bg-[#00FF8C] hover:text-white"
              }`}
            >
              SELECT PLAN
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
