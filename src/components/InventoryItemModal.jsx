import { useState, useEffect } from 'react';
import { X, Trash2, Sword, Shield, FlaskConical, Target, Package, Scale } from 'lucide-react';
import { getItemDetails, getItemWeight, ItemIcon } from '../utils/itemHelpers';

export default function InventoryItemModal({ isOpen, onClose, item, onRemove }) {
    const [removeQty, setRemoveQty] = useState(1);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        if (item) {
            setDetails(getItemDetails(item));
            setRemoveQty(1);
        }
    }, [item]);

    if (!isOpen || !item) return null;

    const totalWeight = (getItemWeight(item) * item.quantity).toFixed(1);
    const unitWeight = getItemWeight(item);

    const handleRemove = () => {
        onRemove(item, removeQty);
        onClose();
    };

    const handleRemoveAll = () => {
        onRemove(item, item.quantity);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-slate-900 w-full max-w-md rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

                {/* Checkered Background Header */}
                <div className="relative h-32 bg-slate-800 flex items-center justify-center border-b border-slate-700 overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '24px 24px'
                    }}></div>
                    <div className="relative z-10 p-4 bg-slate-900 rounded-2xl border border-slate-700 shadow-xl">
                        <ItemIcon item={item} size={48} />
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-slate-900/50 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors border border-slate-700"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 overflow-y-auto no-scrollbar">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-white mb-1">{item.name}</h2>
                        <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                            {details?.category ? (
                                <span className="uppercase tracking-wider font-semibold text-emerald-500">{details.type || details.category}</span>
                            ) : (
                                <span className="uppercase tracking-wider font-semibold">Objet</span>
                            )}
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <Scale size={14} />
                                {totalWeight} kg
                            </span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    {details && (
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {details.damage && (
                                <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                                    <span className="text-xs text-slate-500 uppercase font-bold block mb-1">Dégâts</span>
                                    <span className="text-white font-mono font-bold text-lg">{details.damage}</span>
                                </div>
                            )}
                            {details.ac && (
                                <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                                    <span className="text-xs text-slate-500 uppercase font-bold block mb-1">Classe d'armure</span>
                                    <div className="flex items-center gap-2">
                                        <Shield size={16} className="text-blue-400" />
                                        <span className="text-white font-bold">{details.ac}</span>
                                    </div>
                                </div>
                            )}
                            {details.properties && details.properties.length > 0 && (
                                <div className="col-span-2 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                                    <span className="text-xs text-slate-500 uppercase font-bold block mb-2">Propriétés</span>
                                    <div className="flex flex-wrap gap-2">
                                        {details.properties.map(p => (
                                            <span key={p} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded border border-slate-600">
                                                {p}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {details.mastery && (
                                <div className="col-span-2 bg-purple-900/20 p-3 rounded-xl border border-purple-900/40">
                                    <span className="text-xs text-purple-400 uppercase font-bold block mb-1">Maîtrise d'arme</span>
                                    <span className="text-purple-200 font-medium">{details.mastery}</span>
                                </div>
                            )}
                            {details.effect && (
                                <div className="col-span-2 bg-emerald-900/20 p-3 rounded-xl border border-emerald-900/40">
                                    <span className="text-xs text-emerald-400 uppercase font-bold block mb-1">Effet</span>
                                    <span className="text-emerald-200 italic">{details.effect}</span>
                                </div>
                            )}
                            {details.description && (
                                <div className="col-span-2 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 text-sm text-slate-400 italic">
                                    {details.description}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Quantity Manager */}
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-bold text-slate-300">Quantité en sac</span>
                            <span className="text-xl font-bold text-emerald-400">{item.quantity}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-700 flex-1">
                                <button
                                    onClick={() => setRemoveQty(Math.max(1, removeQty - 1))}
                                    className="p-2 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    max={item.quantity}
                                    value={removeQty}
                                    onChange={(e) => setRemoveQty(Math.min(item.quantity, Math.max(1, parseInt(e.target.value) || 1)))}
                                    className="bg-transparent text-center w-full font-bold text-white outline-none"
                                />
                                <button
                                    onClick={() => setRemoveQty(Math.min(item.quantity, removeQty + 1))}
                                    className="p-2 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={handleRemove}
                                className="bg-red-600 hover:bg-red-500 text-white p-3 rounded-xl font-bold transition-all shadow-lg flex-1 flex items-center justify-center gap-2"
                            >
                                <Trash2 size={18} />
                                <span>Retirer</span>
                            </button>
                        </div>
                        <button
                            onClick={handleRemoveAll}
                            className="w-full mt-3 py-2 text-xs font-bold text-slate-500 hover:text-red-400 transition-colors uppercase tracking-wider"
                        >
                            Tout retirer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
