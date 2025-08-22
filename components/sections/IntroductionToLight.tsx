"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Sun, Zap, Eye, Waves, ArrowRight, Moon, Palette, Play, Pause } from "lucide-react"
import Quiz from "@/components/Quiz"

export default function IntroductionToLight() {
  const [lightSource, setLightSource] = useState("sun") // sun, bulb, candle
  const [eyeDemo, setEyeDemo] = useState(false)
  const [showWaveAnimation, setShowWaveAnimation] = useState(false)

  const quizQuestions = [
    {
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
      correctAnswer: 0,
      explanation:
        "The speed of light in vacuum is approximately 3 × 10⁸ m/s, which is a fundamental constant in physics.",
    },
    {
      question: "Light is a form of:",
      options: ["Sound energy", "Electromagnetic radiation", "Mechanical energy", "Chemical energy"],
      correctAnswer: 1,
      explanation:
        "Light is a form of electromagnetic radiation that can travel through vacuum and does not require a medium.",
    },
    {
      question: "Which color has the shortest wavelength in visible light?",
      options: ["Red", "Blue", "Violet", "Green"],
      correctAnswer: 2,
      explanation: "Violet light has the shortest wavelength among visible colors, while red has the longest.",
    },
  ]

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gray-900">
      <div className="space-y-8 px-4 sm:px-6 lg:px-8 py-6 text-gray-900 dark:text-white">

        {/* Enhanced Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-black mb-6">
            Introduction to Light
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Understanding the fundamental nature and properties of light through interactive simulations
          </p>
          
          {/* Interactive Light Spectrum Header */}
          <div className="flex justify-center mt-6">
            <svg width="300" height="40" className="rounded-lg">
              <defs>
                <linearGradient id="spectrum" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:"#8B00FF", stopOpacity:1}} />
                  <stop offset="16.66%" style={{stopColor:"#4B0082", stopOpacity:1}} />
                  <stop offset="33.33%" style={{stopColor:"#0000FF", stopOpacity:1}} />
                  <stop offset="50%" style={{stopColor:"#00FF00", stopOpacity:1}} />
                  <stop offset="66.66%" style={{stopColor:"#FFFF00", stopOpacity:1}} />
                  <stop offset="83.33%" style={{stopColor:"#FF7F00", stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#FF0000", stopOpacity:1}} />
                </linearGradient>
              </defs>
              <rect width="300" height="20" fill="url(#spectrum)" y="10" rx="10" className="animate-pulse" />
              <text x="150" y="8" textAnchor="middle" className="text-xs font-bold fill-gray-700 dark:fill-white">
                Visible Light Spectrum
              </text>
            </svg>
          </div>
        </div>

        <Card className="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white">
              <Sun className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500 flex-shrink-0" />
              <span>What is Light?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-900 dark:text-blue-200 font-medium mb-4">
                Light is a form of energy that travels in the form of waves! ✨
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Light is electromagnetic radiation that makes vision possible. It travels in straight lines and can travel
                through vacuum at a speed of approximately 3 × 10⁸ m/s.
              </p>
            </div>

            {/* Interactive Light Source Demo */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/40 dark:to-pink-900/40 p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
                <h3 className="font-bold text-xl sm:text-2xl text-purple-900 dark:text-purple-200">
                  Interactive Light Sources
                </h3>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => setLightSource("sun")}
                    variant={lightSource === "sun" ? "default" : "outline"}
                    size="sm"
                    className="text-sm"
                  >
                    ☀️ Sun
                  </Button>
                  <Button
                    onClick={() => setLightSource("bulb")}
                    variant={lightSource === "bulb" ? "default" : "outline"}
                    size="sm"
                    className="text-sm"
                  >
                    💡 Bulb
                  </Button>
                  <Button
                    onClick={() => setLightSource("candle")}
                    variant={lightSource === "candle" ? "default" : "outline"}
                    size="sm"
                    className="text-sm"
                  >
                    🕯️ Candle
                  </Button>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="text-8xl animate-pulse">
                  {lightSource === "sun" && "☀️"}
                  {lightSource === "bulb" && "💡"}
                  {lightSource === "candle" && "🕯️"}
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {lightSource === "sun" && "Natural Light Source - Very Hot (5778K)"}
                  {lightSource === "bulb" && "Artificial Light Source - Warm (2700K)"}
                  {lightSource === "candle" && "Chemical Light Source - Warm (1900K)"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                <h3 className="font-bold text-xl sm:text-2xl text-green-900 dark:text-green-200 mb-4">
                  Key Terms:
                </h3>
                <ul className="text-base sm:text-lg space-y-3 text-green-800 dark:text-green-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-2xl">📏</span>
                    <div>
                      <strong>Ray of Light:</strong> Path of light energy
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-2xl">🔦</span>
                    <div>
                      <strong>Beam of Light:</strong> Group of light rays
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-2xl">☀️</span>
                    <div>
                      <strong>Luminous Objects:</strong> Objects that emit their own light
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-2xl">🌙</span>
                    <div>
                      <strong>Non-luminous Objects:</strong> Objects that don't emit light
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
                <h3 className="font-bold text-xl sm:text-2xl text-purple-900 dark:text-purple-200 mb-4">
                  How Do We See? 👁️
                </h3>
                <div className="space-y-4">
                  <Button
                    onClick={() => setEyeDemo(!eyeDemo)}
                    variant="outline"
                    className="w-full text-base py-3"
                  >
                    {eyeDemo ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                    {eyeDemo ? "Stop Vision Demo" : "Start Vision Demo"}
                  </Button>
                  
                  <div className="flex justify-center">
                    <svg width="350" height="120" className="border rounded-lg bg-gradient-to-b from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20">
                      {/* Sun */}
                      <circle cx="50" cy="40" r="15" fill="#FCD34D" />
                      
                      {/* Object */}
                      <rect x="140" y="50" width="30" height="40" fill="#8B4513" rx="5" />
                      <text x="155" y="105" textAnchor="middle" className="text-xs font-bold fill-gray-800 dark:fill-white">Object</text>
                      
                      {/* Eye */}
                      <ellipse cx="280" cy="60" rx="20" ry="12" fill="#F3F4F6" stroke="#374151" strokeWidth="2" />
                      <circle cx="280" cy="60" r="8" fill="#1F2937" />
                      <text x="280" y="85" textAnchor="middle" className="text-xs font-bold fill-gray-800 dark:fill-white">Eye</text>
                      
                      {eyeDemo && (
                        <g className="animate-pulse">
                          {/* Light from sun to object */}
                          <line x1="65" y1="40" x2="140" y2="60" stroke="#FEF08A" strokeWidth="3" markerEnd="url(#arrow-vision)" />
                          {/* Reflected light to eye */}
                          <line x1="170" y1="70" x2="260" y2="60" stroke="#FEF08A" strokeWidth="3" markerEnd="url(#arrow-vision)" />
                        </g>
                      )}
                      
                      <defs>
                        <marker id="arrow-vision" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto" fill="#FEF08A">
                          <polygon points="0 0, 8 3, 0 6" />
                        </marker>
                      </defs>
                      
                      {/* Process arrows */}
                      <text x="95" y="25" className="text-xs font-bold fill-gray-800 dark:fill-white">Light</text>
                      <text x="205" y="45" className="text-xs font-bold fill-gray-800 dark:fill-white">Reflects</text>
                    </svg>
                  </div>
                  
                  <p className="text-base sm:text-lg text-purple-800 dark:text-purple-300 text-center">
                    Light → Object → Reflects → Eyes → Brain → We See! 🧠
                  </p>
                </div>
              </div>
            </div>
        </CardContent>
      </Card>

        <Card className="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white">
              Key Properties of Light
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-blue-900 dark:text-blue-200">
                  🚀 Speed of Light
                </h3>
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold">300,000 km/s</div>
                  <p className="text-lg text-blue-700 dark:text-blue-300">
                    Light travels incredibly fast - it can go around Earth 7.5 times in just 1 second!
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-green-900 dark:text-green-200">
                  📏 Straight Line Travel
                </h3>
                <div className="text-center space-y-4">
                  <div className="text-4xl">→→→</div>
                  <p className="text-lg text-green-700 dark:text-green-300">
                    Light travels in straight lines, which is why we get sharp shadows!
                  </p>
                </div>
              </div>
            </div>
        </CardContent>
      </Card>

        <Card className="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl lg:text-4xl flex items-center space-x-3 text-gray-900 dark:text-white">
              <Waves className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500" />
              <span>Light as Electromagnetic Waves</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() => setShowWaveAnimation(!showWaveAnimation)}
                  variant="outline"
                  className="text-lg py-4 px-6"
                >
                  {showWaveAnimation ? <Pause className="h-6 w-6 mr-2" /> : <Play className="h-6 w-6 mr-2" />}
                  {showWaveAnimation ? "Stop" : "Start"} Wave Animation
                </Button>
              </div>

              <div className="w-full h-64 bg-gray-50 dark:bg-gray-900 rounded-xl relative overflow-hidden border-4 border-gray-300 dark:border-gray-600">
                {showWaveAnimation ? (
                  <svg width="100%" height="100%" className="absolute inset-0">
                    {/* Electric field wave */}
                    <path
                      d="M0,128 Q50,80 100,128 T200,128 T300,128 T400,128 T500,128 T600,128 T700,128 T800,128"
                      stroke="#EF4444"
                      strokeWidth="4"
                      fill="none"
                      className="animate-pulse"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0,0; 100,0; 0,0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </path>
                    
                    {/* Magnetic field wave */}
                    <path
                      d="M0,128 Q50,176 100,128 T200,128 T300,128 T400,128 T500,128 T600,128 T700,128 T800,128"
                      stroke="#3B82F6"
                      strokeWidth="4"
                      fill="none"
                      className="animate-pulse"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0,0; 100,0; 0,0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </path>
                    
                    {/* Direction of propagation */}
                    <defs>
                      <marker id="arrowhead-wave" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
                      </marker>
                    </defs>
                    <line x1="50" y1="200" x2="150" y2="200" stroke="#10B981" strokeWidth="3" markerEnd="url(#arrowhead-wave)" />
                    
                    {/* Labels */}
                    <text x="20" y="70" className="text-lg font-bold fill-red-600 dark:fill-red-400">
                      Electric Field (E)
                    </text>
                    <text x="20" y="190" className="text-lg font-bold fill-blue-600 dark:fill-blue-400">
                      Magnetic Field (B)
                    </text>
                    <text x="60" y="220" className="text-lg font-bold fill-green-600 dark:fill-green-400">
                      Direction
                    </text>
                    
                    {/* Wavelength indicator */}
                    <line x1="100" y1="240" x2="200" y2="240" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="5,5" />
                    <text x="130" y="235" className="text-sm font-bold fill-gray-600 dark:fill-gray-400">
                      λ (Wavelength)
                    </text>
                    
                    {/* Speed equation */}
                    <text x="400" y="40" className="text-xl font-bold fill-gray-800 dark:fill-white">
                      c = ν × λ = 3 × 10⁸ m/s
                    </text>
                    <text x="420" y="60" className="text-sm fill-gray-600 dark:fill-gray-300">
                      (Speed = Frequency × Wavelength)
                    </text>
                  </svg>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                      Click "Start Wave Animation" to see electromagnetic waves in action!
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                <h3 className="font-bold text-xl text-blue-900 dark:text-blue-200 mb-4">
                  🔬 Wave Properties of Light:
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ul className="text-lg space-y-3 text-blue-800 dark:text-blue-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-2xl">📏</span>
                      <div><strong>Wavelength:</strong> Distance between wave peaks</div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-2xl">🔄</span>
                      <div><strong>Frequency:</strong> How many waves per second</div>
                    </li>
                  </ul>
                  <ul className="text-lg space-y-3 text-blue-800 dark:text-blue-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-2xl">⚡</span>
                      <div><strong>Energy:</strong> Higher frequency = more energy</div>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-2xl">🌈</span>
                      <div><strong>Color:</strong> Determined by wavelength</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-lg">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white">
            Sources of Light - Interactive Demo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Interactive Light Source Selector */}
            <div className="bg-yellow-50 border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-700 p-6 rounded-xl border">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-yellow-900 dark:text-yellow-200">
                Choose a Light Source:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { id: 'sun', name: 'Sun ☀️', color: 'yellow' },
                  { id: 'bulb', name: 'Bulb 💡', color: 'orange' },
                  { id: 'candle', name: 'Candle 🕯️', color: 'red' },
                  { id: 'laser', name: 'Laser ⚡', color: 'blue' }
                ].map((source) => (
                  <button
                    key={source.id}
                    onClick={() => setLightSource(source.id)}
                    className={`p-4 rounded-xl text-lg font-semibold transition-all duration-200 ${
                      lightSource === source.id
                        ? `bg-${source.color}-500 text-white shadow-lg scale-105`
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                    }`}
                  >
                    {source.name}
                  </button>
                ))}
              </div>
              
              {/* Light Source Visualization */}
              <div className="w-full h-48 rounded-xl relative overflow-hidden border-4 bg-gray-100 border-gray-300 dark:bg-gray-900 dark:border-gray-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Light source icon */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${
                    lightSource === 'sun' ? 'bg-yellow-400 animate-spin' :
                    lightSource === 'bulb' ? 'bg-orange-400 animate-pulse' :
                    lightSource === 'candle' ? 'bg-red-400 animate-bounce' :
                    'bg-blue-400 animate-ping'
                  }`}>
                    {lightSource === 'sun' ? '☀️' :
                     lightSource === 'bulb' ? '💡' :
                     lightSource === 'candle' ? '🕯️' : '⚡'}
                  </div>
                  
                  {/* Light rays */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-24 h-1 ${
                          lightSource === 'sun' ? 'bg-yellow-400' :
                          lightSource === 'bulb' ? 'bg-orange-400' :
                          lightSource === 'candle' ? 'bg-red-400' :
                          'bg-blue-400'
                        } animate-pulse origin-left`}
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${i * 45}deg) translateX(32px)`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Source info */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-white shadow-lg">
                  <div className="text-lg font-bold">
                    {lightSource === 'sun' ? 'Natural Source' :
                     lightSource === 'bulb' ? 'Artificial Source' :
                     lightSource === 'candle' ? 'Artificial Source' :
                     'Artificial Source'}
                  </div>
                  <div className="text-sm">
                    {lightSource === 'sun' ? 'Nuclear fusion' :
                     lightSource === 'bulb' ? 'Electrical energy' :
                     lightSource === 'candle' ? 'Chemical energy' :
                     'Stimulated emission'}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold flex items-center space-x-3 text-green-700 dark:text-green-300">
                  <Sun className="h-8 w-8" />
                  <span>Natural Sources (Luminous)</span>
                </h3>
                <div className="bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-700 p-6 rounded-xl border">
                  <ul className="list-disc list-inside space-y-3 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-green-300">
                    <li>Sun (primary source) ☀️</li>
                    <li>Stars ⭐</li>
                    <li>Lightning ⚡</li>
                    <li>Fireflies 🪲</li>
                    <li>Burning materials 🔥</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold flex items-center space-x-3 text-blue-700 dark:text-blue-300">
                  <Lightbulb className="h-8 w-8" />
                  <span>Artificial Sources</span>
                </h3>
                <div className="bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700 p-6 rounded-xl border">
                  <ul className="list-disc list-inside space-y-3 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-blue-300">
                    <li>Electric bulbs 💡</li>
                    <li>Candles 🕯️</li>
                    <li>LED lights</li>
                    <li>Laser</li>
                    <li>Fluorescent tubes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-700 p-6 rounded-xl border">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-yellow-900 dark:text-yellow-200">
                Fun Fact! 🤔
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-yellow-800 dark:text-yellow-300">
                We can't see objects in a dark room because there's no light to reflect off them and reach our eyes. Even
                if we shine a torch directly into our eyes, we won't see objects - the light must bounce off objects
                first!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

            <div className="w-full">
        <div className="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-xl border shadow-lg p-6">
          <Quiz 
            questions={quizQuestions} 
            title="Test Your Knowledge: Introduction to Light"
          />
        </div>
      </div>
      </div>
    </div>
  )
}
