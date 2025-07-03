"use client"

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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Horaires des liaisons</h1>
          <p className="text-lg text-gray-600">Consultez tous nos horaires de départ et d'arrivée</p>
        </div>

        {/* Filtres */}
        <Card className="mb-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtrer les horaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">Rechercher</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="search"
                    placeholder="Route ou ville..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Ville</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
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
                <Label>Direction</Label>
                <Select value={selectedDirection} onValueChange={setSelectedDirection}>
                  <SelectTrigger>
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
                  className="w-full"
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
            <h2 className="text-xl font-semibold text-gray-900">{filteredRoutes.length} liaison(s) trouvée(s)</h2>
            <Badge variant="outline" className="text-sm">
              Horaires officiels Transbrandt
            </Badge>
          </div>

          <div className="grid gap-6">
            {filteredRoutes.map((route) => (
              <Card key={route.id} className="hover:shadow-md transition-shadow border-0 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <Route className="h-5 w-5 text-blue-600" />
                        {route.name}
                      </h3>
                      <Badge variant={route.direction === "aller" ? "default" : "secondary"} className="capitalize">
                        {route.direction}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Départ: {route.stops[0].time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Arrivée: {route.stops[route.stops.length - 1].time}
                      </span>
                    </div>
                  </div>

                  {/* Arrêts */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-3">Arrêts et horaires :</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                      {route.stops.map((stop, index) => (
                        <div key={index} className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                          <div className="flex items-center gap-2 mb-1">
                            <MapPin className="h-3 w-3 text-blue-600" />
                            <span className="font-medium text-gray-900 text-sm">{stop.city}</span>
                          </div>
                          <p className="text-blue-600 font-bold">{stop.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <a href="/reservation">
                        Réserver
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRoutes.length === 0 && (
            <Card className="border-0 bg-white">
              <CardContent className="p-12 text-center">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun horaire trouvé</h3>
                <p className="text-gray-600 mb-4">Essayez de modifier vos critères de recherche</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCity("all")
                    setSelectedDirection("all")
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Informations pratiques */}
        <Card className="mt-8 border-0 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations pratiques</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-medium mb-2">Recommandations</h4>
                <ul className="space-y-1">
                  <li>• Arrivez 15 minutes avant le départ</li>
                  <li>• Munissez-vous d'une pièce d'identité</li>
                  <li>• Réservation recommandée en haute saison</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Services à bord</h4>
                <ul className="space-y-1">
                  <li>• WiFi gratuit</li>
                  <li>• Climatisation</li>
                  <li>• Prises électriques</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
