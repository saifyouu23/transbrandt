"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Package, Calculator, Truck, Shield, Clock } from "lucide-react"

export default function ColisPage() {
  const [weight, setWeight] = useState("")
  const [dimensions, setDimensions] = useState({ length: "", width: "", height: "" })
  const [estimatedPrice, setEstimatedPrice] = useState(0)

  const services = [
    {
      icon: Package,
      title: "Colis standard",
      description: "Livraison en 2-3 jours ouvrables",
      features: ["Jusqu'à 30kg", "Suivi en ligne", "Assurance incluse"],
    },
    {
      icon: Truck,
      title: "Colis express",
      description: "Livraison le lendemain",
      features: ["Jusqu'à 20kg", "Livraison rapide", "Suivi temps réel"],
    },
    {
      icon: Shield,
      title: "Colis fragile",
      description: "Protection renforcée",
      features: ["Emballage spécial", "Manipulation délicate", "Assurance étendue"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Envoi de colis</h1>
          <p className="text-lg text-gray-600">Envoyez vos colis en toute sécurité à travers le Maroc</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire d'envoi */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Informations du colis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Ville d'expédition</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une ville" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rabat">Rabat</SelectItem>
                        <SelectItem value="casablanca">Casablanca</SelectItem>
                        <SelectItem value="fes">Fès</SelectItem>
                        <SelectItem value="marrakech">Marrakech</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Ville de destination</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une ville" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rabat">Rabat</SelectItem>
                        <SelectItem value="casablanca">Casablanca</SelectItem>
                        <SelectItem value="fes">Fès</SelectItem>
                        <SelectItem value="marrakech">Marrakech</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Poids (kg)</Label>
                    <Input type="number" placeholder="0.0" value={weight} onChange={(e) => setWeight(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Type de service</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="express">Express</SelectItem>
                        <SelectItem value="fragile">Fragile</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">Dimensions (cm)</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <Input
                      placeholder="Longueur"
                      value={dimensions.length}
                      onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                    />
                    <Input
                      placeholder="Largeur"
                      value={dimensions.width}
                      onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                    />
                    <Input
                      placeholder="Hauteur"
                      value={dimensions.height}
                      onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Description du contenu</Label>
                  <Textarea placeholder="Décrivez brièvement le contenu de votre colis..." />
                </div>

                <Button className="w-full">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculer le prix
                </Button>
              </CardContent>
            </Card>

            {/* Informations expéditeur/destinataire */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-lg">Expéditeur</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Nom complet</Label>
                    <Input placeholder="Nom et prénom" />
                  </div>
                  <div className="space-y-2">
                    <Label>Téléphone</Label>
                    <Input placeholder="+212 6XX XXX XXX" />
                  </div>
                  <div className="space-y-2">
                    <Label>Adresse</Label>
                    <Textarea placeholder="Adresse complète" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-lg">Destinataire</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Nom complet</Label>
                    <Input placeholder="Nom et prénom" />
                  </div>
                  <div className="space-y-2">
                    <Label>Téléphone</Label>
                    <Input placeholder="+212 6XX XXX XXX" />
                  </div>
                  <div className="space-y-2">
                    <Label>Adresse</Label>
                    <Textarea placeholder="Adresse complète" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="w-full">
              Confirmer l'envoi
            </Button>
          </div>

          {/* Services et informations */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle>Nos services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <service.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-blue-50 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Suivi de colis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-700 mb-4">
                  Suivez votre colis en temps réel avec notre système de tracking
                </p>
                <div className="space-y-2">
                  <Label>Numéro de suivi</Label>
                  <div className="flex gap-2">
                    <Input placeholder="TB123456789" />
                    <Button variant="outline" size="sm">
                      Suivre
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5" />
                  Délais de livraison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Standard</span>
                    <Badge variant="outline">2-3 jours</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Express</span>
                    <Badge variant="outline">24h</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fragile</span>
                    <Badge variant="outline">2-4 jours</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
