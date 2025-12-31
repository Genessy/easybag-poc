import { useState, useMemo, useEffect } from 'react';
import { X, Search, Sword, Shield, Plus, AlertCircle, FlaskConical, Target } from 'lucide-react';
import { WEAPONS } from '../data/weapons2024';
import { ARMOR, ARMOR_CATEGORIES_FR } from '../data/armor2024';
import { POTIONS } from '../data/potions2024';
import { AMMUNITION } from '../data/ammunition2024';

export default function ArmoryModal({ isOpen, onClose, onAdd }) {
    const [activeTab, setActiveTab] = useState('weapons');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');

    useEffect(() => {
        setFilterCategory('All');
        setSearchTerm('');
    }, [activeTab]);

    const filteredItems = useMemo(() => {
        const lowerSearch = searchTerm.toLowerCase();

        if (activeTab === 'weapons') {
            return WEAPONS.filter(weapon => {
                const matchesSearch = weapon.name.toLowerCase().includes(lowerSearch) ||
                    weapon.properties.some(p => p.toLowerCase().includes(lowerSearch)) ||
                    weapon.mastery.toLowerCase().includes(lowerSearch);
                const matchesCategory = filterCategory === 'All' || weapon.category === filterCategory;
                return matchesSearch && matchesCategory;
            });
        } else if (activeTab === 'armor') {
            return ARMOR.filter(armor => {
                const matchesSearch = armor.name.toLowerCase().includes(lowerSearch);
                const matchesCategory = filterCategory === 'All' || armor.category === filterCategory;
                return matchesSearch && matchesCategory;
            });
        } else if (activeTab === 'potions') {
            return POTIONS.filter(potion => {
                return potion.name.toLowerCase().includes(lowerSearch) ||
                    potion.effect.toLowerCase().includes(lowerSearch);
            });
        } else {
            return AMMUNITION.filter(ammo => {
                return ammo.name.toLowerCase().includes(lowerSearch) ||
                    ammo.description.toLowerCase().includes(lowerSearch);
            });
        }
    }, [activeTab, searchTerm, filterCategory]);

    if (!isOpen) return null;

    const renderHeaderIcon = () => {
        switch (activeTab) {
            case 'weapons': return <Sword className="text-emerald-500" size={24} />;
            case 'armor': return <Shield className="text-emerald-500" size={24} />;
            case 'potions': return <FlaskConical className="text-emerald-500" size={24} />;
            case 'ammo': return <Target className="text-emerald-500" size={24} />;
            default: return null;
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden">

                {/* Header */}
                <div className="p-6 border-b border-slate-700 flex items-center justify-between bg-slate-800/50">
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-500/10 p-2 rounded-lg">
                            {renderHeaderIcon()}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">Armurerie (Règles 2024)</h2>
                            <p className="text-slate-400 text-sm">Ajoute de l'équipement officiel à ton inventaire</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-slate-700 overflow-x-auto no-scrollbar bg-slate-900/50 flex-shrink-0">
                    <TabButton
                        active={activeTab === 'weapons'}
                        onClick={() => setActiveTab('weapons')}
                        icon={<Sword size={16} />}
                        label="Armes"
                    />
                    <TabButton
                        active={activeTab === 'armor'}
                        onClick={() => setActiveTab('armor')}
                        icon={<Shield size={16} />}
                        label="Armures"
                    />
                    <TabButton
                        active={activeTab === 'potions'}
                        onClick={() => setActiveTab('potions')}
                        icon={<FlaskConical size={16} />}
                        label="Potions"
                    />
                    <TabButton
                        active={activeTab === 'ammo'}
                        onClick={() => setActiveTab('ammo')}
                        icon={<Target size={16} />}
                        label="Munitions"
                    />
                </div>

                {/* Filters & Search */}
                <div className="p-4 border-b border-slate-700 bg-slate-800/30 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder={
                                activeTab === 'weapons' ? "Rechercher une arme..." :
                                    activeTab === 'armor' ? "Rechercher une armure..." :
                                        activeTab === 'potions' ? "Rechercher une potion..." :
                                            "Rechercher une munition..."
                            }
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                    </div>

                    {/* Filter Buttons */}
                    {(activeTab === 'weapons' || activeTab === 'armor') && (
                        <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-700 overflow-x-auto custom-scrollbar">
                            {activeTab === 'weapons' ? (
                                <>
                                    <FilterButton label="Tout" active={filterCategory === 'All'} onClick={() => setFilterCategory('All')} />
                                    <FilterButton label="Simples" active={filterCategory === 'Simple'} onClick={() => setFilterCategory('Simple')} />
                                    <FilterButton label="Guerre" active={filterCategory === 'Guerre'} onClick={() => setFilterCategory('Guerre')} />
                                </>
                            ) : (
                                <>
                                    <FilterButton label="Tout" active={filterCategory === 'All'} onClick={() => setFilterCategory('All')} />
                                    <FilterButton label="Légère" active={filterCategory === 'light'} onClick={() => setFilterCategory('light')} />
                                    <FilterButton label="Inter." active={filterCategory === 'medium'} onClick={() => setFilterCategory('medium')} />
                                    <FilterButton label="Lourde" active={filterCategory === 'heavy'} onClick={() => setFilterCategory('heavy')} />
                                    <FilterButton label="Bouclier" active={filterCategory === 'shield'} onClick={() => setFilterCategory('shield')} />
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                    {filteredItems.length === 0 ? (
                        <div className="text-center py-12 text-slate-500 bg-slate-800/20 rounded-xl border border-dashed border-slate-700 mx-4">
                            <p>Aucun élément trouvé.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {filteredItems.map((item, index) => {
                                if (activeTab === 'weapons') return <WeaponCard key={index} weapon={item} onAdd={onAdd} />;
                                if (activeTab === 'armor') return <ArmorCard key={index} armor={item} onAdd={onAdd} />;
                                if (activeTab === 'potions') return <PotionCard key={index} potion={item} onAdd={onAdd} />;
                                return <AmmoCard key={index} ammo={item} onAdd={onAdd} />;
                            })}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-slate-700 bg-slate-800/50 text-center text-xs text-slate-500">
                    Données basées sur les règles officielles D&D 2024.
                </div>
            </div>
        </div>
    );
}

function TabButton({ active, onClick, icon, label }) {
    return (
        <button
            onClick={onClick}
            className={`flex-none px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border-b-2 ${active
                ? 'bg-slate-800 text-emerald-400 border-emerald-500'
                : 'bg-slate-900 text-slate-500 border-transparent hover:text-slate-300 hover:bg-slate-800/50'
                }`}
        >
            {icon}
            <span className="whitespace-nowrap">{label}</span>
        </button>
    );
}

function FilterButton({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${active ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
        >
            {label}
        </button>
    );
}

function WeaponCard({ weapon, onAdd }) {
    return (
        <div className="bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-4 flex flex-col gap-2 group transition-all hover:bg-slate-800/80">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg text-emerald-400">{weapon.name}</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{weapon.category} • {weapon.type}</p>
                </div>
                <span className="bg-slate-900 text-yellow-500 px-2 py-1 rounded text-xs font-mono border border-slate-700">
                    {weapon.price}
                </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-300 my-1">
                <div className="flex items-center gap-1.5 bg-slate-900/50 px-2 py-1 rounded">
                    <span className="text-slate-500">Dégâts:</span>
                    <span className="font-mono font-bold text-white">{weapon.damage}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-900/50 px-2 py-1 rounded">
                    <span className="text-slate-500">Poids:</span>
                    <span className="font-mono text-white">{weapon.weight}</span>
                </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-1">
                {weapon.properties.map((prop, idx) => (
                    <span key={idx} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                        {prop}
                    </span>
                ))}
            </div>

            <div className="mt-2 pt-2 border-t border-slate-700/50 flex items-center justify-between">
                <div className="text-xs">
                    <span className="text-indigo-400 font-bold">Maîtrise: </span>
                    <span className="text-indigo-300">{weapon.mastery}</span>
                </div>
                <AddButton item={weapon} onAdd={onAdd} />
            </div>
        </div>
    );
}

function ArmorCard({ armor, onAdd }) {
    return (
        <div className="bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-4 flex flex-col gap-2 group transition-all hover:bg-slate-800/80">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg text-emerald-400">{armor.name}</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        {ARMOR_CATEGORIES_FR[armor.category] || armor.category}
                    </p>
                </div>
                <span className="bg-slate-900 text-yellow-500 px-2 py-1 rounded text-xs font-mono border border-slate-700">
                    {armor.price}
                </span>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-slate-300 my-1">
                <div className="flex items-center gap-1.5 bg-slate-900/50 px-2 py-1 rounded border border-slate-700/50">
                    <Shield size={14} className="text-emerald-500" />
                    <span className="font-bold text-white">{armor.ac_display}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-900/50 px-2 py-1 rounded border border-slate-700/50">
                    <span className="text-slate-500 text-xs">Poids:</span>
                    <span className="font-mono text-white text-xs">{armor.weight}</span>
                </div>
            </div>

            <div className="space-y-1">
                {armor.strength_req && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <span className="font-bold text-slate-300">Force {armor.strength_req}</span> requise
                    </div>
                )}
                {armor.stealth_disadvantage && (
                    <div className="flex items-center gap-1.5 text-xs text-orange-400">
                        <AlertCircle size={12} />
                        Discrétion (Désavantage)
                    </div>
                )}
            </div>

            <div className="mt-2 pt-2 border-t border-slate-700/50 flex items-center justify-end">
                <AddButton item={armor} onAdd={onAdd} />
            </div>
        </div>
    );
}

function PotionCard({ potion, onAdd }) {
    return (
        <div className="bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-4 flex flex-col gap-2 group transition-all hover:bg-slate-800/80">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg text-emerald-400">{potion.name}</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        {potion.type}
                    </p>
                </div>
                <span className="bg-slate-900 text-yellow-500 px-2 py-1 rounded text-xs font-mono border border-slate-700">
                    {potion.price}
                </span>
            </div>

            <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-700/50 my-1">
                <div className="flex items-start gap-2">
                    <FlaskConical size={16} className="text-rose-400 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-bold text-white">{potion.effect}</p>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{potion.description}</p>
                    </div>
                </div>
            </div>

            <div className="mt-2 pt-2 border-t border-slate-700/50 flex items-center justify-end">
                <AddButton item={potion} onAdd={onAdd} />
            </div>
        </div>
    );
}

function AmmoCard({ ammo, onAdd }) {
    return (
        <div className="bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-4 flex flex-col gap-2 group transition-all hover:bg-slate-800/80">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg text-emerald-400">{ammo.name}</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                        {ammo.type}
                    </p>
                </div>
                <span className="bg-slate-900 text-yellow-500 px-2 py-1 rounded text-xs font-mono border border-slate-700">
                    {ammo.price}
                </span>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-900/50 px-2 py-1 rounded border border-slate-700/50 w-fit my-1">
                <span className="text-slate-500 text-xs">Poids:</span>
                <span className="font-mono text-white text-xs">{ammo.weight}</span>
            </div>

            <p className="text-xs text-slate-400 my-2">
                {ammo.description}
            </p>

            <div className="mt-2 pt-2 border-t border-slate-700/50 flex items-center justify-end">
                <AddButton item={ammo} onAdd={onAdd} />
            </div>
        </div>
    );
}


function AddButton({ item, onAdd }) {
    return (
        <button
            onClick={() => onAdd(item)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-bold shadow-lg shadow-emerald-900/20 active:scale-95"
        >
            <Plus size={16} />
            Ajouter
        </button>
    );
}
