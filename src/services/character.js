import { doc, deleteDoc, getDoc, setDoc, onSnapshot, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Écoute les changements d'un personnage en temps réel.
 * @param {string} pseudo - Le pseudo à écouter
 * @param {function} callback - La fonction à appeler quand les données changent
 * @returns {function} - La fonction pour arrêter l'écoute
 */
export const subscribeToCharacter = (pseudo, callback) => {
    const docRef = doc(db, "parties", "partie_mercredi", "inventaires", pseudo);

    return onSnapshot(docRef, (doc) => {
        if (doc.exists()) {
            callback(doc.data());
        } else {
            callback(null);
        }
    });
};

/**
 * Met à jour une devise du personnage.
 * @param {string} pseudo 
 * @param {string} currency - 'pp', 'po', 'pe', 'pa', 'pc'
 * @param {number} amount - Le montant (positif ou négatif)
 */
export const updateCurrency = async (pseudo, currency, amount) => {
    const docRef = doc(db, "parties", "partie_mercredi", "inventaires", pseudo);
    await updateDoc(docRef, {
        [currency]: increment(amount)
    });
};

/**
 * Ajoute un objet à l'inventaire.
 * @param {string} pseudo 
 * @param {string} itemName 
 * @param {number} count - Quantité à ajouter (défaut 1)
 */
export const addItem = async (pseudo, itemName, count = 1) => {
    if (!itemName || !itemName.trim()) return;
    const cleanName = itemName.trim();
    const quantityToAdd = parseInt(count) || 1;

    const docRef = doc(db, "parties", "partie_mercredi", "inventaires", pseudo);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        const items = data.items || [];

        // On cherche si l'objet existe déjà (insensible à la casse)
        const existingItemIndex = items.findIndex(i => i.name.toLowerCase() === cleanName.toLowerCase());

        if (existingItemIndex >= 0) {
            // On augmente la quantité
            items[existingItemIndex].quantity += quantityToAdd;
        } else {
            // On crée le nouvel objet
            items.push({ name: cleanName, quantity: quantityToAdd });
        }

        await updateDoc(docRef, { items });
    }
};

/**
 * Retire un objet de l'inventaire (baisse la quantité ou supprime).
 * @param {string} pseudo 
 * @param {string} itemName 
 */
export const removeItem = async (pseudo, itemName) => {
    const docRef = doc(db, "parties", "partie_mercredi", "inventaires", pseudo);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        let items = data.items || [];

        const existingItemIndex = items.findIndex(i => i.name === itemName);

        if (existingItemIndex >= 0) {
            if (items[existingItemIndex].quantity > 1) {
                items[existingItemIndex].quantity -= 1;
            } else {
                items = items.filter((_, index) => index !== existingItemIndex);
            }

            await updateDoc(docRef, { items });
        }
    }
};

export const createCharacter = async (pseudo) => {

    if (!pseudo || !pseudo.trim()) throw new Error("Pseudo requis");

    const cleanPseudo = pseudo.trim();
    const docRef = doc(db, "parties", "partie_mercredi", "inventaires", cleanPseudo);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        throw new Error("Désolé, ce pseudo est déjà pris !");
    }

    await setDoc(docRef, {
        pseudo: cleanPseudo,
        items: [],
        pp: 0,
        po: 0,
        pe: 0,
        pa: 0,
        pc: 0,
        created_at: new Date()
    });

    return cleanPseudo;
};

/**
 * Supprime un personnage de la base de données.
 * @param {string} pseudo - Le pseudo du personnage à supprimer.
 * @returns {Promise<void>}
 */
export const deleteCharacter = async (pseudo) => {
    if (!pseudo) throw new Error("Pseudo requis");

    const charRef = doc(db, "parties", "partie_mercredi", "inventaires", pseudo);

    await deleteDoc(charRef);
};
