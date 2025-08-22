"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sun, Cloud, Droplets } from "lucide-react"
import Quiz from "@/components/Quiz"

export default function ScatteringOfLight() {
  const [showSkyAnimation, setShowSkyAnimation] = useState(false)
  const [showSunsetAnimation, setShowSunsetAnimation] = useState(false)

  const quizQuestions = [
    {
      question: "Why does the sky appear blue?",
      options: [
        "Blue light is scattered more",
        "Blue light is absorbed less",
        "Blue light travels faster",
        "Blue light is brighter",
      ],
      correctAnswer: 0,
      explanation:
        "Blue light has a shorter wavelength and is scattered more by atmospheric particles according to Rayleigh's scattering law.",
    },
    {
      question: "According to Rayleigh's scattering law, scattering is inversely proportional to:",
      options: ["λ²", "λ³", "λ⁴", "λ"],
      correctAnswer: 2,
      explanation:
        "Rayleigh's scattering law states that scattering is inversely proportional to the fourth power of wavelength (λ⁴).",
    },
    {
      question: "Why do clouds appear white?",
      options: ["Rayleigh scattering", "Mie scattering", "Tyndall scattering", "Raman scattering"],
      correctAnswer: 1,
      explanation: "Clouds appear white due to Mie scattering by water droplets, which scatters all colors equally.",
    },
  ]

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gray-900 text-gray-900 dark:text-white space-y-10 px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 dark:text-black">Scattering of Light</h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">Understanding why the sky is blue and sunsets are red</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl flex items-center space-x-2">
            <Sun className="h-5 w-5 text-yellow-500" />
            <span>What is Scattering? 🌟</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-sm sm:text-base text-blue-900 font-medium mb-2">
              When sunlight enters Earth's atmosphere, tiny particles redirect light in all directions. This is called{" "}
              <strong>scattering</strong>!
            </p>
            <p className="text-sm text-blue-800">
              The interacting particle is called a <strong>scatterer</strong> - it could be gas molecules, dust, or
              water droplets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Types by Energy:</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>
                  <strong>Elastic Scattering:</strong> Energy stays the same
                </li>
                <li>
                  <strong>Inelastic Scattering:</strong> Energy changes
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Types by Particle Size:</h3>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Rayleigh (very small particles)</li>
                <li>• Mie (larger particles)</li>
                <li>• Tyndall (colloidal particles)</li>
                <li>• Raman (molecular scattering)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Rayleigh Scattering - Why Sky is Blue! 💙</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Rayleigh's Scattering Law:</h3>
            <div className="text-center p-3 bg-white dark:bg-gray-800 rounded border">
              <p className="font-mono text-lg font-bold text-blue-900">Scattering ∝ 1/λ⁴</p>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                Amount of scattering is inversely proportional to fourth power of wavelength
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Button onClick={() => setShowSkyAnimation(!showSkyAnimation)} className="w-full sm:w-auto">
              {showSkyAnimation ? "Stop" : "Start"} Sky Color Animation
            </Button>

            <div className="w-full h-48 bg-gradient-to-b from-blue-400 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/30 rounded-lg relative overflow-hidden">
              {showSkyAnimation && (
                <>
                  <div className="absolute top-4 left-4">
                    <Sun className="h-8 w-8 text-yellow-400 animate-spin" />
                  </div>

                  {/* Scattered blue light particles */}
                  <div className="absolute top-8 left-20 w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="absolute top-16 left-32 w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                  <div className="absolute top-12 left-48 w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                  <div className="absolute top-20 left-64 w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute top-6 left-80 w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-400"></div>

                  {/* Red light passing through */}
                  <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent animate-pulse"></div>
                </>
              )}

              <div className="absolute bottom-4 left-4 text-white text-sm">
                <p className="font-bold">Blue light scattered in all directions!</p>
                <p className="text-xs">That's why we see blue sky 🌌</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Why Blue? 🤔</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Blue light has shorter wavelength</li>
                  <li>• Shorter wavelength = more scattering</li>
                  <li>• Blue light bounces around the sky</li>
                  <li>• Our eyes see blue from all directions</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2">What about Red? 🔴</h3>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Red light has longer wavelength</li>
                  <li>• Longer wavelength = less scattering</li>
                  <li>• Red light travels straight through</li>
                  <li>• That's why sun looks yellowish-white</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Why Sunsets are Red! 🌅</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={() => setShowSunsetAnimation(!showSunsetAnimation)} className="w-full sm:w-auto">
            {showSunsetAnimation ? "Stop" : "Start"} Sunset Animation
          </Button>

          <div className="w-full h-48 bg-gradient-to-b from-orange-400 via-red-400 to-red-600 dark:from-orange-900 dark:via-red-800 dark:to-red-900 rounded-lg relative overflow-hidden">
            {showSunsetAnimation && (
              <>
                <div className="absolute top-4 right-4">
                  <Sun className="h-12 w-12 text-red-500 animate-pulse" />
                </div>

                {/* Long path through atmosphere */}
                <div className="absolute top-16 left-0 w-full h-2 bg-gradient-to-r from-white via-yellow-300 to-red-500 animate-pulse"></div>

                {/* Blue light being scattered away */}
                <div className="absolute top-8 left-10 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-12 left-20 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-100"></div>
                <div className="absolute top-6 left-30 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-200"></div>
                <div className="absolute top-14 left-40 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300"></div>
              </>
            )}

            <div className="absolute bottom-4 left-4 text-white text-sm">
              <p className="font-bold">At sunset, light travels longer path!</p>
              <p className="text-xs">Most blue light scattered away, red reaches us 🌇</p>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-900 mb-2">The Science Behind Red Sunsets:</h3>
            <ol className="text-sm text-orange-800 space-y-1 list-decimal list-inside">
              <li>At sunrise/sunset, sunlight travels through MORE atmosphere</li>
              <li>Blue light gets scattered away during this long journey</li>
              <li>Red light (less scattered) reaches our eyes</li>
              <li>Result: Beautiful red/orange sunsets! 🌅</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Other Types of Scattering</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center space-x-2">
                  <Cloud className="h-4 w-4" />
                  <span>Mie Scattering</span>
                </h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Particles similar to light wavelength</li>
                  <li>• Water droplets, dust, pollen</li>
                  <li>• Scatters all colors equally</li>
                  <li>• Makes clouds appear WHITE ☁️</li>
                </ul>
              </div>

              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-cyan-900 mb-2 flex items-center space-x-2">
                  <Droplets className="h-4 w-4" />
                  <span>Tyndall Scattering</span>
                </h3>
                <ul className="text-sm text-cyan-800 space-y-1">
                  <li>• Scattering by colloidal particles</li>
                  <li>• Examples: Milk, muddy water</li>
                  <li>• Makes light beam visible in dusty room</li>
                  <li>• Also called Tyndall Effect 💡</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Raman Scattering</h3>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Light interacts with molecules</li>
                  <li>• Changes wavelength/frequency</li>
                  <li>• Creates new spectral lines</li>
                  <li>• Used in scientific analysis 🔬</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">Fun Examples! 🎉</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>🥛 Milk looks white (Tyndall)</li>
                  <li>☁️ Clouds are white (Mie)</li>
                  <li>🌫️ Fog scatters light (Mie)</li>
                  <li>🔦 Flashlight beam in dust (Tyndall)</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="w-full">
        <Quiz questions={quizQuestions} title="Test Your Knowledge: Scattering of Light" />
      </div>
    </div>
  )
}
