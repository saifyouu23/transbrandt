import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight, Star, Users, Clock } from "lucide-react"
import { getAllDestinations } from "@/lib/destinations-data"

export default function DestinationsPage() {
  const destinations = getAllDestinations()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white text-sm font-semibold mb-8">
              <MapPin className="h-4 w-4" />
              Découvrez le Maroc
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8">
              Nos
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Destinations
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 mb-12 font-light">
              Explorez les plus belles villes du royaume avec Transbrandt.
              <br className="hidden lg:block" />
              Chaque destination raconte une histoire unique.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card
                key={destination.id}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.heroImage || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white/90 text-slate-900 border-0">
                      <MapPin className="h-3 w-3 mr-1" />
                      {destination.region}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-semibold text-slate-700">{destination.rating}</span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-blue-100 text-sm font-light">{destination.description}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{destination.population}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{destination.bestTime}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 text-sm">Liaisons disponibles:</h4>
                      <div className="flex flex-wrap gap-1">
                        {destination.routes.slice(0, 2).map((route, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {route.from} → {route.to}
                          </Badge>
                        ))}
                        {destination.routes.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{destination.routes.length - 2} autres
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold transition-all duration-300"
                    >
                      <Link href={`/destinations/${destination.id}`}>
                        Découvrir {destination.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Prêt à partir à l'aventure ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre voyage vers la destination de vos rêves
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 font-semibold"
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
              className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 rounded-full px-8 py-6 font-semibold bg-transparent"
              asChild
            >
              <Link href="/horaires">Consulter les horaires</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
