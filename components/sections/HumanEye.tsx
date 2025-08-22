"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HumanEye() {
  const [animateRays, setAnimateRays] = useState(true)
  const [animateDefects, setAnimateDefects] = useState(true)
  const [animateAccommodation, setAnimateAccommodation] = useState(true)
  const [selectedDefect, setSelectedDefect] = useState<"myopia" | "hypermetropia" | "presbyopia" | "astigmatism">("myopia")
  const [accommodationMode, setAccommodationMode] = useState<"near" | "far">("near")
  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gray-900 text-gray-900 dark:text-white space-y-10 px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 dark:text-black">The Human Eye</h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Understanding the structure, working, and defects of the human eye
        </p>
      </div>

      <Tabs defaultValue="structure" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 text-sm sm:text-base py-2">
          <TabsTrigger value="structure">Structure & Working</TabsTrigger>
          <TabsTrigger value="defects">Eye Defects</TabsTrigger>
          <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
        </TabsList>

        <TabsContent value="structure">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Structure of Human Eye</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col items-center justify-center overflow-x-auto">
                  <svg
                    width="400"
                    height="200"
                    viewBox="0 0 400 200"
                    className="border rounded-lg bg-gray-50 dark:bg-gray-800 min-w-[350px] sm:min-w-[400px]"
                  >
                    <defs>
                      <marker id="eyeArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                        <path d="M0,0 L8,4 L0,8 z" fill="currentColor" />
                      </marker>
                      <radialGradient id="gradSclera" cx="50%" cy="50%" r="60%">
                        <stop offset="0%" stopColor="#000000" stopOpacity="0" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
                      </radialGradient>
                    </defs>
                    {/* Eye outline */}
                    <ellipse cx="200" cy="100" rx="150" ry="80" fill="white" stroke="#111827" strokeWidth="2" />
                    {/* Sclera shading */}
                    <ellipse cx="200" cy="100" rx="148" ry="78" fill="url(#gradSclera)" opacity="0.1" />

                    {/* Cornea */}
                    <ellipse cx="80" cy="100" rx="30" ry="40" fill="lightblue" stroke="blue" strokeWidth="1" />
                    <text x="60" y="60" className="text-xs">
                      Cornea
                    </text>

                    {/* Iris */}
                    <circle cx="130" cy="100" r="25" fill="#8b5e3c" stroke="#5c3a1e" strokeWidth="2" className="animate-pulse" />
                    <text x="110" y="140" className="text-xs">
                      Iris
                    </text>

                    {/* Pupil */}
                    <circle cx="130" cy="100" r="8" fill="black" className="animate-pulse" />
                    <text x="140" y="105" className="text-xs">
                      Pupil
                    </text>

                    {/* Lens */}
                    <ellipse cx="160" cy="100" rx="15" ry="20" fill="lightgreen" stroke="green" strokeWidth="1" />
                    <text x="140" y="80" className="text-xs">
                      Lens
                    </text>

                    {/* Retina arc */}
                    <path d="M 250 40 Q 320 100 250 160" fill="#fce7f3" stroke="#ef4444" strokeWidth="2" />
                    <text x="270" y="105" className="text-xs">
                      Retina
                    </text>

                    {/* Optic nerve */}
                    <line x1="300" y1="100" x2="350" y2="100" stroke="orange" strokeWidth="4" />
                    <text x="310" y="120" className="text-xs">
                      Optic Nerve
                    </text>

                    {/* Fovea and Blind spot */}
                    <circle cx="265" cy="105" r="3" fill="#f97316" />
                    <text x="268" y="115" className="text-[10px] fill-gray-700">Fovea</text>
                    <circle cx="300" cy="100" r="3" fill="#111827" />
                    <text x="303" y="110" className="text-[10px] fill-gray-700">Blind Spot</text>

                    {/* Ciliary muscles */}
                    <path d="M 175 80 Q 190 100 175 120" fill="none" stroke="#10b981" strokeWidth="2" />
                    <text x="178" y="130" className="text-[10px] fill-gray-700">Ciliary muscles</text>

                    {/* Incoming rays from object (left) */}
                    <text x="15" y="60" className="text-xs">Object</text>
                    <line x1="10" y1="80" x2="65" y2="80" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#eyeArrow)" className={animateRays ? "draw-animated" : ""} style={{ ["--dash" as any]: 120, ["--dur" as any]: "700ms" }} />
                    <line x1="10" y1="100" x2="65" y2="100" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#eyeArrow)" className={animateRays ? "draw-animated" : ""} style={{ ["--dash" as any]: 120, ["--dur" as any]: "700ms", animationDelay: "150ms" }} />
                    <line x1="10" y1="120" x2="65" y2="120" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#eyeArrow)" className={animateRays ? "draw-animated" : ""} style={{ ["--dash" as any]: 120, ["--dur" as any]: "700ms", animationDelay: "300ms" }} />

                    {/* Refraction at cornea towards lens */}
                    <line x1="95" y1="80" x2="145" y2="95" stroke="#ef4444" strokeWidth="2" markerEnd="url(#eyeArrow)" className={animateRays ? "draw-animated" : ""} style={{ ["--dash" as any]: 70, ["--dur" as any]: "700ms", animationDelay: "500ms" }} />
                    <line x1="95" y1="100" x2="145" y2="100" stroke="#ef4444" strokeWidth="2" markerEnd="url(#eyeArrow)" className={animateRays ? "draw-animated" : ""} style={{ ["--dash" as any]: 60, ["--dur" as any]: "700ms", animationDelay: "650ms" }} />
                    <line x1="95" y1="120" x2="145" y2="105" stroke="#ef4444" strokeWidth="2" markerEnd="url(#eyeArrow)" className={animateRays ? "draw-animated" : ""} style={{ ["--dash" as any]: 70, ["--dur" as any]: "700ms", animationDelay: "800ms" }} />

                    {/* Through lens to retina (fovea) */}
                    <line x1="160" y1="95" x2="265" y2="105" stroke="#10b981" strokeWidth="2" markerEnd="url(#eyeArrow)" className={animateRays ? "draw-animated" : ""} style={{ ["--dash" as any]: 140, ["--dur" as any]: "900ms", animationDelay: "1000ms" }} />
                    <line x1="160" y1="100" x2="265" y2="105" stroke="#10b981" strokeWidth="2" markerEnd="url(#eyeArrow)" className={animateRays ? "draw-animated" : ""} style={{ ["--dash" as any]: 140, ["--dur" as any]: "900ms", animationDelay: "1100ms" }} />
                    <line x1="160" y1="105" x2="265" y2="105" stroke="#10b981" strokeWidth="2" markerEnd="url(#eyeArrow)" className={animateRays ? "draw-animated" : ""} style={{ ["--dash" as any]: 140, ["--dur" as any]: "900ms", animationDelay: "1200ms" }} />
                  </svg>

                  <button
                    type="button"
                    onClick={() => setAnimateRays((v) => !v)}
                    className="mt-3 text-xs px-2 py-1 rounded bg-white text-gray-900 border hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    {animateRays ? "Pause animation" : "Play animation"}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-blue-600 text-sm sm:text-base">Main Parts</h3>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div>
                        <strong>Cornea:</strong> Transparent front layer, provides most focusing power
                      </div>
                      <div>
                        <strong>Iris:</strong> Colored part, controls amount of light entering
                      </div>
                      <div>
                        <strong>Pupil:</strong> Opening in iris, size varies with light intensity
                      </div>
                      <div>
                        <strong>Lens:</strong> Transparent, changes shape for focusing
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-green-600 text-sm sm:text-base">Function</h3>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div>
                        <strong>Retina:</strong> Light-sensitive layer, contains rods and cones
                      </div>
                      <div>
                        <strong>Optic Nerve:</strong> Carries visual signals to brain
                      </div>
                      <div>
                        <strong>Vitreous Humor:</strong> Jelly-like substance maintaining eye shape
                      </div>
                      <div>
                        <strong>Aqueous Humor:</strong> Clear fluid in front chamber
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="defects">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Common Eye Defects - Interactive Simulation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Defect Selector */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button
                      onClick={() => setSelectedDefect("myopia")}
                      className={`px-3 py-2 rounded text-xs font-medium transition-colors ${
                        selectedDefect === "myopia" 
                          ? "bg-red-600 text-white" 
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      }`}
                    >
                      Myopia
                    </button>
                    <button
                      onClick={() => setSelectedDefect("hypermetropia")}
                      className={`px-3 py-2 rounded text-xs font-medium transition-colors ${
                        selectedDefect === "hypermetropia" 
                          ? "bg-blue-600 text-white" 
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      }`}
                    >
                      Hypermetropia
                    </button>
                    <button
                      onClick={() => setSelectedDefect("presbyopia")}
                      className={`px-3 py-2 rounded text-xs font-medium transition-colors ${
                        selectedDefect === "presbyopia" 
                          ? "bg-purple-600 text-white" 
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      }`}
                    >
                      Presbyopia
                    </button>
                    <button
                      onClick={() => setSelectedDefect("astigmatism")}
                      className={`px-3 py-2 rounded text-xs font-medium transition-colors ${
                        selectedDefect === "astigmatism" 
                          ? "bg-green-600 text-white" 
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      }`}
                    >
                      Astigmatism
                    </button>
                  </div>

                  {/* Eye Defect Simulation */}
                  <div className="flex flex-col items-center justify-center overflow-x-auto">
                    <svg
                      width="500"
                      height="250"
                      viewBox="0 0 500 250"
                      className="border rounded-lg bg-gray-50 dark:bg-gray-800 min-w-[450px] sm:min-w-[500px]"
                    >
                      <defs>
                        <marker id="defectArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                          <path d="M0,0 L8,4 L0,8 z" fill="currentColor" />
                        </marker>
                        <pattern id="defectGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      
                      {/* Grid background */}
                      <rect width="500" height="250" fill="url(#defectGrid)" />
                      
                      {/* Object (distant or near based on defect) */}
                      <text x="20" y="30" className="text-sm font-medium">
                        {selectedDefect === "myopia" ? "Distant Object" : 
                         selectedDefect === "hypermetropia" ? "Near Object" : 
                         selectedDefect === "presbyopia" ? "Near Object" : "Object"}
                      </text>
                      
                      {/* Eye outline */}
                      <ellipse cx="250" cy="125" rx="120" ry="60" fill="white" stroke="#111827" strokeWidth="2" />
                      
                      {/* Cornea */}
                      <ellipse cx="150" cy="125" rx="20" ry="30" fill="lightblue" stroke="blue" strokeWidth="1" />
                      
                      {/* Lens - shape varies by defect */}
                      {selectedDefect === "myopia" ? (
                        <ellipse cx="200" cy="125" rx="12" ry="18" fill="lightgreen" stroke="green" strokeWidth="2" />
                      ) : selectedDefect === "hypermetropia" ? (
                        <ellipse cx="200" cy="125" rx="8" ry="15" fill="lightgreen" stroke="green" strokeWidth="2" />
                      ) : selectedDefect === "presbyopia" ? (
                        <ellipse cx="200" cy="125" rx="6" ry="12" fill="lightgray" stroke="gray" strokeWidth="2" />
                      ) : (
                        <ellipse cx="200" cy="125" rx="10" ry="20" fill="lightgreen" stroke="green" strokeWidth="2" transform="rotate(15 200 125)" />
                      )}
                      
                      {/* Retina */}
                      <path d="M 330 80 Q 360 125 330 170" fill="#fce7f3" stroke="#ef4444" strokeWidth="2" />
                      
                      {/* Incoming rays */}
                      <line x1="50" y1="100" x2="140" y2="110" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                            className={animateDefects ? "draw-animated" : ""} 
                            style={{ ["--dash" as any]: 100, ["--dur" as any]: "800ms" }} />
                      <line x1="50" y1="125" x2="140" y2="125" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                            className={animateDefects ? "draw-animated" : ""} 
                            style={{ ["--dash" as any]: 100, ["--dur" as any]: "800ms", animationDelay: "200ms" }} />
                      <line x1="50" y1="150" x2="140" y2="140" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                            className={animateDefects ? "draw-animated" : ""} 
                            style={{ ["--dash" as any]: 100, ["--dur" as any]: "800ms", animationDelay: "400ms" }} />
                      
                      {/* Refracted rays through lens - different behavior per defect */}
                      {selectedDefect === "myopia" ? (
                        <>
                          {/* Rays converge before retina */}
                          <line x1="200" y1="110" x2="280" y2="120" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 85, ["--dur" as any]: "700ms", animationDelay: "600ms" }} />
                          <line x1="200" y1="125" x2="280" y2="125" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 80, ["--dur" as any]: "700ms", animationDelay: "800ms" }} />
                          <line x1="200" y1="140" x2="280" y2="130" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 85, ["--dur" as any]: "700ms", animationDelay: "1000ms" }} />
                          {/* Diverging rays continue to retina */}
                          <line x1="280" y1="120" x2="340" y2="105" stroke="#10b981" strokeWidth="2" strokeDasharray="3,2" />
                          <line x1="280" y1="125" x2="340" y2="125" stroke="#10b981" strokeWidth="2" strokeDasharray="3,2" />
                          <line x1="280" y1="130" x2="340" y2="145" stroke="#10b981" strokeWidth="2" strokeDasharray="3,2" />
                          {/* Focus point before retina */}
                          <circle cx="280" cy="125" r="4" fill="#ef4444" />
                          <text x="285" y="115" className="text-xs fill-red-600">Focus</text>
                        </>
                      ) : selectedDefect === "hypermetropia" ? (
                        <>
                          {/* Rays would converge behind retina */}
          <line x1="200" y1="110" x2="340" y2="110" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 140, ["--dur" as any]: "900ms", animationDelay: "600ms" }} />
                          <line x1="200" y1="125" x2="340" y2="125" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 140, ["--dur" as any]: "900ms", animationDelay: "800ms" }} />
                          <line x1="200" y1="140" x2="340" y2="140" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 140, ["--dur" as any]: "900ms", animationDelay: "1000ms" }} />
                          {/* Virtual focus behind retina */}
                          <line x1="340" y1="110" x2="390" y2="115" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="3,2" />
                          <line x1="340" y1="125" x2="390" y2="125" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="3,2" />
                          <line x1="340" y1="140" x2="390" y2="135" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="3,2" />
                          <circle cx="390" cy="125" r="4" fill="#8b5cf6" />
                          <text x="395" y="115" className="text-xs fill-purple-600">Virtual Focus</text>
                        </>
                      ) : selectedDefect === "presbyopia" ? (
                        <>
                          {/* Weak accommodation - similar to hypermetropia */}
                          <line x1="200" y1="110" x2="340" y2="115" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 145, ["--dur" as any]: "900ms", animationDelay: "600ms" }} />
                          <line x1="200" y1="125" x2="340" y2="125" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 140, ["--dur" as any]: "900ms", animationDelay: "800ms" }} />
                          <line x1="200" y1="140" x2="340" y2="135" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 145, ["--dur" as any]: "900ms", animationDelay: "1000ms" }} />
                          <text x="360" y="110" className="text-xs fill-gray-600">Reduced focusing power</text>
                        </>
                      ) : (
                        <>
                          {/* Astigmatism - different focal points */}
                          <line x1="200" y1="110" x2="300" y2="115" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 105, ["--dur" as any]: "700ms", animationDelay: "600ms" }} />
                          <line x1="200" y1="125" x2="320" y2="125" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 120, ["--dur" as any]: "800ms", animationDelay: "800ms" }} />
                          <line x1="200" y1="140" x2="300" y2="135" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#defectArrow)" 
                                className={animateDefects ? "draw-animated" : ""} 
                                style={{ ["--dash" as any]: 105, ["--dur" as any]: "700ms", animationDelay: "1000ms" }} />
                          {/* Multiple focus points */}
                          <circle cx="300" cy="125" r="3" fill="#ef4444" />
                          <circle cx="320" cy="125" r="3" fill="#ef4444" />
                          <text x="325" y="115" className="text-xs fill-red-600">Multiple Foci</text>
                        </>
                      )}
                      
                      {/* Correction lens if applicable */}
                      {(selectedDefect === "myopia" || selectedDefect === "hypermetropia") && (
                        <>
                          <text x="80" y="200" className="text-sm font-medium">Corrective Lens:</text>
                          {selectedDefect === "myopia" ? (
                            <>
                              <path d="M 120 210 C 130 220 130 230 120 240 L 140 240 C 130 230 130 220 140 210 Z" 
                                    fill="#fca5a5" stroke="#dc2626" strokeWidth="2" />
                              <text x="145" y="225" className="text-xs">Concave Lens</text>
                            </>
                          ) : (
                            <>
                              <ellipse cx="130" cy="225" rx="10" ry="15" fill="#7dd3fc" stroke="#0284c7" strokeWidth="2" />
                              <text x="145" y="225" className="text-xs">Convex Lens</text>
                            </>
                          )}
                        </>
                      )}
                      
                      {/* Labels */}
                      <text x="140" y="180" className="text-xs fill-gray-600">Cornea</text>
                      <text x="185" y="180" className="text-xs fill-gray-600">Lens</text>
                      <text x="320" y="180" className="text-xs fill-gray-600">Retina</text>
                    </svg>

                    <button
                      type="button"
                      onClick={() => setAnimateDefects((v) => !v)}
                      className="mt-3 text-xs px-2 py-1 rounded bg-white text-gray-900 border hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      {animateDefects ? "Pause animation" : "Play animation"}
                    </button>
                  </div>

                  {/* Current defect description */}
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      {selectedDefect === "myopia" ? "Myopia (Near-sightedness)" :
                       selectedDefect === "hypermetropia" ? "Hypermetropia (Far-sightedness)" :
                       selectedDefect === "presbyopia" ? "Presbyopia (Age-related)" :
                       "Astigmatism (Irregular curvature)"}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {selectedDefect === "myopia" ? "The eye focuses distant objects in front of the retina, making them appear blurry. Corrected with a concave (diverging) lens." :
                       selectedDefect === "hypermetropia" ? "The eye focuses near objects behind the retina, making them appear blurry. Corrected with a convex (converging) lens." :
                       selectedDefect === "presbyopia" ? "Age-related loss of accommodation power. The lens becomes less flexible, making it difficult to focus on near objects." :
                       "Irregular curvature of the cornea causes different focal points for different orientations, resulting in blurred vision at all distances."}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">
                        Myopia (Near-sightedness)
                      </h3>
                      <ul className="text-xs sm:text-sm space-y-1">
                        <li>• Can see near objects clearly</li>
                        <li>• Distant objects appear blurred</li>
                        <li>• Image forms before retina</li>
                        <li>• Corrected with concave lens</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
                        Hypermetropia (Far-sightedness)
                      </h3>
                      <ul className="text-xs sm:text-sm space-y-1">
                        <li>• Can see distant objects clearly</li>
                        <li>• Near objects appear blurred</li>
                        <li>• Image forms behind retina</li>
                        <li>• Corrected with convex lens</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">Presbyopia</h3>
                      <ul className="text-xs sm:text-sm space-y-1">
                        <li>• Age-related condition</li>
                        <li>• Loss of accommodation power</li>
                        <li>• Difficulty focusing on near objects</li>
                        <li>• Corrected with bifocal lenses</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">Astigmatism</h3>
                      <ul className="text-xs sm:text-sm space-y-1">
                        <li>• Irregular curvature of cornea</li>
                        <li>• Blurred vision at all distances</li>
                        <li>• Objects appear stretched</li>
                        <li>• Corrected with cylindrical lenses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="accommodation">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Power of Accommodation - Interactive Simulation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Accommodation Mode Selector */}
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setAccommodationMode("near")}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                      accommodationMode === "near" 
                        ? "bg-blue-600 text-white" 
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    }`}
                  >
                    Near Vision (25 cm)
                  </button>
                  <button
                    onClick={() => setAccommodationMode("far")}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                      accommodationMode === "far" 
                        ? "bg-green-600 text-white" 
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    }`}
                  >
                    Far Vision (∞)
                  </button>
                </div>

                {/* Accommodation Simulation */}
                <div className="flex flex-col items-center justify-center overflow-x-auto">
                  <svg
                    width="500"
                    height="250"
                    viewBox="0 0 500 250"
                    className="border rounded-lg bg-gray-50 dark:bg-gray-800 min-w-[450px] sm:min-w-[500px]"
                  >
                    <defs>
                      <marker id="accomArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                        <path d="M0,0 L8,4 L0,8 z" fill="currentColor" />
                      </marker>
                      <radialGradient id="muscleGrad" cx="50%" cy="50%" r="60%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                      </radialGradient>
                    </defs>
                    
                    {/* Grid background */}
                    <rect width="500" height="250" fill="url(#defectGrid)" />
                    
                    {/* Object at different distances */}
                    <text x="20" y="30" className="text-sm font-medium">
                      {accommodationMode === "near" ? "Near Object (25 cm)" : "Distant Object (∞)"}
                    </text>
                    <line x1="30" y1="110" x2="30" y2="140" stroke="#059669" strokeWidth="4" />
                    <polygon points="25,120 35,120 30,110" fill="#059669" />
                    
                    {/* Eye outline */}
                    <ellipse cx="250" cy="125" rx="120" ry="60" fill="white" stroke="#111827" strokeWidth="2" />
                    
                    {/* Cornea */}
                    <ellipse cx="150" cy="125" rx="20" ry="30" fill="lightblue" stroke="blue" strokeWidth="1" />
                    <text x="125" y="190" className="text-xs fill-blue-600">Cornea</text>
                    
                    {/* Lens - changes shape based on accommodation */}
                    {accommodationMode === "near" ? (
                      <>
                        {/* Thick lens for near vision */}
                        <ellipse cx="200" cy="125" rx="15" ry="25" fill="lightgreen" stroke="green" strokeWidth="2" />
                        <text x="175" y="190" className="text-xs fill-green-600">Lens (thick)</text>
                      </>
                    ) : (
                      <>
                        {/* Thin lens for far vision */}
                        <ellipse cx="200" cy="125" rx="8" ry="18" fill="lightgreen" stroke="green" strokeWidth="2" />
                        <text x="175" y="190" className="text-xs fill-green-600">Lens (thin)</text>
                      </>
                    )}
                    
                    {/* Ciliary muscles - active/relaxed based on mode */}
                    {accommodationMode === "near" ? (
                      <>
                        {/* Contracted muscles */}
                        <circle cx="180" cy="105" r="8" fill="url(#muscleGrad)" />
                        <circle cx="220" cy="105" r="8" fill="url(#muscleGrad)" />
                        <circle cx="180" cy="145" r="8" fill="url(#muscleGrad)" />
                        <circle cx="220" cy="145" r="8" fill="url(#muscleGrad)" />
                        <text x="160" y="210" className="text-xs fill-green-600">Muscles contracted</text>
                      </>
                    ) : (
                      <>
                        {/* Relaxed muscles */}
                        <circle cx="175" cy="100" r="6" fill="#10b981" opacity="0.5" />
                        <circle cx="225" cy="100" r="6" fill="#10b981" opacity="0.5" />
                        <circle cx="175" cy="150" r="6" fill="#10b981" opacity="0.5" />
                        <circle cx="225" cy="150" r="6" fill="#10b981" opacity="0.5" />
                        <text x="160" y="210" className="text-xs fill-green-600">Muscles relaxed</text>
                      </>
                    )}
                    
                    {/* Retina */}
                    <path d="M 330 80 Q 360 125 330 170" fill="#fce7f3" stroke="#ef4444" strokeWidth="2" />
                    <text x="320" y="190" className="text-xs fill-red-600">Retina</text>
                    
                    {/* Incoming rays - different angles for near vs far */}
                    {accommodationMode === "near" ? (
                      <>
                        {/* Diverging rays from near object */}
                        <line x1="50" y1="120" x2="140" y2="115" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 95, ["--dur" as any]: "800ms" }} />
                        <line x1="50" y1="125" x2="140" y2="125" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 90, ["--dur" as any]: "800ms", animationDelay: "200ms" }} />
                        <line x1="50" y1="130" x2="140" y2="135" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 95, ["--dur" as any]: "800ms", animationDelay: "400ms" }} />
                        
                        {/* Refracted rays through thick lens */}
                        <line x1="200" y1="115" x2="340" y2="125" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 145, ["--dur" as any]: "900ms", animationDelay: "600ms" }} />
                        <line x1="200" y1="125" x2="340" y2="125" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 140, ["--dur" as any]: "900ms", animationDelay: "800ms" }} />
                        <line x1="200" y1="135" x2="340" y2="125" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 145, ["--dur" as any]: "900ms", animationDelay: "1000ms" }} />
                      </>
                    ) : (
                      <>
                        {/* Parallel rays from distant object */}
                        <line x1="50" y1="115" x2="140" y2="115" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 90, ["--dur" as any]: "800ms" }} />
                        <line x1="50" y1="125" x2="140" y2="125" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 90, ["--dur" as any]: "800ms", animationDelay: "200ms" }} />
                        <line x1="50" y1="135" x2="140" y2="135" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 90, ["--dur" as any]: "800ms", animationDelay: "400ms" }} />
                        
                        {/* Refracted rays through thin lens */}
                        <line x1="200" y1="115" x2="340" y2="125" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 150, ["--dur" as any]: "900ms", animationDelay: "600ms" }} />
                        <line x1="200" y1="125" x2="340" y2="125" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 140, ["--dur" as any]: "900ms", animationDelay: "800ms" }} />
                        <line x1="200" y1="135" x2="340" y2="125" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#accomArrow)" 
                              className={animateAccommodation ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 150, ["--dur" as any]: "900ms", animationDelay: "1000ms" }} />
                      </>
                    )}
                    
                    {/* Focus point on retina */}
                    <circle cx="340" cy="125" r="4" fill="#16a34a" />
                    <text x="345" y="115" className="text-xs fill-green-600">Sharp Focus</text>
                    
                    {/* Accommodation range indicator */}
                    <text x="400" y="30" className="text-sm font-medium">
                      Focal Length: {accommodationMode === "near" ? "~17mm" : "~24mm"}
                    </text>
                    <text x="400" y="50" className="text-sm">
                      Power: {accommodationMode === "near" ? "~59D" : "~42D"}
                    </text>
                  </svg>

                  <button
                    type="button"
                    onClick={() => setAnimateAccommodation((v) => !v)}
                    className="mt-3 text-xs px-2 py-1 rounded bg-white text-gray-900 border hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    {animateAccommodation ? "Pause animation" : "Play animation"}
                  </button>
                </div>

                {/* Current accommodation description */}
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">
                    {accommodationMode === "near" ? "Maximum Accommodation (Near Vision)" : "Minimum Accommodation (Far Vision)"}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {accommodationMode === "near" ? 
                      "For near objects (25 cm), ciliary muscles contract, making the lens thicker and more curved. This increases the lens power to focus diverging rays from the near object onto the retina." :
                      "For distant objects (infinity), ciliary muscles relax, making the lens thinner and less curved. This reduces the lens power to focus parallel rays from the distant object onto the retina."
                    }
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  The ability of the eye lens to adjust its focal length to focus objects at different distances on the
                  retina is called accommodation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">Near Point</h3>
                    <ul className="text-xs sm:text-sm space-y-1">
                      <li>• Closest distance for clear vision</li>
                      <li>• Normal eye: 25 cm</li>
                      <li>• Lens becomes thicker</li>
                      <li>• Maximum accommodation</li>
                      <li>• Ciliary muscles contracted</li>
                      <li>• Higher lens power (~59D)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-3 text-sm sm:text-base">Far Point</h3>
                    <ul className="text-xs sm:text-sm space-y-1">
                      <li>• Farthest distance for clear vision</li>
                      <li>• Normal eye: Infinity</li>
                      <li>• Lens becomes thinner</li>
                      <li>• Minimum accommodation</li>
                      <li>• Ciliary muscles relaxed</li>
                      <li>• Lower lens power (~42D)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">Persistence of Vision</h3>
                  <p className="text-xs sm:text-sm text-yellow-800">
                    The ability of the eye to retain an image for about 1/16th of a second after the object is removed.
                    This property is used in movies and animation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
