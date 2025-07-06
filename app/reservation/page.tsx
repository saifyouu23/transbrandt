"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { MapPin, CreditCard, Shield, ArrowRight, Minus, Plus } from "lucide-react"

export default function ReservationPage() {
  const [step, setStep] = useState(1)
  const [passengers, setPassengers] = useState(1)
  const [selectedTrip, setSelectedTrip] = useState<any>(null)

  const trips = [
    {
      id: 1,
      route: "Rabat → Agadir",
      departure: "12h30",
      arrival: "19h00",
      duration: "6h30",
      available: 15,
      stops: ["Rabat", "Casablanca", "Settat", "Benguerir", "Marrakech", "Chichaoua", "Imintanout", "Agadir"],
    },
    {
      id: 2,
      route: "Agadir → Rabat",
      departure: "06h30",
      arrival: "15h30",
      duration: "9h00",
      available: 8,
      stops: [
        "Agadir",
        "Inezgane",
        "Taroudant",
        "Imintanout",
        "Chichaoua",
        "Marrakech",
        "Benguerir",
        "Settat",
        "Casablanca",
        "Rabat",
      ],
    },
  ]

  const handleTripSelect = (trip: any) => {
    setSelectedTrip(trip)
    setStep(2)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Réservation de billets</h1>
          <p className="text-lg text-gray-600">Réservez vos billets en quelques clics</p>
        </div>

        {/* Indicateur d'étapes */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              2
            </div>
            <div className={`w-16 h-1 ${step >= 3 ? "bg-blue-600" : "bg-gray-200"}`}></div>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              3
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            {/* Formulaire de recherche */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Rechercher un voyage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="space-y-2">
                    <Label>Départ</Label>
                    <Select defaultValue="rabat">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rabat">Rabat</SelectItem>
                        <SelectItem value="casablanca">Casablanca</SelectItem>
                        <SelectItem value="fes">Fès</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Destination</Label>
                    <Select defaultValue="casablanca">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="casablanca">Casablanca</SelectItem>
                        <SelectItem value="rabat">Rabat</SelectItem>
                        <SelectItem value="marrakech">Marrakech</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                  </div>
                  <div className="space-y-2">
                    <Label>Passagers</Label>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setPassengers(Math.max(1, passengers - 1))}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{passengers}</span>
                      <Button variant="outline" size="sm" onClick={() => setPassengers(Math.min(9, passengers + 1))}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Résultats */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Voyages disponibles</h2>
              {trips.map((trip) => (
                <Card key={trip.id} className="hover:shadow-md transition-shadow border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          {trip.route}
                        </h3>
                        <p className="text-sm text-gray-600">Durée: {trip.duration}</p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-gray-600">Départ</p>
                        <p className="text-lg font-bold text-blue-600">{trip.departure}</p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-gray-600">Arrivée</p>
                        <p className="text-lg font-bold text-green-600">{trip.arrival}</p>
                      </div>

                      <div>
                        <Button onClick={() => handleTripSelect(trip)} className="w-full">
                          Sélectionner
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {step === 2 && selectedTrip && (
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Informations passagers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Array.from({ length: passengers }, (_, i) => (
                    <div key={i} className="space-y-4 p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900">Passager {i + 1}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Prénom</Label>
                          <Input placeholder="Prénom" />
                        </div>
                        <div className="space-y-2">
                          <Label>Nom</Label>
                          <Input placeholder="Nom" />
                        </div>
                        <div className="space-y-2">
                          <Label>Email</Label>
                          <Input type="email" placeholder="email@exemple.com" />
                        </div>
                        <div className="space-y-2">
                          <Label>Téléphone</Label>
                          <Input placeholder="+212 6XX XXX XXX" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Récapitulatif */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Récapitulatif de votre réservation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Trajet</span>
                    <span className="font-medium">{selectedTrip.route}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Départ</span>
                    <span className="font-medium">{selectedTrip.departure}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Passagers</span>
                    <span className="font-medium">{passengers}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span>{/*selectedTrip.price * passengers*/} DH</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Retour
              </Button>
              <Button onClick={() => setStep(3)} className="flex-1">
                Continuer vers le paiement
              </Button>
            </div>
          </div>
        )}

        {step === 3 && selectedTrip && (
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Paiement sécurisé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Numéro de carte</Label>
                      <Input placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="space-y-2">
                      <Label>Nom sur la carte</Label>
                      <Input placeholder="Nom complet" />
                    </div>
                    <div className="space-y-2">
                      <Label>Date d'expiration</Label>
                      <Input placeholder="MM/AA" />
                    </div>
                    <div className="space-y-2">
                      <Label>CVV</Label>
                      <Input placeholder="123" />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-blue-900">Paiement sécurisé</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      Vos informations de paiement sont protégées par un cryptage SSL 256 bits
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Récapitulatif final */}
            <Card className="shadow-lg border-0 bg-gray-50">
              <CardHeader>
                <CardTitle>Récapitulatif final</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Trajet:</span>
                    <span className="font-medium">{selectedTrip.route}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">Aujourd'hui</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Heure:</span>
                    <span className="font-medium">{selectedTrip.departure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Passagers:</span>
                    <span className="font-medium">{passengers}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xl font-bold text-blue-600">
                    <span>Total à payer:</span>
                    <span>{/*selectedTrip.price * passengers*/} DH</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                Retour
              </Button>
              <Button className="flex-1 bg-green-600 hover:bg-green-700">Confirmer et payer</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
