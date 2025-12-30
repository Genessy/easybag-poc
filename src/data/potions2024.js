export const POTIONS = [
    // --- SOINS (Action Bonus en 2024) ---
    {
        id: "potion_healing_2024",
        name: "Potion de Guérison",
        type: "Potion",
        effect: "Rend 2d4 + 2 PV",
        description: "Action Bonus à boire. Un fluide rouge qui scintille.",
        price: "50 po",
        weight: "0.5 kg"
    },
    {
        id: "potion_healing_greater_2024",
        name: "Potion de Guérison (Supérieure)",
        type: "Potion",
        effect: "Rend 4d4 + 4 PV",
        description: "Action Bonus à boire. Version plus puissante.",
        price: "150 po",
        weight: "0.5 kg"
    },
    {
        id: "potion_healing_superior_2024",
        name: "Potion de Guérison (Suprême)",
        type: "Potion",
        effect: "Rend 8d4 + 8 PV",
        description: "Action Bonus à boire. Un rouge intense.",
        price: "450 po",
        weight: "0.5 kg"
    },
    {
        id: "potion_healing_supreme_2024",
        name: "Potion de Guérison (Absolue)",
        type: "Potion",
        effect: "Rend 10d4 + 20 PV",
        description: "Action Bonus à boire. Le liquide pulse de vie.",
        price: "1350 po",
        weight: "0.5 kg"
    },

    // --- UTILITAIRES & COMBAT ---
    {
        id: "antitoxin_2024",
        name: "Antitoxine",
        type: "Fiole",
        effect: "Avantage contre Poison",
        description: "Action Bonus. Pendant 1h, Avantage sur les JdS pour éviter ou finir la condition Empoisonné.",
        price: "50 po",
        weight: "0 kg"
    },
    {
        id: "potion_animal_friendship_2024",
        name: "Potion d'Amitié Animale",
        type: "Potion",
        effect: "Sort Amitié avec les animaux",
        description: "Permet de lancer le sort Amitié avec les animaux (DD 13) pendant 1h à volonté.",
        price: "200 po",
        weight: "0 kg"
    },
    {
        id: "potion_clairvoyance_2024",
        name: "Potion de Clairvoyance",
        type: "Potion",
        effect: "Sort Clairvoyance",
        description: "Vous gagnez l'effet du sort Clairvoyance (pas de concentration).",
        price: "400 po",
        weight: "0 kg"
    },
    {
        id: "potion_climbing_2024",
        name: "Potion d'Escalade",
        type: "Potion",
        effect: "Vitesse d'escalade",
        description: "Pendant 1h, vitesse d'escalade égale à votre vitesse et Avantage en Athlétisme pour grimper.",
        price: "50 po",
        weight: "0 kg"
    },
    {
        id: "potion_diminution_2024",
        name: "Potion de Diminution",
        type: "Potion",
        effect: "Effet Réduire",
        description: "Vous gagnez l'effet 'Réduire' du sort Agrandissement/Rapetissement pour 1d4 heures.",
        price: "300 po",
        weight: "0 kg"
    },
    {
        id: "potion_flying_2024",
        name: "Potion de Vol",
        type: "Potion",
        effect: "Vitesse de vol",
        description: "Pendant 1h, vous gagnez une vitesse de vol égale à votre vitesse (avec vol stationnaire).",
        price: "2500 po",
        weight: "0 kg"
    },
    {
        id: "potion_gaseous_form_2024",
        name: "Potion de Forme Gazeuse",
        type: "Potion",
        effect: "Sort Forme Gazeuse",
        description: "Vous gagnez l'effet du sort Forme Gazeuse pendant 1h (pas de concentration).",
        price: "400 po",
        weight: "0 kg"
    },
    {
        id: "potion_giant_strength_hill_2024",
        name: "Potion de Force de Géant (Colline)",
        type: "Potion",
        effect: "Force 21",
        description: "Votre Force devient 21 pour 1 heure.",
        price: "200 po",
        weight: "0 kg"
    },
    {
        id: "potion_giant_strength_frost_stone_2024",
        name: "Potion de Force de Géant (Givre/Pierre)",
        type: "Potion",
        effect: "Force 23",
        description: "Votre Force devient 23 pour 1 heure.",
        price: "400 po",
        weight: "0 kg"
    },
    {
        id: "potion_giant_strength_fire_2024",
        name: "Potion de Force de Géant (Feu)",
        type: "Potion",
        effect: "Force 25",
        description: "Votre Force devient 25 pour 1 heure.",
        price: "500 po",
        weight: "0 kg"
    },
    {
        id: "potion_giant_strength_cloud_2024",
        name: "Potion de Force de Géant (Nuages)",
        type: "Potion",
        effect: "Force 27",
        description: "Votre Force devient 27 pour 1 heure.",
        price: "2000 po",
        weight: "0 kg"
    },
    {
        id: "potion_giant_strength_storm_2024",
        name: "Potion de Force de Géant (Tempête)",
        type: "Potion",
        effect: "Force 29",
        description: "Votre Force devient 29 pour 1 heure.",
        price: "5000 po",
        weight: "0 kg"
    },
    {
        id: "potion_growth_2024",
        name: "Potion d'Agrandissement",
        type: "Potion",
        effect: "Effet Agrandir",
        description: "Vous gagnez l'effet 'Agrandir' du sort Agrandissement/Rapetissement pour 1d4 heures.",
        price: "200 po",
        weight: "0 kg"
    },
    {
        id: "potion_heroism_2024",
        name: "Potion d'Héroïsme",
        type: "Potion",
        effect: "+10 PV temp. + Bénédiction",
        description: "10 PV temporaires et effet du sort Bénédiction pendant 1h (pas de concentration).",
        price: "400 po",
        weight: "0 kg"
    },
    {
        id: "potion_invisibility_2024",
        name: "Potion d'Invisibilité",
        type: "Potion",
        effect: "Condition Invisible",
        description: "Vous devenez Invisible pendant 1h. L'effet s'arrête si vous attaquez ou lancez un sort.",
        price: "2500 po",
        weight: "0 kg"
    },
    {
        id: "potion_mind_reading_2024",
        name: "Potion de Lecture des Pensées",
        type: "Potion",
        effect: "Sort Détection des pensées",
        description: "Effet du sort Détection des pensées (DD 13) pour 10 min.",
        price: "400 po",
        weight: "0 kg"
    },
    {
        id: "potion_poison_2024",
        name: "Potion de Poison",
        type: "Potion (Piège)",
        effect: "Dégâts et Poison",
        description: "Ressemble à une potion de soin. Inflige 3d6 poison et condition Empoisonné (DD 13 Con).",
        price: "100 po",
        weight: "0 kg"
    },
    {
        id: "potion_resistance_2024",
        name: "Potion de Résistance",
        type: "Potion",
        effect: "Résistance dégâts",
        description: "Résistance à un type de dégâts (Acide, Feu, Froid, etc.) pendant 1h.",
        price: "200 po",
        weight: "0 kg"
    },
    {
        id: "potion_speed_2024",
        name: "Potion de Vitesse",
        type: "Potion",
        effect: "Sort Hâte",
        description: "Effet du sort Hâte pendant 1 minute (pas de concentration). Pas de léthargie à la fin.",
        price: "2500 po",
        weight: "0 kg"
    },
    {
        id: "potion_water_breathing_2024",
        name: "Potion de Respiration Aquatique",
        type: "Potion",
        effect: "Respiration sous l'eau",
        description: "Vous pouvez respirer sous l'eau pendant 24h.",
        price: "150 po",
        weight: "0 kg"
    },

    // --- HUILES (OILS) & PHILTRES ---
    {
        id: "oil_etherealness_2024",
        name: "Huile d'Éthéréité",
        type: "Huile",
        effect: "Sort Forme éthérée",
        description: "Appliquer (10 min). Confère l'effet du sort Forme éthérée pour 1h.",
        price: "1000 po",
        weight: "0 kg"
    },
    {
        id: "oil_sharpness_2024",
        name: "Huile d'Acuité",
        type: "Huile",
        effect: "Bonus +3 Arme/Munitions",
        description: "Appliquer (1 min). L'arme ou les munitions (5) deviennent magiques avec un bonus +3 pour 1h.",
        price: "2000 po",
        weight: "0 kg"
    },
    {
        id: "oil_slipperiness_2024",
        name: "Huile de Glissance",
        type: "Huile",
        effect: "Sort Liberté de mouvement / Graisse",
        description: "Appliquer (10 min) pour Liberté de mouvement (8h). Ou verser au sol pour effet Graisse.",
        price: "300 po",
        weight: "0 kg"
    },
    {
        id: "philter_love_2024",
        name: "Philtre d'Amour",
        type: "Philtre",
        effect: "Condition Charmé",
        description: "Celui qui le boit est Charmé par la première créature qu'il voit pour 1h.",
        price: "150 po",
        weight: "0 kg"
    }
];
