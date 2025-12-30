export const ARMOR_CATEGORIES_FR = {
    light: "Armure Légère",
    medium: "Armure Intermédiaire",
    heavy: "Armure Lourde",
    shield: "Bouclier"
};

export const ARMOR = [
    // ============================================================
    // ARMURES LÉGÈRES (LIGHT ARMOR)
    // ============================================================
    // Elles ajoutent le modificateur de Dextérité complet à la CA.
    {
        id: "padded_armor_2024",
        name: "Matelassée",
        category: "light",
        ac_display: "11 + Mod. Dex",
        ac_base: 11,
        add_dex: true,
        dex_cap: null, // Pas de limite
        strength_req: null,
        stealth_disadvantage: true,
        weight: "4 kg",
        price: "5 po"
    },
    {
        id: "leather_armor_2024",
        name: "Cuir",
        category: "light",
        ac_display: "11 + Mod. Dex",
        ac_base: 11,
        add_dex: true,
        dex_cap: null,
        strength_req: null,
        stealth_disadvantage: false,
        weight: "5 kg",
        price: "10 po"
    },
    {
        id: "studded_leather_armor_2024",
        name: "Cuir clouté",
        category: "light",
        ac_display: "12 + Mod. Dex",
        ac_base: 12,
        add_dex: true,
        dex_cap: null,
        strength_req: null,
        stealth_disadvantage: false,
        weight: "6.5 kg",
        price: "45 po"
    },

    // ============================================================
    // ARMURES INTERMÉDIAIRES (MEDIUM ARMOR)
    // ============================================================
    // Elles ajoutent le modificateur de Dextérité (max +2) à la CA.
    {
        id: "hide_armor_2024",
        name: "Peaux",
        category: "medium",
        ac_display: "12 + Mod. Dex (max 2)",
        ac_base: 12,
        add_dex: true,
        dex_cap: 2,
        strength_req: null,
        stealth_disadvantage: false,
        weight: "6 kg",
        price: "10 po"
    },
    {
        id: "chain_shirt_2024",
        name: "Chemise de mailles",
        category: "medium",
        ac_display: "13 + Mod. Dex (max 2)",
        ac_base: 13,
        add_dex: true,
        dex_cap: 2,
        strength_req: null,
        stealth_disadvantage: false,
        weight: "10 kg",
        price: "50 po"
    },
    {
        id: "scale_mail_2024",
        name: "Écailles",
        category: "medium",
        ac_display: "14 + Mod. Dex (max 2)",
        ac_base: 14,
        add_dex: true,
        dex_cap: 2,
        strength_req: null,
        stealth_disadvantage: true,
        weight: "22.5 kg",
        price: "50 po"
    },
    {
        id: "breastplate_2024",
        name: "Cuirasse",
        category: "medium",
        ac_display: "14 + Mod. Dex (max 2)",
        ac_base: 14,
        add_dex: true,
        dex_cap: 2,
        strength_req: null,
        stealth_disadvantage: false,
        weight: "10 kg",
        price: "400 po"
    },
    {
        id: "half_plate_2024",
        name: "Demi-plate",
        category: "medium",
        ac_display: "15 + Mod. Dex (max 2)",
        ac_base: 15,
        add_dex: true,
        dex_cap: 2,
        strength_req: null,
        stealth_disadvantage: true,
        weight: "20 kg",
        price: "750 po"
    },

    // ============================================================
    // ARMURES LOURDES (HEAVY ARMOR)
    // ============================================================
    // Pas de bonus de Dextérité. Peuvent nécessiter une Force minimale.
    {
        id: "ring_mail_2024",
        name: "Cotte à anneaux",
        category: "heavy",
        ac_display: "14",
        ac_base: 14,
        add_dex: false,
        dex_cap: null,
        strength_req: null,
        stealth_disadvantage: true,
        weight: "20 kg",
        price: "30 po"
    },
    {
        id: "chain_mail_2024",
        name: "Cotte de mailles",
        category: "heavy",
        ac_display: "16",
        ac_base: 16,
        add_dex: false,
        dex_cap: null,
        strength_req: 13,
        stealth_disadvantage: true,
        weight: "27.5 kg",
        price: "75 po"
    },
    {
        id: "splint_armor_2024",
        name: "Clibanion",
        category: "heavy",
        ac_display: "17",
        ac_base: 17,
        add_dex: false,
        dex_cap: null,
        strength_req: 15,
        stealth_disadvantage: true,
        weight: "30 kg",
        price: "200 po"
    },
    {
        id: "plate_armor_2024",
        name: "Harnois", // "Plate Armor" se traduit souvent par Harnois en D&D FR
        category: "heavy",
        ac_display: "18",
        ac_base: 18,
        add_dex: false,
        dex_cap: null,
        strength_req: 15,
        stealth_disadvantage: true,
        weight: "32.5 kg",
        price: "1500 po"
    },

    // ============================================================
    // BOUCLIERS (SHIELDS)
    // ============================================================
    {
        id: "shield_2024",
        name: "Bouclier",
        category: "shield",
        ac_display: "+2",
        ac_base: 2,
        add_dex: false,
        dex_cap: null,
        strength_req: null,
        stealth_disadvantage: false,
        weight: "3 kg",
        price: "10 po"
    }
];
