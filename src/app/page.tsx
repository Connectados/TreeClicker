"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TreePine, Leaf, Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="falling-leaves">
          {[...Array(20)].map((_, i) => (
            <Leaf
              key={i}
              className="absolute text-green-400 opacity-60 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Header */}
        <div className="mb-8 animate-bounce-slow">
          <TreePine className="w-24 h-24 text-green-600 mx-auto mb-4" />
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-4">Tree Clicker</h1>
          <div className="flex items-center justify-center gap-2 text-green-600">
            <Sparkles className="w-6 h-6" />
            <p className="text-xl md:text-2xl">Planta Árboles con Cada Clic</p>
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-2xl mb-12 space-y-4">
          <p className="text-lg text-green-700 leading-relaxed">
            ¡Bienvenido a Árbol Clicker, donde cada clic nos acerca a un mundo más verde! Haz clic en el botón mágico del árbol
            para acumular clics y observa cómo tus esfuerzos florecen en hermosos árboles virtuales.
          </p>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Cómo funciona:</h3>
            <ul className="text-green-700 space-y-2 text-left">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Haz clic en el botón del árbol para ganar clics
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Alcanza 100 clics para plantar un árbol
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Observa hermosas animaciones mientras crece tu bosque
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Tu progreso se guarda automáticamente
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/game">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-gentle"
          >
            <TreePine className="w-6 h-6 mr-2" />
            Comenzar a Plantar Árboles
          </Button>
        </Link>

        {/* Footer */}
        <div className="mt-16 text-green-600 text-sm">
          <p>🌱 Cada clic cuenta hacia un futuro más verde 🌱</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-fall {
          animation: fall linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
