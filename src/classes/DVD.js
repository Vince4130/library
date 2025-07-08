import Document from "./Document";

export default class DVD extends Document {
  
  #duree;

  constructor(titre, auteur, duree, statut = true) {
    super(titre, auteur, statut);
    this.#duree = duree; // Durée du DVD
  }

  getType() {
    return "DVD";
  }

  toJSON() {
    return {
        typeDuDocument: this.getType(),
        titre: this.titre,
        auteur: this.auteur,
        duree: this.#duree,
        statut: this.statut
    };
  }
}
