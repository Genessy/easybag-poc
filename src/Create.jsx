import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';
import { createCharacter } from './services/character';

export default function Create() {
    const [pseudo, setPseudo] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCreate = async (e) => {
        e.preventDefault();

        if (!pseudo.trim()) return;

        setLoading(true);
        setError('');

        try {
            const createdPseudo = await createCharacter(pseudo);
            // Succès : on enregistre et on part
            localStorage.setItem('easybag-pseudo', createdPseudo);
            navigate('/inventory');
        } catch (err) {
            // Erreur : on affiche le message
            console.error(err);
            setError(err.message || "Erreur lors de la création.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen bg-slate-900 text-white p-6 flex flex-col items-center justify-center">
            <Link to="/" className="absolute top-6 left-6 text-slate-400 hover:text-white transition-colors">
                <ArrowLeft size={24} />
            </Link>

            <div className="w-full max-w-xs space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-emerald-400">Nouveau Joueur</h2>
                    <p className="text-slate-400 text-sm">Prépare ton paquetage</p>
                </div>

                <form onSubmit={handleCreate} className="space-y-4">
                    <input
                        type="text"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}
                        placeholder="Choisis un pseudo"
                        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-emerald-500 outline-none"
                        autoFocus
                    />

                    {error && (
                        <div className="text-red-300 text-sm bg-red-900/30 p-3 rounded flex items-center gap-2">
                            <AlertCircle size={16} /> {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading || !pseudo}
                        className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-bold flex justify-center items-center gap-2 disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <UserPlus size={20} />}
                        Créer le personnage
                    </button>
                </form>
            </div>
        </div>
    );
}