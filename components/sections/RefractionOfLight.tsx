"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Quiz from "@/components/Quiz"

export default function RefractionOfLight() {
  const [incidentAngle, setIncidentAngle] = useState([30])
  const [n1] = useState(1.0) // Air
  const [n2] = useState(1.5) // Glass
  const [showAnimation, setShowAnimation] = useState(false)
  
  // New state variables for additional simulations
  const [refractionDemo, setRefractionDemo] = useState(false)
  const [lawsDemo, setLawsDemo] = useState(false)
  const [denserToRarerAngle, setDenserToRarerAngle] = useState([45])
  const [denserN1] = useState(1.5) // Glass
  const [denserN2] = useState(1.0) // Air

  // Calculate refracted angle using Snell's law: n1 * sin(i) = n2 * sin(r)
  const calculateRefractedAngle = (incident: number) => {
    const incidentRad = (incident * Math.PI) / 180
    const sinR = (n1 * Math.sin(incidentRad)) / n2
    const refractedRad = Math.asin(Math.min(sinR, 1))
    return (refractedRad * 180) / Math.PI
  }

  // Calculate refracted angle for denser to rarer medium
  const calculateDenserToRarerAngle = (incident: number) => {
    const incidentRad = (incident * Math.PI) / 180
    const sinR = (denserN1 * Math.sin(incidentRad)) / denserN2
    if (sinR > 1) return null // Total internal reflection
    const refractedRad = Math.asin(sinR)
    return (refractedRad * 180) / Math.PI
  }

  // Calculate critical angle for total internal reflection
  const criticalAngle = Math.asin(denserN2 / denserN1) * (180 / Math.PI)

  const refractedAngle = calculateRefractedAngle(incidentAngle[0])
  const denserToRarerRefracted = calculateDenserToRarerAngle(denserToRarerAngle[0])

  const quizQuestions = [
    {
      question: "What is Snell's law?",
      options: ["n₁ sin i = n₂ sin r", "n₁ cos i = n₂ cos r", "n₁ tan i = n₂ tan r", "n₁ + n₂ = sin i + sin r"],
      correctAnswer: 0,
      explanation:
        "Snell's law states that n₁ sin i = n₂ sin r, where n₁ and n₂ are refractive indices and i and r are angles of incidence and refraction.",
    },
    {
      question: "When light passes from air to glass, it:",
      options: ["Bends away from the normal", "Bends towards the normal", "Does not bend", "Reflects completely"],
      correctAnswer: 1,
      explanation:
        "When light passes from a rarer medium (air) to a denser medium (glass), it bends towards the normal.",
    },
    {
      question: "What causes refraction of light?",
      options: ["Change in color", "Change in speed", "Change in brightness", "Change in direction only"],
      correctAnswer: 1,
      explanation: "Refraction occurs due to the change in speed of light when it moves from one medium to another.",
    },
  ]

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gray-900 text-gray-900 dark:text-white space-y-10 px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 dark:text-black">Refraction of Light</h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Understanding how light bends when it passes from one medium to another
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">What is Refraction? 🤔</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm sm:text-base text-blue-900 font-medium mb-2">
              When light travels from one transparent medium to another obliquely, its path changes direction. This is
              called <strong>refraction</strong>!
            </p>
            <p className="text-sm text-blue-800">
              <strong>Why does this happen?</strong> Light travels at different speeds in different materials. It's
              faster in air and slower in glass or water.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Real-life Examples:</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>🥤 Straw looks bent in water</li>
                <li>🏊 Swimming pool looks shallower</li>
                <li>👓 Glasses help us see clearly</li>
                <li>🌈 Prism creates rainbow colors</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Key Terms:</h3>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>
                  <strong>Rarer medium:</strong> Air (n = 1.0)
                </li>
                <li>
                  <strong>Denser medium:</strong> Glass (n = 1.5)
                </li>
                <li>
                  <strong>Normal:</strong> Perpendicular line at interface
                </li>
                <li>
                  <strong>Refractive index:</strong> How much light slows down
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Refraction Demonstration */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-blue-900">Interactive Demo: See Refraction in Action!</h3>
              <Button
                onClick={() => setRefractionDemo(!refractionDemo)}
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                {refractionDemo ? "Stop Demo" : "Start Demo"}
              </Button>
            </div>
            
            <div className="flex justify-center overflow-x-auto">
              <svg
                width="450"
                height="250"
                viewBox="0 0 450 250"
                className="border rounded-lg bg-gradient-to-b from-sky-100 to-blue-200 min-w-[350px]"
              >
                {/* Water surface */}
                <line x1="0" y1="125" x2="450" y2="125" stroke="#2563eb" strokeWidth="4" strokeDasharray="10,5" />
                <text x="10" y="120" className="text-xs font-bold fill-blue-700">
                  Water Surface
                </text>

                {/* Medium labels */}
                <text x="10" y="30" className="text-sm font-bold fill-blue-900">
                  Air (faster light speed)
                </text>
                <text x="10" y="220" className="text-sm font-bold fill-blue-900">
                  Water (slower light speed)
                </text>

                {/* Pencil/Straw representation */}
                <g className={refractionDemo ? "animate-pulse" : ""}>
                  {/* Straight part in air */}
                  <line x1="200" y1="50" x2="200" y2="125" stroke="#8b4513" strokeWidth="8" />
                  {/* Bent appearance in water */}
                  <line x1="200" y1="125" x2="180" y2="200" stroke="#8b4513" strokeWidth="8" />
                  
                  {/* Light rays showing the illusion */}
                  <g className={refractionDemo ? "opacity-100" : "opacity-60"}>
                    {/* Light ray from pencil tip */}
                    <line x1="180" y1="200" x2="150" y2="125" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrow-yellow)" />
                    <line x1="150" y1="125" x2="100" y2="80" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrow-yellow)" />
                    
                    {/* Eye */}
                    <circle cx="100" cy="80" r="15" fill="#f3f4f6" stroke="#374151" strokeWidth="2" />
                    <circle cx="100" cy="80" r="8" fill="#1f2937" />
                    <text x="85" y="65" className="text-xs font-bold">
                      Eye
                    </text>
                  </g>
                  
                  {/* Dotted lines showing perceived straight path */}
                  {refractionDemo && (
                    <line x1="100" y1="80" x2="180" y2="200" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                  )}
                </g>

                {/* Definitions */}
                <defs>
                  <marker id="arrow-yellow" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto" fill="#fbbf24">
                    <polygon points="0 0, 8 3, 0 6" />
                  </marker>
                </defs>

                {/* Labels */}
                <text x="220" y="90" className="text-xs fill-amber-600 font-bold">
                  Actual position
                </text>
                {refractionDemo && (
                  <text x="140" y="150" className="text-xs fill-red-600 font-bold">
                    Appears here!
                  </text>
                )}
              </svg>
            </div>
            
            <p className="text-sm text-blue-800 mt-2 text-center">
              {refractionDemo 
                ? "🔍 The pencil appears bent because light changes direction when moving between air and water!"
                : "Click 'Start Demo' to see why a pencil looks bent in water!"
              }
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Laws of Refraction (Snell's Laws)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">The Two Laws:</h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-500">
                <h4 className="font-medium text-blue-900">First Law:</h4>
                <p className="text-sm text-blue-800">
                  The incident ray, refracted ray, and normal all lie in the same plane.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-500">
                <h4 className="font-medium text-blue-900">Second Law (Snell's Law):</h4>
                <p className="text-sm text-blue-800">
                  The ratio of sine of angle of incidence to sine of angle of refraction is constant for a given pair of
                  media.
                </p>
              </div>
            </div>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border text-center">
              <p className="font-mono text-base sm:text-lg font-bold text-blue-900">n₁ sin i = n₂ sin r</p>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Where n₁, n₂ are refractive indices and i, r are angles</p>
            </div>
          </div>

          {/* Interactive Laws Demonstration */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-purple-900">Interactive Demo: Laws of Refraction</h3>
              <Button
                onClick={() => setLawsDemo(!lawsDemo)}
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                {lawsDemo ? "Stop Animation" : "Animate Laws"}
              </Button>
            </div>
            
            <div className="flex justify-center overflow-x-auto">
              <svg
                width="500"
                height="300"
                viewBox="0 0 500 300"
                className="border rounded-lg bg-gradient-to-b from-indigo-100 to-purple-200 min-w-[400px]"
              >
                {/* 3D plane representation */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e7ff" strokeWidth="1" opacity="0.5"/>
                  </pattern>
                  <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#ddd6fe", stopOpacity:0.8}} />
                    <stop offset="100%" style={{stopColor:"#c4b5fd", stopOpacity:0.3}} />
                  </linearGradient>
                </defs>

                {/* The plane containing all rays */}
                <ellipse cx="250" cy="150" rx="200" ry="100" fill="url(#planeGrad)" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="8,4" />
                <text x="50" y="100" className="text-xs font-bold fill-purple-700">
                  Plane of Incidence
                </text>

                {/* Interface line */}
                <line x1="50" y1="150" x2="450" y2="150" stroke="black" strokeWidth="4" strokeDasharray="12,6" />
                <text x="60" y="145" className="text-xs font-bold">
                  Interface
                </text>

                {/* Normal line */}
                <line x1="250" y1="50" x2="250" y2="250" stroke="gray" strokeWidth="3" strokeDasharray="6,6" />
                <text x="255" y="70" className="text-xs font-bold">
                  Normal
                </text>

                {/* Medium labels */}
                <text x="60" y="80" className="text-sm font-bold fill-indigo-900">
                  Medium 1 (n₁ = 1.0)
                </text>
                <text x="60" y="230" className="text-sm font-bold fill-indigo-900">
                  Medium 2 (n₂ = 1.33)
                </text>

                <g className={lawsDemo ? "animate-pulse" : ""}>
                  {/* Incident ray */}
                  <line
                    x1="150"
                    y1="80"
                    x2="250"
                    y2="150"
                    stroke="#dc2626"
                    strokeWidth="5"
                    markerEnd="url(#arrowhead-red-laws)"
                  />
                  
                  {/* Refracted ray */}
                  <line
                    x1="250"
                    y1="150"
                    x2="300"
                    y2="220"
                    stroke="#2563eb"
                    strokeWidth="5"
                    markerEnd="url(#arrowhead-blue-laws)"
                  />

                  {/* Show all rays in the same plane */}
                  {lawsDemo && (
                    <>
                      {/* Extended incident ray */}
                      <line x1="100" y1="50" x2="150" y2="80" stroke="#dc2626" strokeWidth="3" opacity="0.6" strokeDasharray="4,4" />
                      {/* Extended refracted ray */}
                      <line x1="300" y1="220" x2="350" y2="250" stroke="#2563eb" strokeWidth="3" opacity="0.6" strokeDasharray="4,4" />
                      {/* Show they're all in the same plane */}
                      <text x="180" y="40" className="text-xs fill-green-600 font-bold">
                        ✓ All rays in same plane (Law 1)
                      </text>
                    </>
                  )}
                </g>

                {/* Angle measurements */}
                <path
                  d="M 250 150 L 220 150 A 30 30 0 0 0 200 120"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <text x="190" y="125" className="text-sm fill-red-600 font-bold">
                  i = 30°
                </text>

                <path
                  d="M 250 150 L 280 150 A 30 30 0 0 1 270 180"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2"
                />
                <text x="285" y="175" className="text-sm fill-blue-600 font-bold">
                  r = 22°
                </text>

                {/* Snell's law verification */}
                {lawsDemo && (
                  <g>
                    <rect x="350" y="50" width="140" height="80" fill="white" stroke="#8b5cf6" strokeWidth="2" rx="5" opacity="0.9" />
                    <text x="355" y="70" className="text-xs font-bold fill-purple-700">
                      Snell's Law Check:
                    </text>
                    <text x="355" y="85" className="text-xs fill-purple-600">
                      n₁ sin(30°) = 1.0 × 0.5 = 0.5
                    </text>
                    <text x="355" y="100" className="text-xs fill-purple-600">
                      n₂ sin(22°) = 1.33 × 0.37 = 0.5
                    </text>
                    <text x="355" y="115" className="text-xs font-bold fill-green-600">
                      ✓ Equal! Law 2 verified
                    </text>
                  </g>
                )}

                {/* Arrow marker definitions for laws demo */}
                <defs>
                  <marker id="arrowhead-red-laws" markerWidth="12" markerHeight="8" refX="0" refY="4" orient="auto">
                    <polygon points="0 0, 12 4, 0 8" fill="#dc2626" />
                  </marker>
                  <marker id="arrowhead-blue-laws" markerWidth="12" markerHeight="8" refX="0" refY="4" orient="auto">
                    <polygon points="0 0, 12 4, 0 8" fill="#2563eb" />
                  </marker>
                </defs>

                {/* Labels for rays */}
                <text x="170" y="115" className="text-xs fill-red-600 font-bold">
                  Incident Ray
                </text>
                <text x="270" y="190" className="text-xs fill-blue-600 font-bold">
                  Refracted Ray
                </text>
              </svg>
            </div>
            
            <div className="mt-4 text-sm text-purple-800">
              <p className="font-semibold mb-1">What this demo shows:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li><strong>Law 1:</strong> All rays (incident, refracted, normal) lie in the same plane</li>
                <li><strong>Law 2:</strong> The ratio n₁sin(i) = n₂sin(r) remains constant</li>
                <li>Click "Animate Laws" to see Snell's law calculation in real-time!</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Interactive Simulation: Refraction</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Adjust the incident angle and observe how the light ray bends according to Snell's law
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Incident Angle: {incidentAngle[0]}°</label>
              <Slider
                value={incidentAngle}
                onValueChange={setIncidentAngle}
                max={80}
                min={10}
                step={1}
                className="w-full"
              />
            </div>

            <div className="flex justify-center overflow-x-auto">
              <svg
                width="400"
                height="300"
                viewBox="0 0 400 300"
                className="border rounded-lg bg-gradient-to-b from-blue-100 to-blue-200 min-w-[300px] sm:min-w-[400px]"
              >
                {/* Interface line */}
                <line x1="0" y1="150" x2="400" y2="150" stroke="black" strokeWidth="3" strokeDasharray="8,4" />
                <text x="10" y="145" className="text-xs font-bold">
                  Interface
                </text>

                {/* Normal line */}
                <line x1="200" y1="0" x2="200" y2="300" stroke="gray" strokeWidth="2" strokeDasharray="4,4" />
                <text x="205" y="20" className="text-xs">
                  Normal
                </text>

                {/* Medium labels */}
                <text x="10" y="30" className="text-sm font-bold fill-blue-900">
                  Air (n = 1.0) - Rarer Medium
                </text>
                <text x="10" y="280" className="text-sm font-bold fill-blue-900">
                  Glass (n = 1.5) - Denser Medium
                </text>

                {/* Incident ray */}
                <line
                  x1={200 - 100 * Math.sin((incidentAngle[0] * Math.PI) / 180)}
                  y1={150 - 100 * Math.cos((incidentAngle[0] * Math.PI) / 180)}
                  x2="200"
                  y2="150"
                  stroke="red"
                  strokeWidth="4"
                  markerEnd="url(#arrowhead-red)"
                />

                {/* Refracted ray */}
                <line
                  x1="200"
                  y1="150"
                  x2={200 + 100 * Math.sin((refractedAngle * Math.PI) / 180)}
                  y2={150 + 100 * Math.cos((refractedAngle * Math.PI) / 180)}
                  stroke="blue"
                  strokeWidth="4"
                  markerEnd="url(#arrowhead-blue)"
                />

                {/* Arrow marker definitions */}
                <defs>
                  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="red" />
                  </marker>
                  <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="blue" />
                  </marker>
                </defs>

                {/* Angle arcs and labels */}
                <path
                  d={`M 200 150 L ${200 - 40} 150 A 40 40 0 0 0 ${200 - 40 * Math.sin((incidentAngle[0] * Math.PI) / 180)} ${150 - 40 * Math.cos((incidentAngle[0] * Math.PI) / 180)}`}
                  fill="none"
                  stroke="red"
                  strokeWidth="2"
                />
                <text x={200 - 50} y={130} className="text-sm fill-red-600 font-bold">
                  i = {incidentAngle[0]}°
                </text>

                <path
                  d={`M 200 150 L ${200 + 40} 150 A 40 40 0 0 1 ${200 + 40 * Math.sin((refractedAngle * Math.PI) / 180)} ${150 + 40 * Math.cos((refractedAngle * Math.PI) / 180)}`}
                  fill="none"
                  stroke="blue"
                  strokeWidth="2"
                />
                <text x={210} y={180} className="text-sm fill-blue-600 font-bold">
                  r = {refractedAngle.toFixed(1)}°
                </text>

                {/* Labels for rays */}
                <text x={120} y={80} className="text-xs fill-red-600 font-bold">
                  Incident Ray
                </text>
                <text x={250} y={220} className="text-xs fill-blue-600 font-bold">
                  Refracted Ray
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <Badge variant="outline" className="mb-2 text-xs sm:text-sm bg-red-50">
                  Incident Angle
                </Badge>
                <p className="text-xl sm:text-2xl font-bold text-red-600">{incidentAngle[0]}°</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 text-xs sm:text-sm bg-blue-50">
                  Refracted Angle
                </Badge>
                <p className="text-xl sm:text-2xl font-bold text-blue-600">{refractedAngle.toFixed(1)}°</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 text-xs sm:text-sm bg-gray-50 dark:bg-gray-800">
                  Refractive Index
                </Badge>
                <p className="text-sm sm:text-lg">
                  n₁ = {n1}
                  <br />
                  n₂ = {n2}
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Observation:</h3>
              <p className="text-sm text-green-800">
                {incidentAngle[0] > refractedAngle
                  ? "Light bends TOWARDS the normal when going from rarer to denser medium! 📐"
                  : "Notice how the light ray changes direction at the interface! 🔄"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Light from Denser to Rarer Medium 🔄</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Explore what happens when light travels from glass to air - including total internal reflection!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm sm:text-base text-orange-900 font-medium mb-2">
                When light goes from a denser medium (glass) to a rarer medium (air), it bends <strong>away</strong> from the normal!
              </p>
              <p className="text-sm text-orange-800">
                <strong>Critical Angle:</strong> At {criticalAngle.toFixed(1)}°, total internal reflection occurs - no light escapes!
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Incident Angle (in glass): {denserToRarerAngle[0]}°</label>
              <Slider
                value={denserToRarerAngle}
                onValueChange={setDenserToRarerAngle}
                max={80}
                min={10}
                step={1}
                className="w-full"
              />
              <div className="text-xs text-gray-600 dark:text-gray-300 flex justify-between">
                <span>Normal refraction</span>
                <span className="text-red-600">Critical: {criticalAngle.toFixed(1)}°</span>
                <span className="text-purple-600">Total internal reflection</span>
              </div>
            </div>

            <div className="flex justify-center overflow-x-auto">
              <svg
                width="450"
                height="350"
                viewBox="0 0 450 350"
                className="border rounded-lg bg-gradient-to-b from-amber-100 to-orange-200 min-w-[400px]"
              >
                {/* Interface line */}
                <line x1="0" y1="175" x2="450" y2="175" stroke="black" strokeWidth="4" strokeDasharray="10,5" />
                <text x="10" y="170" className="text-xs font-bold">
                  Glass-Air Interface
                </text>

                {/* Normal line */}
                <line x1="225" y1="25" x2="225" y2="325" stroke="gray" strokeWidth="3" strokeDasharray="5,5" />
                <text x="230" y="45" className="text-xs">
                  Normal
                </text>

                {/* Medium labels */}
                <text x="10" y="320" className="text-sm font-bold fill-orange-900">
                  Glass (n = 1.5) - Denser Medium
                </text>
                <text x="10" y="50" className="text-sm font-bold fill-orange-900">
                  Air (n = 1.0) - Rarer Medium
                </text>

                {/* Critical angle indicator */}
                <path
                  d={`M 225 175 L ${225 - 80} 175 A 80 80 0 0 0 ${225 - 80 * Math.sin((criticalAngle * Math.PI) / 180)} ${175 + 80 * Math.cos((criticalAngle * Math.PI) / 180)}`}
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="3,3"
                  opacity="0.7"
                />
                <text x={225 - 100} y={175 + 40} className="text-xs fill-red-600 font-bold">
                  Critical: {criticalAngle.toFixed(1)}°
                </text>

                {/* Incident ray */}
                <line
                  x1={225 - 120 * Math.sin((denserToRarerAngle[0] * Math.PI) / 180)}
                  y1={175 + 120 * Math.cos((denserToRarerAngle[0] * Math.PI) / 180)}
                  x2="225"
                  y2="175"
                  stroke="#dc2626"
                  strokeWidth="5"
                  markerEnd="url(#arrowhead-red-denser)"
                />

                {/* Refracted or reflected ray */}
                {denserToRarerRefracted !== null ? (
                  // Normal refraction
                  <line
                    x1="225"
                    y1="175"
                    x2={225 + 120 * Math.sin((denserToRarerRefracted * Math.PI) / 180)}
                    y2={175 - 120 * Math.cos((denserToRarerRefracted * Math.PI) / 180)}
                    stroke="#2563eb"
                    strokeWidth="5"
                    markerEnd="url(#arrowhead-blue-denser)"
                  />
                ) : (
                  // Total internal reflection
                  <line
                    x1="225"
                    y1="175"
                    x2={225 + 120 * Math.sin((denserToRarerAngle[0] * Math.PI) / 180)}
                    y2={175 + 120 * Math.cos((denserToRarerAngle[0] * Math.PI) / 180)}
                    stroke="#8b5cf6"
                    strokeWidth="5"
                    markerEnd="url(#arrowhead-purple-denser)"
                  />
                )}

                {/* Arrow marker definitions */}
                <defs>
                  <marker id="arrowhead-red-denser" markerWidth="12" markerHeight="8" refX="0" refY="4" orient="auto">
                    <polygon points="0 0, 12 4, 0 8" fill="#dc2626" />
                  </marker>
                  <marker id="arrowhead-blue-denser" markerWidth="12" markerHeight="8" refX="0" refY="4" orient="auto">
                    <polygon points="0 0, 12 4, 0 8" fill="#2563eb" />
                  </marker>
                  <marker id="arrowhead-purple-denser" markerWidth="12" markerHeight="8" refX="0" refY="4" orient="auto">
                    <polygon points="0 0, 12 4, 0 8" fill="#8b5cf6" />
                  </marker>
                </defs>

                {/* Angle measurements */}
                <path
                  d={`M 225 175 L ${225 - 50} 175 A 50 50 0 0 0 ${225 - 50 * Math.sin((denserToRarerAngle[0] * Math.PI) / 180)} ${175 + 50 * Math.cos((denserToRarerAngle[0] * Math.PI) / 180)}`}
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <text x={225 - 70} y={175 + 30} className="text-sm fill-red-600 font-bold">
                  i = {denserToRarerAngle[0]}°
                </text>

                {denserToRarerRefracted !== null ? (
                  <>
                    <path
                      d={`M 225 175 L ${225 + 50} 175 A 50 50 0 0 0 ${225 + 50 * Math.sin((denserToRarerRefracted * Math.PI) / 180)} ${175 - 50 * Math.cos((denserToRarerRefracted * Math.PI) / 180)}`}
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                    />
                    <text x={225 + 55} y={175 - 20} className="text-sm fill-blue-600 font-bold">
                      r = {denserToRarerRefracted.toFixed(1)}°
                    </text>
                  </>
                ) : (
                  <>
                    <path
                      d={`M 225 175 L ${225 + 50} 175 A 50 50 0 0 1 ${225 + 50 * Math.sin((denserToRarerAngle[0] * Math.PI) / 180)} ${175 + 50 * Math.cos((denserToRarerAngle[0] * Math.PI) / 180)}`}
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                    />
                    <text x={225 + 55} y={175 + 40} className="text-sm fill-purple-600 font-bold">
                      Reflected!
                    </text>
                  </>
                )}

                {/* Labels for rays */}
                <text x={150} y={250} className="text-xs fill-red-600 font-bold">
                  Incident Ray
                </text>
                
                {denserToRarerRefracted !== null ? (
                  <text x={280} y={120} className="text-xs fill-blue-600 font-bold">
                    Refracted Ray
                  </text>
                ) : (
                  <text x={280} y={250} className="text-xs fill-purple-600 font-bold">
                    Total Internal Reflection
                  </text>
                )}

                {/* Fiber optic demonstration for total internal reflection */}
                {denserToRarerRefracted === null && (
                  <g>
                    <text x={300} y={300} className="text-xs fill-purple-700 font-bold">
                      💡 Used in Fiber Optics!
                    </text>
                    <circle cx="350" cy="310" r="3" fill="#fbbf24" />
                    <circle cx="350" cy="310" r="6" fill="#fbbf24" opacity="0.5" />
                  </g>
                )}
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <Badge variant="outline" className="mb-2 text-xs sm:text-sm bg-red-50">
                  Incident Angle
                </Badge>
                <p className="text-xl sm:text-2xl font-bold text-red-600">{denserToRarerAngle[0]}°</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 text-xs sm:text-sm bg-blue-50">
                  {denserToRarerRefracted !== null ? "Refracted Angle" : "Status"}
                </Badge>
                <p className="text-xl sm:text-2xl font-bold text-blue-600">
                  {denserToRarerRefracted !== null ? `${denserToRarerRefracted.toFixed(1)}°` : "TIR"}
                </p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 text-xs sm:text-sm bg-gray-50 dark:bg-gray-800">
                  Critical Angle
                </Badge>
                <p className="text-sm sm:text-lg font-bold text-orange-600">{criticalAngle.toFixed(1)}°</p>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${denserToRarerRefracted !== null ? 'bg-green-50' : 'bg-purple-50'}`}>
              <h3 className={`font-semibold mb-2 ${denserToRarerRefracted !== null ? 'text-green-900' : 'text-purple-900'}`}>
                Observation:
              </h3>
              <p className={`text-sm ${denserToRarerRefracted !== null ? 'text-green-800' : 'text-purple-800'}`}>
                {denserToRarerRefracted !== null 
                  ? `Light bends AWAY from the normal (${denserToRarerAngle[0]}° → ${denserToRarerRefracted.toFixed(1)}°) when going from denser to rarer medium! 🔄`
                  : `Total Internal Reflection! All light is reflected back - this is how fiber optic cables work! 💫`
                }
              </p>
              {denserToRarerRefracted === null && (
                <p className="text-xs text-purple-700 mt-2">
                  <strong>Applications:</strong> Fiber optics, diamonds' brilliance, mirages, endoscopes
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Dispersion of Light 🌈</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm sm:text-base text-purple-900 font-medium mb-2">
                When white light passes through a prism, it splits into its constituent colors (VIBGYOR)!
              </p>
              <p className="text-sm text-purple-800">
                <strong>Why?</strong> Different colors have different refractive indices - they bend by different
                amounts.
              </p>
            </div>

            <div className="flex justify-center overflow-x-auto">
              <svg
                width="500"
                height="200"
                viewBox="0 0 500 200"
                className="border rounded-lg bg-gray-50 dark:bg-gray-800 min-w-[400px] sm:min-w-[500px]"
              >
                {/* Prism */}
                <polygon points="150,50 250,150 150,150" fill="lightblue" stroke="blue" strokeWidth="3" opacity="0.8" />
                <text x="170" y="130" className="text-xs font-bold">
                  Prism
                </text>

                {/* White light ray */}
                <line x1="50" y1="100" x2="150" y2="100" stroke="white" strokeWidth="6" />
                <rect x="45" y="97" width="10" height="6" fill="white" stroke="black" strokeWidth="1" />
                <text x="10" y="95" className="text-sm font-bold">
                  White Light
                </text>

                {/* Dispersed rays with animation */}
                <g className={showAnimation ? "animate-pulse" : ""}>
                  <line x1="200" y1="100" x2="350" y2="70" stroke="violet" strokeWidth="4" />
                  <line x1="200" y1="100" x2="360" y2="80" stroke="indigo" strokeWidth="4" />
                  <line x1="200" y1="100" x2="370" y2="90" stroke="blue" strokeWidth="4" />
                  <line x1="200" y1="100" x2="380" y2="100" stroke="green" strokeWidth="4" />
                  <line x1="200" y1="100" x2="370" y2="110" stroke="yellow" strokeWidth="4" />
                  <line x1="200" y1="100" x2="360" y2="120" stroke="orange" strokeWidth="4" />
                  <line x1="200" y1="100" x2="350" y2="130" stroke="red" strokeWidth="4" />
                </g>

                {/* Color labels */}
                <text x="390" y="75" className="text-sm font-bold" fill="violet">
                  V
                </text>
                <text x="390" y="85" className="text-sm font-bold" fill="indigo">
                  I
                </text>
                <text x="390" y="95" className="text-sm font-bold" fill="blue">
                  B
                </text>
                <text x="390" y="105" className="text-sm font-bold" fill="green">
                  G
                </text>
                <text x="390" y="115" className="text-sm font-bold" fill="orange">
                  Y
                </text>
                <text x="390" y="125" className="text-sm font-bold" fill="orange">
                  O
                </text>
                <text x="390" y="135" className="text-sm font-bold" fill="red">
                  R
                </text>

                <text x="420" y="100" className="text-xs">
                  VIBGYOR
                </text>
              </svg>
            </div>

            <Button onClick={() => setShowAnimation(!showAnimation)} variant="outline" className="w-full sm:w-auto">
              {showAnimation ? "Stop" : "Start"} Dispersion Animation
            </Button>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">VIBGYOR Spectrum:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 text-center text-xs sm:text-sm">
                <div className="p-2 bg-violet-500 text-white rounded font-bold">Violet</div>
                <div className="p-2 bg-indigo-500 text-white rounded font-bold">Indigo</div>
                <div className="p-2 bg-blue-500 text-white rounded font-bold">Blue</div>
                <div className="p-2 bg-green-500 text-white rounded font-bold">Green</div>
                <div className="p-2 bg-yellow-400 text-black rounded font-bold">Yellow</div>
                <div className="p-2 bg-orange-500 text-white rounded font-bold">Orange</div>
                <div className="p-2 bg-red-500 text-white rounded font-bold">Red</div>
              </div>
              <p className="text-xs text-purple-800 mt-2 text-center">
                <strong>Remember:</strong> Violet bends the most (shortest wavelength), Red bends the least (longest
                wavelength)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="w-full">
        <Quiz questions={quizQuestions} title="Test Your Knowledge: Refraction of Light" />
      </div>
    </div>
  )
}
