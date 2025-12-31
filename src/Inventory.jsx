import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Trash2, ArrowLeft, Backpack, Coins, Plus, Minus, Sword, Shield, ChevronDown, ChevronRight } from 'lucide-react';
import { deleteCharacter, subscribeToCharacter, updateCurrency, addItem, removeItem, updateStats } from './services/character';
import ArmoryModal from './components/ArmoryModal';
import InventoryItemModal from './components/InventoryItemModal';
import { ItemIcon, calculateTotalWeight, getItemWeight } from './utils/itemHelpers';

const CURRENCIES = [
    { id: 'pp', label: 'Platine', color: 'text-slate-300', bg: 'bg-slate-500/20', border: 'border-slate-500/20' },
    { id: 'po', label: 'Or', color: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/20' },
    { id: 'pe', label: 'Electrum', color: 'text-indigo-300', bg: 'bg-indigo-500/20', border: 'border-indigo-500/20' },
    { id: 'pa', label: 'Argent', color: 'text-gray-300', bg: 'bg-gray-500/20', border: 'border-gray-500/20' },
    { id: 'pc', label: 'Cuivre', color: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500/20' },
];

export default function Inventory() {
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [amounts, setAmounts] = useState({});
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState(1);
    const [newItemWeight, setNewItemWeight] = useState('');
    const [newItemCategory, setNewItemCategory] = useState('misc');
    const [showArmory, setShowArmory] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [force, setForce] = useState(10); // Valeur par défaut
    const [showCurrencies, setShowCurrencies] = useState(false);
    const [showAddItem, setShowAddItem] = useState(false);

    useEffect(() => {
        const storedPseudo = localStorage.getItem('easybag-pseudo');
        if (!storedPseudo) {
            navigate('/');
            return;
        }

        const unsubscribe = subscribeToCharacter(storedPseudo, (data) => {
            if (!data) {
                localStorage.removeItem('easybag-pseudo');
                navigate('/');
            } else {
                setCharacter(data);
                if (data.force) setForce(data.force);
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleDelete = async () => {
        if (!character) return;

        if (window.confirm('Es-tu sûr de vouloir supprimer ce personnage ? Cette action est irréversible.')) {
            try {
                await deleteCharacter(character.pseudo);
            } catch (error) {
                console.error("Erreur suppression:", error);
            }
        }
    };

    const handleCurrencyUpdate = async (currency, isAdding) => {
        const value = amounts[currency];
        if (!value) return;

        const amount = parseInt(value, 10);
        if (isNaN(amount)) return;

        const finalAmount = isAdding ? amount : -amount;

        try {
            await updateCurrency(character.pseudo, currency, finalAmount);
            setAmounts(prev => ({ ...prev, [currency]: '' }));
        } catch (error) {
            console.error("Erreur devise:", error);
        }
    };

    const handleForceUpdate = async (newForce) => {
        // Allow clearing the input
        if (newForce === '') {
            setForce('');
            return;
        }

        const val = parseInt(newForce);
        if (isNaN(val) || val < 0) return;
        setForce(val);
        try {
            await updateStats(character.pseudo, { force: val });
        } catch (error) {
            console.error("Erreur maj force:", error);
        }
    };

    const handleAddItem = async (e, nameOverride = null, qtyOverride = null) => {
        if (e && e.preventDefault) e.preventDefault();

        const nameToAdd = nameOverride || newItemName;
        const qtyToAdd = qtyOverride || newItemQuantity;
        // Si override (Armurerie), on n'utilise pas les champs personnalisés
        const weightToAdd = nameOverride ? null : newItemWeight;
        const categoryToAdd = nameOverride ? null : newItemCategory;

        if (!nameToAdd || typeof nameToAdd !== 'string' || !nameToAdd.trim()) return;

        try {
            await addItem(character.pseudo, nameToAdd, qtyToAdd, weightToAdd, categoryToAdd);
            if (!nameOverride) {
                setNewItemName('');
                setNewItemQuantity(1);
                setNewItemWeight('');
                setNewItemCategory('misc');
            }
        } catch (error) {
            console.error("Erreur ajout item:", error);
        }
    };

    const handleAddWeaponFromArmory = async (weapon) => {
        try {
            await addItem(character.pseudo, weapon.name, 1);
        } catch (error) {
            console.error("Erreur ajout arme:", error);
        }
    };

    const handleRemoveItem = async (item, count) => {
        try {
            await removeItem(character.pseudo, item.name, count);
        } catch (error) {
            console.error("Erreur suppression item:", error);
        }
    };

    if (!character) return <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">Chargement...</div>;

    return (
        <div className="min-h-screen bg-slate-900 text-white p-4 pb-24">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md -mx-4 px-4 py-4 mb-8 border-b border-slate-700 flex flex-wrap items-center justify-between gap-y-4 shadow-xl">
                <div className="flex items-center gap-3 order-1">
                    <Backpack className="text-emerald-500" />
                    <h1 className="text-xl font-bold">Sac de {character.pseudo}</h1>
                </div>

                {/* Strength & Weight Display */}
                <div className="flex items-center gap-4 bg-slate-800 p-2 rounded-xl border border-slate-700 order-3 md:order-2 w-full md:w-auto justify-center">
                    <div className="flex flex-col items-center px-2">
                        <span className="text-xs text-slate-400 font-bold uppercase">Force</span>
                        <input
                            type="number"
                            min="1"
                            max="30"
                            value={force}
                            onChange={(e) => handleForceUpdate(e.target.value)}
                            className="w-12 bg-transparent text-center font-bold text-white outline-none border-b border-slate-600 focus:border-emerald-500 transition-colors"
                        />
                    </div>
                    <div className="h-8 w-px bg-slate-700"></div>
                    <div className="flex flex-col items-center px-2">
                        <span className="text-xs text-slate-400 font-bold uppercase">Capacité</span>
                        <div className={`font-bold ${calculateTotalWeight(character?.items) > (force * 15) ? 'text-red-500' : 'text-emerald-400'}`}>
                            {calculateTotalWeight(character?.items).toFixed(1)} / {force * 15} kg
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 order-2 md:order-3">
                    <Link
                        to="/"
                        className="group relative flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-900/40"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-bold text-lg hidden md:inline">Accueil</span>
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded-lg transition-colors"
                        title="Supprimer le personnage"
                    >
                        <Trash2 size={20} />
                    </button>

                </div>
            </div>

            {/* Zone Devises (Grid) */}
            <div className="mb-8">
                <button
                    onClick={() => setShowCurrencies(!showCurrencies)}
                    className="flex items-center gap-2 w-full text-left group mb-4"
                >
                    <div className="p-1 bg-slate-800 rounded-lg border border-slate-700 text-emerald-500 group-hover:text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                        {showCurrencies ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </div>
                    <div className="h-px bg-slate-700 flex-1 group-hover:bg-slate-600 transition-colors"></div>
                    <span className="text-sm font-bold text-slate-500 group-hover:text-slate-400 transition-colors uppercase tracking-wider">
                        Porte-monnaie
                    </span>
                    <div className="h-px bg-slate-700 w-12 group-hover:bg-slate-600 transition-colors"></div>
                </button>

                {showCurrencies && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-12">
                        {CURRENCIES.map((curr) => (
                            <div key={curr.id} className={`bg-slate-800 p-4 rounded-xl border ${curr.border} shadow-lg relative overflow-hidden`}>
                                <div className={`absolute -top-6 -right-6 w-24 h-24 ${curr.bg} rounded-full blur-2xl opacity-50`}></div>

                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <div>
                                        <h3 className={`font-bold ${curr.color}`}>{curr.label} ({curr.id.toUpperCase()})</h3>
                                        <p className="text-3xl font-bold text-white">{character[curr.id] || 0}</p>
                                    </div>
                                    <Coins className={`${curr.color} opacity-80`} size={24} />
                                </div>

                                <div className="flex items-center gap-2 bg-slate-900/50 p-1 rounded-lg border border-slate-700 relative z-10">
                                    <input
                                        type="number"
                                        onChange={(e) => setAmounts(prev => ({ ...prev, [curr.id]: e.target.value }))}
                                        placeholder="0"
                                        className="bg-transparent text-white w-full px-2 py-1 outline-none font-mono text-center text-base"
                                    />
                                    <div className="flex gap-1">
                                        <button
                                            onClick={() => handleCurrencyUpdate(curr.id, false)}
                                            disabled={!amounts[curr.id]}
                                            className="p-1 hover:bg-red-500/20 text-red-400 rounded transition-colors disabled:opacity-30"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleCurrencyUpdate(curr.id, true)}
                                            disabled={!amounts[curr.id]}
                                            className="p-1 hover:bg-emerald-500/20 text-emerald-400 rounded transition-colors disabled:opacity-30"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Zone Équipement */}
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-emerald-400">
                            <Sword className="text-emerald-500" />
                            Équipement
                        </h2>
                        <button
                            onClick={() => setShowArmory(true)}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl transition-colors shadow-lg shadow-indigo-900/40"
                        >
                            <Shield size={18} />
                            <span className="font-bold">Armurerie</span>
                        </button>
                    </div>

                    {/* Résumé Devises Compact */}
                    <div className="flex items-center gap-4 text-sm font-mono text-slate-400 bg-slate-800/50 p-2 rounded-lg border border-slate-700/50 w-full overflow-x-auto">
                        <Coins size={16} className="text-amber-400 flex-shrink-0" />
                        <div className="flex items-center gap-4 flex-nowrap">
                            {CURRENCIES.map(curr => (
                                <div key={curr.id} className="flex items-center gap-1 flex-shrink-0">
                                    <span className={`font-bold ${curr.color}`}>{character[curr.id] || 0}</span>
                                    <span className="text-xs uppercase opacity-70">{curr.id}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ajout d'objet (Toggle) */}
                <button
                    onClick={() => setShowAddItem(!showAddItem)}
                    className="flex items-center gap-2 w-full text-left group mb-4"
                >
                    <div className="p-1 bg-slate-800 rounded-lg border border-slate-700 text-emerald-500 group-hover:text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                        {showAddItem ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </div>
                    <div className="h-px bg-slate-700 flex-1 group-hover:bg-slate-600 transition-colors"></div>
                    <span className="text-sm font-bold text-slate-500 group-hover:text-slate-400 transition-colors uppercase tracking-wider">
                        Ajout personnalisé
                    </span>
                    <div className="h-px bg-slate-700 w-12 group-hover:bg-slate-600 transition-colors"></div>
                </button>

                {showAddItem && (
                    <form onSubmit={handleAddItem} className="bg-slate-800/30 p-4 rounded-2xl border border-slate-700/50 mb-8 animate-fade-in">
                        <div className="flex flex-col gap-3">
                            <input
                                type="text"
                                value={newItemName}
                                onChange={(e) => setNewItemName(e.target.value)}
                                placeholder="Nouvel objet (ex: Potion de soin)..."
                                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-lg text-slate-200"
                            />

                            <div className="grid grid-cols-3 gap-3">
                                <div className="relative">
                                    <label className="block text w-full bg-slate-800 border border-slate-700 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 transition-all shadow-lg relative h-[50px]">
                                        <span className="absolute top-1 left-0 w-full text-center text-[10px] text-slate-500 uppercase font-bold tracking-wider">Qté</span>
                                        <input
                                            type="number"
                                            min="1"
                                            value={newItemQuantity}
                                            onChange={(e) => setNewItemQuantity(parseInt(e.target.value) || 1)}
                                            className="w-full h-full pt-4 px-2 bg-transparent text-center font-bold text-white outline-none"
                                        />
                                    </label>
                                </div>

                                <div className="relative">
                                    <label className="block text w-full bg-slate-800 border border-slate-700 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 transition-all shadow-lg relative h-[50px]">
                                        <span className="absolute top-1 left-0 w-full text-center text-[10px] text-slate-500 uppercase font-bold tracking-wider">Poids</span>
                                        <input
                                            type="number"
                                            min="0"
                                            step="0.1"
                                            value={newItemWeight}
                                            onChange={(e) => setNewItemWeight(e.target.value)}
                                            placeholder="0"
                                            className="w-full h-full pt-4 px-2 bg-transparent text-center font-bold text-white outline-none placeholder:text-slate-600"
                                        />
                                    </label>
                                </div>

                                <div className="relative">
                                    <label className="block text w-full bg-slate-800 border border-slate-700 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 transition-all shadow-lg relative h-[50px]">
                                        <span className="absolute top-1 left-0 w-full text-center text-[10px] text-slate-500 uppercase font-bold tracking-wider">Type</span>
                                        <select
                                            value={newItemCategory}
                                            onChange={(e) => setNewItemCategory(e.target.value)}
                                            className="w-full h-full pt-4 px-2 bg-slate-800 text-center font-bold text-white outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="misc">Autre</option>
                                            <option value="weapon">Arme</option>
                                            <option value="armor">Armure</option>
                                            <option value="potion">Potion</option>
                                            <option value="ammo">Munition</option>
                                        </select>
                                        <ChevronDown size={14} className="absolute right-2 top-2/3 -translate-y-1/2 text-slate-500 pointer-events-none" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={!newItemName.trim()}
                            className="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-colors disabled:opacity-50 shadow-lg shadow-emerald-900/40 w-full"
                        >
                            AJOUTER
                        </button>
                    </form>
                )}

                {/* Liste des objets */}
                <div className="space-y-3">
                    {(!character.items || character.items.length === 0) ? (
                        <p className="text-slate-500 text-center py-8 italic border border-dashed border-slate-700 rounded-xl">Ton sac est vide... Ajoute quelque chose !</p>
                    ) : (
                        character.items.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedItem(item)}
                                className="flex items-center justify-between bg-slate-800 p-4 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all shadow-md group cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600">
                                            <ItemIcon item={item} size={24} />
                                        </div>
                                        <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full border border-slate-900 shadow-sm">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-medium text-lg text-slate-200 group-hover:text-emerald-400 transition-colors">{item.name}</span>
                                        <span className="text-xs text-slate-500">
                                            {(getItemWeight(item) * item.quantity).toFixed(1)} kg
                                            {item.quantity > 1 && ` (${getItemWeight(item)} kg/u)`}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-2 text-slate-600 group-hover:text-emerald-500 transition-colors">
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div >

            {/* Modal Armurerie */}
            < ArmoryModal
                isOpen={showArmory}
                onClose={() => setShowArmory(false)
                }
                onAdd={(item) => handleAddItem({ preventDefault: () => { } }, item.name, 1)}
            />

            < InventoryItemModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                item={selectedItem}
                onRemove={handleRemoveItem}
            />
        </div >
    );
}