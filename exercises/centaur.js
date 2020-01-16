class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false
    this.crankyMeter = 0;
  };

  shoot() {
    this.incrementCrank();
    return this.shouldNot('Twang!!!', (this.cranky || this.layingDown));;
  };

  run() {
    this.incrementCrank();
    return this.shouldNot('Clop clop clop clop!!!', (this.cranky || this.layingDown));
  };

  sleep() {
    this.incrementCrank();
    this.cranky = false;
    this.crankyMeter = 0;
    return this.shouldNot('ZZZZ', this.standing);
  };

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (!this.cranky) {
      this.cranky = true;
    }
    else if (this.standing) {
      this.cranky = false;
      this.crankyMeter = 0;
    }
    else {
      return 'Not while I\'m laying down!'
    };
  };

  incrementCrank() {
    this.crankyMeter++;
    if (this.crankyMeter >= 3) {
      this.cranky = true;
    };
  };

  shouldNot(string, evaluation) {
    if (evaluation) {
      return 'NO!'
    }
    else {
      return string
    };
  };
}

module.exports = Centaur;
