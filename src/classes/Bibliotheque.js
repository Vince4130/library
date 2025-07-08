import Document from "./Document.js";
export default class Bibliotheque {
  #listeDocuments = []; // Liste des documents dans la bibliothèque
  #listeMembres = []; // Liste des membres de la bibliothèque

  constructor() {
    this.#listeDocuments = [];
    this.#listeMembres = [];
  }

  get listeDocuments() {
    return this.#listeDocuments;
  }


  /**
   * Description
   *
   * @method
   * @name ajouterDocument
   * @kind method
   * @memberof Bibliotheque
   * @param {any} document
   * @returns {void}
   */
  ajouterDocument(document) {
    this.#listeDocuments.push(document);
    console.log(`Le document "${document.titre}" a été ajouté à la bibliothèque`);
  }


  /**
   * Description
   *
   * @method
   * @name afficherDocumentsDisponibles
   * @kind method
   * @memberof Bibliotheque
   * @returns {void}
   */
  afficherDocumentsDisponibles() {
    
    console.log("----------LIVRES DISPONIBLES ------------");
    for (const document of this.#listeDocuments) {
      if (document.statut && document instanceof Document) {
        //console.log(document.toString() + " dans la bibliothèque");
        console.log(JSON.stringify(document, null, 2));
        console.log("-----------------------------------------");
      }
    }
  }


  /**
   * Description
   *
   * @method
   * @name chercherDocument
   * @kind method
   * @memberof Bibliotheque
   * @param {any} titre
   * @returns {any}
   */
  chercherDocument(titre) {

    if (!titre || typeof titre !== "string") {
      throw new Error("Veuillez fournir un titre valide.");
    }

    for (const document of this.#listeDocuments) {
      if (document.titre.toLowerCase() === titre.toLowerCase()) {
        return document;
      }
    }
    return null;
  }


  /**
   * Description
   * 
   * @method
   * @name enregistrerMembre
   * @kind method
   * @memberof Bibliotheque
   * @param {any} membre
   * @returns {void}
   */
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
