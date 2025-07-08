export default class Document {
  #auteur;
  #titre;
  #statut; // disponible true, indisponible false

  constructor(auteur, titre, statut = true) {
    this.#titre = titre;
    this.#auteur = auteur;
    this.#statut = statut;
  }

  emprunter() {
    if (this.#statut) {
      this.#statut = false;
      return true;
    } else {
      console.log(`Le document "${this.#titre}" est déjà emprunté`);
      return false;
    }
  }

  rendre() {
    if (!this.#statut) {
      this.#statut = true;
    } else {
      console.log(`Le document "${this.#titre}" est déjà disponible`);
    }
  }

  get titre() {
    return this.#titre;
  }

  set titre(titre) {
    this.#titre = titre;
  }

  get auteur() {
    return this.#auteur;
  }

  set auteur(auteur) {
    this.#auteur = auteur;
  }

  get statut() {
    return this.#statut;
  }

  set statut(statut) {
    this.#statut = statut;
  }

  getType() {}
  
}
