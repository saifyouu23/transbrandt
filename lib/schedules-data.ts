// Données des horaires basées sur le CSV
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

// Données extraites du CSV Transbrandt
export const busRoutes: BusRoute[] = [
  {
    id: "rabat-agadir-aller",
    name: "Rabat → Agadir",
    direction: "aller",
    stops: [
      { city: "Rabat", time: "12h30" },
      { city: "Casablanca", time: "14h00" },
      { city: "Settat", time: "14h45" },
      { city: "Benguerir", time: "16h00" },
      { city: "Marrakech", time: "16h30" },
      { city: "Chichaoua", time: "17h00" },
      { city: "Imintanout", time: "17h30" },
      { city: "Agadir", time: "19h00" },
    ],
  },
  {
    id: "agadir-rabat-retour",
    name: "Agadir → Rabat",
    direction: "retour",
    stops: [
      { city: "Agadir", time: "06h30" },
      { city: "Inezgane", time: "07h45" },
      { city: "Taroudant", time: "09h00" },
      { city: "Imintanout", time: "10h30" },
      { city: "Chichaoua", time: "11h00" },
      { city: "Marrakech", time: "11h30" },
      { city: "Benguerir", time: "12h00" },
      { city: "Settat", time: "13h15" },
      { city: "Casablanca", time: "14h00" },
      { city: "Rabat", time: "15h30" },
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
      const durationMinutes = toTime - fromTime
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
