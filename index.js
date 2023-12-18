function Somme(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return "Erreur : veuillez entrer deux nombres!";
    }
    return x+y;
}