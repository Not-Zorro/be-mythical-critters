class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = new Array;
    this.huntsWhiteWalkers = true;
  };

  protect(stark) {
    if (stark.location === this.home) {
      if (this.starksToProtect.length < 2){
        this.huntsWhiteWalkers = false;
        stark.safe = true;
        this.starksToProtect.push(stark);
      };
    };
  };

  leave(stark) {
    this.starksToProtect.splice(this.starksToProtect.indexOf(stark));
    stark.safe = false;
  };
}

module.exports = Direwolf;
