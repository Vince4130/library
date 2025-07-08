import Document from "./Document.js";

export default class Revue extends Document {
  #numero;

  constructor(titre, auteur, numero, statut = true) {
    super(titre, auteur, statut);
    this.#numero = numero;
  }

  getType() {
    return "Revue";
  }

  toJSON() {
    return {
      typeDuDocument: this.getType(),
      titre: this.titre,
      auteur: this.auteur,
      numero: this.#numero,
      statut: this.statut
    };
  }
}
