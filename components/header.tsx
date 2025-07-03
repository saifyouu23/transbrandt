"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-transbrandt.png"
              alt="Transbrandt"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/horaires" className="text-gray-700 hover:text-blue-600 font-medium">
              Horaires
            </Link>
            <Link href="/reservation" className="text-gray-700 hover:text-blue-600 font-medium">
              Réservation
            </Link>
            <Link href="/colis" className="text-gray-700 hover:text-blue-600 font-medium">
              Colis
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-blue-600 font-medium">
              Destinations
            </Link>
            <Link href="/promotions" className="text-gray-700 hover:text-blue-600 font-medium">
              Promotions
            </Link>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  FR
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>العربية</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="sm" asChild>
              <Link href="/login">
                <User className="h-4 w-4 mr-2" />
                Connexion
              </Link>
            </Button>

            <Button size="sm" asChild>
              <Link href="/reservation">Réserver</Link>
            </Button>
          </div>

          {/* Menu Mobile */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/horaires" className="text-gray-700 hover:text-blue-600 font-medium">
                Horaires
              </Link>
              <Link href="/reservation" className="text-gray-700 hover:text-blue-600 font-medium">
                Réservation
              </Link>
              <Link href="/colis" className="text-gray-700 hover:text-blue-600 font-medium">
                Colis
              </Link>
              <Link href="/destinations" className="text-gray-700 hover:text-blue-600 font-medium">
                Destinations
              </Link>
              <Link href="/promotions" className="text-gray-700 hover:text-blue-600 font-medium">
                Promotions
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/login">Connexion</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/reservation">Réserver</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
