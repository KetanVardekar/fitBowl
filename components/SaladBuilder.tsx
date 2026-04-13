"use client";

import { useState, useMemo } from "react";
import { ingredients, Ingredient } from "@/data/ingredients";

const WHATSAPP_NUMBER = "917977120757";

interface Preset {
  id: string;
  name: string;
  price: number;
  emoji: string;
  tagline: string;
  ingredientIds: string[];
  badge: string;
  accentColor: string;
  bgColor: string;
}

const PRESETS: Preset[] = [
  {
    id: "basic",
    name: "Basic Bowl",
    price: 49,
    emoji: "🥗",
    tagline: "Light & wholesome",
    ingredientIds: ["mung", "chana", "tomato", "cucumber"],
    badge: "Most Popular",
    accentColor: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50 border-green-200",
  },
  {
    id: "premium",
    name: "Premium Bowl",
    price: 99,
    emoji: "💪",
    tagline: "Protein-packed power bowl",
    ingredientIds: ["mung", "chana", "paneer", "tomato", "corn"],
    badge: "Best Value",
    accentColor: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50 border-purple-200",
  },
];

export default function SaladBuilder() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [ordered, setOrdered] = useState(false);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const toggleIngredient = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setActivePreset(null);
    setOrdered(false);
  };

  const selectPreset = (preset: Preset) => {
    setSelected(new Set(preset.ingredientIds));
    setActivePreset(preset.id);
    setOrdered(false);
  };

  const selectedIngredients = useMemo(
    () => ingredients.filter((i) => selected.has(i.id)),
    [selected]
  );

  const totals = useMemo(
    () =>
      selectedIngredients.reduce(
        (acc, i) => ({
          calories: acc.calories + i.calories,
          protein: acc.protein + i.protein,
          price: acc.price + i.price,
        }),
        { calories: 0, protein: 0, price: 0 }
      ),
    [selectedIngredients]
  );

  const currentPreset = PRESETS.find((p) => p.id === activePreset) ?? null;
  const displayPrice = currentPreset ? currentPreset.price : totals.price;

  const handleWhatsApp = () => {
    if (selectedIngredients.length === 0) return;
    const names = selectedIngredients.map((i) => i.name).join(", ");
    const presetLine = currentPreset
      ? `*Bowl:* ${currentPreset.name} (Quick Pick)\n`
      : "";
    const message = encodeURIComponent(
      `Hello, I want to order a salad! 🥗\n\n` +
        presetLine +
        `*Ingredients:*\n${names}\n\n` +
        `*Total Calories:* ${totals.calories} kcal\n` +
        `*Total Protein:* ${totals.protein.toFixed(1)}g\n` +
        `*Total Price:* ₹${displayPrice}\n\n` +
        `Please confirm my order. Thank you! 😊`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setOrdered(true);
  };

  const caloriePercent = Math.min((totals.calories / 600) * 100, 100);
  const proteinPercent = Math.min((totals.protein / 50) * 100, 100);

  return (
    <section id="salad-builder" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Step 1: Customize
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Build Your{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Perfect Bowl
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Pick a ready-made combo or build your own from scratch.
          </p>
        </div>

        {/* Quick Pick Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl">⚡</span>
            <h3 className="text-xl font-bold text-gray-800">Quick Pick</h3>
            <span className="text-sm text-gray-400 font-medium">
              — No customization needed
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {PRESETS.map((preset) => {
              const presetIngredients = ingredients.filter((i) =>
                preset.ingredientIds.includes(i.id)
              );
              const isActive = activePreset === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => selectPreset(preset)}
                  className={`relative text-left rounded-3xl border-2 p-5 transition-all duration-250 ${
                    isActive
                      ? "border-green-500 bg-white shadow-lg shadow-green-100 scale-[1.02]"
                      : `${preset.bgColor} hover:shadow-md hover:scale-[1.01]`
                  }`}
                >
                  {/* Badge */}
                  <span
                    className={`absolute top-4 right-4 text-xs font-bold text-white px-2.5 py-1 rounded-full bg-gradient-to-r ${preset.accentColor}`}
                  >
                    {preset.badge}
                  </span>

                  {/* Active checkmark */}
                  {isActive && (
                    <span className="absolute top-4 left-4 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  )}

                  <div className="flex items-center gap-3 mb-3 mt-1">
                    <span className="text-4xl">{preset.emoji}</span>
                    <div>
                      <p className="text-lg font-black text-gray-900">
                        {preset.name}
                      </p>
                      <p className="text-sm text-gray-500">{preset.tagline}</p>
                    </div>
                  </div>

                  {/* Ingredient chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {presetIngredients.map((ing) => (
                      <span
                        key={ing.id}
                        className="inline-flex items-center gap-1 bg-white text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-200"
                      >
                        {ing.emoji} {ing.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-3xl font-black bg-gradient-to-r ${preset.accentColor} bg-clip-text text-transparent`}
                    >
                      ₹{preset.price}
                    </span>
                    <span
                      className={`text-sm font-semibold px-4 py-2 rounded-xl text-white bg-gradient-to-r ${preset.accentColor}`}
                    >
                      {isActive ? "Selected ✓" : "Select"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm font-semibold text-gray-400 px-2">
            or build your own
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingredient Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {ingredients.map((ingredient, idx) => (
                <IngredientCard
                  key={ingredient.id}
                  ingredient={ingredient}
                  isSelected={selected.has(ingredient.id)}
                  onToggle={toggleIngredient}
                  delay={idx * 80}
                />
              ))}
            </div>
          </div>

          {/* Nutrition Summary Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100 p-6 shadow-lg">
              {/* Active preset indicator */}
              {currentPreset && (
                <div className="mb-4 flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 border border-green-100">
                  <span className="text-lg">{currentPreset.emoji}</span>
                  <span className="text-sm font-bold text-gray-700">
                    {currentPreset.name}
                  </span>
                  <span className="ml-auto text-xs text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded-full">
                    Quick Pick
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
                <span className="text-2xl">📊</span> Nutrition Summary
              </h3>

              {/* Calorie bar */}
              <NutritionBar
                label="Calories"
                value={totals.calories}
                unit="kcal"
                percent={caloriePercent}
                color="from-orange-400 to-red-400"
                icon="🔥"
              />

              {/* Protein bar */}
              <NutritionBar
                label="Protein"
                value={parseFloat(totals.protein.toFixed(1))}
                unit="g"
                percent={proteinPercent}
                color="from-blue-400 to-indigo-500"
                icon="💪"
              />

              {/* Price */}
              <div className="mt-5 bg-white rounded-2xl p-4 border border-green-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  <span className="text-sm font-semibold text-gray-600">
                    Total Price
                  </span>
                </div>
                <span className="text-2xl font-black text-green-600">
                  ₹{displayPrice}
                </span>
              </div>

              {/* Selected ingredients */}
              <div className="mt-5">
                <p className="text-sm font-semibold text-gray-500 mb-3">
                  Selected ({selectedIngredients.length})
                </p>
                {selectedIngredients.length === 0 ? (
                  <div className="text-center py-6 text-gray-400">
                    <span className="text-3xl block mb-2">🥗</span>
                    <p className="text-sm">No ingredients yet</p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {selectedIngredients.map((i) => (
                      <span
                        key={i.id}
                        className="inline-flex items-center gap-1 bg-white text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200 shadow-sm"
                      >
                        <span>{i.emoji}</span> {i.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* WhatsApp Order Button */}
              <button
                onClick={handleWhatsApp}
                disabled={selectedIngredients.length === 0}
                className={`mt-6 w-full flex items-center justify-center gap-3 font-bold text-white py-4 rounded-2xl transition-all duration-300 ${
                  selectedIngredients.length === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : ordered
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 scale-95"
                    : "bg-gradient-to-r from-green-500 to-emerald-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200 active:scale-95"
                }`}
              >
                <WhatsAppIcon />
                <span>{ordered ? "Opening WhatsApp..." : "Order on WhatsApp"}</span>
              </button>

              {selectedIngredients.length === 0 && (
                <p className="text-center text-xs text-gray-400 mt-2">
                  Select at least one ingredient
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Sub-components ──────────────────────────────────────────── */

function IngredientCard({
  ingredient,
  isSelected,
  onToggle,
  delay,
}: {
  ingredient: Ingredient;
  isSelected: boolean;
  onToggle: (id: string) => void;
  delay: number;
}) {
  return (
    <button
      onClick={() => onToggle(ingredient.id)}
      style={{ animationDelay: `${delay}ms` }}
      className={`relative group flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-250 text-center animate-slide-up
        ${
          isSelected
            ? "border-green-500 bg-green-50 shadow-md shadow-green-100 scale-105"
            : "border-gray-100 bg-white hover:border-green-300 hover:bg-green-50 hover:scale-102 shadow-sm hover:shadow-md"
        }`}
    >
      {/* Checkmark */}
      <span
        className={`absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${
          isSelected
            ? "bg-green-500 scale-100"
            : "bg-gray-200 scale-0 group-hover:scale-75"
        }`}
      >
        {isSelected && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>

      {/* Emoji */}
      <span className="text-4xl transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
        {ingredient.emoji}
      </span>

      {/* Name */}
      <span
        className={`text-sm font-bold ${
          isSelected ? "text-green-700" : "text-gray-700"
        }`}
      >
        {ingredient.name}
      </span>

      {/* Nutrition badges */}
      <div className="flex flex-col gap-1 w-full">
        <span className="text-xs text-orange-500 font-semibold">
          🔥 {ingredient.calories} kcal
        </span>
        <span className="text-xs text-blue-500 font-semibold">
          💪 {ingredient.protein}g protein
        </span>
        <span className="text-xs text-green-600 font-semibold">
          ₹{ingredient.price}
        </span>
      </div>
    </button>
  );
}

function NutritionBar({
  label,
  value,
  unit,
  percent,
  color,
  icon,
}: {
  label: string;
  value: number;
  unit: string;
  percent: number;
  color: string;
  icon: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-600">
          <span>{icon}</span> {label}
        </span>
        <span className="text-lg font-black text-gray-800">
          {value}
          <span className="text-sm font-medium text-gray-400 ml-0.5">{unit}</span>
        </span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
