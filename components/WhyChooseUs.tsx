"use client";

const features = [
  {
    emoji: "🌿",
    title: "Farm-Fresh Ingredients",
    description:
      "We source only the freshest produce daily, straight from local farms to your bowl.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    emoji: "🥗",
    title: "Fully Customizable",
    description:
      "Mix and match ingredients to create your ideal salad. Your bowl, your rules.",
    gradient: "from-lime-400 to-green-500",
  },
  {
    emoji: "💪",
    title: "Nutrition Tracking",
    description:
      "Real-time calorie and protein tracking so you always know exactly what you're eating.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    emoji: "⚡",
    title: "Lightning Fast Orders",
    description:
      "Order via WhatsApp in seconds. No apps to download, no accounts to create.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    emoji: "🚚",
    title: "Quick Delivery",
    description:
      "Hot (well, fresh and cold!) salads delivered to your door in under 45 minutes.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    emoji: "❤️",
    title: "Made with Love",
    description:
      "Every bowl is assembled with care by our passionate team of healthy-food lovers.",
    gradient: "from-rose-400 to-pink-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Promise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              FitBowl?
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            We&apos;re not just a salad place. We&apos;re your healthy eating partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="group p-6 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${f.gradient} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                {f.emoji}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-10 text-center shadow-2xl shadow-green-200">
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <span className="absolute text-6xl opacity-10 top-2 left-6">🥗</span>
            <span className="absolute text-5xl opacity-10 bottom-2 right-8">🥬</span>
            <span className="absolute text-4xl opacity-10 top-4 right-1/4">🍅</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-3 relative z-10">
            Ready to eat healthy? 🚀
          </h3>
          <p className="text-green-100 text-lg mb-8 relative z-10">
            Build your first FitBowl today. Fresh, fast, and absolutely delicious.
          </p>
          <a
            href="#salad-builder"
            className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-8 py-3.5 rounded-2xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl relative z-10 hover:-translate-y-0.5"
          >
            Start Building 🥗
          </a>
        </div>
      </div>
    </section>
  );
}
