export default class Bibliotheque {
  #listeLivres = []; // Liste des livres dans la bibliothèque
  #listeMembres = []; // Liste des membres de la bibliothèque

  constructor() {
    this.#listeLivres = [];
    this.#listeMembres = [];
  }

  get listeLivres() {
    return this.#listeLivres;
  }

  /**
   * Description
   *
   * @method
   * @name ajouterLivre
   * @kind method
   * @memberof Bibliotheque
   * @param {any} livre
   * @returns {void}
   */
  ajouterLivre(livre) {
    this.#listeLivres.push(livre);
    console.log(`Le livre "${livre.titre}" a été ajouté à la bibliothèque`);
  }

  /**
   * Description
   *
   * @method
   * @name afficherLivresDisponibles
   * @kind method
   * @memberof Bibliotheque
   * @returns {void}
   */
  afficherLivresDisponibles() {
    for (const livre of this.#listeLivres) {
      if (livre.statut) {
        console.log(livre.toString() + " dans la bibliothèque");
      }
    }
  }

  /**
   * Description
   *
   * @method
   * @name chercherLivre
   * @kind method
   * @memberof Bibliotheque
   * @param {any} titre
   * @returns {any}
   */
  chercherLivre(titre) {
    if (!titre || typeof titre !== "string") {
      console.log("Veuillez fournir un titre valide.");
      return null;
    }

    for (const livre of this.#listeLivres) {
      if (livre.titre.toLowerCase() === titre.toLowerCase()) {
        return livre;
      }
    }
    return null;
  }

  enregistrerMembre(membre) {
    if (!this.#listeMembres.includes) {
      this.#listeMembres.push(membre);
      console.log(`Le membre ${membre.getNomComplet()} a été enregistré dans la bibliothèque`);
    } else {
      console.log(`Le membre ${membre.getNomComplet()} est déjà enregistré dans la bibliothèque`);
    }
  }
  /**
   * Description
   *
   * @method
   * @name chercherMembre
   * @kind method
   * @memberof Bibliotheque
   * @param {any} id
   * @returns {any}
   */
  chercherMembre(id) {
    if (!id || typeof id !== "number") {
      throw new Error("Veuillez fournir un ID valide.");
    }

    for (const membre of this.#listeMembres) {
      if (membre.id === id) {
        return membre;
      }
    }

    console.log(`Aucun membre trouvé avec l'ID ${id}`);
    return null;
  }
}
