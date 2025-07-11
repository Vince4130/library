import Document from "./Document.js";
export default class Livre extends Document {
  
  #nombrePage;
  /*#titre;
  #auteur;
  #statut;*/ 
  // disponible true, indisponible false

  constructor(titre, auteur, nombrePage, statut = true) {
    super(titre, auteur, statut);
    this.#nombrePage = nombrePage;
  }

  getType() {
    return "Livre";
  }

  toJSON() {
    return {
      typeDuDocument: this.getType(),
      titre: this.titre,
      auteur: this.auteur,
      nombrePage: this.#nombrePage,
      statut: this.statut
    };
  }

  get nombrePage() {
    return this.#nombrePage;
  }
  
  /*emprunter() {
    if (this.#statut) {
      this.#statut = false;
      return true;
    } else {
      console.log(`Le livre "${this.#titre}" est déjà emprunté`);
      return false;
    }
  }

  rendre() {
    if (!this.#statut) {
      this.#statut = true;
    } else {
      console.log(`Le livre "${this.#titre}" est déjà disponible`);
    }
  }*/

  /*get titre() {
    return this.#titre;
  }

  set titre(tittle) {
    this.#titre = tittle;
  }

  get auteur() {
    return this.#auteur;
  }

  set auteur(author) {
    this.#auteur = author;
  }

  get statut() {
    return this.#statut;
  }

  set statut(status) {
    this.#statut = status;
  }

  toString() {
    return `${this.#titre} de ${this.#auteur} est ${this.#statut ? "disponible" : "indisponible"}`;
  }

 toJSON() {
    return {
      titre: this.#titre,
      auteur: this.#auteur,
      statut: this.#statut,
    };
  }*/
}
