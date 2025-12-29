import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Inventory() {
    const navigate = useNavigate();
    const [pseudo, setPseudo] = useState('');

    useEffect(() => {
        // 1. On vérifie si l'utilisateur est connecté
        const storedPseudo = localStorage.getItem('easybag-pseudo');
        if (!storedPseudo) {
            navigate('/'); // Si pas de pseudo, retour à l'accueil
        } else {
            setPseudo(storedPseudo);
        }
    }, [navigate]);

    return (
        <div className="min-h-screen bg-slate-900 text-white p-4">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
                <Shield className="text-emerald-500" />
                <h1 className="text-xl font-bold">Sac de {pseudo}</h1>
            </div>
            <p className="text-slate-400 text-center mt-10">Inventaire vide (pour l'instant)...</p>
        </div>
    );
}