"use client";

const steps = [
  {
    step: "01",
    icon: "🥗",
    title: "Choose Ingredients",
    description:
      "Pick from our fresh selection of vegetables, proteins, and toppings to build your perfect bowl.",
    color: "from-green-400 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    step: "02",
    icon: "📊",
    title: "See Nutrition Info",
    description:
      "Watch your calories and protein update in real time as you customize your salad.",
    color: "from-blue-400 to-indigo-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    step: "03",
    icon: "💬",
    title: "Order via WhatsApp",
    description:
      "Tap the button to send your personalized order directly to us on WhatsApp — simple and fast!",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Get your perfect salad in three simple steps. No fuss, just fresh food.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-14 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-green-300 via-blue-300 to-emerald-300 z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((s, idx) => (
              <div
                key={s.step}
                className={`relative flex flex-col items-center text-center p-8 rounded-3xl ${s.bg} border ${s.border} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Step number */}
                <span
                  className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br ${s.color} text-white text-xs font-black rounded-full flex items-center justify-center shadow-md`}
                >
                  {s.step}
                </span>

                {/* Icon circle */}
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {s.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
