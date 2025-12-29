import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';

export default function Login() {
    const [pseudo, setPseudo] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!pseudo.trim()) return;

        // LE HACK : On sauvegarde juste le pseudo dans le navigateur
        localStorage.setItem('easybag-pseudo', pseudo.trim());

        // Hop, on redirige vers l'inventaire
        navigate('/inventory');
    };

    return (
        <div className="flex flex-col h-screen items-center justify-center p-6 bg-slate-900 text-white">
            <div className="mb-8 text-center animate-bounce-slow">
                <Shield size={64} className="text-emerald-500 mx-auto mb-4" />
                <h1 className="text-4xl font-bold mb-2">EasyBag</h1>
                <p className="text-slate-400">Ton inventaire D&D en poche</p>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                        Qui es-tu, aventurier ?
                    </label>
                    <input
                        type="text"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}
                        placeholder="Ex: Gandalf"
                        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        autoFocus
                    />
                </div>

                <button
                    type="submit"
                    disabled={!pseudo}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-emerald-900/20"
                >
                    Commencer l'aventure
                    <ArrowRight size={20} />
                </button>
            </form>
        </div>
    );
}