// src/data/weapons2024.js

export const WEAPONS = [
    // ============================================================
    // ARMES SIMPLES (SIMPLE WEAPONS)
    // ============================================================

    // --- Corps à corps (Melee) ---
    {
        name: "Bâton",
        category: "Simple",
        type: "Corps à corps (Contondant)",
        damage: "1d6",
        weight: "2 kg",
        price: "2 pa",
        properties: ["Polyvalente (1d8)"],
        mastery: "Renversement (Topple)"
    },
    {
        name: "Dague",
        category: "Simple",
        type: "Corps à corps (Perforant)",
        damage: "1d4",
        weight: "0.5 kg",
        price: "2 po",
        properties: ["Finesse", "Légère", "Lancer (6/18m)"],
        mastery: "Entaille (Nick)"
    },
    {
        name: "Gourdin",
        category: "Simple",
        type: "Corps à corps (Contondant)",
        damage: "1d4",
        weight: "1 kg",
        price: "1 pa",
        properties: ["Légère"],
        mastery: "Ralentissement (Slow)"
    },
    {
        name: "Grand gourdin",
        category: "Simple",
        type: "Corps à corps (Contondant)",
        damage: "1d8",
        weight: "5 kg",
        price: "2 pa",
        properties: ["Deux mains"],
        mastery: "Repoussement (Push)"
    },
    {
        name: "Hachette",
        category: "Simple",
        type: "Corps à corps (Tranchant)",
        damage: "1d6",
        weight: "1 kg",
        price: "5 po",
        properties: ["Légère", "Lancer (6/18m)"],
        mastery: "Lésion (Vex)"
    },
    {
        name: "Javelot",
        category: "Simple",
        type: "Corps à corps (Perforant)",
        damage: "1d6",
        weight: "1 kg",
        price: "5 pa",
        properties: ["Lancer (9/36m)"],
        mastery: "Ralentissement (Slow)"
    },
    {
        name: "Lance",
        category: "Simple",
        type: "Corps à corps (Perforant)",
        damage: "1d6",
        weight: "1.5 kg",
        price: "1 po",
        properties: ["Lancer (6/18m)", "Polyvalente (1d8)"],
        mastery: "Épuisement (Sap)"
    },
    {
        name: "Marteau léger",
        category: "Simple",
        type: "Corps à corps (Contondant)",
        damage: "1d4",
        weight: "1 kg",
        price: "2 po",
        properties: ["Légère", "Lancer (6/18m)"],
        mastery: "Entaille (Nick)"
    },
    {
        name: "Masse d'armes",
        category: "Simple",
        type: "Corps à corps (Contondant)",
        damage: "1d6",
        weight: "2 kg",
        price: "5 po",
        properties: [],
        mastery: "Épuisement (Sap)"
    },
    {
        name: "Faucille",
        category: "Simple",
        type: "Corps à corps (Tranchant)",
        damage: "1d4",
        weight: "1 kg",
        price: "1 po",
        properties: ["Légère"],
        mastery: "Entaille (Nick)"
    },

    // --- Distance (Ranged) ---
    {
        name: "Arbalète légère",
        category: "Simple",
        type: "Distance (Perforant)",
        damage: "1d8",
        weight: "2.5 kg",
        price: "25 po",
        properties: ["Munitions (24/96m)", "Chargement", "Deux mains"],
        mastery: "Ralentissement (Slow)"
    },
    {
        name: "Arc court",
        category: "Simple",
        type: "Distance (Perforant)",
        damage: "1d6",
        weight: "1 kg",
        price: "25 po",
        properties: ["Munitions (24/96m)", "Deux mains"],
        mastery: "Lésion (Vex)"
    },
    {
        name: "Fléchette",
        category: "Simple",
        type: "Distance (Perforant)",
        damage: "1d4",
        weight: "0.1 kg",
        price: "5 pc",
        properties: ["Finesse", "Lancer (6/18m)"],
        mastery: "Lésion (Vex)"
    },
    {
        name: "Fronde",
        category: "Simple",
        type: "Distance (Contondant)",
        damage: "1d4",
        weight: "-",
        price: "1 pa",
        properties: ["Munitions (9/36m)"],
        mastery: "Ralentissement (Slow)"
    },

    // ============================================================
    // ARMES DE GUERRE (MARTIAL WEAPONS)
    // ============================================================

    // --- Corps à corps (Melee) ---
    {
        name: "Cimeterre",
        category: "Guerre",
        type: "Corps à corps (Tranchant)",
        damage: "1d6",
        weight: "1.5 kg",
        price: "25 po",
        properties: ["Finesse", "Légère"],
        mastery: "Entaille (Nick)"
    },
    {
        name: "Épée à deux mains",
        category: "Guerre",
        type: "Corps à corps (Tranchant)",
        damage: "2d6",
        weight: "3 kg",
        price: "50 po",
        properties: ["Lourde", "Deux mains"],
        mastery: "Éraflure (Graze)"
    },
    {
        name: "Épée courte",
        category: "Guerre",
        type: "Corps à corps (Perforant)",
        damage: "1d6",
        weight: "1 kg",
        price: "10 po",
        properties: ["Finesse", "Légère"],
        mastery: "Lésion (Vex)"
    },
    {
        name: "Épée longue",
        category: "Guerre",
        type: "Corps à corps (Tranchant)",
        damage: "1d8",
        weight: "1.5 kg",
        price: "15 po",
        properties: ["Polyvalente (1d10)"],
        mastery: "Épuisement (Sap)"
    },
    {
        name: "Fléau",
        category: "Guerre",
        type: "Corps à corps (Contondant)",
        damage: "1d8",
        weight: "1 kg",
        price: "10 po",
        properties: [],
        mastery: "Épuisement (Sap)"
    },
    {
        name: "Fouet",
        category: "Guerre",
        type: "Corps à corps (Tranchant)",
        damage: "1d4",
        weight: "1.5 kg",
        price: "2 po",
        properties: ["Finesse", "Allonge"],
        mastery: "Ralentissement (Slow)"
    },
    {
        name: "Glaive",
        category: "Guerre",
        type: "Corps à corps (Tranchant)",
        damage: "1d10",
        weight: "3 kg",
        price: "20 po",
        properties: ["Lourde", "Allonge", "Deux mains"],
        mastery: "Éraflure (Graze)"
    },
    {
        name: "Grande hache", // Hache à deux mains
        category: "Guerre",
        type: "Corps à corps (Tranchant)",
        damage: "1d12",
        weight: "3.5 kg",
        price: "30 po",
        properties: ["Lourde", "Deux mains"],
        mastery: "Fendoir (Cleave)"
    },
    {
        name: "Hache d'armes",
        category: "Guerre",
        type: "Corps à corps (Tranchant)",
        damage: "1d8",
        weight: "2 kg",
        price: "10 po",
        properties: ["Polyvalente (1d10)"],
        mastery: "Renversement (Topple)"
    },
    {
        name: "Hallebarde",
        category: "Guerre",
        type: "Corps à corps (Tranchant)",
        damage: "1d10",
        weight: "3 kg",
        price: "20 po",
        properties: ["Lourde", "Allonge", "Deux mains"],
        mastery: "Fendoir (Cleave)"
    },
    {
        name: "Lance d'arçon",
        category: "Guerre",
        type: "Corps à corps (Perforant)",
        damage: "1d10",
        weight: "3 kg",
        price: "10 po",
        properties: ["Lourde", "Allonge", "Deux mains"],
        mastery: "Renversement (Topple)"
    },
    {
        name: "Marteau de guerre",
        category: "Guerre",
        type: "Corps à corps (Contondant)",
        damage: "1d8",
        weight: "1 kg",
        price: "15 po",
        properties: ["Polyvalente (1d10)"],
        mastery: "Repoussement (Push)"
    },
    {
        name: "Maul", // Maillet
        category: "Guerre",
        type: "Corps à corps (Contondant)",
        damage: "2d6",
        weight: "5 kg",
        price: "10 po",
        properties: ["Lourde", "Deux mains"],
        mastery: "Renversement (Topple)"
    },
    {
        name: "Morgenstern",
        category: "Guerre",
        type: "Corps à corps (Perforant)",
        damage: "1d8",
        weight: "2 kg",
        price: "15 po",
        properties: [],
        mastery: "Épuisement (Sap)"
    },
    {
        name: "Pic de guerre",
        category: "Guerre",
        type: "Corps à corps (Perforant)",
        damage: "1d8",
        weight: "1 kg",
        price: "5 po",
        properties: ["Polyvalente (1d10)"], // Nouveauté 2024
        mastery: "Épuisement (Sap)"
    },
    {
        name: "Pique",
        category: "Guerre",
        type: "Corps à corps (Perforant)",
        damage: "1d10",
        weight: "9 kg",
        price: "5 po",
        properties: ["Lourde", "Allonge", "Deux mains"],
        mastery: "Repoussement (Push)"
    },
    {
        name: "Rapière",
        category: "Guerre",
        type: "Corps à corps (Perforant)",
        damage: "1d8",
        weight: "1 kg",
        price: "25 po",
        properties: ["Finesse"],
        mastery: "Lésion (Vex)"
    },
    {
        name: "Trident",
        category: "Guerre",
        type: "Corps à corps (Perforant)",
        damage: "1d8", // Nouveauté 2024 : 1d8 au lieu de 1d6
        weight: "2 kg",
        price: "5 po",
        properties: ["Lancer (6/18m)", "Polyvalente (1d10)"],
        mastery: "Renversement (Topple)"
    },

    // --- Distance (Ranged) ---
    {
        name: "Arbalète de poing",
        category: "Guerre",
        type: "Distance (Perforant)",
        damage: "1d6",
        weight: "1.5 kg",
        price: "75 po",
        properties: ["Munitions (9/36m)", "Légère", "Chargement"],
        mastery: "Lésion (Vex)"
    },
    {
        name: "Arbalète lourde",
        category: "Guerre",
        type: "Distance (Perforant)",
        damage: "1d10",
        weight: "9 kg",
        price: "50 po",
        properties: ["Munitions (30/120m)", "Lourde", "Chargement", "Deux mains"],
        mastery: "Repoussement (Push)"
    },
    {
        name: "Arc long",
        category: "Guerre",
        type: "Distance (Perforant)",
        damage: "1d8",
        weight: "1 kg",
        price: "50 po",
        properties: ["Munitions (45/180m)", "Lourde", "Deux mains"],
        mastery: "Ralentissement (Slow)"
    },
    {
        name: "Mousquet",
        category: "Guerre",
        type: "Distance (Perforant)",
        damage: "1d12",
        weight: "5 kg",
        price: "500 po",
        properties: ["Munitions (12/36m)", "Chargement", "Deux mains"],
        mastery: "Ralentissement (Slow)"
    },
    {
        name: "Pistolet",
        category: "Guerre",
        type: "Distance (Perforant)",
        damage: "1d10",
        weight: "1.5 kg",
        price: "250 po",
        properties: ["Munitions (9/27m)", "Chargement"],
        mastery: "Lésion (Vex)"
    },
    {
        name: "Sarbacane",
        category: "Guerre",
        type: "Distance (Perforant)",
        damage: "1",
        weight: "0.5 kg",
        price: "10 po",
        properties: ["Munitions (7.5/30m)", "Chargement"],
        mastery: "Lésion (Vex)"
    }
];