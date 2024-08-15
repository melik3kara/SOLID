class Mammals{
    constructor(species){
        this.species = species;
    }
    giveBirth(){
        console.log('I gave birth and I have a child :) and I am a', this.species);
    }
}

class Cat extends Mammals{
    constructor(){
        super();
        this.species = 'Cat';
    }
}

class Platypus extends Mammals{
    constructor(){
        super();
        this.species = 'Platypus';
    }
    layEggs(){
        console.log('I am Platypus my babies will hatch from the egg');
    }
}

module.exports = { Cat, Platypus };