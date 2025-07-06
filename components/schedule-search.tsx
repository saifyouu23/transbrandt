"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Clock, ArrowRight, Zap, Users } from "lucide-react"
import { getAllCities, findRoutesBetweenCities, busRoutes } from "@/lib/schedules-data"

export function ScheduleSearch() {
  const [departure, setDeparture] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])

  const cities = getAllCities()

  const handleSearch = () => {
    if (departure && destination) {
      const results = findRoutesBetweenCities(departure, destination)
      setSearchResults(results)
    }
  }

  const getResultGradient = (index: number) => {
    const gradients = [
      "from-blue-500 to-purple-600",
      "from-emerald-500 to-teal-600",
      "from-orange-500 to-red-600",
      "from-purple-500 to-pink-600",
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded-full px-6 py-3 text-sm font-semibold mb-6">
            <Zap className="h-4 w-4" />
            Recherche intelligente
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
            Trouvez votre
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              voyage idéal
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Recherchez parmi nos liaisons et réservez en quelques clics
          </p>
        </div>

        {/* Modern search card */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                    Départ
                  </Label>
                  <Select value={departure} onValueChange={setDeparture}>
                    <SelectTrigger className="h-14 rounded-2xl border-2 border-slate-200 hover:border-blue-300 transition-colors bg-white focus:border-blue-500">
                      <SelectValue placeholder="Ville de départ" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                    Destination
                  </Label>
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger className="h-14 rounded-2xl border-2 border-slate-200 hover:border-purple-300 transition-colors bg-white focus:border-purple-500">
                      <SelectValue placeholder="Ville d'arrivée" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-emerald-500" />
                    Date
                  </Label>
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="h-14 rounded-2xl border-2 border-slate-200 hover:border-emerald-300 transition-colors bg-white focus:border-emerald-500"
                  />
                </div>

                <div className="flex items-end">
                  <Button
                    onClick={handleSearch}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Rechercher
                  </Button>
                </div>
              </div>

              {/* Search results */}
              {searchResults.length > 0 && (
                <div className="border-t border-slate-200 pt-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    {searchResults.length} résultat(s) trouvé(s)
                  </h3>
                  <div className="space-y-4">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-white to-blue-50/50 p-6 rounded-2xl border-2 border-slate-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="font-bold text-slate-900 text-lg">{result.route}</p>
                            <p className="text-slate-600">Durée: {result.duration}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-4">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl">
                                <p className="text-xs font-medium">Départ</p>
                                <p className="font-bold text-lg">{result.departure}</p>
                              </div>
                              <ArrowRight className="h-5 w-5 text-slate-400" />
                              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-xl">
                                <p className="text-xs font-medium">Arrivée</p>
                                <p className="font-bold text-lg">{result.arrival}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {result.stops.map((stop: any, stopIndex: number) => (
                            <Badge
                              key={stopIndex}
                              variant="secondary"
                              className="bg-white/80 text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors"
                            >
                              <Clock className="h-3 w-3 mr-1" />
                              {stop.city} {stop.time}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Popular routes */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Liaisons populaires</h3>
            <p className="text-slate-600">Nos trajets les plus demandés</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {busRoutes.slice(0, 4).map((route, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group bg-white"
              >
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${getResultGradient(index)} p-6 text-white`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-white text-lg">{route.name}</h4>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-sm text-white/90">
                            <Clock className="h-4 w-4" />
                            {route.stops[0].time}
                          </div>
                          <ArrowRight className="h-4 w-4 text-white/70" />
                          <div className="flex items-center gap-1 text-sm text-white/90">
                            <Clock className="h-4 w-4" />
                            {route.stops[route.stops.length - 1].time}
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 capitalize rounded-full"
                      >
                        {route.direction}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Users className="h-4 w-4" />
                        <span>{route.stops.length} arrêts</span>
                      </div>
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${getResultGradient(index)} hover:opacity-90 rounded-full px-6`}
                        asChild
                      >
                        <Link href="/reservation">
                          Réserver
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
