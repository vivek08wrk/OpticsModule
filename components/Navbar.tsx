"use client"

import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface NavbarProps {
  progress: number
}

export default function Navbar({ progress }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="bg-background/80 backdrop-blur supports-backdrop-blur:bg-background/70 shadow-sm border-b border-border sticky top-0 z-50 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-top-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground truncate motion-safe:transition-colors">
              Optics Learning Module
            </h1>
            <span className="ml-3 text-sm sm:text-base text-muted-foreground hidden sm:inline">Class 10 NCERT</span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-6 flex-shrink-0">
            <div className="w-32 sm:w-40 md:w-56">
              <Progress value={progress} className="h-3" />
            </div>
            <span className="text-sm sm:text-base text-muted-foreground whitespace-nowrap font-medium">
              {Math.round(progress)}%
            </span>
            
            {mounted && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-10 w-10 dark:bg-white dark:text-black dark:hover:bg-gray-100 dark:border-gray-300"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
