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
      .then((data) => {
        const logement = data.find((logement) => logement.id === id);
        if (!logement) {
          window.location.href = "/404";
        }
        return logement;
      })
      .catch((error) => console.log(error));
  }
}
