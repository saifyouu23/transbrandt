// Script pour récupérer et analyser les horaires depuis le CSV
const csvUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horaires%20bus%20transbrandt%20-%20Feuille%201-MgRggTyLoDS4KmS0TF61mbETqxs0I3.csv"

async function fetchSchedules() {
  try {
    console.log("Récupération des horaires depuis le CSV...")
    const response = await fetch(csvUrl)
    const csvText = await response.text()

    console.log("Contenu CSV brut:")
    console.log(csvText)

    // Parser le CSV
    const lines = csvText.trim().split("\n")
    const headers = lines[0].split(",").map((h) => h.trim())

    console.log("En-têtes:", headers)

    const schedules = []
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",").map((v) => v.trim())
      const schedule = {}

      headers.forEach((header, index) => {
        schedule[header] = values[index] || ""
      })

      schedules.push(schedule)
    }

    console.log("Horaires parsés:")
    console.log(JSON.stringify(schedules, null, 2))

    // Analyser les routes
    console.log("\n=== ANALYSE DES ROUTES ===")
    schedules.forEach((schedule, index) => {
      console.log(`Ligne ${index + 1}:`)
      Object.entries(schedule).forEach(([city, time]) => {
        if (time && time !== "") {
          console.log(`  ${city}: ${time}`)
        }
      })
      console.log("---")
    })

    return schedules
  } catch (error) {
    console.error("Erreur lors de la récupération des horaires:", error)
  }
}

// Exécuter le script
fetchSchedules()
