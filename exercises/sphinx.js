class Sphinx {
  constructor() {
    this.riddles = new Array;
    this.heroesEaten = 0;
  };

  collectRiddle(riddle) {
    if (this.riddles.length > 2) {
      this.riddles.shift();
    };
    this.riddles.push(riddle);
  };

  attemptAnswer(answer) {
    let riddleFound = this.riddles.find(obj => obj.answer === answer)
    if (riddleFound != undefined) {
      this.riddles.splice(this.riddles.indexOf(riddleFound), 1);
      if (this.riddles.length === 0) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${riddleFound.answer}\"???`
      };
      return 'That wasn\'t that hard, I bet you don\'t get the next one';
    }
    else {
      this.heroesEaten++;
    };
  };
}

module.exports = Sphinx;
