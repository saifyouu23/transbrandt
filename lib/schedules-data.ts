// Données des horaires basées sur le CSV mis à jour
export interface ScheduleStop {
  city: string
  time: string
}

export interface BusRoute {
  id: string
  name: string
  direction: "aller" | "retour"
  stops: ScheduleStop[]
}

// Données extraites du CSV Transbrandt mis à jour
export const busRoutes: BusRoute[] = [
  // Rabat - Taroudant
  {
    id: "rabat-taroudant-aller",
    name: "Rabat → Taroudant",
    direction: "aller",
    stops: [
      { city: "Rabat", time: "21h00" },
      { city: "Casablanca", time: "22h15" },
      { city: "Settat", time: "23h00" },
      { city: "Benguerir", time: "01h15" },
      { city: "Marrakech", time: "02h15" },
      { city: "Chichaoua", time: "03h30" },
      { city: "Imintanout", time: "04h15" },
      { city: "Agadir", time: "06h45" },
      { city: "Inezgane", time: "07h15" },
      { city: "Taroudant", time: "08h00" },
    ],
  },
  {
    id: "taroudant-rabat-retour",
    name: "Taroudant → Rabat",
    direction: "retour",
    stops: [
      { city: "Taroudant", time: "22h00" },
      { city: "Inezgane", time: "22h45" },
      { city: "Agadir", time: "23h15" },
      { city: "Imintanout", time: "01h15" },
      { city: "Chichaoua", time: "02h30" },
      { city: "Marrakech", time: "03h45" },
      { city: "Benguerir", time: "04h45" },
      { city: "Settat", time: "06h30" },
      { city: "Casablanca", time: "07h45" },
      { city: "Rabat", time: "09h00" },
    ],
  },

  // Salé - Beni Mellal
  {
    id: "sale-beni-mellal-aller",
    name: "Salé → Beni Mellal",
    direction: "aller",
    stops: [
      { city: "Salé", time: "06h15" },
      { city: "Rabat", time: "06h30" },
      { city: "Casablanca", time: "07h35" },
      { city: "Khouribga", time: "09h35" },
      { city: "Beni Mellal", time: "11h20" },
    ],
  },
  {
    id: "beni-mellal-sale-retour",
    name: "Beni Mellal → Salé",
    direction: "retour",
    stops: [
      { city: "Beni Mellal", time: "11h45" },
      { city: "Fkih Ben Salah", time: "12h30" },
      { city: "Khouribga", time: "13h20" },
      { city: "Casablanca", time: "15h30" },
      { city: "Rabat", time: "16h30" },
      { city: "Salé", time: "17h50" },
    ],
  },

  // Rabat - Zidouh
  {
    id: "zidouh-rabat-aller",
    name: "Zidouh → Rabat",
    direction: "aller",
    stops: [
      { city: "Zidouh", time: "04h30" },
      { city: "Souk Sebt", time: "05h00" },
      { city: "Fkih Ben Salah", time: "05h30" },
      { city: "Khouribga", time: "06h30" },
      { city: "Casablanca", time: "08h45" },
      { city: "Rabat", time: "10h00" },
    ],
  },
  {
    id: "rabat-zidouh-retour",
    name: "Rabat → Zidouh",
    direction: "retour",
    stops: [
      { city: "Rabat", time: "12h30" },
      { city: "Casablanca", time: "13h45" },
      { city: "Khouribga", time: "16h00" },
      { city: "Fkih Ben Salah", time: "17h00" },
      { city: "Souk Sebt", time: "17h30" },
      { city: "Zidouh", time: "18h00" },
    ],
  },

  // Tanger - Casablanca
  {
    id: "tanger-casablanca-aller",
    name: "Tanger → Casablanca",
    direction: "aller",
    stops: [
      { city: "Tanger", time: "14h00" },
      { city: "Assilah", time: "14h45" },
      { city: "Larache", time: "15h30" },
      { city: "Kénitra", time: "17h00" },
      { city: "Salé", time: "17h40" },
      { city: "Rabat", time: "18h00" },
      { city: "Casablanca", time: "19h15" },
    ],
  },
  {
    id: "casablanca-tanger-retour",
    name: "Casablanca → Tanger",
    direction: "retour",
    stops: [
      { city: "Casablanca", time: "06h15" },
      { city: "Rabat", time: "07h30" },
      { city: "Salé", time: "07h50" },
      { city: "Kénitra", time: "08h30" },
      { city: "Larache", time: "10h00" },
      { city: "Assilah", time: "10h45" },
      { city: "Tanger", time: "11h30" },
    ],
  },

  // Rabat - Sefrou
  {
    id: "sefrou-rabat-aller",
    name: "Sefrou → Rabat",
    direction: "aller",
    stops: [
      { city: "Sefrou", time: "06h45" },
      { city: "Fès", time: "07h15" },
      { city: "Meknès", time: "08h30" },
      { city: "Khémisset", time: "09h45" },
      { city: "Salé", time: "11h10" },
      { city: "Rabat", time: "11h30" },
    ],
  },
  {
    id: "rabat-sefrou-retour",
    name: "Rabat → Sefrou",
    direction: "retour",
    stops: [
      { city: "Rabat", time: "13h00" },
      { city: "Salé", time: "13h20" },
      { city: "Khémisset", time: "14h45" },
      { city: "Meknès", time: "16h00" },
      { city: "Fès", time: "17h15" },
      { city: "Sefrou", time: "17h45" },
    ],
  },

  // Rabat - Marrakech (10h)
  {
    id: "rabat-marrakech-10h-aller",
    name: "Rabat → Marrakech (10h)",
    direction: "aller",
    stops: [
      { city: "Rabat", time: "10h00" },
      { city: "Casablanca", time: "11h15" },
      { city: "Settat", time: "12h30" },
      { city: "Ben Guerir", time: "14h00" },
      { city: "Marrakech", time: "15h00" },
    ],
  },
  {
    id: "marrakech-rabat-10h-retour",
    name: "Marrakech → Rabat (18h)",
    direction: "retour",
    stops: [
      { city: "Marrakech", time: "18h00" },
      { city: "Ben Guerir", time: "19h00" },
      { city: "Settat", time: "20h00" },
      { city: "Casablanca", time: "21h45" },
      { city: "Rabat", time: "23h00" },
    ],
  },

  // Rabat - Marrakech (13h15)
  {
    id: "marrakech-rabat-13h15-aller",
    name: "Marrakech → Rabat (07h20)",
    direction: "aller",
    stops: [
      { city: "Marrakech", time: "07h20" },
      { city: "Ben Guerir", time: "08h20" },
      { city: "Settat", time: "09h50" },
      { city: "Casablanca", time: "10h50" },
      { city: "Rabat", time: "12h05" },
    ],
  },
  {
    id: "rabat-marrakech-13h15-retour",
    name: "Rabat → Marrakech (13h15)",
    direction: "retour",
    stops: [
      { city: "Rabat", time: "13h15" },
      { city: "Casablanca", time: "14h30" },
      { city: "Settat", time: "15h45" },
      { city: "Ben Guerir", time: "17h15" },
      { city: "Marrakech", time: "18h15" },
    ],
  },

  // Rabat - Essaouira
  {
    id: "rabat-essaouira-aller",
    name: "Rabat → Essaouira",
    direction: "aller",
    stops: [
      { city: "Rabat", time: "10h40" },
      { city: "Casablanca", time: "11h55" },
      { city: "El Jadida", time: "13h55" },
      { city: "Safi", time: "16h25" },
      { city: "Sebt Gzoula", time: "16h55" },
      { city: "Essaouira", time: "18h45" },
    ],
  },
  {
    id: "essaouira-rabat-retour",
    name: "Essaouira → Rabat",
    direction: "retour",
    stops: [
      { city: "Essaouira", time: "00h00" },
      { city: "Sebt Gzoula", time: "02h00" },
      { city: "Safi", time: "02h30" },
      { city: "El Jadida", time: "05h00" },
      { city: "Casablanca", time: "07h00" },
      { city: "Rabat", time: "08h15" },
    ],
  },

  // Tanger - Meknès
  {
    id: "tanger-meknes-aller",
    name: "Tanger → Meknès",
    direction: "aller",
    stops: [
      { city: "Tanger", time: "15h25" },
      { city: "Assilah", time: "16h10" },
      { city: "Larache", time: "16h10" },
      { city: "Ksar Kbir", time: "17h40" },
      { city: "Sk Larbaa", time: "18h25" },
      { city: "Sidi Kacem", time: "19h25" },
      { city: "Meknès", time: "20h10" },
    ],
  },
  {
    id: "meknes-tanger-retour",
    name: "Meknès → Tanger",
    direction: "retour",
    stops: [
      { city: "Meknès", time: "08h30" },
      { city: "Sidi Kacem", time: "09h15" },
      { city: "Sk Larbaa", time: "10h15" },
      { city: "Ksar Kbir", time: "11h00" },
      { city: "Larache", time: "11h45" },
      { city: "Assilah", time: "12h30" },
      { city: "Tanger", time: "13h15" },
    ],
  },

  // Rabat - Zaouiat Cheikh
  {
    id: "zaouiat-cheikh-rabat-aller",
    name: "Zaouiat Cheikh → Rabat",
    direction: "aller",
    stops: [
      { city: "Zaouiat Cheikh", time: "06h00" },
      { city: "Kasba Tadla", time: "06h30" },
      { city: "Bejaad", time: "07h00" },
      { city: "Oued Zem", time: "07h30" },
      { city: "Ezzhiliga", time: "08h45" },
      { city: "Rommani", time: "09h30" },
      { city: "Rabat", time: "11h00" },
    ],
  },
  {
    id: "rabat-zaouiat-cheikh-retour",
    name: "Rabat → Zaouiat Cheikh",
    direction: "retour",
    stops: [
      { city: "Rabat", time: "12h30" },
      { city: "Rommani", time: "14h00" },
      { city: "Ezzhiliga", time: "14h45" },
      { city: "Oued Zem", time: "16h00" },
      { city: "Bejaad", time: "16h30" },
      { city: "Kasba Tadla", time: "17h00" },
      { city: "Zaouiat Cheikh", time: "17h30" },
    ],
  },
]

