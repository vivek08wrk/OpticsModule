"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OpticalInstruments() {
  const [animateMicroscope, setAnimateMicroscope] = useState(true)
  const [animateCompound, setAnimateCompound] = useState(true)
  const [animateTelescope, setAnimateTelescope] = useState(true)
  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gray-900 text-gray-900 dark:text-white space-y-10 px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 dark:text-black">Optical Instruments</h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Understanding microscopes and telescopes and their working principles
        </p>
      </div>

      <Tabs defaultValue="microscope" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 text-sm sm:text-base py-2">
          <TabsTrigger value="microscope">Microscope</TabsTrigger>
          <TabsTrigger value="telescope">Telescope</TabsTrigger>
        </TabsList>

        <TabsContent value="microscope">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Simple Microscope</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base text-gray-700">
                      A simple microscope consists of a single convex lens of short focal length. It acts as a
                      magnifying glass.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Working Principle</h3>
                      <ul className="text-xs sm:text-sm space-y-1">
                        <li>• Object placed within focal length</li>
                        <li>• Forms virtual, erect, magnified image</li>
                        <li>• Magnification = 25/f (cm)</li>
                        <li>• Used for reading small text</li>
                      </ul>
                      <button
                        type="button"
                        onClick={() => setAnimateMicroscope((v) => !v)}
                        className="mt-3 text-xs px-2 py-1 rounded bg-white text-gray-900 border hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                      >
                        {animateMicroscope ? "Pause animation" : "Play animation"}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center overflow-x-auto">
                    <svg
                      width="300"
                      height="200"
                      viewBox="0 0 300 200"
                      className="border rounded-lg bg-gray-50 dark:bg-gray-800 min-w-[250px] sm:min-w-[300px]"
                    >
                      <defs>
                        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                          <path d="M0,0 L8,4 L0,8 z" fill="currentColor" />
                        </marker>
                      </defs>
                      {/* Principal axis */}
                      <line x1="10" y1="100" x2="290" y2="100" stroke="#94a3b8" strokeWidth="1" />
                      {/* Lens */}
                      <ellipse cx="150" cy="100" rx="5" ry="40" fill="lightblue" stroke="blue" strokeWidth="2" />

                      {/* Focal points (approx f = 40) */}
                      <circle cx="110" cy="100" r="2" fill="#0ea5e9" />
                      <text x="100" y="115" className="text-[10px] fill-gray-700">F</text>
                      <circle cx="190" cy="100" r="2" fill="#0ea5e9" />
                      <text x="185" y="115" className="text-[10px] fill-gray-700">F</text>

                      {/* Object */}
                      <line x1="100" y1="100" x2="100" y2="80" stroke="green" strokeWidth="3" />
                      <text x="85" y="75" className="text-xs">
                        Object
                      </text>

                      {/* Virtual image (on object side) */}
                      <line x1="55" y1="100" x2="55" y2="60" stroke="orange" strokeWidth="3" strokeDasharray="3,3" />
                      <text x="18" y="55" className="text-xs">Virtual Image</text>

                      {/* Eye */}
                      <circle cx="200" cy="100" r="15" fill="lightcoral" stroke="red" strokeWidth="2" />
                      <text x="185" y="125" className="text-xs">
                        Eye
                      </text>

                      {/* Rays: 1) Parallel then through F' */}
                      <line
                        x1="100"
                        y1="80"
                        x2="150"
                        y2="80"
                        stroke="#ef4444"
                        strokeWidth="2"
                        markerEnd="url(#arrow)"
                        className={animateMicroscope ? "draw-animated" : ""}
                        style={{ ["--dash" as any]: 60, ["--dur" as any]: "700ms" }}
                      />
                      <line
                        x1="150"
                        y1="80"
                        x2="190"
                        y2="100"
                        stroke="#ef4444"
                        strokeWidth="2"
                        markerEnd="url(#arrow)"
                        className={animateMicroscope ? "draw-animated" : ""}
                        style={{ ["--dash" as any]: 70, ["--dur" as any]: "900ms", animationDelay: "250ms" }}
                      />
                      {/* Backward extension to image */}
                      <line x1="150" y1="80" x2="55" y2="60" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,3" />

                      {/* Rays: 2) Through optical center (undeviated) */}
                      <line
                        x1="100"
                        y1="80"
                        x2="150"
                        y2="100"
                        stroke="#22c55e"
                        strokeWidth="2"
                        markerEnd="url(#arrow)"
                        className={animateMicroscope ? "draw-animated" : ""}
                        style={{ ["--dash" as any]: 40, ["--dur" as any]: "650ms", animationDelay: "600ms" }}
                      />
                      <line
                        x1="150"
                        y1="100"
                        x2="210"
                        y2="120"
                        stroke="#22c55e"
                        strokeWidth="2"
                        markerEnd="url(#arrow)"
                        className={animateMicroscope ? "draw-animated" : ""}
                        style={{ ["--dash" as any]: 70, ["--dur" as any]: "850ms", animationDelay: "900ms" }}
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Compound Microscope</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    A compound microscope uses two convex lenses: objective lens (short focal length) and eyepiece lens
                    (longer focal length).
                  </p>

                  <div className="flex justify-center overflow-x-auto">
                    <svg
                      width="500"
                      height="200"
                      viewBox="0 0 500 200"
                      className="border rounded-lg bg-gray-50 dark:bg-gray-800 min-w-[400px] sm:min-w-[500px]"
                    >
                      <defs>
                        <marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                          <path d="M0,0 L8,4 L0,8 z" fill="currentColor" />
                        </marker>
                      </defs>
                      {/* Principal axis */}
                      <line x1="10" y1="100" x2="490" y2="100" stroke="#94a3b8" strokeWidth="1" />
                      {/* Objective lens */}
                      <ellipse cx="150" cy="100" rx="5" ry="30" fill="lightblue" stroke="blue" strokeWidth="2" />
                      <text x="130" y="140" className="text-xs">
                        Objective
                      </text>

                      {/* Eyepiece lens */}
                      <ellipse cx="350" cy="100" rx="5" ry="30" fill="lightgreen" stroke="green" strokeWidth="2" />
                      <text x="330" y="140" className="text-xs">
                        Eyepiece
                      </text>

                      {/* Focal points (approx) */}
                      <circle cx="115" cy="100" r="2" fill="#0ea5e9" />
                      <text x="108" y="115" className="text-[10px] fill-gray-700">F₀</text>
                      <circle cx="185" cy="100" r="2" fill="#0ea5e9" />
                      <text x="180" y="115" className="text-[10px] fill-gray-700">F₀'</text>
                      <circle cx="315" cy="100" r="2" fill="#10b981" />
                      <text x="308" y="115" className="text-[10px] fill-gray-700">Fₑ</text>
                      <circle cx="385" cy="100" r="2" fill="#10b981" />
                      <text x="378" y="115" className="text-[10px] fill-gray-700">Fₑ'</text>

                      {/* Object */}
                      <line x1="110" y1="100" x2="110" y2="85" stroke="#ef4444" strokeWidth="3" />
                      <text x="85" y="85" className="text-xs">
                        Object
                      </text>

                      {/* Real image formed by objective */}
                      <line x1="230" y1="100" x2="230" y2="70" stroke="orange" strokeWidth="3" />
                      <text x="220" y="65" className="text-xs">
                        Real Image
                      </text>

                      {/* Final virtual image by eyepiece */}
                      <line x1="460" y1="100" x2="460" y2="40" stroke="purple" strokeWidth="3" strokeDasharray="3,3" />
                      <text x="420" y="35" className="text-xs">
                        Final Virtual Image
                      </text>

                      {/* Eye */}
                      <circle cx="400" cy="100" r="12" fill="lightcoral" stroke="red" strokeWidth="2" />
                      <text x="385" y="125" className="text-xs">
                        Eye
                      </text>

                      {/* Rays through objective */}
                      <line x1="110" y1="85" x2="150" y2="100" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow2)" className={animateCompound ? "draw-animated" : ""} style={{ ["--dash" as any]: 48, ["--dur" as any]: "600ms" }} />
                      <line x1="110" y1="85" x2="150" y2="85" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow2)" className={animateCompound ? "draw-animated" : ""} style={{ ["--dash" as any]: 40, ["--dur" as any]: "600ms", animationDelay: "250ms" }} />
                      <line x1="150" y1="85" x2="230" y2="100" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow2)" className={animateCompound ? "draw-animated" : ""} style={{ ["--dash" as any]: 90, ["--dur" as any]: "900ms", animationDelay: "500ms" }} />

                      {/* Rays through eyepiece with back extension */}
                      <line x1="230" y1="100" x2="350" y2="90" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow2)" className={animateCompound ? "draw-animated" : ""} style={{ ["--dash" as any]: 140, ["--dur" as any]: "1000ms" }} />
                      <line x1="350" y1="90" x2="460" y2="40" stroke="#6366f1" strokeWidth="2" strokeDasharray="4,3" />
                    </svg>
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={() => setAnimateCompound((v) => !v)}
                        className="text-xs px-2 py-1 rounded bg-white text-gray-900 border hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                      >
                        {animateCompound ? "Pause animation" : "Play animation"}
                      </button>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">Working</h3>
                    <ol className="text-xs sm:text-sm space-y-1 list-decimal list-inside">
                      <li>Objective lens forms real, inverted, magnified image</li>
                      <li>This image acts as object for eyepiece</li>
                      <li>Eyepiece forms virtual, erect, magnified image</li>
                      <li>Total magnification = M₁ × M₂</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="telescope">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Astronomical Telescope</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-gray-700">
                    An astronomical telescope is used to observe distant celestial objects. It consists of two convex
                    lenses with large focal lengths.
                  </p>

                  <div className="flex justify-center overflow-x-auto">
                    <svg
                      width="600"
                      height="200"
                      viewBox="0 0 600 200"
                      className="border rounded-lg bg-gray-50 dark:bg-gray-800 min-w-[500px] sm:min-w-[600px]"
                    >
                      <defs>
                        <marker id="arrow3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                          <path d="M0,0 L8,4 L0,8 z" fill="currentColor" />
                        </marker>
                      </defs>
                      {/* Principal axis */}
                      <line x1="10" y1="100" x2="590" y2="100" stroke="#94a3b8" strokeWidth="1" />
                      {/* Objective lens */}
                      <ellipse cx="100" cy="100" rx="8" ry="50" fill="lightblue" stroke="blue" strokeWidth="2" />
                      <text x="70" y="160" className="text-xs">
                        Objective (f₀)
                      </text>

                      {/* Eyepiece lens */}
                      <ellipse cx="450" cy="100" rx="5" ry="30" fill="lightgreen" stroke="green" strokeWidth="2" />
                      <text x="425" y="140" className="text-xs">
                        Eyepiece (fₑ)
                      </text>

                      {/* Focal points */}
                      <circle cx="180" cy="100" r="2" fill="#0ea5e9" />
                      <text x="172" y="115" className="text-[10px] fill-gray-700">F₀'</text>
                      <circle cx="370" cy="100" r="2" fill="#10b981" />
                      <text x="363" y="115" className="text-[10px] fill-gray-700">Fₑ</text>

                      {/* Parallel rays from distant object */}
                      <line x1="10" y1="80" x2="100" y2="80" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow3)" className={animateTelescope ? "draw-animated" : ""} style={{ ["--dash" as any]: 160, ["--dur" as any]: "900ms" }} />
                      <line x1="10" y1="90" x2="100" y2="90" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow3)" className={animateTelescope ? "draw-animated" : ""} style={{ ["--dash" as any]: 160, ["--dur" as any]: "900ms", animationDelay: "200ms" }} />
                      <line x1="10" y1="100" x2="100" y2="100" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow3)" className={animateTelescope ? "draw-animated" : ""} style={{ ["--dash" as any]: 160, ["--dur" as any]: "900ms", animationDelay: "400ms" }} />
                      <text x="10" y="75" className="text-xs">
                        ∞
                      </text>

                      {/* Converging rays to F₀' */}
                      <line x1="100" y1="80" x2="180" y2="100" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow3)" className={animateTelescope ? "draw-animated" : ""} style={{ ["--dash" as any]: 160, ["--dur" as any]: "900ms", animationDelay: "700ms" }} />
                      <line x1="100" y1="90" x2="180" y2="100" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow3)" className={animateTelescope ? "draw-animated" : ""} style={{ ["--dash" as any]: 160, ["--dur" as any]: "900ms", animationDelay: "850ms" }} />
                      <line x1="100" y1="100" x2="180" y2="100" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow3)" className={animateTelescope ? "draw-animated" : ""} style={{ ["--dash" as any]: 160, ["--dur" as any]: "900ms", animationDelay: "1000ms" }} />

                      {/* Image at focus */}
                      <circle cx="180" cy="100" r="3" fill="orange" />
                      <text x="160" y="120" className="text-xs">
                        Real Image
                      </text>

                      {/* Rays to eyepiece */}
                      <line x1="180" y1="100" x2="450" y2="85" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow3)" className={animateTelescope ? "draw-animated" : ""} style={{ ["--dash" as any]: 320, ["--dur" as any]: "1100ms", animationDelay: "1200ms" }} />
                      <line x1="180" y1="100" x2="450" y2="100" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow3)" className={animateTelescope ? "draw-animated" : ""} style={{ ["--dash" as any]: 320, ["--dur" as any]: "1100ms", animationDelay: "1300ms" }} />
                      <line x1="180" y1="100" x2="450" y2="115" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow3)" className={animateTelescope ? "draw-animated" : ""} style={{ ["--dash" as any]: 320, ["--dur" as any]: "1100ms", animationDelay: "1400ms" }} />

                      {/* Parallel rays from eyepiece (emergent) - keep dashed, no draw animation to preserve dash pattern */}
                      <line x1="450" y1="85" x2="590" y2="85" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="450" y1="100" x2="590" y2="100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="450" y1="115" x2="590" y2="115" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" />

                      {/* Eye */}
                      <circle cx="500" cy="100" r="15" fill="lightcoral" stroke="red" strokeWidth="2" />
                      <text x="485" y="125" className="text-xs">
                        Eye
                      </text>

                      {/* Tube length indicator L ≈ f₀ + fₑ */}
                      <line x1="100" y1="150" x2="450" y2="150" stroke="#64748b" strokeWidth="1.5" markerStart="url(#arrow3)" markerEnd="url(#arrow3)" />
                      <text x="250" y="165" className="text-xs">L = f₀ + fₑ</text>
                    </svg>
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={() => setAnimateTelescope((v) => !v)}
                        className="text-xs px-2 py-1 rounded bg-white text-gray-900 border hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                      >
                        {animateTelescope ? "Pause animation" : "Play animation"}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Advantages</h3>
                      <ul className="text-xs sm:text-sm space-y-1">
                        <li>• High magnification</li>
                        <li>• Good light gathering power</li>
                        <li>• Suitable for celestial objects</li>
                        <li>• Simple construction</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">Disadvantages</h3>
                      <ul className="text-xs sm:text-sm space-y-1">
                        <li>• Image is inverted</li>
                        <li>• Large size required</li>
                        <li>• Not suitable for terrestrial use</li>
                        <li>• Chromatic aberration</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">Key Formulas</h3>
                    <div className="text-xs sm:text-sm space-y-1">
                      <div>
                        <strong>Magnification:</strong> M = f₀/fₑ
                      </div>
                      <div>
                        <strong>Length of telescope:</strong> L = f₀ + fₑ (normal adjustment)
                      </div>
                      <div>
                        <strong>Resolving power:</strong> Proportional to diameter of objective
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
