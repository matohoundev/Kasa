import React from "react";

export default class ApiServices {
  constructor() {
    this.url =
      // "https://alxbdo.github.io/BidaudAlexandre_11_18102021/src/datas/logements.json";
      "../datas/logements.json";
  }

  getLogements() {
    return fetch(this.url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  getLogement(id) {
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => data.find((logement) => logement.id === id))
      .catch((error) => console.log(error));
  }
}
