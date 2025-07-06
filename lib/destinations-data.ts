export interface Attraction {
  name: string
  description: string
  category: string
  image: string
}

export interface Cuisine {
  name: string
  description: string
}

export interface Tradition {
  name: string
  description: string
}

export interface Route {
  from: string
  to: string
  frequency: string
}

export interface Climate {
  season: string
  temperature: string
}

export interface Tourism {
  phone: string
  email: string
  address: string
}

export interface DestinationData {
  id: string
  name: string
  description: string
  overview: string
  history: string
  region: string
  rating: number
  population: string
  languages: string[]
  bestTime: string
  heroImage: string
  attractions: Attraction[]
  cuisine: Cuisine[]
  traditions: Tradition[]
  routes: Route[]
  climate: Climate[]
  tourism: Tourism
}

export const destinationsData: DestinationData[] = [
  {
    id: "marrakech",
    name: "Marrakech",
    description: "La ville rouge aux mille et une merveilles",
    overview:
      "Marrakech, surnommée la 'Ville Rouge' ou la 'Perle du Sud', est l'une des quatre villes impériales du Maroc. Cette métropole fascinante mélange harmonieusement tradition ancestrale et modernité, offrant une expérience unique aux visiteurs du monde entier.",
    history:
      "Fondée en 1070 par les Almoravides, Marrakech a été la capitale de plusieurs dynasties marocaines. Son patrimoine architectural exceptionnel témoigne de cette riche histoire, avec des monuments emblématiques comme la Koutoubia, les Tombeaux Saadiens et le Palais de la Bahia.",
    region: "Marrakech-Safi",
    rating: 4.8,
    population: "928 850 habitants",
    languages: ["Arabe", "Berbère", "Français"],
    bestTime: "Octobre à Avril",
    heroImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marrakesh.jpg-Ct8fWvfXTNlkAXLQb1nwQfceeawj0L.jpeg",
    attractions: [
      {
        name: "Jemaa el-Fnaa",
        description:
          "La place centrale mythique, cœur battant de Marrakech, animée jour et nuit par des conteurs, musiciens et artisans.",
        category: "Place historique",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Mosquée Koutoubia",
        description:
          "Le minaret emblématique de Marrakech, chef-d'œuvre de l'art almohade du XIIe siècle, visible de toute la ville.",
        category: "Monument religieux",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Palais de la Bahia",
        description: "Somptueux palais du XIXe siècle aux jardins luxuriants et aux salons richement décorés.",
        category: "Palais historique",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Jardins Majorelle",
        description:
          "Oasis de verdure créée par Jacques Majorelle, rachetée par Yves Saint Laurent, aux couleurs éclatantes.",
        category: "Jardin botanique",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    cuisine: [
      {
        name: "Tajine aux pruneaux",
        description: "Plat traditionnel mijoté avec agneau, pruneaux et épices, spécialité de la région",
      },
      {
        name: "Pastilla au pigeon",
        description: "Feuilleté sucré-salé garni de pigeon, amandes et cannelle, délice de la cuisine marocaine",
      },
      {
        name: "Couscous du vendredi",
        description: "Couscous aux sept légumes, tradition familiale servie le jour saint",
      },
      {
        name: "Thé à la menthe",
        description: "Boisson emblématique servie dans des verres traditionnels, symbole d'hospitalité",
      },
    ],
    traditions: [
      {
        name: "Fantasia",
        description: "Spectacle équestre traditionnel avec cavaliers en costume d'époque",
      },
      {
        name: "Gnawa",
        description: "Musique spirituelle afro-marocaine, patrimoine culturel immatériel",
      },
      {
        name: "Artisanat des souks",
        description: "Savoir-faire ancestral : maroquinerie, poterie, tissage et bijouterie",
      },
      {
        name: "Hammam traditionnel",
        description: "Rituel de purification dans les bains publics centenaires",
      },
    ],
    routes: [
      { from: "Rabat", to: "Marrakech", frequency: "3x/jour" },
      { from: "Casablanca", to: "Marrakech", frequency: "5x/jour" },
      { from: "Agadir", to: "Marrakech", frequency: "2x/jour" },
    ],
    climate: [
      { season: "Printemps", temperature: "20-25°C" },
      { season: "Été", temperature: "35-40°C" },
      { season: "Automne", temperature: "22-28°C" },
      { season: "Hiver", temperature: "15-20°C" },
    ],
    tourism: {
      phone: "+212 524 43 61 31",
      email: "info.marrakech@onmt.ma",
      address: "Place Abdel Moumen Ben Ali, Guéliz, Marrakech",
    },
  },
  {
    id: "casablanca",
    name: "Casablanca",
    description: "Capitale économique et métropole moderne du Maroc",
    overview:
      "Casablanca, la plus grande ville du Maroc, est le poumon économique du royaume. Cette métropole cosmopolite allie modernité architecturale et patrimoine historique, incarnant parfaitement le Maroc contemporain en mouvement.",
    history:
      "Ancienne Anfa berbère, la ville fut reconstruite par les Portugais au XVe siècle sous le nom de Casa Branca. Développée sous le Protectorat français, elle est devenue le centre économique et industriel du Maroc moderne.",
    region: "Casablanca-Settat",
    rating: 4.7,
    population: "3 359 818 habitants",
    languages: ["Arabe", "Français", "Anglais"],
    bestTime: "Toute l'année",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casablanca-tQaGGJbIwJe2uQkrg5LnEByCKC25iS.webp",
    attractions: [
      {
        name: "Mosquée Hassan II",
        description: "Troisième plus grande mosquée au monde, chef-d'œuvre architectural face à l'océan Atlantique.",
        category: "Monument religieux",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Quartier des Habous",
        description: "Médina moderne aux ruelles pittoresques, mélange d'architecture traditionnelle et contemporaine.",
        category: "Quartier historique",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Corniche Ain Diab",
        description: "Front de mer moderne avec plages, restaurants et clubs, lieu de détente des Casablancais.",
        category: "Front de mer",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Villa des Arts",
        description: "Centre culturel dédié à l'art contemporain marocain et international.",
        category: "Musée",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    cuisine: [
      {
        name: "Poisson grillé",
        description: "Spécialités de la mer fraîchement pêchée, grillée aux épices locales",
      },
      {
        name: "Mahshi",
        description: "Légumes farcis à la viande et au riz, influence du Moyen-Orient",
      },
      {
        name: "Bissara",
        description: "Soupe de fèves traditionnelle, petit-déjeuner populaire des Casablancais",
      },
      {
        name: "Pâtisseries françaises",
        description: "Héritage colonial avec croissants et pains au chocolat dans les boulangeries",
      },
    ],
    traditions: [
      {
        name: "Architecture Art Déco",
        description: "Patrimoine architectural unique du Protectorat français",
      },
      {
        name: "Café culture",
        description: "Tradition des cafés urbains, lieux de rencontre et de débat",
      },
      {
        name: "Festival de Casablanca",
        description: "Événements culturels et artistiques internationaux",
      },
      {
        name: "Business moderne",
        description: "Centre d'affaires du Maghreb, hub économique régional",
      },
    ],
    routes: [
      { from: "Rabat", to: "Casablanca", frequency: "6x/jour" },
      { from: "Marrakech", to: "Casablanca", frequency: "5x/jour" },
      { from: "Fès", to: "Casablanca", frequency: "4x/jour" },
    ],
    climate: [
      { season: "Printemps", temperature: "18-22°C" },
      { season: "Été", temperature: "25-28°C" },
      { season: "Automne", temperature: "20-24°C" },
      { season: "Hiver", temperature: "12-18°C" },
    ],
    tourism: {
      phone: "+212 522 27 95 33",
      email: "info.casablanca@onmt.ma",
      address: "55 Rue Omar Slaoui, Casablanca",
    },
  },
  {
    id: "fès",
    name: "Fès",
    description: "Capitale spirituelle et culturelle du Maroc",
    overview:
      "Fès, l'une des quatre villes impériales, est considérée comme la capitale spirituelle et intellectuelle du Maroc. Sa médina, Fès el-Bali, est l'une des plus grandes zones piétonnes au monde et abrite la plus ancienne université encore en activité.",
    history:
      "Fondée en 789 par Idriss Ier, Fès a été pendant des siècles un centre majeur de l'Islam occidental. La ville abrite l'université Al Quaraouiyine, fondée en 859, considérée comme la plus ancienne université du monde encore en fonctionnement.",
    region: "Fès-Meknès",
    rating: 4.6,
    population: "1 112 072 habitants",
    languages: ["Arabe", "Berbère", "Français"],
    bestTime: "Mars à Mai, Septembre à Novembre",
    heroImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fe%CC%81s.jpg-xoU1yOODGYmqcWzKnaAPUr7MzRMVL8.jpeg",
    attractions: [
      {
        name: "Médina de Fès el-Bali",
        description: "Plus grande zone piétonne au monde, labyrinthe de ruelles médiévales classé UNESCO.",
        category: "Site UNESCO",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Université Al Quaraouiyine",
        description: "Plus ancienne université du monde encore en activité, fondée en 859.",
        category: "Monument historique",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Tanneries de Chouara",
        description: "Tanneries traditionnelles millénaires, spectacle coloré du travail du cuir ancestral.",
        category: "Artisanat traditionnel",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Palais Royal",
        description: "Magnifique palais aux portes dorées, symbole de l'architecture marocaine raffinée.",
        category: "Palais royal",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    cuisine: [
      {
        name: "Pastilla fassia",
        description: "Version authentique de la pastilla, spécialité sucrée-salée de Fès",
      },
      {
        name: "Rfissa",
        description: "Plat traditionnel aux vermicelles, poulet et lentilles, comfort food local",
      },
      {
        name: "Sellou",
        description: "Mélange énergétique d'amandes, sésame et farine grillée",
      },
      {
        name: "Cornes de gazelle",
        description: "Pâtisseries en forme de croissant fourrées à la pâte d'amande",
      },
    ],
    traditions: [
      {
        name: "Artisanat du cuir",
        description: "Savoir-faire millénaire des maîtres tanneurs de Fès",
      },
      {
        name: "Calligraphie arabe",
        description: "Art de l'écriture sacrée, tradition des copistes coraniques",
      },
      {
        name: "Musique andalouse",
        description: "Héritage musical d'Al-Andalus, conservatoire vivant",
      },
      {
        name: "Enseignement religieux",
        description: "Centre d'études islamiques et de théologie depuis 12 siècles",
      },
    ],
    routes: [
      { from: "Rabat", to: "Fès", frequency: "4x/jour" },
      { from: "Casablanca", to: "Fès", frequency: "4x/jour" },
      { from: "Meknès", to: "Fès", frequency: "8x/jour" },
    ],
    climate: [
      { season: "Printemps", temperature: "18-25°C" },
      { season: "Été", temperature: "30-38°C" },
      { season: "Automne", temperature: "20-28°C" },
      { season: "Hiver", temperature: "8-16°C" },
    ],
    tourism: {
      phone: "+212 535 62 34 60",
      email: "info.fes@onmt.ma",
      address: "Place Mohammed V, Fès",
    },
  },
  {
    id: "agadir",
    name: "Agadir",
    description: "Perle du Sud atlantique et station balnéaire moderne",
    overview:
      "Agadir, principale station balnéaire du Maroc, séduit par ses plages de sable fin, son climat ensoleillé toute l'année et son atmosphère détendue. Reconstruite après le séisme de 1960, la ville moderne offre un parfait équilibre entre détente et découverte culturelle.",
    history:
      "Ancien port berbère, Agadir fut fortifiée par les Portugais au XVIe siècle. Détruite par un séisme en 1960, la ville fut entièrement reconstruite selon des normes modernes, devenant la première destination touristique balnéaire du Maroc.",
    region: "Souss-Massa",
    rating: 4.5,
    population: "421 844 habitants",
    languages: ["Arabe", "Berbère", "Français", "Anglais"],
    bestTime: "Toute l'année",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agadir-m6XpJ1MKxBCJZu4Qttl7BgAHx5iPHb.avif",
    attractions: [
      {
        name: "Plage d'Agadir",
        description: "10 km de sable fin doré, parfaite pour la baignade et les sports nautiques.",
        category: "Plage",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Kasbah d'Agadir Oufella",
        description: "Ruines historiques offrant un panorama exceptionnel sur la baie d'Agadir.",
        category: "Site historique",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Souk El Had",
        description: "Plus grand marché de la région, authentique souk berbère aux mille couleurs.",
        category: "Marché traditionnel",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Vallée des Oiseaux",
        description: "Parc zoologique et botanique au cœur de la ville, oasis de verdure.",
        category: "Parc naturel",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    cuisine: [
      {
        name: "Poissons grillés",
        description: "Sardines, daurades et soles fraîches grillées au port d'Agadir",
      },
      {
        name: "Tajine aux fruits de mer",
        description: "Spécialité locale mêlant tradition berbère et produits de l'océan",
      },
      {
        name: "Amlou",
        description: "Pâte d'amandes, miel et huile d'argan, trésor culinaire du Souss",
      },
      {
        name: "Thé à l'absinthe",
        description: "Variante locale du thé à la menthe avec l'absinthe sauvage",
      },
    ],
    traditions: [
      {
        name: "Culture berbère amazighe",
        description: "Préservation des traditions du peuple amazigh du Souss",
      },
      {
        name: "Huile d'argan",
        description: "Production traditionnelle de l'or liquide marocain",
      },
      {
        name: "Pêche traditionnelle",
        description: "Techniques ancestrales des pêcheurs de l'Atlantique",
      },
      {
        name: "Tapis berbères",
        description: "Tissage traditionnel des femmes des montagnes de l'Atlas",
      },
    ],
    routes: [
      { from: "Marrakech", to: "Agadir", frequency: "3x/jour" },
      { from: "Casablanca", to: "Agadir", frequency: "2x/jour" },
      { from: "Essaouira", to: "Agadir", frequency: "2x/jour" },
    ],
    climate: [
      { season: "Printemps", temperature: "20-24°C" },
      { season: "Été", temperature: "26-30°C" },
      { season: "Automne", temperature: "22-26°C" },
      { season: "Hiver", temperature: "16-20°C" },
    ],
    tourism: {
      phone: "+212 528 84 63 77",
      email: "info.agadir@onmt.ma",
      address: "Immeuble Igoudar, Avenue Mohammed V, Agadir",
    },
  },
  {
    id: "tanger",
    name: "Tanger",
    description: "Porte de l'Afrique et carrefour des civilisations",
    overview:
      "Tanger, située au carrefour de l'Europe et de l'Afrique, entre Méditerranée et Atlantique, fascine par son histoire cosmopolite et son atmosphère unique. Cette ville mythique a inspiré de nombreux artistes et écrivains du monde entier.",
    history:
      "Fondée par les Phéniciens, Tanger a été successivement romaine, arabe, portugaise et internationale. Son statut de zone internationale de 1923 à 1956 en a fait un lieu de rencontre unique entre les cultures, attirant espions, artistes et aventuriers.",
    region: "Tanger-Tétouan-Al Hoceïma",
    rating: 4.4,
    population: "947 952 habitants",
    languages: ["Arabe", "Berbère", "Français", "Espagnol", "Anglais"],
    bestTime: "Avril à Octobre",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tanger.jpg-ywjPrcX88wKG2VgPSsBm1UNKh91FdZ.jpeg",
    attractions: [
      {
        name: "Médina de Tanger",
        description: "Labyrinthe de ruelles blanches et bleues descendant vers le port, mélange unique d'influences.",
        category: "Médina historique",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Café Hafa",
        description: "Café légendaire sur les falaises, lieu de rencontre des intellectuels et artistes.",
        category: "Café historique",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Grottes d'Hercule",
        description: "Grottes mythiques face à l'Atlantique, ouverture naturelle vers l'océan.",
        category: "Site naturel",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Kasbah de Tanger",
        description: "Ancienne citadelle dominant le détroit, musée de l'art marocain et andalou.",
        category: "Forteresse historique",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    cuisine: [
      {
        name: "Poisson à la chermoula",
        description: "Marinade aux herbes fraîches, spécialité des pêcheurs tangérois",
      },
      {
        name: "Pastilla au poisson",
        description: "Version maritime de la pastilla, innovation culinaire locale",
      },
      {
        name: "Thé à la menthe nanah",
        description: "Thé parfumé à la menthe fraîche des jardins de Tanger",
      },
      {
        name: "Chebakia",
        description: "Pâtisserie en forme de rose, trempée dans le miel et les graines de sésame",
      },
    ],
    traditions: [
      {
        name: "Musique chaâbi",
        description: "Musique populaire urbaine, mélange d'influences méditerranéennes",
      },
      {
        name: "Littérature internationale",
        description: "Héritage des écrivains de la Beat Generation et orientalistes",
      },
      {
        name: "Art contemporain",
        description: "Scène artistique dynamique, galeries et ateliers d'artistes",
      },
      {
        name: "Cosmopolitisme",
        description: "Tradition d'ouverture et de tolérance, carrefour des cultures",
      },
    ],
    routes: [
      { from: "Rabat", to: "Tanger", frequency: "5x/jour" },
      { from: "Casablanca", to: "Tanger", frequency: "4x/jour" },
      { from: "Fès", to: "Tanger", frequency: "3x/jour" },
    ],
    climate: [
      { season: "Printemps", temperature: "16-22°C" },
      { season: "Été", temperature: "24-28°C" },
      { season: "Automne", temperature: "18-24°C" },
      { season: "Hiver", temperature: "10-16°C" },
    ],
    tourism: {
      phone: "+212 539 94 80 50",
      email: "info.tanger@onmt.ma",
      address: "29 Boulevard Pasteur, Tanger",
    },
  },
  {
    id: "oujda",
    name: "Oujda",
    description: "Ville frontalière dynamique et porte de l'Orient",
    overview:
      "Oujda, située à la frontière algérienne, est une ville en pleine expansion qui mélange tradition orientale et modernité. Cette métropole de l'est marocain est réputée pour sa musique raï, sa gastronomie raffinée et son hospitalité légendaire.",
    history:
      "Fondée en 994 par Ziri ibn Atiyya, chef de la tribu berbère des Maghraoua, Oujda a longtemps été un carrefour commercial entre le Maroc et l'Algérie. Son histoire mouvementée en fait un témoin privilégié des échanges culturels maghrébins.",
    region: "Oriental",
    rating: 4.3,
    population: "494 252 habitants",
    languages: ["Arabe", "Berbère", "Français"],
    bestTime: "Mars à Mai, Octobre à Décembre",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oujda.jpg-DPwIz8naQMCGU9SiXNRDpNKMWZU8La.jpeg",
    attractions: [
      {
        name: "Médina d'Oujda",
        description: "Centre historique aux ruelles étroites, témoignage de l'architecture traditionnelle orientale.",
        category: "Médina historique",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Parc Lalla Aicha",
        description: "Poumon vert de la ville, lieu de détente familial avec lac artificiel.",
        category: "Parc urbain",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Grande Mosquée",
        description: "Monument religieux central, architecture almohade restaurée.",
        category: "Monument religieux",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Sidi Yahya Oasis",
        description: "Oasis proche de la ville, palmeraie traditionnelle et sources naturelles.",
        category: "Oasis naturelle",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    cuisine: [
      {
        name: "Méchoui oriental",
        description: "Agneau rôti aux épices orientales, spécialité des fêtes familiales",
      },
      {
        name: "Chorba oujdie",
        description: "Soupe traditionnelle aux légumes et viande, réconfortante",
      },
      {
        name: "Makroudh",
        description: "Pâtisserie aux dattes et semoule, influence orientale",
      },
      {
        name: "Thé aux pignons",
        description: "Variante locale du thé à la menthe avec des pignons de pin",
      },
    ],
    traditions: [
      {
        name: "Musique raï",
        description: "Berceau marocain du raï, musique populaire maghrébine",
      },
      {
        name: "Artisanat du cuivre",
        description: "Tradition des dinandiers, objets en cuivre martelé",
      },
      {
        name: "Poésie melhoun",
        description: "Poésie populaire en dialecte arabe, tradition orale vivante",
      },
      {
        name: "Hospitalité orientale",
        description: "Tradition d'accueil chaleureuse, influence bédouine",
      },
    ],
    routes: [
      { from: "Fès", to: "Oujda", frequency: "3x/jour" },
      { from: "Rabat", to: "Oujda", frequency: "2x/jour" },
      { from: "Casablanca", to: "Oujda", frequency: "2x/jour" },
    ],
    climate: [
      { season: "Printemps", temperature: "18-26°C" },
      { season: "Été", temperature: "32-40°C" },
      { season: "Automne", temperature: "20-28°C" },
      { season: "Hiver", temperature: "8-16°C" },
    ],
    tourism: {
      phone: "+212 536 68 56 24",
      email: "info.oujda@onmt.ma",
      address: "Place du 16 Août, Oujda",
    },
  },
  {
    id: "essaouira",
    name: "Essaouira",
    description: "Cité des vents et perle de l'Atlantique",
    overview:
      "Essaouira, ancienne Mogador, est une ville côtière fortifiée inscrite au patrimoine mondial de l'UNESCO. Cette perle de l'Atlantique séduit par ses remparts, son port de pêche authentique et ses plages balayées par les alizés.",
    history:
      "Fondée au XVIIIe siècle par le sultan Sidi Mohammed ben Abdallah, Essaouira fut conçue par l'architecte français Théodore Cornut. Son port était un point de passage obligé pour le commerce transsaharien.",
    region: "Marrakech-Safi",
    rating: 4.6,
    population: "77 966 habitants",
    languages: ["Arabe", "Berbère", "Français"],
    bestTime: "Avril à Octobre",
    heroImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Essaouira.jpg-bX5NQoG0ZDAwbiEMO1ZDOv9oEQqyQO.jpeg",
    attractions: [
      {
        name: "Médina d'Essaouira",
        description:
          "Ville fortifiée du XVIIIe siècle, exemple unique d'urbanisme militaire européen en Afrique du Nord.",
        category: "Site UNESCO",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Port d'Essaouira",
        description: "Port de pêche traditionnel avec ses bateaux bleus et ses mouettes, atmosphère authentique.",
        category: "Port historique",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Plage d'Essaouira",
        description: "Immense plage de sable fin, paradis des véliplanchistes et kitesurfeurs.",
        category: "Plage",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Îles Purpuraires",
        description: "Archipel face à Essaouira, réserve naturelle et site archéologique phénicien.",
        category: "Réserve naturelle",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    cuisine: [
      {
        name: "Poissons grillés du port",
        description: "Sardines, daurades et soles fraîchement pêchées, grillées sur place",
      },
      {
        name: "Tajine de poisson",
        description: "Spécialité locale aux légumes et épices, influence berbère",
      },
      {
        name: "Huile d'argan",
        description: "Or liquide produit par les coopératives féminines locales",
      },
      {
        name: "Pâtisseries aux amandes",
        description: "Douceurs traditionnelles aux amandes d'Essaouira",
      },
    ],
    traditions: [
      {
        name: "Festival Gnawa",
        description: "Festival international de musique gnawa et musiques du monde",
      },
      {
        name: "Marqueterie de thuya",
        description: "Artisanat du bois de thuya, spécialité d'Essaouira",
      },
      {
        name: "Pêche traditionnelle",
        description: "Techniques ancestrales des pêcheurs de l'Atlantique",
      },
      {
        name: "Coopératives d'argan",
        description: "Travail collectif des femmes berbères pour l'huile d'argan",
      },
    ],
    routes: [
      { from: "Rabat", to: "Essaouira", frequency: "1x/jour" },
      { from: "Casablanca", to: "Essaouira", frequency: "1x/jour" },
      { from: "Marrakech", to: "Essaouira", frequency: "2x/jour" },
    ],
    climate: [
      { season: "Printemps", temperature: "18-22°C" },
      { season: "Été", temperature: "22-26°C" },
      { season: "Automne", temperature: "20-24°C" },
      { season: "Hiver", temperature: "14-18°C" },
    ],
    tourism: {
      phone: "+212 524 78 35 32",
      email: "info.essaouira@onmt.ma",
      address: "10 Rue du Caire, Essaouira",
    },
  },
  {
    id: "meknes",
    name: "Meknès",
    description: "Ville impériale aux monuments grandioses",
    overview:
      "Meknès, l'une des quatre villes impériales du Maroc, témoigne de la grandeur du règne de Moulay Ismaïl. Cette cité historique allie patrimoine architectural exceptionnel et atmosphère authentique, loin de l'agitation touristique.",
    history:
      "Fondée au Xe siècle par les Berbères Meknassa, Meknès connut son apogée sous le règne du sultan alaouite Moulay Ismaïl (1672-1727) qui en fit sa capitale et la dota de monuments grandioses.",
    region: "Fès-Meknès",
    rating: 4.5,
    population: "632 079 habitants",
    languages: ["Arabe", "Berbère", "Français"],
    bestTime: "Mars à Mai, Septembre à Novembre",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meknes.jpg-X0rGK6xYomLKc8kCRNKNMSoou30M0c.jpeg",
    attractions: [
      {
        name: "Bab Mansour",
        description: "Porte monumentale, chef-d'œuvre de l'art décoratif marocain du XVIIIe siècle.",
        category: "Monument historique",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Mausolée Moulay Ismaïl",
        description: "Tombeau du sultan bâtisseur, exemple de l'architecture religieuse marocaine.",
        category: "Mausolée",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Médina de Meknès",
        description: "Centre historique classé UNESCO, moins touristique que Fès mais tout aussi authentique.",
        category: "Site UNESCO",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Volubilis",
        description: "Site archéologique romain proche de Meknès, mosaïques exceptionnelles.",
        category: "Site archéologique",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    cuisine: [
      {
        name: "Pastilla de Meknès",
        description: "Version locale de la pastilla, aux pigeons et épices raffinées",
      },
      {
        name: "Olives de Meknès",
        description: "Olives réputées de la région, préparées selon des recettes ancestrales",
      },
      {
        name: "Vin de Meknès",
        description: "Vins produits dans les vignobles environnants, tradition viticole",
      },
      {
        name: "Miel de montagne",
        description: "Miel des ruches du Moyen Atlas, saveurs florales uniques",
      },
    ],
    traditions: [
      {
        name: "Architecture impériale",
        description: "Style architectural unique de l'époque de Moulay Ismaïl",
      },
      {
        name: "Artisanat du fer forgé",
        description: "Tradition des forgerons, grilles et objets décoratifs",
      },
      {
        name: "Viticulture",
        description: "Tradition viticole dans les collines environnantes",
      },
      {
        name: "Moussem de Moulay Ismaïl",
        description: "Pèlerinage annuel au mausolée du sultan",
      },
    ],
    routes: [
      { from: "Rabat", to: "Meknès", frequency: "3x/jour" },
      { from: "Fès", to: "Meknès", frequency: "6x/jour" },
      { from: "Tanger", to: "Meknès", frequency: "2x/jour" },
    ],
    climate: [
      { season: "Printemps", temperature: "16-24°C" },
      { season: "Été", temperature: "28-36°C" },
      { season: "Automne", temperature: "18-26°C" },
      { season: "Hiver", temperature: "6-14°C" },
    ],
    tourism: {
      phone: "+212 535 52 44 26",
      email: "info.meknes@onmt.ma",
      address: "27 Place Administrative, Meknès",
    },
  },
]

export function getDestinationData(cityId: string): DestinationData | null {
  return destinationsData.find((dest) => dest.id === cityId.toLowerCase()) || null
}

export function getAllDestinations(): DestinationData[] {
  return destinationsData
}
