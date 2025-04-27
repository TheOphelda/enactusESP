import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'men-nan',
    title: 'Men Nan',
    shortDescription: 'Projet d\'autonomisation des femmes à travers la transformation de produits locaux',
    fullDescription: 'Men Nan est un projet qui vise à autonomiser les femmes à travers la transformation et la commercialisation de produits locaux. Le projet contribue à la réduction de la pauvreté et à l\'autonomisation économique des femmes.',
    image: '/femmes maeva.jpg',
    goals: [
      'Autonomisation économique des femmes',
      'Formation en transformation de produits locaux',
      'Création de revenus durables',
      'Développement de compétences entrepreneuriales'
    ],
    impact: 'Le projet a permis de former plus de 500 femmes et de créer 50 emplois directs.',
    team: [
      {
        name: 'Fatou Diop',
        role: 'Chef de Projet'
      },
      {
        name: 'Aminata Sow',
        role: 'Responsable Formation'
      },
      {
        name: 'Omar Fall',
        role: 'Coordinateur Terrain'
      }
    ],
    sdgs: [
      { number: 1, title: 'Pas de pauvreté', color: '#E5243B' },
      { number: 5, title: 'Égalité entre les sexes', color: '#FF3A21' },
      { number: 8, title: 'Travail décent et croissance économique', color: '#A21942' }
    ]
  },
  {
    id: 'shery',
    title: 'Shery',
    shortDescription: 'Solutions innovantes pour l\'accès à l\'eau potable',
    fullDescription: 'Shery développe des solutions innovantes pour améliorer l\'accès à l\'eau potable dans les zones rurales. Le projet combine technologie et formation pour assurer un accès durable à l\'eau.',
    image: '/African.png',
    goals: [
      'Installation de systèmes de filtration d\'eau',
      'Formation des communautés locales',
      'Maintenance des installations',
      'Sensibilisation à l\'hygiène'
    ],
    impact: 'Plus de 10 000 personnes ont désormais accès à l\'eau potable grâce au projet.',
    team: [
      {
        name: 'Moussa Diallo',
        role: 'Chef de Projet'
      },
      {
        name: 'Aïssatou Ba',
        role: 'Ingénieure Eau'
      },
      {
        name: 'Ibrahima Ndiaye',
        role: 'Formateur'
      }
    ],
    sdgs: [
      { number: 3, title: 'Bonne santé et bien-être', color: '#4C9F38' },
      { number: 6, title: 'Eau propre et assainissement', color: '#26BDE2' },
      { number: 10, title: 'Inégalités réduites', color: '#DD1367' }
    ]
  },
  {
    id: 'aquatus',
    title: 'Aquatus',
    shortDescription: 'Protection des écosystèmes marins et gestion des déchets plastiques',
    fullDescription: 'Aquatus travaille à la protection des écosystèmes marins à travers la gestion des déchets plastiques et la sensibilisation environnementale.',
    image: '/gg.png',
    goals: [
      'Collecte et recyclage des déchets plastiques',
      'Sensibilisation environnementale',
      'Formation aux pratiques durables',
      'Protection des écosystèmes marins'
    ],
    impact: 'Plus de 5 tonnes de déchets plastiques collectés et recyclés.',
    team: [
      {
        name: 'Seynabou Diouf',
        role: 'Coordinatrice'
      },
      {
        name: 'Mamadou Seck',
        role: 'Responsable Environnement'
      },
      {
        name: 'Rokhaya Ndour',
        role: 'Chargée de Sensibilisation'
      }
    ],
    sdgs: [
      { number: 12, title: 'Consommation et production responsables', color: '#BF8B2E' },
      { number: 14, title: 'Vie aquatique', color: '#0A97D9' },
      { number: 15, title: 'Vie terrestre', color: '#56C02B' }
    ]
  },
  {
    id: 'Al Amine Dia',
    title: 'Terrasen',
    shortDescription: 'Solutions d\'énergie renouvelable pour les communautés rurales',
    fullDescription: 'Terrasen développe des solutions d\'énergie renouvelable adaptées aux besoins des communautés rurales, favorisant l\'accès à l\'électricité et le développement économique.',
    image: 'terrasmile.png',
    goals: [
      'Installation de systèmes solaires',
      'Formation technique locale',
      'Développement économique rural',
      'Réduction des émissions de CO2'
    ],
    impact: 'Installation de plus de 100 systèmes solaires, bénéficiant à plus de 1000 personnes.',
    team: [
      {
        name: 'Abdoulaye Kane',
        role: 'Chef de Projet'
      },
      {
        name: 'Mariama Sy',
        role: 'Ingénieure Énergie'
      },
      {
        name: 'Ousmane Gueye',
        role: 'Technicien'
      }
    ],
    sdgs: [
      { number: 7, title: 'Énergie propre et d\'un coût abordable', color: '#FCC30B' },
      { number: 13, title: 'Mesures relatives à la lutte contre les changements climatiques', color: '#3F7E44' },
      { number: 10, title: 'Inégalités réduites', color: '#DD1367' }
    ]
  }
];