class Human {
  constructor(name, home) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  };

  noticesOgre() {
    if (this.encounterCounter != 0) {
      return this.encounterCounter % 3 === 0
    }
    else {
      return false
    }
  };
}

module.exports = Human;
