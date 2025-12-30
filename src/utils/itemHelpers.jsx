import { Sword, Shield, Package, FlaskConical, Target } from 'lucide-react';
import { WEAPONS } from '../data/weapons2024';
import { ARMOR } from '../data/armor2024';
import { POTIONS } from '../data/potions2024';
import { AMMUNITION } from '../data/ammunition2024';

export const getItemType = (itemName) => {
    if (!itemName) return 'misc';
    const lowerName = itemName.toLowerCase();

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

export const ItemIcon = ({ itemName, size = 20, className = "" }) => {
    const type = getItemType(itemName);

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
