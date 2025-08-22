"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PropertiesOfLight() {
  const [showSpeedDemo, setShowSpeedDemo] = useState(false)

  return (
  <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="space-y-10 px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 dark:text-black">
            Properties of Light
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Discover the fundamental characteristics and behavior of light through interactive experiments
          </p>

          {/* Icons */}
          <div className="flex justify-center items-center space-x-12 mt-12">
            <div className="text-8xl animate-bounce">⚡</div>
            <div className="text-8xl animate-pulse">🌊</div>
            <div className="text-8xl animate-spin" style={{ animationDuration: "3s" }}>
              🔬
            </div>
            <div className="text-8xl animate-bounce" style={{ animationDelay: "0.5s" }}>
              💡
            </div>
          </div>
        </div>

        {/* Key Properties */}
        <Card className="bg-card border-border shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl lg:text-5xl">Key Properties of Light</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Energy */}
              <div className="p-6 rounded-xl bg-yellow-50 dark:bg-yellow-900/50">
                <h3 className="text-2xl font-bold mb-4 text-yellow-800 dark:text-yellow-200">⚡ Light is Energy</h3>
                <p className="text-lg text-yellow-700 dark:text-yellow-300 text-center">
                  Light carries energy that can be converted to electricity (solar panels), heat, and other forms of energy.
                </p>
              </div>

              {/* Speed */}
              <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/50">
                <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">🚀 Speed of Light</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">300,000 km/s</div>
                  <p className="text-lg text-blue-700 dark:text-blue-300">
                    Light travels incredibly fast - around Earth 7.5 times in 1 second!
                  </p>
                  <Button
                    onClick={() => setShowSpeedDemo(!showSpeedDemo)}
                    variant="outline"
                    className="mt-4"
                  >
                    {showSpeedDemo ? "Hide" : "Show"} Speed Facts
                  </Button>
                  {showSpeedDemo && (
                    <div className="mt-4 p-4 rounded-lg bg-blue-100 dark:bg-blue-800/50 text-sm space-y-2">
                      <p>🌍 Around Earth: 0.13 seconds</p>
                      <p>🌙 To Moon: 1.3 seconds</p>
                      <p>☀️ From Sun: 8 minutes 20 seconds</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Straight Line */}
              <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/50">
                <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">📏 Travels in Straight Lines</h3>
                <p className="text-lg text-green-700 dark:text-green-300 text-center">
                  Light travels in straight lines (rectilinear propagation). This is why we get sharp shadows!
                </p>
              </div>

              {/* Wave Nature */}
              <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-900/50">
                <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-200">🌊 Wave Nature</h3>
                <p className="text-lg text-purple-700 dark:text-purple-300 text-center">
                  Light behaves like waves with wavelength and frequency. Different colors have different wavelengths.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Behaviors */}
  <Card className="shadow-xl bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white">
              Key Behaviors of Light
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/50 text-center">
                <h3 className="font-bold text-xl mb-3 text-blue-900 dark:text-blue-200">Rectilinear Propagation</h3>
                <p className="text-lg text-blue-800 dark:text-blue-300">
                  Light travels in straight lines in a uniform medium. This is why we get sharp shadows!
                </p>
              </div>

              <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/50 text-center">
                <h3 className="font-bold text-xl mb-3 text-green-900 dark:text-green-200">Reflection</h3>
                <p className="text-lg text-green-800 dark:text-green-300">
                  Light bounces back when it hits a surface. This is how mirrors work!
                </p>
              </div>

              <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-900/50 text-center">
                <h3 className="font-bold text-xl mb-3 text-purple-900 dark:text-purple-200">Refraction</h3>
                <p className="text-lg text-purple-800 dark:text-purple-300">
                  Light bends when passing from one medium to another. This makes a straw look bent in water!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wave vs Particle */}
  <Card className="shadow-xl bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white">
              Wave vs Particle Nature
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Wave */}
              <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/50">
                <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">🌊 Wave Properties</h3>
                <ul className="text-lg space-y-2 text-blue-700 dark:text-blue-300">
                  <li>• Shows interference patterns</li>
                  <li>• Bends around obstacles (diffraction)</li>
                  <li>• Can be polarized</li>
                  <li>• Example: Colors in soap bubbles</li>
                </ul>
              </div>

              {/* Particle */}
              <div className="p-6 rounded-xl bg-yellow-50 dark:bg-yellow-900/50">
                <h3 className="text-2xl font-bold mb-4 text-yellow-800 dark:text-yellow-200">⚡ Particle Properties</h3>
                <ul className="text-lg space-y-2 text-yellow-700 dark:text-yellow-300">
                  <li>• Made of particles called photons</li>
                  <li>• Can knock out electrons (photoelectric effect)</li>
                  <li>• Each photon has energy and momentum</li>
                  <li>• Example: Solar panels work this way</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-xl mt-6 bg-gradient-to-r from-yellow-50 to-purple-50 dark:from-yellow-900/50 dark:to-purple-900/50">
              <h3 className="text-2xl font-bold text-center mb-4 text-yellow-700 dark:text-yellow-300">
                🤯 Amazing Truth: Wave-Particle Duality!
              </h3>
              <p className="text-xl text-center text-gray-700 dark:text-gray-300">
                Light behaves as BOTH a wave AND particles! Sometimes it acts like waves, sometimes like particles - depending on how we observe it.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
