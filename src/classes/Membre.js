export default class Membre {
  #listeEmprunts = []; // Liste des livres empruntés par le membre
  #id;
  #nom;
  #prenom;
  #email;

  constructor(id, nom, prenom, email) {
    this.#id = id;
    this.#nom = nom;
    this.#prenom = prenom;
    this.#email = email;
    this.#listeEmprunts = [];
  }

  get listeEmprunts() {
    return this.#listeEmprunts;
  }

  emprunterLivre(livre) {
    if (livre.emprunter()) {
      this.#listeEmprunts.push(livre);
      console.log(
        `Le livre "${livre.titre}" a été emprunté par ${this.getNomComplet()}`
      );
      return true;
    } else {
      console.log(`Le livre "${livre.titre}" est déjà emprunté`);
      return false;
    }
  }

  rendreLivre(livre) {
    const index = this.#listeEmprunts.indexOf(livre);

    if (index !== -1) {
      this.#listeEmprunts[index].rendre();
      this.#listeEmprunts.splice(index, 1);
      console.log(`Le livre "${livre.titre}" a été rendu par ${this.getNomComplet()}`);
      return true;
    } else {
      console.log(`Le livre "${livre.titre}" n'a pas été trouvé dans les emprunts de ${this.getNomComplet()}`);
      return false;
    }
  }
  
  /*rendreLivre(livre) {
    for (let i = 0; i < this.#listeEmprunts.length; i++) {
      if (this.#listeEmprunts[i].titre === livre.titre) {
        this.#listeEmprunts[i].rendre();
        this.#listeEmprunts.splice(i, 1);
        console.log(`Le livre "${livre.titre}" a été rendu par ${this.getNomComplet()}`);
        return true;
      }
    }
    console.log(`Le livre "${livre.titre}" n'a pas été trouvé dans les emprunts de ${this.getNomComplet()}`);
    return false;
  }*/

  get nom() {
    return this.#nom;
  }

  set nom(nom) {
    this.#nom = nom;
  }

  get prenom() {
    return this.#prenom;
  }
  set prenom(prenom) {
    this.#prenom = prenom;
  }
  get email() {
    return this.#email;
  }
  set email(email) {
    this.#email = email;
  }

  /**
   * Retourne le nom complet du membre
   * @returns {string} Le nom complet du membre
   */
  getNomComplet() {
    return `${this.prenom} ${this.nom}`;
  }

  toJSON() {
    return {
      nom: this.#nom,
      prenom: this.#prenom,
      email: this.#email,
      listeEmprunts: this.#listeEmprunts.map((livre) => livre.toJSON()),
    };
  }
}
