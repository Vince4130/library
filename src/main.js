import Livre from "./classes/Livre.js";
import Membre from "./classes/Membre.js";
import Revue from "./classes/Revue.js";
import DVD from "./classes/DVD.js";

import Bibliotheque from "./classes/Bibliotheque.js";

// Création de la bibliothèque
const library = new Bibliotheque();

// Création de livres
const shinning = new Livre("Stephen King", "Shinning", true);
const harryPotter = new Livre("J.K. Rowling", "Harry Potter et la chambre des secrets");
const leSeigneurDesAnneaux = new Livre("J.R.R. Tolkien", "Le Seigneur des Anneaux");
const lePetitPrince = new Livre("Antoine de Saint-Exupéry", "Le Petit Prince");
const leComteDeMonteCristo = new Livre("Alexandre Dumas", "Le Comte de Monte-Cristo");

const dvd1 = new DVD("Film", "Film 1", 120, "Action");
const dvd2 = new DVD("Film", "Film 2", 150, "Aventure");

// Création de revues
const revue1 = new Revue("Revue", "Revue 1", 1);
const revue2 = new Revue("Revue", "Revue 2", 2);

// Ajout des livres à la bibliothèque
/*library.ajouterLivre(shinning);
library.ajouterLivre(harryPotter);
library.ajouterLivre(leSeigneurDesAnneaux);
library.ajouterLivre(lePetitPrince);
library.ajouterLivre(leComteDeMonteCristo);
library.afficherLivresDisponibles();*/

library.ajouterDocument(shinning);
library.ajouterDocument(harryPotter);
library.ajouterDocument(leSeigneurDesAnneaux);
library.ajouterDocument(lePetitPrince); 
library.ajouterDocument(leComteDeMonteCristo);
library.ajouterDocument(dvd1);
library.ajouterDocument(dvd2);
library.ajouterDocument(revue1);
library.ajouterDocument(revue2);

library.afficherDocumentsDisponibles();

// Création de membres
const membre1 = new Membre(1, "Dupont", "Jean", "toto@sfr.fr");
const membre2 = new Membre(2, "Martin", "Marie", "mm@gmail.com");
const membre3 = new Membre(1, "Blanca", "Vince", "v@free.fr");

// Enregistrement des membres dans la bibliothèque
library.enregistrerMembre(membre1);
library.enregistrerMembre(membre2);
library.enregistrerMembre(membre3); 


// Emprunter et rendre des livres
membre1.emprunterLivre(harryPotter);
membre1.emprunterLivre(shinning);
membre2.emprunterLivre(leSeigneurDesAnneaux);
membre2.emprunterLivre(lePetitPrince);
membre1.emprunterLivre(leComteDeMonteCristo);

membre1.rendreLivre(harryPotter);
membre1.rendreLivre(shinning);

membre1.emprunterDocument(dvd1);
membre1.emprunterDocument(revue1);

//membre1.listeEmprunts.map((l) => console.log(l.toString()));

/*console.log(membre2.listeEmprunts);*/

//library.afficherLivresDisponibles();

console.log(JSON.stringify(membre1.listeEmprunts, null, 2));