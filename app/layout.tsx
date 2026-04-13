import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitBowl – Build Your Own Healthy Salad",
  description:
    "Fresh, customizable salads delivered to your door. Choose your ingredients, calculate nutrition, and order via WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">{children}</body>
    </html>
  );
}
