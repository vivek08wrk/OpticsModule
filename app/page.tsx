"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import IntroductionToLight from "@/components/sections/IntroductionToLight"
import PropertiesOfLight from "@/components/sections/PropertiesOfLight"
import RefractionOfLight from "@/components/sections/RefractionOfLight"
import Lenses from "@/components/sections/Lenses"
import HumanEye from "@/components/sections/HumanEye"
import OpticalInstruments from "@/components/sections/OpticalInstruments"
import SolvedProblems from "@/components/sections/SolvedProblems"
import ConceptMap from "@/components/sections/ConceptMap"
import ScatteringOfLight from "@/components/sections/ScatteringOfLight"
import Footer from "@/components/Footer"

const sections = [
  { id: "introduction", title: "Introduction to Light", component: IntroductionToLight },
  { id: "properties", title: "Properties of Light", component: PropertiesOfLight },
  { id: "refraction", title: "Refraction of Light", component: RefractionOfLight },
  { id: "lenses", title: "Lenses", component: Lenses },
  { id: "human-eye", title: "The Human Eye", component: HumanEye },
  { id: "instruments", title: "Optical Instruments", component: OpticalInstruments },
  { id: "problems", title: "Solved Problems", component: SolvedProblems },
  { id: "concept-map", title: "Concept Map", component: ConceptMap },
]

export default function OpticsModule() {
  const [currentSection, setCurrentSection] = useState(0)
  const [progress, setProgress] = useState(0)
  const [currentSubsection, setCurrentSubsection] = useState<string | null>(null)

  const handleSectionChange = (index: number) => {
    setCurrentSection(index)
    setProgress((index / (sections.length - 1)) * 100)
    setCurrentSubsection(null)
    // Smoothly scroll to top on section change (respect reduced motion)
    if (typeof window !== "undefined") {
      const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const behavior: ScrollBehavior = prefersReduced ? "auto" : "smooth"
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior })
      })
    }
  }

  const handleSubsectionChange = (sectionId: string, subsection: string) => {
    const index = sections.findIndex((s) => s.id === sectionId)
    if (index !== -1) {
      setCurrentSection(index)
      setCurrentSubsection(subsection)
      setProgress((index / (sections.length - 1)) * 100)
      if (typeof window !== "undefined") {
        const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const behavior: ScrollBehavior = prefersReduced ? "auto" : "smooth"
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior })
        })
      }
    }
  }

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      handleSectionChange(currentSection + 1)
    }
  }

  const handlePrevious = () => {
    if (currentSection > 0) {
      handleSectionChange(currentSection - 1)
    }
  }

  const CurrentComponent = sections[currentSection].component

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <Navbar progress={progress} />

      <div className="flex">
        <Sidebar
          sections={sections}
          currentSection={currentSection}
          onSectionChange={handleSectionChange}
          onSubsectionChange={handleSubsectionChange}
        />

        <main className="flex-1 ml-0 md:ml-72 transition-all duration-300 ease-in-out">
          <div
            key={currentSection}
            className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4"
          >
            {sections[currentSection].id === "refraction" && currentSubsection === "Scattering of Light" ? (
              <ScatteringOfLight />
            ) : (
              <CurrentComponent />
            )}
          </div>
        </main>
      </div>

      <Footer
        onPrevious={handlePrevious}
        onNext={handleNext}
        canGoPrevious={currentSection > 0}
        canGoNext={currentSection < sections.length - 1}
        currentSection={currentSection + 1}
        totalSections={sections.length}
      />
    </div>
  )
}
