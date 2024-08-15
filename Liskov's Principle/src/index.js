/**
 * @author Melike Kara
 */
const { Cat, Platypus } = require("./mammals");

const kitty = new Cat();

const playtpus = new Platypus();

kitty.giveBirth();
playtpus.layEggs();

// playtpus cannot give birth even though it is a mammal
// so it should not call the giveBirth() function
// it violates the Liskov's substition principle
playtpus.giveBirth();