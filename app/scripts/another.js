//This .js file is where I'll need to define 3
// javascript classes and have them interact
// with each other.




var altima = {
  name: 'altima',
  locked: false,
  trunkContents: ['umbrella', 'jumperCables', 'flashlight'],
  hitAtree: function(aPerson, aTree){
    aPerson.haveKeys=false;
    aTree.hitByCar = true;
    aTree.height = aTree.height - 50;
    this.trunkContents.pop();
    aPerson.treesIveHit.push(aTree.type);
    console.log("oh noes! " + aPerson.name + " just hit a " + aTree.type + " tree.")
    aTree.speak();
  },
  speak: function() {
    console.log('Hi, my name is', this.name, 'and I am');
    if (!this.locked) {console.log('not locked')}
      else {console.log('locked')};
  }

}

var joshua = {
  name: 'joshua',
  haveKeys: true,
  treesIveHit: [],
  hitAtree: function(aCar, aTree){
    this.haveKeys=false;
    aTree.hitByCar = true;
    aTree.height = aTree.height - 50;
    this.treesIveHit.push(aTree.type);
    console.log("oh noes! " + this.name + " just hit a " + aTree.type + " tree.")
    aTree.speak();
  },
  lock: function(aCar) {
    if (this.haveKeys) {
      aCar.locked = true;
      console.log(aCar.name + " was locked");
    }
    else
      console.log("you don't have your keys!");
  },
  unlock: function(aCar) {
    if (this.haveKeys) {
      aCar.locked = false;
      console.log(aCar.name + " was unlocked");
    }
    else
      console.log("you don't have your keys!");
  },
  goFindKeys: function(){
    this.haveKeys = true;
    console.log('oh, here they are!');
  },
  speak: function() {
    console.log('Hi, my name is', this.name);
    if (this.haveKeys) {
      console.log('and I have my keys!');
    }
    else
    console.log('and I need to go find my keys!');
  }
}

var pineTree = {
  type: 'pine',
  hitByCar: false,
  height: 100,
  speak: function(){
    if(this.hitByCar){console.log("I've been hit!")};
  }
}

var oakTree = {
  type: 'oak',
  hitByCar: false,
  height: 80,
  speak: function(){
    if(this.hitByCar){console.log("I've been hit!")};
  }
}

