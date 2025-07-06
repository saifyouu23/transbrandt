import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/bus-exterior.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/30 to-slate-800/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="flex items-center justify-center gap-4 text-5xl md:text-7xl lg:text-8xl mb-12">
                  <Image
                    src="/images/logo-transbrandt.png"
                    alt="Transbrandt Logo"
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                  />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-white">
                    Trans Brandt
                  </span>
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl text-white">Voyagez autrement</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-slate-300 max-w-4xl mx-auto font-light">
                Avec Transbrandt, découvrez une nouvelle façon de voyager à travers le Maroc.
                <br className="hidden lg:block" />
                Confort premium, technologie avancée, expérience exceptionnelle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full text-lg px-8 py-6 font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/reservation">
                  Réserver maintenant
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 rounded-full text-lg px-8 py-6 font-semibold backdrop-blur-sm bg-white/5 transition-all duration-300"
              >
                <Link href="/horaires">Voir les horaires</Link>
              </Button>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Ponctualité",
                subtitle: "Garantie 99%",
                description: "Système de suivi en temps réel",
                color: "from-emerald-500 to-teal-600",
              },
              {
                icon: Shield,
                title: "Sécurité",
                subtitle: "Certifiée",
                description: "Flotte moderne et entretenue",
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: MapPin,
                title: "Couverture",
                subtitle: "Nationale",
                description: "Plus de 50 destinations",
                color: "from-purple-500 to-pink-600",
              },
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div
                    className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-300 font-semibold mb-2">{feature.subtitle}</p>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
