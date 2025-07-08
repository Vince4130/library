import Document from "./Document";

export default class Revue extends Document {

#numero;

  constructor(titre, auteur, statut = true, numero) {
    super(titre, auteur, statut);
    this.#numero = numero;
  }

  getType() {
    return "Revue";
  }
}
