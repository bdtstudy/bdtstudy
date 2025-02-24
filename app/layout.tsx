"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen bg-gold-50">
          <header className="p-4 bg-gold-100">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="absolute top-4 left-4">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-gold-100">
                <nav className="flex flex-col space-y-4">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Home
                    </Button>
                  </Link>
                  <Link href="/studies" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Studies
                    </Button>
                  </Link>
                  <Link href="/all-posts" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      All Posts
                    </Button>
                  </Link>
                  <Link href="/theories" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Theories
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
