"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, MapPin, ArrowRight, Filter, Route } from "lucide-react"
import { busRoutes, getAllCities, type BusRoute } from "@/lib/schedules-data"

export default function HorairesPage() {
  const [filteredRoutes, setFilteredRoutes] = useState<BusRoute[]>(busRoutes)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedDirection, setSelectedDirection] = useState("")

  const cities = getAllCities()

  useEffect(() => {
    let filtered = busRoutes

    if (searchTerm) {
      filtered = filtered.filter(
        (route) =>
          route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.stops.some((stop) => stop.city.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (selectedCity && selectedCity !== "all") {
      filtered = filtered.filter((route) =>
        route.stops.some((stop) => stop.city.toLowerCase() === selectedCity.toLowerCase()),
      )
    }

    if (selectedDirection && selectedDirection !== "all") {
      filtered = filtered.filter((route) => route.direction === selectedDirection)
    }

    setFilteredRoutes(filtered)
  }, [searchTerm, selectedCity, selectedDirection])

  const getRouteGradient = (index: number) => {
    const gradients = [
      "from-blue-500 to-purple-600",
      "from-emerald-500 to-teal-600",
      "from-orange-500 to-red-600",
      "from-purple-500 to-pink-600",
      "from-indigo-500 to-blue-600",
      "from-green-500 to-emerald-600",
    ]
    return gradients[index % gradients.length]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Horaires des liaisons
          </h1>
          <p className="text-lg text-slate-600">Consultez tous nos horaires de départ et d'arrivée</p>
        </div>

        {/* Filtres */}
        <Card className="mb-8 shadow-xl border-0 bg-gradient-to-r from-white to-blue-50/50 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtrer les horaires
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search" className="text-slate-700 font-semibold">
                  Rechercher
                </Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="search"
                    placeholder="Route ou ville..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700 font-semibold">Ville</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="border-2 border-slate-200 focus:border-blue-500 rounded-xl">
                    <SelectValue placeholder="Toutes les villes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les villes</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700 font-semibold">Direction</Label>
                <Select value={selectedDirection} onValueChange={setSelectedDirection}>
                  <SelectTrigger className="border-2 border-slate-200 focus:border-blue-500 rounded-xl">
                    <SelectValue placeholder="Toutes directions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes directions</SelectItem>
                    <SelectItem value="aller">Aller</SelectItem>
                    <SelectItem value="retour">Retour</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCity("all")
                    setSelectedDirection("all")
                  }}
                  className="w-full border-2 border-slate-300 hover:bg-slate-100 rounded-xl"
                >
                  Réinitialiser
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Résultats */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">{filteredRoutes.length} liaison(s) trouvée(s)</h2>
            <Badge variant="outline" className="text-sm bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300">
              Horaires officiels Transbrandt
            </Badge>
          </div>

          <div className="grid gap-6">
            {filteredRoutes.map((route, index) => (
              <Card
                key={route.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden group"
              >
                <CardContent className="p-0">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${getRouteGradient(index)} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        <Route className="h-6 w-6" />
                        {route.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className={`capitalize ${route.direction === "aller" ? "bg-white/20 text-white" : "bg-white/20 text-white"} border-white/30`}
                      >
                        {route.direction}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-6 text-white/90">
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Départ: <span className="font-bold text-white">{route.stops[0].time}</span>
                      </span>
                      <ArrowRight className="h-4 w-4" />
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Arrivée:{" "}
                        <span className="font-bold text-white">{route.stops[route.stops.length - 1].time}</span>
                      </span>
                    </div>
                  </div>

                  {/* Stops section */}
                  <div className="p-6">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">Arrêts et horaires :</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
                      {route.stops.map((stop, stopIndex) => (
                        <div key={stopIndex} className="relative group/stop">
                          <div
                            className={`bg-gradient-to-br ${getRouteGradient(index)} p-4 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="h-4 w-4" />
                              <span className="font-semibold text-sm">{stop.city}</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                              <p className="font-black text-lg">{stop.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        asChild
                        className={`bg-gradient-to-r ${getRouteGradient(index)} hover:opacity-90 rounded-full px-6`}
                      >
                        <Link href="/reservation">
                          Réserver
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-2 hover:bg-slate-50 rounded-full px-6 bg-transparent"
                      >
                        Détails
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRoutes.length === 0 && (
            <Card className="border-0 bg-white rounded-2xl shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="bg-gradient-to-br from-slate-100 to-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-10 w-10 text-slate-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Aucun horaire trouvé</h3>
                <p className="text-slate-600 mb-6">Essayez de modifier vos critères de recherche</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCity("all")
                    setSelectedDirection("all")
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 hover:opacity-90 rounded-full px-8"
                >
                  Réinitialiser les filtres
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Informations pratiques */}
        <Card className="mt-12 border-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Informations pratiques
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-4 text-slate-900 text-lg">Recommandations</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Arrivez 15 minutes avant le départ
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Munissez-vous d'une pièce d'identité
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Réservation recommandée en haute saison
                  </li>
                </ul>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-4 text-slate-900 text-lg">Services à bord</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    WiFi gratuit
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Climatisation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Prises électriques
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
