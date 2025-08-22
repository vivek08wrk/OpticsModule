"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react"

interface FooterProps {
  onPrevious: () => void
  onNext: () => void
  canGoPrevious: boolean
  canGoNext: boolean
  currentSection: number
  totalSections: number
}

export default function Footer({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  currentSection,
  totalSections,
}: FooterProps) {
  return (
    <footer className="bg-background/80 backdrop-blur supports-backdrop-blur:bg-background/70 border-t border-border shadow-sm ml-0 md:ml-72 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="flex items-center space-x-2 bg-background w-full sm:w-auto order-2 sm:order-1 motion-safe:transition-transform hover:motion-safe:scale-[1.02] py-3 px-6 text-base"
            size="lg"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Previous</span>
          </Button>

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 order-1 sm:order-2">
            <span className="text-sm sm:text-base text-muted-foreground whitespace-nowrap font-medium">
              Section {currentSection} of {totalSections}
            </span>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background motion-safe:transition-transform hover:motion-safe:scale-[1.02] py-3 px-6 text-base">
              <BookOpen className="h-5 w-5 mr-2" />
              Notes
            </Button>
          </div>

          <Button
            onClick={onNext}
            disabled={!canGoNext}
            className="flex items-center space-x-2 w-full sm:w-auto order-3 motion-safe:transition-transform hover:motion-safe:scale-[1.02] py-3 px-6 text-base"
            size="lg"
          >
            <span>Next</span>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
