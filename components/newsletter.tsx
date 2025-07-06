"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation d'inscription
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 text-blue-200 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Restez informé</h2>
          <p className="text-xl text-blue-100 mb-8">
            Recevez nos dernières promotions et actualités directement dans votre boîte mail
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white border-0"
              />
              <Button type="submit" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                S'abonner
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-green-300">
              <CheckCircle className="h-6 w-6" />
              <span className="text-lg font-medium">Merci pour votre inscription !</span>
            </div>
          )}

          <p className="text-sm text-blue-200 mt-4">
            Nous respectons votre vie privée. Désabonnement possible à tout moment.
          </p>
        </div>
      </div>
    </section>
  )
}
