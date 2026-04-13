"use client";

export default function Hero() {
  const scrollToBuilder = () => {
    document.getElementById("salad-builder")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-lime-50">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200 rounded-full opacity-30 animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-200 rounded-full opacity-30 animate-pulse-slow animation-delay-400" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-100 rounded-full opacity-20 animate-float" />
      </div>

      {/* Floating emojis */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <span className="absolute top-20 left-10 text-4xl animate-float opacity-60">🥗</span>
        <span className="absolute top-32 right-16 text-3xl animate-float animation-delay-200 opacity-60">🌱</span>
        <span className="absolute bottom-32 left-20 text-3xl animate-float animation-delay-400 opacity-60">🍅</span>
        <span className="absolute bottom-20 right-10 text-4xl animate-float animation-delay-600 opacity-60">🥒</span>
        <span className="absolute top-1/2 right-8 text-2xl animate-float animation-delay-800 opacity-50">🌽</span>
        <span className="absolute top-1/3 left-6 text-2xl animate-float animation-delay-600 opacity-50">🧀</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-fade-in border border-green-200">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Fresh & Healthy Delivery
        </div>

        {/* Brand name */}
        <h1 className="text-7xl md:text-8xl font-black mb-4 animate-slide-up">
          <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
            FitBowl
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 animate-slide-up animation-delay-200">
          Build your own healthy salad 🥗
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
          Fresh, customizable salads delivered to your door. Pick your
          ingredients, track your nutrition, and order in seconds.
        </p>

        {/* CTA Button */}
        <div className="animate-slide-up animation-delay-600">
          <button
            onClick={scrollToBuilder}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            <span>Build Your Salad</span>
            <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🥗</span>
            {/* Shine effect */}
            <span className="absolute inset-0 rounded-2xl overflow-hidden">
              <span className="absolute -inset-full top-0 block h-full w-1/2 transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:left-full transition-all duration-700 ease-in-out" />
            </span>
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto animate-fade-in animation-delay-800">
          {[
            { value: "7+", label: "Ingredients" },
            { value: "100%", label: "Fresh" },
            { value: "⚡", label: "Quick Order" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-green-600">{stat.value}</div>
              <div className="text-xs text-gray-400 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
