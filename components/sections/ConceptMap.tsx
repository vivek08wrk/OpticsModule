"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ConceptMap() {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null)
  const [animateMap, setAnimateMap] = useState(true)

  const concepts = {
    light: {
      title: "Light",
      description: "Electromagnetic radiation that makes vision possible",
      connections: ["properties", "refraction", "dispersion"],
    },
    properties: {
      title: "Properties of Light",
      description: "Wave-particle duality, rectilinear propagation, reflection, refraction",
      connections: ["light", "refraction"],
    },
    refraction: {
      title: "Refraction",
      description: "Bending of light when passing from one medium to another",
      connections: ["light", "properties", "lenses", "snells-law"],
    },
    "snells-law": {
      title: "Snell's Law",
      description: "n₁ sin i = n₂ sin r",
      connections: ["refraction"],
    },
    dispersion: {
      title: "Dispersion",
      description: "Splitting of white light into constituent colors",
      connections: ["light", "prism"],
    },
    prism: {
      title: "Prism",
      description: "Triangular glass piece that disperses light",
      connections: ["dispersion"],
    },
    lenses: {
      title: "Lenses",
      description: "Transparent curved surfaces that refract light",
      connections: ["refraction", "convex", "concave", "lens-formula"],
    },
    convex: {
      title: "Convex Lens",
      description: "Converging lens, thicker at center",
      connections: ["lenses", "applications"],
    },
    concave: {
      title: "Concave Lens",
      description: "Diverging lens, thinner at center",
      connections: ["lenses", "myopia"],
    },
    "lens-formula": {
      title: "Lens Formula",
      description: "1/f = 1/v - 1/u",
      connections: ["lenses", "magnification"],
    },
    magnification: {
      title: "Magnification",
      description: "m = v/u = h₂/h₁",
      connections: ["lens-formula"],
    },
    "human-eye": {
      title: "Human Eye",
      description: "Natural optical instrument for vision",
      connections: ["accommodation", "defects"],
    },
    accommodation: {
      title: "Accommodation",
      description: "Ability to focus at different distances",
      connections: ["human-eye"],
    },
    defects: {
      title: "Eye Defects",
      description: "Myopia, Hypermetropia, Presbyopia, Astigmatism",
      connections: ["human-eye", "myopia", "hypermetropia"],
    },
    myopia: {
      title: "Myopia",
      description: "Near-sightedness, corrected by concave lens",
      connections: ["defects", "concave"],
    },
    hypermetropia: {
      title: "Hypermetropia",
      description: "Far-sightedness, corrected by convex lens",
      connections: ["defects", "convex"],
    },
    applications: {
      title: "Applications",
      description: "Microscope, telescope, camera, magnifying glass",
      connections: ["convex", "microscope", "telescope"],
    },
    microscope: {
      title: "Microscope",
      description: "Instrument to view small objects",
      connections: ["applications"],
    },
    telescope: {
      title: "Telescope",
      description: "Instrument to view distant objects",
      connections: ["applications"],
    },
  }

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gray-900 text-gray-900 dark:text-white space-y-10 px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 dark:text-black">Concept Map</h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Interactive visualization of optics concepts and their relationships
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Optics Concept Network</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-96 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="overflow-x-auto h-full">
                  <svg width="600" height="384" className="min-w-[500px] sm:min-w-[600px]">
                    {/* Connection lines */}
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                      </marker>
                    </defs>

                    {/* Light at center */}
                    <line
                      x1="300"
                      y1="200"
                      x2="200"
                      y2="100"
                      stroke="#6b7280"
                      strokeWidth="1"
                      markerEnd="url(#arrowhead)"
                      className={animateMap ? "draw-animated" : ""}
                      style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms" }}
                    />
                    <line
                      x1="300"
                      y1="200"
                      x2="400"
                      y2="100"
                      stroke="#6b7280"
                      strokeWidth="1"
                      markerEnd="url(#arrowhead)"
                      className={animateMap ? "draw-animated" : ""}
                      style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms", animationDelay: "150ms" }}
                    />
                    <line
                      x1="300"
                      y1="200"
                      x2="150"
                      y2="250"
                      stroke="#6b7280"
                      strokeWidth="1"
                      markerEnd="url(#arrowhead)"
                      className={animateMap ? "draw-animated" : ""}
                      style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms", animationDelay: "300ms" }}
                    />
                    <line
                      x1="300"
                      y1="200"
                      x2="450"
                      y2="250"
                      stroke="#6b7280"
                      strokeWidth="1"
                      markerEnd="url(#arrowhead)"
                      className={animateMap ? "draw-animated" : ""}
                      style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms", animationDelay: "450ms" }}
                    />
                    <line
                      x1="300"
                      y1="200"
                      x2="300"
                      y2="320"
                      stroke="#6b7280"
                      strokeWidth="1"
                      markerEnd="url(#arrowhead)"
                      className={animateMap ? "draw-animated" : ""}
                      style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms", animationDelay: "600ms" }}
                    />

                    {/* Concept nodes */}
                    <circle
                      cx="300"
                      cy="200"
                      r="25"
                      fill="#3b82f6"
                      stroke="#1d4ed8"
                      strokeWidth="2"
                      className="cursor-pointer hover:fill-blue-600 transition-transform will-change-transform hover:scale-105"
                      onClick={() => setSelectedConcept("light")}
                    />
                    <text
                      x="300"
                      y="205"
                      textAnchor="middle"
                      className="text-xs fill-white font-medium pointer-events-none"
                    >
                      Light
                    </text>

                    <circle
                      cx="200"
                      cy="100"
                      r="20"
                      fill="#10b981"
                      stroke="#059669"
                      strokeWidth="2"
                      className="cursor-pointer hover:fill-green-600 transition-transform will-change-transform hover:scale-105"
                      onClick={() => setSelectedConcept("properties")}
                    />
                    <text
                      x="200"
                      y="105"
                      textAnchor="middle"
                      className="text-xs fill-white font-medium pointer-events-none"
                    >
                      Properties
                    </text>

                    <circle
                      cx="400"
                      cy="100"
                      r="20"
                      fill="#f59e0b"
                      stroke="#d97706"
                      strokeWidth="2"
                      className="cursor-pointer hover:fill-yellow-600 transition-transform will-change-transform hover:scale-105"
                      onClick={() => setSelectedConcept("refraction")}
                    />
                    <text
                      x="400"
                      y="105"
                      textAnchor="middle"
                      className="text-xs fill-white font-medium pointer-events-none"
                    >
                      Refraction
                    </text>

                    <circle
                      cx="150"
                      cy="250"
                      r="20"
                      fill="#8b5cf6"
                      stroke="#7c3aed"
                      strokeWidth="2"
                      className="cursor-pointer hover:fill-purple-600 transition-transform will-change-transform hover:scale-105"
                      onClick={() => setSelectedConcept("dispersion")}
                    />
                    <text
                      x="150"
                      y="255"
                      textAnchor="middle"
                      className="text-xs fill-white font-medium pointer-events-none"
                    >
                      Dispersion
                    </text>

                    <circle
                      cx="450"
                      cy="250"
                      r="20"
                      fill="#ef4444"
                      stroke="#dc2626"
                      strokeWidth="2"
                      className="cursor-pointer hover:fill-red-600 transition-transform will-change-transform hover:scale-105"
                      onClick={() => setSelectedConcept("lenses")}
                    />
                    <text
                      x="450"
                      y="255"
                      textAnchor="middle"
                      className="text-xs fill-white font-medium pointer-events-none"
                    >
                      Lenses
                    </text>

                    <circle
                      cx="300"
                      cy="320"
                      r="20"
                      fill="#06b6d4"
                      stroke="#0891b2"
                      strokeWidth="2"
                      className="cursor-pointer hover:fill-cyan-600 transition-transform will-change-transform hover:scale-105"
                      onClick={() => setSelectedConcept("human-eye")}
                    />
                    <text
                      x="300"
                      y="325"
                      textAnchor="middle"
                      className="text-xs fill-white font-medium pointer-events-none"
                    >
                      Human Eye
                    </text>

                    {/* Additional nodes */}
                    <circle
                      cx="500"
                      cy="180"
                      r="15"
                      fill="#f97316"
                      stroke="#ea580c"
                      strokeWidth="2"
                      className="cursor-pointer hover:fill-orange-600 transition-transform will-change-transform hover:scale-105"
                      onClick={() => setSelectedConcept("convex")}
                    />
                    <text
                      x="500"
                      y="185"
                      textAnchor="middle"
                      className="text-xs fill-white font-medium pointer-events-none"
                    >
                      Convex
                    </text>

                    <circle
                      cx="500"
                      cy="220"
                      r="15"
                      fill="#84cc16"
                      stroke="#65a30d"
                      strokeWidth="2"
                      className="cursor-pointer hover:fill-lime-600 transition-transform will-change-transform hover:scale-105"
                      onClick={() => setSelectedConcept("concave")}
                    />
                    <text
                      x="500"
                      y="225"
                      textAnchor="middle"
                      className="text-xs fill-white font-medium pointer-events-none"
                    >
                      Concave
                    </text>

                    <circle
                      cx="100"
                      cy="320"
                      r="15"
                      fill="#ec4899"
                      stroke="#db2777"
                      strokeWidth="2"
                      className="cursor-pointer hover:fill-pink-600 transition-transform will-change-transform hover:scale-105"
                      onClick={() => setSelectedConcept("defects")}
                    />
                    <text
                      x="100"
                      y="325"
                      textAnchor="middle"
                      className="text-xs fill-white font-medium pointer-events-none"
                    >
                      Defects
                    </text>
                  </svg>
                </div>
              </div>

              <div className="mt-4 text-center">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Click on any concept to explore its details and connections
                </p>
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => setAnimateMap((v) => !v)}
                    className="text-xs px-2 py-1 rounded bg-white text-gray-900 border hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    {animateMap ? "Pause animation" : "Play animation"}
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Concept Details</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedConcept ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {concepts[selectedConcept as keyof typeof concepts].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {concepts[selectedConcept as keyof typeof concepts].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Connected Concepts:</h4>
                    <div className="flex flex-wrap gap-2">
                      {concepts[selectedConcept as keyof typeof concepts].connections.map((connection) => (
                        <Badge
                          key={connection}
                          variant="outline"
                          className="cursor-pointer hover:bg-blue-50 text-xs"
                          onClick={() => setSelectedConcept(connection)}
                        >
                          {concepts[connection as keyof typeof concepts]?.title || connection}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedConcept(null)}
                    className="text-xs sm:text-sm"
                  >
                    Clear Selection
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">Select a concept from the map to view details</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(concepts)
                  .slice(0, 8)
                  .map(([key, concept]) => (
                    <Button
                      key={key}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-left text-xs sm:text-sm"
                      onClick={() => setSelectedConcept(key)}
                    >
                      {concept.title}
                    </Button>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
