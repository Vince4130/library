import Document from "./Document";

export default class DVD extends Document {
  constructor(titre, auteur, statut = true) {
    super(titre, auteur, statut);
  }

  getType() {
    return "DVD";
  }
}
