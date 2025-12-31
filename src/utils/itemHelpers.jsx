import { Sword, Shield, Package, FlaskConical, Target } from 'lucide-react';
import { WEAPONS } from '../data/weapons2024';
import { ARMOR } from '../data/armor2024';
import { POTIONS } from '../data/potions2024';
import { AMMUNITION } from '../data/ammunition2024';

export const getItemType = (item) => {
    if (!item) return 'misc';

    // Si c'est un objet avec une catégorie définie
    if (typeof item === 'object' && item.category) {
        return item.category;
    }

    const name = typeof item === 'object' ? item.name : item;
    if (!name) return 'misc';

    const lowerName = name.toLowerCase();

    // Check if it's a weapon
    if (WEAPONS.some(w => w.name.toLowerCase() === lowerName)) {
        return 'weapon';
    }

    // Check if it's armor
    if (ARMOR.some(a => a.name.toLowerCase() === lowerName)) {
        return 'armor';
    }

    // Check if it's a potion
    if (POTIONS.some(p => p.name.toLowerCase() === lowerName)) {
        return 'potion';
    }

    // Check if it's ammunition
    if (AMMUNITION.some(a => a.name.toLowerCase() === lowerName)) {
        return 'ammo';
    }

    return 'misc';
};

export const ItemIcon = ({ itemName, item, size = 20, className = "" }) => {
    const type = getItemType(item || itemName);

    if (type === 'weapon') {
        return <Sword size={size} className={`text-emerald-400 ${className}`} />;
    }

    if (type === 'armor') {
        return <Shield size={size} className={`text-blue-400 ${className}`} />;
    }

    if (type === 'potion') {
        return <FlaskConical size={size} className={`text-rose-400 ${className}`} />;
    }

    if (type === 'ammo') {
        return <Target size={size} className={`text-orange-400 ${className}`} />;
    }

    return <Package size={size} className={`text-slate-400 ${className}`} />;
};

export const getItemWeight = (itemInput) => {
    if (!itemInput) return 0;

    // Si c'est un objet avec un poids défini
    if (typeof itemInput === 'object' && itemInput.weight !== undefined) {
        return parseFloat(itemInput.weight) || 0;
    }

    const name = typeof itemInput === 'object' ? itemInput.name : itemInput;
    if (!name) return 0;
    const lowerName = name.toLowerCase();

    let item = WEAPONS.find(w => w.name.toLowerCase() === lowerName);
    if (!item) item = ARMOR.find(a => a.name.toLowerCase() === lowerName);
    if (!item) item = POTIONS.find(p => p.name.toLowerCase() === lowerName);
    if (!item) item = AMMUNITION.find(a => a.name.toLowerCase() === lowerName);

    if (item && item.weight) {
        if (item.weight === "-") return 0;
        const match = item.weight.match(/([\d.]+)/);
        return match ? parseFloat(match[1]) : 0;
    }

    return 0; // Poids par défaut si inconnu
};

export const getItemDetails = (itemOrName) => {
    if (!itemOrName) return null;
    const name = typeof itemOrName === 'object' ? itemOrName.name : itemOrName;
    if (!name) return null;

    const lowerName = name.toLowerCase();

    // Check Weapons first
    const weapon = WEAPONS.find(w => w.name.toLowerCase() === lowerName);
    if (weapon) {
        return {
            category: 'weapon',
            type: weapon.type,
            damage: weapon.damage,
            properties: weapon.properties,
            mastery: weapon.mastery,
            ...weapon
        };
    }

    // Check Armor
    const armor = ARMOR.find(a => a.name.toLowerCase() === lowerName);
    if (armor) {
        return {
            category: 'armor',
            ac: armor.ac_base ? `${armor.ac_base}${armor.add_dex ? ' + Dex' : ''}` : armor.ac_display,
            stealth: armor.stealth_disadvantage ? 'Désavantage Discrétion' : null,
            strength: armor.strength_req,
            ...armor
        };
    }

    // Check Potions
    const potion = POTIONS.find(p => p.name.toLowerCase() === lowerName);
    if (potion) {
        return {
            category: 'potion',
            effect: potion.effect,
            ...potion
        };
    }

    // Fallback for custom items
    if (typeof itemOrName === 'object' && itemOrName.category) {
        return {
            category: itemOrName.category,
            type: itemOrName.category,
            weight: itemOrName.weight || 0,
            description: "Objet personnalisé",
            ...itemOrName
        };
    }

    return null;
};

export const calculateTotalWeight = (items) => {
    if (!items || !Array.isArray(items)) return 0;
    return items.reduce((total, item) => {
        return total + (getItemWeight(item) * (item.quantity || 1));
    }, 0);
};
