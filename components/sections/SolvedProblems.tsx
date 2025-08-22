"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function SolvedProblems() {
  const [problem1, setProblem1] = useState({ u: -30, f: 20 })
  const [problem2, setProblem2] = useState({ u: -15, f: 20 })

  const solveLensProblem = (u: number, f: number) => {
    const v = (f * u) / (u - f)
    const m = -v / u
    const nature = {
      position: v > 0 ? "Real" : "Virtual",
      orientation: m > 0 ? "Erect" : "Inverted",
      size: Math.abs(m) > 1 ? "Magnified" : Math.abs(m) < 1 ? "Diminished" : "Same size",
    }
    return { v: v.toFixed(2), m: m.toFixed(2), nature }
  }

  const result1 = solveLensProblem(problem1.u, problem1.f)
  const result2 = solveLensProblem(problem2.u, problem2.f)

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gray-900 text-gray-900 dark:text-white space-y-10 px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 dark:text-black">Solved Problems</h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Practice numerical problems with interactive solutions and ray diagrams
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Problem 1: Convex Lens Image Formation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium mb-2 text-sm sm:text-base">Problem Statement:</p>
              <p className="text-xs sm:text-sm">
                An object is placed at a distance of {Math.abs(problem1.u)} cm from a convex lens of focal length{" "}
                {problem1.f} cm. Find the position, nature, and magnification of the image formed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">Object Distance (u) in cm:</Label>
                  <Input
                    type="number"
                    value={Math.abs(problem1.u)}
                    onChange={(e) => setProblem1({ ...problem1, u: -Math.abs(Number(e.target.value)) })}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">Focal Length (f) in cm:</Label>
                  <Input
                    type="number"
                    value={problem1.f}
                    onChange={(e) => setProblem1({ ...problem1, f: Number(e.target.value) })}
                    className="text-sm"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3 text-sm sm:text-base">Solution:</h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div>
                      <strong>Given:</strong> u = {problem1.u} cm, f = {problem1.f} cm
                    </div>
                    <div>
                      <strong>Using lens formula:</strong> 1/f = 1/v - 1/u
                    </div>
                    <div>
                      <strong>
                        1/{problem1.f} = 1/v - 1/({problem1.u})
                      </strong>
                    </div>
                    <div>
                      <strong>Image distance (v):</strong> {result1.v} cm
                    </div>
                    <div>
                      <strong>Magnification (m):</strong> {result1.m}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {result1.nature.position}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {result1.nature.orientation}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {result1.nature.size}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex justify-center overflow-x-auto">
              <svg
                width="500"
                height="200"
                viewBox="0 0 500 200"
                className="border rounded-lg bg-gray-50 dark:bg-gray-800 min-w-[400px] sm:min-w-[500px]"
              >
                {/* Principal axis */}
                <line x1="0" y1="100" x2="500" y2="100" stroke="black" strokeWidth="1" />

                {/* Lens */}
                <ellipse cx="250" cy="100" rx="5" ry="60" fill="lightblue" stroke="blue" strokeWidth="2" />

                {/* Focal points */}
                <circle cx={250 - problem1.f * 2} cy="100" r="3" fill="red" />
                <circle cx={250 + problem1.f * 2} cy="100" r="3" fill="red" />
                <text x={250 - problem1.f * 2 - 5} y={90} className="text-xs">
                  F₁
                </text>
                <text x={250 + problem1.f * 2 - 5} y={90} className="text-xs">
                  F₂
                </text>

                {/* Object */}
                <line
                  x1={250 + problem1.u * 2}
                  y1="100"
                  x2={250 + problem1.u * 2}
                  y2="70"
                  stroke="green"
                  strokeWidth="3"
                />
                <text x={250 + problem1.u * 2 - 10} y={60} className="text-xs">
                  Object
                </text>

                {/* Image */}
                {Number(result1.v) > 0 && Number(result1.v) < 125 && (
                  <>
                    <line
                      x1={250 + Number(result1.v) * 2}
                      y1="100"
                      x2={250 + Number(result1.v) * 2}
                      y2={100 - 30 * Number(result1.m)}
                      stroke="orange"
                      strokeWidth="3"
                    />
                    <text
                      x={250 + Number(result1.v) * 2 - 10}
                      y={100 - 30 * Number(result1.m) - 10}
                      className="text-xs"
                    >
                      Image
                    </text>
                  </>
                )}
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Problem 2: Magnifying Glass</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-medium mb-2 text-sm sm:text-base">Problem Statement:</p>
              <p className="text-xs sm:text-sm">
                An object is placed at {Math.abs(problem2.u)} cm from a convex lens of focal length {problem2.f} cm.
                Calculate the image distance and magnification. What type of image is formed?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">Object Distance (u) in cm:</Label>
                  <Input
                    type="number"
                    value={Math.abs(problem2.u)}
                    onChange={(e) => setProblem2({ ...problem2, u: -Math.abs(Number(e.target.value)) })}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm">Focal Length (f) in cm:</Label>
                  <Input
                    type="number"
                    value={problem2.f}
                    onChange={(e) => setProblem2({ ...problem2, f: Number(e.target.value) })}
                    className="text-sm"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-3 text-sm sm:text-base">Solution:</h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div>
                      <strong>Given:</strong> u = {problem2.u} cm, f = {problem2.f} cm
                    </div>
                    <div>
                      <strong>Since |u| {"<"} f, object is within focal length</strong>
                    </div>
                    <div>
                      <strong>Image distance (v):</strong> {result2.v} cm
                    </div>
                    <div>
                      <strong>Magnification (m):</strong> {result2.m}
                    </div>
                    <div>
                      <strong>This acts as a magnifying glass!</strong>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {result2.nature.position}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {result2.nature.orientation}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {result2.nature.size}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Practice Problems</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Problem 3</h3>
              <p className="text-xs sm:text-sm mb-2">
                A concave lens of focal length 15 cm forms an image 10 cm from the lens. Find the object distance.
              </p>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                Show Solution
              </Button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Problem 4</h3>
              <p className="text-xs sm:text-sm mb-2">
                An object 4 cm high is placed 25 cm from a convex lens of focal length 10 cm. Find the height of the
                image.
              </p>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                Show Solution
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
