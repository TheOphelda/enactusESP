import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'men-nan',
    title: 'Men-Nan',
    shortDescription: 'Projet d\'autonomisation des femmes à travers la transformation de produits locaux',
    fullDescription: 'Men-Nan est un projet qui vise à autonomiser les femmes à travers la transformation et la commercialisation de produits locaux. Le projet contribue à la réduction de la pauvreté et à l\'autonomisation économique des femmes.',
    image: '/femmes maeva.jpg',
    goals: [
      'Transformation d\'une grande partie des ressources naturelles qui pourrissent chaque année dans le Sud',
      'Valorisation les ressources naturelles du Sud et encourager la consommation locale ',
      'Réduction de la pauvreté ',
      'Autonomisation des femmes par la création de revenus durables'
    ],
    impact: 'Le projet a permis de former plus de 500 femmes, de créer 97 emplois, de générer plus de 4 218 375 FCFA de chiffres d\'affaires et de transformer plus d\'une tonne de fruits et 1351 litres de lait prédestinés à la détérioration.',
  
    team: [
      {
        name: 'Modou Khabane Sambe',
        role: 'Chef de Projet'
      },
      {
        name: 'Fatou Tambedou',
        role: 'Adjointe Chef de Projet'
      },
    ],
    sdgs: [
      { number: 1, title: 'Pas de pauvreté', color: '#E5243B' },
      { number: 2, title: 'Faim "zéro"', color: '#DDA63A' },
      { number: 3, title: 'Bonne santé et bien-être', color: '#4C9F38' },
      { number: 8, title: 'Travail décent et croissance économique', color: '#A21942' },
      { number: 10, title: 'Réduction des inégalités', color: '#DD1367' },
      { number: 12, title: 'Consommation et production responsables', color: '#BF8B2E' }
    ]
  },
  {
    id: 'shery',
    title: 'Shery',
    shortDescription: 'Projet de lutte contre la précarité menstruelle',
    fullDescription: 'SHERY vise à lutter contre la précarité menstruelle en fournissant des serviettes hygiéniques réutilisables de qualité, accompagnées de tisanes naturelles pour soulager les maux menstruels, tout en sensibilisant sur l\'importance de la gestion de l\'hygiène menstruelle. L\'objectif est de répondre à la précarité menstruelle au Sénégal en offrant une alternative durable et abordable aux serviettes hygiéniques jetables.',
    image: '/African.png',
    goals: [
      'Eliminer la précarité menstruelle chez au moins 3000 filles',
      'Sortir au moins 1000 femmes du seuil de pauvreté ',
      'Fournir au moins 2000 Serviettes hygiéniques réutilisables soit au moins des ventes de 24 000 000 FCFA ',
      'Sensibiliser les jeunes filles sur les thématiques liées à la santé menstruelle'
    ],
    impact: 'Plus de 8 000 personnes touchées par le Shery Talk sur Instagram.',
    team: [
      {
        name: 'Marianne Laeticia Coura Faye',
        role: 'Chef de Projet'
      },
      {
        name: 'Birahim Samb',
        role: 'Adjoint Chef de Projet'
      },
    ],
    sdgs: [
      { number: 3, title: 'Bonne santé et bien-être', color: '#4C9F38' },
      { number: 5, title: 'Égalité entre les sexes', color: '#FF3A21' },
      { number: 8, title: 'Travail décent et croissance économique', color: '#A21942' },
      { number: 10, title: 'Inégalités réduites', color: '#DD1367' },
      { number: 12, title: 'Consommation et production responsables', color: '#BF8B2E' },
      { number: 13, title: 'Lutte contre les changements climatiques', color: '#3F7E44' },
      { number: 17, title: 'Partenariats pour la réalisation des objectifs', color: '#19486A' }
    ]
  },
  {
    id: 'aquatus',
    title: 'Aquatus',
    shortDescription: 'Solutions novatrices et durables en combinant l’agriculture et la pisciculture pour répondre aux défis actuels de notre société.',
    fullDescription: 'Aquatus utilise l’aquaponie, un système innovant intégrant la culture de plantes et l’élevage de poissons de manière symbiotique en utilisant les déchets des poissons comme engrais pour les plantes, et les plantes comme filtre naturel pour l’eau. Il crée un écosystème autonome permettant une croissance optimale des deux (les plantes et les poissons). Ce projet se profile comme une solution innovante ayant des répercussions sociales importantes. Les communautés, surtout celles aux prises avec des difficultés d\'accès à une alimentation saine et durable, peuvent tirer profit de cette approche singulière intégrant pisciculture et culture de plantes.',
    image: '/gg.png',
    goals: [
      'Pallier aux défis de l\'insécurité alimentaire',
      'Promotion d\'une industrialisation à long terme',
      'Conservation et exploitation de manière durable des océans, mers et ressources halieutiques',
      'Gestion durable des ressources en eau'
    ],
    impact: 'Réduction de manière significative les besoins en eau et en énergie, tout en produisant des aliments de haute qualité.',
    team: [
      {
        name: 'Amadou Cissé',
        role: 'Chef de Projet'
      },
      {
        name: 'Fatoumata Binetou Rassoul Diallo',
        role: 'Adjointe Chef de Projet'
      },
    ],
    sdgs: [
        { number: 2, title: 'Faim "zéro"', color: '#DDA63A' },
        { number: 6, title: 'Eau propre et assainissement', color: '#26BDE2' },
        { number: 9, title: 'Industrie, innovation et infrastructure', color: '#FF6924' },
        { number: 12, title: 'Consommation et production responsables', color: '#BF8B2E' },
        { number: 14, title: 'Vie aquatique', color: '#0A97D9' },
        { number: 15, title: 'Vie terrestre', color: '#56C02B' }
    ]
  },
  {
    id: 'terrasen',
    title: 'Terrasen',
    shortDescription: 'Imaginez une table capable de vous nourrir, de vous soigner mais aussi de vous permettre de générer des revenus: C\'est ce que TerraSen vous propose.',
    fullDescription: 'TerraSen est un projet d’entrepreneuriat social qui vise à lutter contre l’insécurité alimentaire en s’appuyant sur deux piliers : l’agriculture et l’élevage. Le pôle agricole repose sur la mise en place de tables de micro-jardinage, équipées d’un système d’arrosage automatique. Ces tables seront adaptées aux espaces restreints et permettront une production continue de légumes frais. La technologie de fabrication sera transmise à des groupements d’intérêt économique (GIE), qui pourront produire pour leur propre consommation, mais aussi générer des revenus grâce à la vente de kits et de produits dérivés du micro-jardinage. Le pôle élevage vise à permettre aux éleveurs de produire eux-mêmes l’alimentation nécessaire à la croissance de leur volaille, tout en développant une activité économique autour de la vente de ces aliments.',
    image: 'terrasmile.png',
    goals: [
      'Assurer la sécurité alimentaire',
      'Promotion des pratiques agricoles écologiques er réduction de l\'empreinte carbone',
      'Développement économique local',
      'Création d\'emplois dans la transformation et la distribution'
    ],
    impact: 'Réalisation de 4 transferts de technologie, bénéficiant à plus de 50 femmes.',
    team: [
      {
        name: 'Mouhamed Al Amine Dia',
        role: 'Chef de Projet'
      },
      {
        name: 'Ousseynou Boye',
        role: 'Adjoint Chef de Projet'
      },
    ],
    sdgs: [
      { number: 1, title: 'Pas de pauvreté', color: '#E5243B' },
      { number: 2, title: 'Faim "zéro"', color: '#DDA63A' },
      { number: 3, title: 'Bonne santé et bien-être', color: '#4C9F38' },
      { number: 8, title: 'Travail décent et croissance économique', color: '#A21942' },
      { number: 11, title: 'Villes et communautés durables', color: '#FD9D24' },
      { number: 12, title: 'Consommation et production responsables', color: '#BF8B2E' },
      { number: 13, title: 'Lutte contre les changements climatiques', color: '#3F7E44' },
      { number: 15, title: 'Vie terrestre', color: '#56C02B' }
    ]
  }
];