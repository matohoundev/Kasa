export default class ApiServices {
  constructor() {
    this.urlForHome = "./data/logements.json";
    this.urlForAccommodation = "../data/logements.json";
  }

  getLogements() {
    return fetch(this.urlForHome)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  getLogement(id) {
    return fetch(this.urlForAccommodation)
      .then((response) => response.json())
      .then((data) => data.find((logement) => logement.id === id))
      .catch((error) => console.log(error));
  }
}
