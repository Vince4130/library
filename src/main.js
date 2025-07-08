import Livre from "./classes/Livre.js";
import Membre from "./classes/Membre.js";
import Bibliotheque from "./classes/Bibliotheque.js";

const library = new Bibliotheque();

// Création de livres
const shinning = new Livre("Stephen King", "Shinning", true);
const harryPotter = new Livre("J.K. Rowling", "Harry Potter et la chambre des secrets");
const leSeigneurDesAnneaux = new Livre("J.R.R. Tolkien", "Le Seigneur des Anneaux");
const lePetitPrince = new Livre("Antoine de Saint-Exupéry", "Le Petit Prince");
const leComteDeMonteCristo = new Livre("Alexandre Dumas", "Le Comte de Monte-Cristo");

// Ajout des livres à la bibliothèque
library.ajouterLivre(shinning);
library.ajouterLivre(harryPotter);
library.ajouterLivre(leSeigneurDesAnneaux);
library.ajouterLivre(lePetitPrince);
library.ajouterLivre(leComteDeMonteCristo);
library.afficherLivresDisponibles();

// Création de membres
const membre1 = new Membre(1, "Dupont", "Jean", "toto@sfr.fr");
const membre2 = new Membre(2, "Martin", "Marie", "mm@gmail.com");

// Enregistrement des membres dans la bibliothèque
library.enregistrerMembre(membre1);
library.enregistrerMembre(membre2);

library.enregistrerMembre(membre1); // Tentative d'enregistrement du même membre

// Emprunter et rendre des livres
membre1.emprunterLivre(harryPotter);
membre1.emprunterLivre(shinning);
membre2.emprunterLivre(leSeigneurDesAnneaux);
membre2.emprunterLivre(lePetitPrince);
membre1.emprunterLivre(leComteDeMonteCristo);

//membre1.listeEmprunts.map((l) => console.log(l.toString()));

/*console.log(membre2.listeEmprunts);*/

console.log(JSON.stringify(membre1.listeEmprunts, null, 2));