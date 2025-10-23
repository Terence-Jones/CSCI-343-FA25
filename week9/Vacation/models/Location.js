class Location {
  constructor(id, stateId, name, numSites, foundedYear, rating, imageUrl, description) {
    this.id = id;
    this.stateId = stateId;
    this.name = name;
    this.numSites = numSites;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Average: ${this.numSites}, Rating: ${this.rating}, Discription: ${this.description}`;
  }
}

export default Location;
