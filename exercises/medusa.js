class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = new Array;
  };

  stare(victim) {
    var victimsCount = this.statues.length >= 3;
    if (victimsCount) {
        this.statues[0].stoned = false;
        this.statues.shift();
    };
    victim.stoned = true;
    this.statues.push(victim);
  };
}

module.exports = Medusa;