// Fonction pour obtenir tous les horaires d'une ville
export function getSchedulesForCity(cityName: string) {
  const schedules: Array<{
    route: string
    departure: string
    direction: string
    nextStops: ScheduleStop[]
  }> = []

  busRoutes.forEach((route) => {
    const cityIndex = route.stops.findIndex((stop) => stop.city.toLowerCase() === cityName.toLowerCase())

    if (cityIndex !== -1) {
      const cityStop = route.stops[cityIndex]
      const nextStops = route.stops.slice(cityIndex + 1, cityIndex + 4) // 3 prochains arrêts

      schedules.push({
        route: route.name,
        departure: cityStop.time,
        direction: route.direction,
        nextStops,
      })
    }
  })

  return schedules
}

// Fonction pour rechercher des horaires entre deux villes
export function findRoutesBetweenCities(fromCity: string, toCity: string) {
  const routes: Array<{
    route: string
    departure: string
    arrival: string
    duration: string
    stops: ScheduleStop[]
  }> = []

  busRoutes.forEach((route) => {
    const fromIndex = route.stops.findIndex((stop) => stop.city.toLowerCase() === fromCity.toLowerCase())
    const toIndex = route.stops.findIndex((stop) => stop.city.toLowerCase() === toCity.toLowerCase())

    if (fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex) {
      const fromStop = route.stops[fromIndex]
      const toStop = route.stops[toIndex]
      const routeStops = route.stops.slice(fromIndex, toIndex + 1)

      // Calculer la durée approximative
      const fromTime = parseTime(fromStop.time)
      const toTime = parseTime(toStop.time)
      let durationMinutes = toTime - fromTime

      // Gérer le passage à minuit
      if (durationMinutes < 0) {
        durationMinutes += 24 * 60
      }

      const hours = Math.floor(durationMinutes / 60)
      const minutes = durationMinutes % 60
      const duration = `${hours}h${minutes.toString().padStart(2, "0")}`

      routes.push({
        route: `${fromCity} → ${toCity}`,
        departure: fromStop.time,
        arrival: toStop.time,
        duration,
        stops: routeStops,
      })
    }
  })

  return routes
}

// Fonction utilitaire pour parser l'heure
function parseTime(timeStr: string): number {
  const [hours, minutes] = timeStr.replace("h", ":").split(":").map(Number)
  return hours * 60 + minutes
}

// Obtenir toutes les villes desservies
export function getAllCities(): string[] {
  const cities = new Set<string>()
  busRoutes.forEach((route) => {
    route.stops.forEach((stop) => {
      cities.add(stop.city)
    })
  })
  return Array.from(cities).sort()
}
