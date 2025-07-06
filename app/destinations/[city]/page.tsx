"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Clock,
  Star,
  Camera,
  Utensils,
  Landmark,
  ArrowRight,
  Calendar,
  Users,
  Phone,
  Mail,
  Globe,
} from "lucide-react"
import { getDestinationData } from "@/lib/destinations-data"

interface DestinationPageProps {
  params: {
    city: string
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = getDestinationData(params.city)

  if (!destination) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={destination.heroImage || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                  <MapPin className="h-3 w-3 mr-1" />
                  {destination.region}
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  {destination.rating}
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">{destination.name}</h1>

              <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl font-light">{destination.description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-8 py-6 font-semibold"
                  asChild
                >
                  <Link href="/reservation">
                    Réserver maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 rounded-full px-8 py-6 font-semibold backdrop-blur-sm bg-white/10"
                  asChild
                >
                  <Link href="/horaires">Voir les horaires</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Découvrez {destination.name}</h2>
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="text-xl leading-relaxed mb-6">{destination.overview}</p>
                <p className="leading-relaxed">{destination.history}</p>
              </div>
            </section>

            {/* Attractions */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Attractions incontournables</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {destination.attractions.map((attraction, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={attraction.image || "/placeholder.svg"}
                        alt={attraction.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-white/90 text-slate-900">
                          <Landmark className="h-3 w-3 mr-1" />
                          {attraction.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {attraction.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{attraction.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Culture & Cuisine */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Culture & Gastronomie</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Utensils className="h-5 w-5" />
                      Spécialités culinaires
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {destination.cuisine.map((dish, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-slate-900">{dish.name}</h4>
                            <p className="text-sm text-slate-600">{dish.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="h-5 w-5" />
                      Traditions locales
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {destination.traditions.map((tradition, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-slate-900">{tradition.name}</h4>
                            <p className="text-sm text-slate-600">{tradition.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden sticky top-8">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle>Informations pratiques</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Population</p>
                      <p className="text-sm text-slate-600">{destination.population}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Langues</p>
                      <p className="text-sm text-slate-600">{destination.languages.join(", ")}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Meilleure période</p>
                      <p className="text-sm text-slate-600">{destination.bestTime}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Liaisons disponibles</h4>
                  <div className="space-y-2">
                    {destination.routes.map((route, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-900">
                          {route.from} → {route.to}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {route.frequency}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full"
                  asChild
                >
                  <Link href="/reservation">
                    Réserver votre voyage
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Weather Info */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Climat
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {destination.climate.map((season, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-slate-900">{season.season}</span>
                      <span className="text-sm text-slate-600">{season.temperature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <CardTitle>Office de tourisme</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-slate-600" />
                  <span className="text-sm text-slate-700">{destination.tourism.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-slate-600" />
                  <span className="text-sm text-slate-700">{destination.tourism.email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-slate-600 mt-0.5" />
                  <span className="text-sm text-slate-700">{destination.tourism.address}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
