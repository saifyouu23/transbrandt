import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, TrendingUpIcon as Trending } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Destinations() {
  const destinations = [
    {
      city: "Marrakech",
      description: "La ville rouge et ses merveilles",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marrakesh.jpg-Ct8fWvfXTNlkAXLQb1nwQfceeawj0L.jpeg",
      popular: true,
      rating: 4.8,
      trips: "120+ voyages/semaine",
      gradient: "from-orange-500 to-red-600",
    },
    {
      city: "Casablanca",
      description: "Centre économique du Maroc",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casablanca-tQaGGJbIwJe2uQkrg5LnEByCKC25iS.webp",
      popular: true,
      rating: 4.7,
      trips: "150+ voyages/semaine",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      city: "Fès",
      description: "Capitale spirituelle et culturelle",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fe%CC%81s.jpg-xoU1yOODGYmqcWzKnaAPUr7MzRMVL8.jpeg",
      popular: false,
      rating: 4.6,
      trips: "80+ voyages/semaine",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      city: "Agadir",
      description: "Perle du Sud atlantique",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agadir-m6XpJ1MKxBCJZu4Qttl7BgAHx5iPHb.avif",
      popular: false,
      rating: 4.5,
      trips: "60+ voyages/semaine",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      city: "Tanger",
      description: "Porte de l'Afrique",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tanger.jpg-ywjPrcX88wKG2VgPSsBm1UNKh91FdZ.jpeg",
      popular: true,
      rating: 4.4,
      trips: "90+ voyages/semaine",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      city: "Essaouira",
      description: "Cité des vents atlantiques",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira.jpg-bX5NQoG0ZDAwbiEMO1ZDOv9oEQqyQO.jpeg",
      popular: true,
      rating: 4.6,
      trips: "25+ voyages/semaine",
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      city: "Meknès",
      description: "Ville impériale authentique",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meknes.jpg-X0rGK6xYomLKc8kCRNKNMSoou30M0c.jpeg",
      popular: false,
      rating: 4.5,
      trips: "45+ voyages/semaine",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      city: "Oujda",
      description: "Ville frontalière dynamique",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oujda.jpg-DPwIz8naQMCGU9SiXNRDpNKMWZU8La.jpeg",
      popular: false,
      rating: 4.3,
      trips: "40+ voyages/semaine",
      gradient: "from-rose-500 to-pink-600",
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
              <div className="relative overflow-hidden h-56">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.city}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {destination.popular && (
                    <Badge
                      className={`bg-gradient-to-r ${destination.gradient} text-white border-0 rounded-full font-semibold shadow-lg`}
                    >
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Populaire
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold text-slate-700">{destination.rating}</span>
                </div>

                {/* City name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-blue-300 transition-colors drop-shadow-lg">
                    {destination.city}
                  </h3>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <p className="text-slate-600 text-sm mb-2">{destination.description}</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${destination.gradient} rounded-full`}></div>
                    <p className="text-xs text-slate-500 font-medium">{destination.trips}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className={`w-full rounded-full border-2 hover:bg-gradient-to-r hover:${destination.gradient} hover:text-white hover:border-transparent transition-all duration-300 bg-transparent group-hover:bg-gradient-to-r group-hover:${destination.gradient} group-hover:text-white group-hover:border-transparent`}
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
            className="rounded-full border-2 border-slate-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 px-8 py-6 font-semibold bg-transparent"
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
