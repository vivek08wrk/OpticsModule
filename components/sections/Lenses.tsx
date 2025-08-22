"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Quiz from "@/components/Quiz"

export default function Lenses() {
  const [objectDistance, setObjectDistance] = useState([-30]) // u (negative as per sign convention)
  const [focalLength, setFocalLength] = useState([20]) // f (positive for convex)
  const [lensType, setLensType] = useState<"convex" | "concave">("convex")
  const [animateConvex, setAnimateConvex] = useState(true)
  const [animateConcave, setAnimateConcave] = useState(true)

  // Lens formula: 1/f = 1/v - 1/u
  const calculateImageDistance = () => {
    const u = objectDistance[0]
    const f = lensType === "convex" ? focalLength[0] : -focalLength[0]
    const v = (f * u) / (u - f)
    return v
  }

  const calculateMagnification = () => {
    const v = calculateImageDistance()
    const u = objectDistance[0]
    return -v / u
  }

  const imageDistance = calculateImageDistance()
  const magnification = calculateMagnification()

  const quizQuestions = [
    {
      question: "What is the lens formula?",
      options: ["1/f = 1/v - 1/u", "1/f = 1/u - 1/v", "f = u + v", "f = u - v"],
      correctAnswer: 0,
      explanation:
        "The lens formula is 1/f = 1/v - 1/u, where f is focal length, v is image distance, and u is object distance.",
    },
    {
      question: "A convex lens always forms:",
      options: ["Virtual images only", "Real images only", "Both real and virtual images", "No images"],
      correctAnswer: 2,
      explanation:
        "A convex lens can form both real and virtual images depending on the position of the object relative to the focal point.",
    },
  ]

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gray-900 text-gray-900 dark:text-white space-y-10 px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 dark:text-black">Lenses</h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Understanding how lenses form images and their applications
        </p>
      </div>

      <Tabs defaultValue="types" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 text-sm sm:text-base py-2">
          <TabsTrigger value="types">Types</TabsTrigger>
          <TabsTrigger value="simulation">Ray Diagram</TabsTrigger>
          <TabsTrigger value="formula">Formula</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="types" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Types of Lenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-600">Convex Lens (Converging)</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex justify-center mb-3 overflow-x-auto">
                      <svg width="400" height="200" viewBox="0 0 400 200" className="mx-auto border rounded bg-white dark:bg-gray-800 shadow-sm">
                        <defs>
                          <marker id="convexArrow" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
                            <path d="M0,0 L10,4 L0,8 z" fill="currentColor" />
                          </marker>
                          <linearGradient id="convexLensGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#e0f2fe" />
                            <stop offset="30%" stopColor="#7dd3fc" />
                            <stop offset="50%" stopColor="#0ea5e9" />
                            <stop offset="70%" stopColor="#7dd3fc" />
                            <stop offset="100%" stopColor="#e0f2fe" />
                          </linearGradient>
                          <radialGradient id="focusGlow" cx="50%" cy="50%" r="40%">
                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
                          </radialGradient>
                        </defs>
                        
                        {/* Grid lines for depth */}
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="400" height="200" fill="url(#grid)" />
                        
                        {/* Principal axis */}
                        <line x1="20" y1="100" x2="380" y2="100" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
                        <text x="385" y="105" className="text-[10px] fill-gray-600">Principal Axis</text>
                        
                        {/* Lens body - enhanced 3D effect */}
                        <ellipse cx="200" cy="100" rx="15" ry="90" fill="url(#convexLensGrad)" stroke="#0284c7" strokeWidth="3" opacity="0.9" />
                        <ellipse cx="198" cy="98" rx="12" ry="85" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
                        
                        {/* Optical center */}
                        <circle cx="200" cy="100" r="3" fill="#0284c7" />
                        <text x="180" y="120" className="text-[10px] fill-gray-700 font-medium">O</text>
                        
                        {/* Focal points with glow */}
                        <circle cx="130" cy="100" r="6" fill="url(#focusGlow)" />
                        <circle cx="130" cy="100" r="3" fill="#ef4444" />
                        <text x="120" y="120" className="text-[11px] fill-red-600 font-bold">F</text>
                        
                        <circle cx="270" cy="100" r="6" fill="url(#focusGlow)" />
                        <circle cx="270" cy="100" r="3" fill="#ef4444" />
                        <text x="260" y="120" className="text-[11px] fill-red-600 font-bold">F'</text>
                        
                        {/* Object */}
                        <line x1="80" y1="100" x2="80" y2="40" stroke="#059669" strokeWidth="4" />
                        <polygon points="75,45 85,45 80,35" fill="#059669" />
                        <text x="60" y="30" className="text-[11px] fill-green-700 font-medium">Object</text>
                        
                        {/* Multiple incoming parallel rays */}
                        <line x1="20" y1="50" x2="200" y2="50" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#convexArrow)" 
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms" }} />
                        <line x1="20" y1="70" x2="200" y2="70" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#convexArrow)" 
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms", animationDelay: "200ms" }} />
                        <line x1="20" y1="100" x2="200" y2="100" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#convexArrow)" 
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms", animationDelay: "400ms" }} />
                        <line x1="20" y1="130" x2="200" y2="130" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#convexArrow)" 
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms", animationDelay: "600ms" }} />
                        <line x1="20" y1="150" x2="200" y2="150" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#convexArrow)" 
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms", animationDelay: "800ms" }} />
                        
                        {/* Refracted rays converging to F' */}
                        <line x1="200" y1="50" x2="270" y2="100" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#convexArrow)" 
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 85, ["--dur" as any]: "600ms", animationDelay: "1000ms" }} />
                        <line x1="200" y1="70" x2="270" y2="100" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#convexArrow)" 
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 75, ["--dur" as any]: "600ms", animationDelay: "1200ms" }} />
                        <line x1="200" y1="100" x2="270" y2="100" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#convexArrow)" 
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 70, ["--dur" as any]: "600ms", animationDelay: "1400ms" }} />
                        <line x1="200" y1="130" x2="270" y2="100" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#convexArrow)" 
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 75, ["--dur" as any]: "600ms", animationDelay: "1600ms" }} />
                        <line x1="200" y1="150" x2="270" y2="100" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#convexArrow)" 
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 85, ["--dur" as any]: "600ms", animationDelay: "1800ms" }} />
                        
                        {/* Ray paths from object */}
                        <line x1="80" y1="40" x2="200" y2="40" stroke="#7c3aed" strokeWidth="2" strokeDasharray="3,2" 
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 120, ["--dur" as any]: "700ms", animationDelay: "2000ms" }} />
                        <line x1="200" y1="40" x2="320" y2="140" stroke="#7c3aed" strokeWidth="2" strokeDasharray="3,2" markerEnd="url(#convexArrow)"
                              className={animateConvex ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 140, ["--dur" as any]: "700ms", animationDelay: "2200ms" }} />
                        
                        {/* Real image */}
                        <line x1="320" y1="100" x2="320" y2="140" stroke="#ea580c" strokeWidth="4" />
                        <polygon points="315,135 325,135 320,140" fill="#ea580c" />
                        <text x="300" y="155" className="text-[11px] fill-orange-700 font-medium">Real Image</text>
                        
                        {/* Labels */}
                        <text x="30" y="25" className="text-[12px] fill-red-600 font-medium">Parallel Rays</text>
                        <text x="280" y="75" className="text-[12px] fill-green-600 font-medium">Converged Rays</text>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                        <li>Thicker at center, thinner at edges</li>
                        <li>Converges parallel rays to principal focus F'</li>
                        <li>Forms real or virtual images based on object position</li>
                        <li>Shows complete ray tracing from object to image</li>
                      </ul>
                      <button type="button" onClick={() => setAnimateConvex((v) => !v)} className="ml-3 text-xs px-2 py-1 rounded bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 whitespace-nowrap transition-colors">{animateConvex ? "Pause" : "Play"}</button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-red-600">Concave Lens (Diverging)</h3>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <div className="flex justify-center mb-3 overflow-x-auto">
                      <svg width="400" height="200" viewBox="0 0 400 200" className="mx-auto border rounded bg-white dark:bg-gray-800 shadow-sm">
                        <defs>
                          <marker id="concaveArrow" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
                            <path d="M0,0 L10,4 L0,8 z" fill="currentColor" />
                          </marker>
                          <linearGradient id="concaveLensGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fee2e2" />
                            <stop offset="20%" stopColor="#fca5a5" />
                            <stop offset="50%" stopColor="#dc2626" />
                            <stop offset="80%" stopColor="#fca5a5" />
                            <stop offset="100%" stopColor="#fee2e2" />
                          </linearGradient>
                          <radialGradient id="virtualFocusGlow" cx="50%" cy="50%" r="40%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                          </radialGradient>
                        </defs>
                        
                        {/* Grid lines for depth */}
                        <rect width="400" height="200" fill="url(#grid)" />
                        
                        {/* Principal axis */}
                        <line x1="20" y1="100" x2="380" y2="100" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
                        <text x="385" y="105" className="text-[10px] fill-gray-600">Principal Axis</text>
                        
                        {/* Lens body - concave shape (thinner at center, thicker at edges) */}
                        <path d="M 180 20 C 200 80 200 120 180 180 L 220 180 C 200 120 200 80 220 20 Z" 
                              fill="url(#concaveLensGrad)" stroke="#dc2626" strokeWidth="3" opacity="0.9" />
                        <path d="M 182 25 C 198 75 198 125 182 175 L 218 175 C 202 125 202 75 218 25 Z" 
                              fill="none" stroke="#f87171" strokeWidth="1" opacity="0.6" />
                        
                        {/* Optical center */}
                        <circle cx="200" cy="100" r="3" fill="#dc2626" />
                        <text x="180" y="120" className="text-[10px] fill-gray-700 font-medium">O</text>
                        
                        {/* Virtual focal points with glow */}
                        <circle cx="130" cy="100" r="6" fill="url(#virtualFocusGlow)" />
                        <circle cx="130" cy="100" r="3" fill="#8b5cf6" />
                        <text x="115" y="120" className="text-[11px] fill-purple-600 font-bold">F (virtual)</text>
                        
                        <circle cx="270" cy="100" r="6" fill="url(#virtualFocusGlow)" />
                        <circle cx="270" cy="100" r="3" fill="#8b5cf6" />
                        <text x="250" y="120" className="text-[11px] fill-purple-600 font-bold">F'</text>
                        
                        {/* Object */}
                        <line x1="80" y1="100" x2="80" y2="40" stroke="#059669" strokeWidth="4" />
                        <polygon points="75,45 85,45 80,35" fill="#059669" />
                        <text x="60" y="30" className="text-[11px] fill-green-700 font-medium">Object</text>
                        
                        {/* Ray 1: From top of object parallel to axis -> diverges after refraction */}
                        <line x1="80" y1="40" x2="200" y2="40" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#concaveArrow)" 
                              className={animateConcave ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 120, ["--dur" as any]: "700ms" }} />
                        <line x1="200" y1="40" x2="320" y2="65" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#concaveArrow)" 
                              className={animateConcave ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 130, ["--dur" as any]: "800ms", animationDelay: "500ms" }} />
                        {/* Back-extension to virtual focus F */}
                        <line x1="200" y1="40" x2="130" y2="100" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,3" opacity="0.7" />
                        
                        {/* Ray 2: From top through optical center (undeviated) */}
                        <line x1="80" y1="40" x2="320" y2="40" stroke="#ea580c" strokeWidth="2.5" markerEnd="url(#concaveArrow)" 
                              className={animateConcave ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 240, ["--dur" as any]: "1000ms", animationDelay: "200ms" }} />
                        
                        {/* Ray 3: Aimed at F' -> emerges parallel after refraction */}
                        <line x1="80" y1="40" x2="200" y2="70" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#concaveArrow)" 
                              className={animateConcave ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 140, ["--dur" as any]: "700ms", animationDelay: "400ms" }} />
                        <line x1="200" y1="70" x2="320" y2="70" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#concaveArrow)" 
                              className={animateConcave ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 120, ["--dur" as any]: "800ms", animationDelay: "900ms" }} />
                        
                        {/* Back-extensions to show virtual image formation */}
                        <line x1="200" y1="70" x2="145" y2="70" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,3" opacity="0.7" />
                        <line x1="200" y1="40" x2="145" y2="40" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,3" opacity="0.7" />
                        
                        {/* Virtual image - erect, diminished */}
                        <line x1="145" y1="100" x2="145" y2="80" stroke="#a855f7" strokeWidth="4" opacity="0.8" />
                        <polygon points="140,85 150,85 145,80" fill="#a855f7" opacity="0.8" />
                        <text x="110" y="75" className="text-[11px] fill-purple-700 font-medium">Virtual Image</text>
                        <text x="115" y="65" className="text-[9px] fill-purple-600">(erect, diminished)</text>
                        
                        {/* Multiple parallel rays showing divergence */}
                        <line x1="20" y1="60" x2="200" y2="60" stroke="#dc2626" strokeWidth="2" markerEnd="url(#concaveArrow)" 
                              className={animateConcave ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms", animationDelay: "1200ms" }} />
                        <line x1="200" y1="60" x2="330" y2="75" stroke="#16a34a" strokeWidth="2" markerEnd="url(#concaveArrow)" 
                              className={animateConcave ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 140, ["--dur" as any]: "700ms", animationDelay: "1700ms" }} />
                        
                        <line x1="20" y1="140" x2="200" y2="140" stroke="#dc2626" strokeWidth="2" markerEnd="url(#concaveArrow)" 
                              className={animateConcave ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 180, ["--dur" as any]: "800ms", animationDelay: "1400ms" }} />
                        <line x1="200" y1="140" x2="330" y2="125" stroke="#16a34a" strokeWidth="2" markerEnd="url(#concaveArrow)" 
                              className={animateConcave ? "draw-animated" : ""} 
                              style={{ ["--dash" as any]: 140, ["--dur" as any]: "700ms", animationDelay: "1900ms" }} />
                        
                        {/* Labels */}
                        <text x="30" y="25" className="text-[12px] fill-red-600 font-medium">Parallel Rays</text>
                        <text x="280" y="55" className="text-[12px] fill-green-600 font-medium">Diverged Rays</text>
                        <text x="250" y="180" className="text-[10px] fill-purple-600">Back-extensions meet at virtual focus</text>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                        <li>Thinner at center, thicker at edges</li>
                        <li>Diverges rays; extensions meet at virtual focus F</li>
                        <li>Always forms virtual, erect, diminished images</li>
                        <li>Shows complete ray tracing and virtual image formation</li>
                      </ul>
                      <button type="button" onClick={() => setAnimateConcave((v) => !v)} className="ml-3 text-xs px-2 py-1 rounded bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 whitespace-nowrap transition-colors">{animateConcave ? "Pause" : "Play"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="simulation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Interactive Ray Diagram</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Adjust object distance and focal length to see how images are formed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Lens Type:</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setLensType("convex")}
                        className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                          lensType === "convex" 
                            ? "bg-blue-600 text-white" 
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Convex
                      </button>
                      <button
                        onClick={() => setLensType("concave")}
                        className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                          lensType === "concave" 
                            ? "bg-red-600 text-white" 
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Concave
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Object Distance (u): {Math.abs(objectDistance[0])} cm</label>
                    <Slider
                      value={objectDistance}
                      onValueChange={setObjectDistance}
                      max={-10}
                      min={-100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Focal Length (f): {focalLength[0]} cm</label>
                    <Slider
                      value={focalLength}
                      onValueChange={setFocalLength}
                      max={50}
                      min={10}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="flex justify-center overflow-x-auto">
                  <svg
                    width="600"
                    height="300"
                    viewBox="0 0 600 300"
                    className="border rounded-lg bg-gray-50 min-w-[500px] sm:min-w-[600px]"
                  >
                    <defs>
                      <marker id="simArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                        <path d="M0,0 L8,4 L0,8 z" fill="currentColor" />
                      </marker>
                      <pattern id="simGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    
                    {/* Grid background */}
                    <rect width="600" height="300" fill="url(#simGrid)" />
                    
                    {/* Principal axis */}
                    <line x1="0" y1="150" x2="600" y2="150" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
                    <text x="580" y="145" className="text-xs fill-gray-600">Principal Axis</text>

                    {/* Lens - different shapes for convex vs concave */}
                    {lensType === "convex" ? (
                      <ellipse cx="300" cy="150" rx="8" ry="80" fill="#7dd3fc" stroke="#0284c7" strokeWidth="3" opacity="0.8" />
                    ) : (
                      <path d="M 292 70 C 308 110 308 190 292 230 L 308 230 C 292 190 292 110 308 70 Z" 
                            fill="#fca5a5" stroke="#dc2626" strokeWidth="3" opacity="0.8" />
                    )}

                    {/* Focal points */}
                    <circle cx={300 - focalLength[0] * 2} cy="150" r="4" fill={lensType === "convex" ? "#ef4444" : "#8b5cf6"} />
                    <circle cx={300 + focalLength[0] * 2} cy="150" r="4" fill={lensType === "convex" ? "#ef4444" : "#8b5cf6"} />
                    <text x={300 - focalLength[0] * 2 - 8} y={135} className="text-sm font-medium">
                      {lensType === "concave" ? "F (virtual)" : "F"}
                    </text>
                    <text x={300 + focalLength[0] * 2 - 8} y={135} className="text-sm font-medium">
                      F'
                    </text>

                    {/* Object */}
                    <line
                      x1={300 + objectDistance[0] * 2}
                      y1="150"
                      x2={300 + objectDistance[0] * 2}
                      y2="100"
                      stroke="#059669"
                      strokeWidth="4"
                    />
                    <polygon
                      points={`${300 + objectDistance[0] * 2 - 6},110 ${300 + objectDistance[0] * 2 + 6},110 ${300 + objectDistance[0] * 2},100`}
                      fill="#059669"
                    />
                    <text x={300 + objectDistance[0] * 2 - 15} y={85} className="text-sm font-medium">
                      Object
                    </text>

                    {/* Image - different behavior for convex vs concave */}
                    {lensType === "convex" ? (
                      // Convex lens image (can be real or virtual)
                      imageDistance > 0 && Math.abs(imageDistance) < 150 ? (
                        <>
                          <line
                            x1={300 + imageDistance * 2}
                            y1="150"
                            x2={300 + imageDistance * 2}
                            y2={150 - 50 * magnification}
                            stroke="#ea580c"
                            strokeWidth="4"
                          />
                          <polygon
                            points={`${300 + imageDistance * 2 - 6},${150 - 50 * magnification + (magnification > 0 ? 10 : -10)} ${300 + imageDistance * 2 + 6},${150 - 50 * magnification + (magnification > 0 ? 10 : -10)} ${300 + imageDistance * 2},${150 - 50 * magnification}`}
                            fill="#ea580c"
                          />
                          <text x={300 + imageDistance * 2 - 15} y={150 - 50 * magnification - 15} className="text-sm font-medium">
                            Real Image
                          </text>
                        </>
                      ) : (
                        // Virtual image for convex when object is within focal length
                        Math.abs(objectDistance[0]) < focalLength[0] && (
                          <>
                            <line
                              x1={300 + imageDistance * 2}
                              y1="150"
                              x2={300 + imageDistance * 2}
                              y2={150 - 50 * magnification}
                              stroke="#a855f7"
                              strokeWidth="4"
                              opacity="0.7"
                            />
                            <polygon
                              points={`${300 + imageDistance * 2 - 6},${150 - 50 * magnification + 10} ${300 + imageDistance * 2 + 6},${150 - 50 * magnification + 10} ${300 + imageDistance * 2},${150 - 50 * magnification}`}
                              fill="#a855f7"
                              opacity="0.7"
                            />
                            <text x={300 + imageDistance * 2 - 20} y={150 - 50 * magnification - 15} className="text-sm font-medium fill-purple-600">
                              Virtual Image
                            </text>
                          </>
                        )
                      )
                    ) : (
                      // Concave lens always forms virtual, erect, diminished image
                      <>
                        <line
                          x1={300 + imageDistance * 2}
                          y1="150"
                          x2={300 + imageDistance * 2}
                          y2={150 - 50 * magnification}
                          stroke="#a855f7"
                          strokeWidth="4"
                          opacity="0.7"
                        />
                        <polygon
                          points={`${300 + imageDistance * 2 - 6},${150 - 50 * magnification + 10} ${300 + imageDistance * 2 + 6},${150 - 50 * magnification + 10} ${300 + imageDistance * 2},${150 - 50 * magnification}`}
                          fill="#a855f7"
                          opacity="0.7"
                        />
                        <text x={300 + imageDistance * 2 - 20} y={150 - 50 * magnification - 15} className="text-sm font-medium fill-purple-600">
                          Virtual Image
                        </text>
                      </>
                    )}

                    {/* Ray 1: Parallel to principal axis */}
                    <line
                      x1={300 + objectDistance[0] * 2}
                      y1="100"
                      x2="300"
                      y2="100"
                      stroke="#dc2626"
                      strokeWidth="2.5"
                      markerEnd="url(#simArrow)"
                    />
                    {lensType === "convex" ? (
                      <line
                        x1="300"
                        y1="100"
                        x2={300 + focalLength[0] * 2}
                        y2="150"
                        stroke="#16a34a"
                        strokeWidth="2.5"
                        markerEnd="url(#simArrow)"
                      />
                    ) : (
                      <>
                        <line
                          x1="300"
                          y1="100"
                          x2="450"
                          y2="125"
                          stroke="#16a34a"
                          strokeWidth="2.5"
                          markerEnd="url(#simArrow)"
                        />
                        {/* Back extension to virtual focus */}
                        <line
                          x1="300"
                          y1="100"
                          x2={300 - focalLength[0] * 2}
                          y2="150"
                          stroke="#8b5cf6"
                          strokeWidth="2"
                          strokeDasharray="4,3"
                          opacity="0.7"
                        />
                      </>
                    )}

                    {/* Ray 2: Through optical center */}
                    <line
                      x1={300 + objectDistance[0] * 2}
                      y1="100"
                      x2={lensType === "convex" 
                        ? (imageDistance > 0 ? 300 + imageDistance * 2 : 500) 
                        : 500}
                      y2={lensType === "convex" 
                        ? (imageDistance > 0 ? 150 - 50 * magnification : 100) 
                        : 100}
                      stroke="#ea580c"
                      strokeWidth="2.5"
                      markerEnd="url(#simArrow)"
                    />

                    {/* Ray 3: For convex - through focus; For concave - aimed at F' */}
                    {lensType === "convex" ? (
                      <>
                        <line
                          x1={300 + objectDistance[0] * 2}
                          y1="100"
                          x2={300 - focalLength[0] * 2}
                          y2="150"
                          stroke="#7c3aed"
                          strokeWidth="2"
                          strokeDasharray="3,2"
                        />
                        <line
                          x1="300"
                          y1={150 - 50 * (focalLength[0] / (objectDistance[0] + focalLength[0]))}
                          x2="500"
                          y2={150 - 50 * (focalLength[0] / (objectDistance[0] + focalLength[0]))}
                          stroke="#7c3aed"
                          strokeWidth="2"
                          strokeDasharray="3,2"
                          markerEnd="url(#simArrow)"
                        />
                      </>
                    ) : (
                      <>
                        <line
                          x1={300 + objectDistance[0] * 2}
                          y1="100"
                          x2="300"
                          y2="125"
                          stroke="#7c3aed"
                          strokeWidth="2"
                          strokeDasharray="3,2"
                        />
                        <line
                          x1="300"
                          y1="125"
                          x2="450"
                          y2="125"
                          stroke="#7c3aed"
                          strokeWidth="2"
                          strokeDasharray="3,2"
                          markerEnd="url(#simArrow)"
                        />
                        {/* Back extension */}
                        <line
                          x1="300"
                          y1="125"
                          x2={300 + imageDistance * 2}
                          y2={150 - 50 * magnification}
                          stroke="#8b5cf6"
                          strokeWidth="2"
                          strokeDasharray="4,3"
                          opacity="0.7"
                        />
                      </>
                    )}

                    {/* Labels */}
                    <text x="20" y="25" className="text-sm font-medium fill-red-600">Ray 1: Parallel to axis</text>
                    <text x="20" y="45" className="text-sm font-medium fill-orange-600">Ray 2: Through center</text>
                    <text x="20" y="65" className="text-sm font-medium fill-purple-600">
                      Ray 3: {lensType === "convex" ? "Through focus" : "Aimed at F'"}
                    </text>
                  </svg>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Badge variant="outline" className="mb-2 text-xs">
                      Object Distance
                    </Badge>
                    <p className="text-sm sm:text-lg font-bold">u = {objectDistance[0]} cm</p>
                  </div>
                  <div className="text-center">
                    <Badge variant="outline" className="mb-2 text-xs">
                      Image Distance
                    </Badge>
                    <p className="text-sm sm:text-lg font-bold">v = {imageDistance.toFixed(1)} cm</p>
                  </div>
                  <div className="text-center">
                    <Badge variant="outline" className="mb-2 text-xs">
                      Magnification
                    </Badge>
                    <p className="text-sm sm:text-lg font-bold">m = {magnification.toFixed(2)}</p>
                  </div>
                  <div className="text-center">
                    <Badge variant="outline" className="mb-2 text-xs">
                      Image Nature
                    </Badge>
                    <p className="text-xs">
                      {imageDistance > 0 ? "Real" : "Virtual"},{magnification > 0 ? " Erect" : " Inverted"},
                      {Math.abs(magnification) > 1 ? " Magnified" : " Diminished"}
                    </p>
                  </div>
                </div>
                
                {/* Additional information based on lens type */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Current Configuration:</h4>
                  <p className="text-sm text-gray-700">
                    {lensType === "convex" ? (
                      <>
                        <strong>Convex Lens:</strong> {Math.abs(objectDistance[0]) < focalLength[0] 
                          ? "Object within focal length - Virtual, erect, magnified image formed" 
                          : Math.abs(objectDistance[0]) === focalLength[0]
                          ? "Object at focal point - No image formed (rays parallel)"
                          : Math.abs(objectDistance[0]) < 2 * focalLength[0]
                          ? "Object between F and 2F - Real, inverted, magnified image"
                          : Math.abs(objectDistance[0]) === 2 * focalLength[0]
                          ? "Object at 2F - Real, inverted, same size image at 2F'"
                          : "Object beyond 2F - Real, inverted, diminished image"}
                      </>
                    ) : (
                      <>
                        <strong>Concave Lens:</strong> Always forms a virtual, erect, and diminished image regardless of object position. 
                        The image is always located between the lens and the object, on the same side as the object.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="formula" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Lens Formula and Power</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">Lens Formula</h3>
                  <div className="text-center text-lg sm:text-2xl font-mono mb-3">1/f = 1/v - 1/u</div>
                  <ul className="text-xs sm:text-sm space-y-1">
                    <li>
                      <strong>f</strong> = focal length
                    </li>
                    <li>
                      <strong>v</strong> = image distance
                    </li>
                    <li>
                      <strong>u</strong> = object distance
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3 text-sm sm:text-base">Magnification</h3>
                  <div className="text-center text-lg sm:text-2xl font-mono mb-3">m = v/u = h₂/h₁</div>
                  <ul className="text-xs sm:text-sm space-y-1">
                    <li>
                      <strong>m</strong> = magnification
                    </li>
                    <li>
                      <strong>h₂</strong> = image height
                    </li>
                    <li>
                      <strong>h₁</strong> = object height
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-3 text-sm sm:text-base">Power of Lens</h3>
                <div className="text-center text-lg sm:text-2xl font-mono mb-3">P = 1/f (in meters)</div>
                <p className="text-xs sm:text-sm">
                  Power is measured in <strong>Diopters (D)</strong>. Convex lens has positive power, concave lens has
                  negative power.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-3 text-sm sm:text-base">Sign Convention</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Distances:</h4>
                    <ul className="space-y-1">
                      <li>• Object distance (u): Always negative</li>
                      <li>• Image distance (v): Positive if real, negative if virtual</li>
                      <li>• Focal length (f): Positive for convex, negative for concave</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Heights:</h4>
                    <ul className="space-y-1">
                      <li>• Object height: Always positive</li>
                      <li>• Image height: Positive if erect, negative if inverted</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Applications of Lenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-600">Convex Lens Applications</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-sm sm:text-base">Magnifying Glass</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Object placed within focal length produces virtual, erect, magnified image
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-sm sm:text-base">Camera</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Forms real, inverted, diminished image on film/sensor
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-sm sm:text-base">Projector</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Object placed between F and 2F produces real, inverted, magnified image
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-sm sm:text-base">Human Eye</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Forms real, inverted image on retina</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-red-600">Concave Lens Applications</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h4 className="font-medium text-sm sm:text-base">Spectacles for Myopia</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Diverges light rays to correct near-sightedness
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h4 className="font-medium text-sm sm:text-base">Peephole in Doors</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Provides wide-angle view of the outside</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h4 className="font-medium text-sm sm:text-base">Car Side Mirrors</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Provides wider field of view</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h4 className="font-medium text-sm sm:text-base">Telescope Eyepiece</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Used in combination with convex lens</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="w-full">
        <Quiz questions={quizQuestions} title="Test Your Knowledge: Lenses" />
      </div>
    </div>
  )
}
