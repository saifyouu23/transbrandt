import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Percent, Gift, Calendar, Users, Sparkles, Timer, Mail } from "lucide-react"
import Link from "next/link"

export function Promotions() {
  const promotions = [
    {
      icon: Percent,
      title: "Réduction Étudiant",
      description: "Bénéficiez d'avantages exclusifs avec votre carte étudiant",
      discount: "-25%",
      validity: "Valable toute l'année",
      code: "ETUDIANT25",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      popular: true,
    },
    {
      icon: Gift,
      title: "Offre Famille",
      description: "Avantages spéciaux pour les familles nombreuses",
      discount: "-30%",
      validity: "Weekends et vacances",
      code: "FAMILLE30",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      popular: false,
    },
    {
      icon: Calendar,
      title: "Réservation Anticipée",
      description: "Réservez à l'avance et économisez davantage",
      discount: "-20%",
      validity: "Réservation 7j à l'avance",
      code: "ANTICIPE20",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      popular: true,
    },
    {
      icon: Users,
      title: "Voyage de Groupe",
      description: "Tarifs préférentiels pour les groupes de 10+",
      discount: "-40%",
      validity: "Sur réservation",
      code: "GROUPE40",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      popular: false,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            Offres limitées
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Promotions
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              exclusives
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light">
            Profitez de nos offres spéciales pour voyager à prix réduit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {promotions.map((promo, index) => (
            <Card
              key={index}
              className="group border-0 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-500 rounded-3xl overflow-hidden hover:scale-105 shadow-2xl"
            >
              {/* Popular badge */}
              {promo.popular && (
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    POPULAIRE
                  </div>
                </div>
              )}

              <CardContent className="p-8 text-center h-full flex flex-col relative">
                {/* Discount badge */}
                <div
                  className={`absolute top-4 right-4 bg-gradient-to-r ${promo.color} text-white px-3 py-1 rounded-full text-sm font-bold`}
                >
                  {promo.discount}
                </div>

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${promo.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <promo.icon className="h-10 w-10 text-white" />
                </div>

                <CardTitle className="text-xl text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {promo.title}
                </CardTitle>

                <p className="text-blue-100 mb-6 flex-grow text-sm leading-relaxed">{promo.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3">
                    <p className="text-xs text-blue-200 mb-1">Code promo</p>
                    <p className="font-bold text-white text-sm">{promo.code}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-blue-200">
                    <Timer className="h-3 w-3" />
                    {promo.validity}
                  </div>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-white/20 hover:bg-white hover:text-slate-900 border border-white/30 rounded-full font-semibold transition-all duration-300"
                  asChild
                >
                  <Link href="/reservation">Profiter de l'offre</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
              Ne ratez aucune
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                promotion
              </span>
            </h3>
            <p className="text-blue-100 mb-8 text-lg font-light">
              Soyez les premiers informés de nos nouvelles offres exclusives et promotions flash
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/newsletter">
                  S'abonner maintenant
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
