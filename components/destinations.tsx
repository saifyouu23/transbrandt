import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight, Star, TrendingUpIcon as Trending } from "lucide-react"
import Link from "next/link"

export function Destinations() {
  const destinations = [
    {
      city: "Marrakech",
      description: "La ville rouge et ses merveilles",
      image: "/placeholder.svg?height=300&width=400",
      popular: true,
      rating: 4.8,
      trips: "120+ voyages/semaine",
    },
    {
      city: "Casablanca",
      description: "Centre économique du Maroc",
      image: "/placeholder.svg?height=300&width=400",
      popular: true,
      rating: 4.7,
      trips: "150+ voyages/semaine",
    },
    {
      city: "Fès",
      description: "Capitale spirituelle et culturelle",
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
      rating: 4.6,
      trips: "80+ voyages/semaine",
    },
    {
      city: "Agadir",
      description: "Perle du Sud atlantique",
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
      rating: 4.5,
      trips: "60+ voyages/semaine",
    },
    {
      city: "Tanger",
      description: "Porte de l'Afrique",
      image: "/placeholder.svg?height=300&width=400",
      popular: true,
      rating: 4.4,
      trips: "90+ voyages/semaine",
    },
    {
      city: "Oujda",
      description: "Ville frontalière dynamique",
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
      rating: 4.3,
      trips: "40+ voyages/semaine",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded-full px-6 py-3 text-sm font-semibold mb-6">
            <Trending className="h-4 w-4" />
            Destinations tendance
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
            Explorez le
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Maroc
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Découvrez les plus belles destinations du royaume avec nos liaisons premium
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.city}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {destination.popular && (
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-full font-semibold">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Populaire
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold text-slate-700">{destination.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {destination.city}
                    </h3>
                    <p className="text-slate-600 text-sm">{destination.description}</p>
                  </div>
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-500 font-medium">{destination.trips}</p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full rounded-full border-2 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 bg-transparent"
                >
                  <Link href={`/destinations/${destination.city.toLowerCase()}`}>
                    Découvrir
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full border-2 border-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 px-8 py-6 font-semibold bg-transparent"
          >
            <Link href="/destinations">
              Voir toutes les destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
