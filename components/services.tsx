import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ticket, Package, Users, Headphones, Wifi, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: Ticket,
      title: "Réservation intelligente",
      description: "Système de réservation en ligne avec sélection de siège",
      link: "/reservation",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      features: ["Paiement sécurisé", "Confirmation instantanée", "E-billets"],
    },
    {
      icon: Package,
      title: "Livraison express",
      description: "Service de transport de colis avec suivi en temps réel",
      link: "/colis",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      features: ["Suivi GPS", "Assurance incluse", "Livraison rapide"],
    },
    {
      icon: Users,
      title: "Voyages sur mesure",
      description: "Solutions personnalisées pour groupes et entreprises",
      link: "/groupes",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      features: ["Tarifs préférentiels", "Service dédié", "Flexibilité"],
    },
    {
      icon: Headphones,
      title: "Support premium",
      description: "Assistance client 24/7 multicanal",
      link: "/support",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      features: ["Chat en direct", "Support téléphonique", "FAQ interactive"],
    },
  ]

  const premiumFeatures = [
    { icon: Wifi, title: "WiFi haut débit", description: "Connexion gratuite dans tous nos véhicules" },
    { icon: Zap, title: "Prises USB-C", description: "Rechargez vos appareils pendant le voyage" },
    { icon: Shield, title: "Assurance voyage", description: "Protection complète incluse" },
    { icon: Star, title: "Service premium", description: "Expérience 5 étoiles garantie" },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20 -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100 to-blue-100 rounded-full blur-3xl opacity-20 translate-y-48 translate-x-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded-full px-6 py-3 text-sm font-semibold mb-6">
            <Star className="h-4 w-4" />
            Services premium
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
            Une expérience
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              exceptionnelle
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Découvrez notre gamme complète de services pensés pour votre confort
          </p>
        </div>

        {/* Main services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white hover:scale-105"
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="h-10 w-10 text-white" />
                </div>

                <CardTitle className="text-xl text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>

                <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  asChild
                  className="w-full rounded-full border-2 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 bg-transparent"
                >
                  <Link href={service.link}>Découvrir</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium experience section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16 flex flex-col justify-center relative">
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-6">
                  <Star className="h-4 w-4 text-yellow-400" />
                  Expérience premium
                </div>

                <h3 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                  Voyagez dans le
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    comfort absolu
                  </span>
                </h3>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  {premiumFeatures.map((feature, index) => (
                    <div key={index} className="group">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="font-bold text-white text-sm mb-1">{feature.title}</h4>
                        <p className="text-slate-300 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/reservation">
                    Réserver maintenant
                    <Zap className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-64 lg:h-auto">
              <Image src="/images/bus-interior.webp" alt="Intérieur luxueux du bus" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
