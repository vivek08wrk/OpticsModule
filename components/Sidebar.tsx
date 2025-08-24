"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

interface Section {
  id: string
  title: string
  component: React.ComponentType
}

interface SidebarProps {
  sections: Section[]
  currentSection: number
  onSectionChange: (index: number) => void
  onSubsectionChange?: (sectionId: string, subsection: string) => void
}

export default function Sidebar({ sections, currentSection, onSectionChange, onSubsectionChange }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  const subsections = {
    refraction: ["Laws of Refraction", "Dispersion of Light", "Scattering of Light", "Types of Scattering"],
    lenses: [
      "Types of Lenses",
      "Images Formed by Lenses",
      "Convex Lens",
      "Concave Lens",
      "Applications",
      "Lens Formula & Power",
    ],
    "human-eye": ["Structure and Working", "Power of Accommodation", "Defects of the Eye"],
    instruments: ["Microscope", "Telescope"],
  }

  return (
    <>
      {/* Mobile menu button (FAB) */}
      <Button
        variant="outline"
        size="icon"
        aria-label="Toggle table of contents"
        aria-expanded={isMobileOpen}
        className="fixed bottom-6 right-4 z-50 md:hidden bg-background shadow-lg border-border rounded-full h-12 w-12"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed left-0 top-20 h-[calc(100vh-5rem)] w-72 bg-background shadow-lg border-r border-border overflow-y-auto z-50 transition-transform duration-300 ease-in-out motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-left-8
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Table of Contents</h2>

            <nav className="space-y-3">
              {sections.map((section, index) => (
                <div key={section.id} className="flex flex-col">
                  <Button
                    variant={currentSection === index ? "default" : "ghost"}
                    className={`w-full justify-between text-left text-base py-3 px-4 hover:bg-muted/70 motion-safe:transition-colors ${
                      currentSection === index ? "bg-primary text-primary-foreground" : ""
                    }`}
                    onClick={() => {
                      onSectionChange(index)
                      setIsMobileOpen(false) // Close mobile menu on selection
                      if (subsections[section.id as keyof typeof subsections]) {
                        toggleSection(section.id)
                      }
                    }}
                  >
                    <span className="truncate flex-1 font-medium">{section.title}</span>
                    {subsections[section.id as keyof typeof subsections] && (
                      <div className="flex-shrink-0 ml-2">
                        {expandedSections[section.id] ? (
                          <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                        ) : (
                          <ChevronRight className="h-4 w-4 transition-transform duration-200" />
                        )}
                      </div>
                    )}
                  </Button>

                  {subsections[section.id as keyof typeof subsections] && expandedSections[section.id] && (
                    <div className="ml-6 mt-3 space-y-2 motion-safe:animate-in motion-safe:fade-in-0">
                      {subsections[section.id as keyof typeof subsections].map((subsection, subIndex) => (
                        <Button
                          key={subIndex}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-sm text-muted-foreground pl-4 py-2 hover:bg-muted/60 hover:text-foreground"
                          onClick={() => {
                            onSubsectionChange?.(section.id, subsection)
                            setIsMobileOpen(false)
                          }}
                        >
                          {subsection}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
