import { Link } from 'react-router-dom';
import { UserCheck, UserPlus, Backpack } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex flex-col h-screen items-center justify-center p-6 bg-slate-900 text-white">

            {/* Logo et Titre */}
            <div className="mb-12 text-center animate-fade-in-down">
                <div className="bg-emerald-500/10 p-6 rounded-full inline-block mb-6 shadow-lg shadow-emerald-500/20">
                    <Backpack size={64} className="text-emerald-500" />
                </div>
                <h1 className="text-5xl font-bold mb-2 tracking-tight">EasyBag</h1>
                <p className="text-slate-400 text-lg">L'aventure commence ici</p>
            </div>

            {/* Les 2 Boutons de navigation */}
            <div className="flex flex-col gap-4 w-full max-w-xs">

                {/* Bouton SE CONNECTER */}
                <Link
                    to="/login"
                    className="group relative flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white p-5 rounded-xl transition-all hover:scale-105"
                >
                    <UserCheck className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    <span className="font-bold text-lg">J'ai déjà un sac</span>
                </Link>

                {/* Bouton CRÉER */}
                <Link
                    to="/create"
                    className="group relative flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-900/40"
                >
                    <UserPlus className="text-white" />
                    <span className="font-bold text-lg">Nouveau Perso</span>
                </Link>

            </div>

            <p className="mt-12 text-slate-600 text-sm font-mono">Genessy • v1.0</p>
        </div>
    );
}