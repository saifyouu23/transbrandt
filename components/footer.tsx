import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <Image
              src="/images/logo-transbrandt.png"
              alt="Transbrandt"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour tous vos déplacements à travers le Maroc. Confort, sécurité et
              ponctualité garantis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/reservation" className="text-gray-400 hover:text-white transition-colors">
                  Réservation billets
                </Link>
              </li>
              <li>
                <Link href="/colis" className="text-gray-400 hover:text-white transition-colors">
                  Envoi colis
                </Link>
              </li>
              <li>
                <Link href="/horaires" className="text-gray-400 hover:text-white transition-colors">
                  Horaires
                </Link>
              </li>
              <li>
                <Link href="/groupes" className="text-gray-400 hover:text-white transition-colors">
                  Voyages de groupe
                </Link>
              </li>
              <li>
                <Link href="/promotions" className="text-gray-400 hover:text-white transition-colors">
                  Promotions
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations/rabat" className="text-gray-400 hover:text-white transition-colors">
                  Rabat
                </Link>
              </li>
              <li>
                <Link href="/destinations/casablanca" className="text-gray-400 hover:text-white transition-colors">
                  Casablanca
                </Link>
              </li>
              <li>
                <Link href="/destinations/marrakech" className="text-gray-400 hover:text-white transition-colors">
                  Marrakech
                </Link>
              </li>
              <li>
                <Link href="/destinations/fes" className="text-gray-400 hover:text-white transition-colors">
                  Fès
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-400 hover:text-white transition-colors">
                  Toutes les destinations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+212 5 37 XX XX XX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">contact@transbrandt.ma</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-400">
                  Avenue Mohammed V<br />
                  Rabat, Maroc
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 Transbrandt. Tous droits réservés.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link href="/cgv" className="text-gray-400 hover:text-white transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
