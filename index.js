import { print } from "./js/lib.js";

class Creature {
  constructor(species, name, gender, phrase) {
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.phrase = phrase;
    this.friends = [];
    this.proporties = ["species", "name", "gender"];
  }

  getFriends() {
    if (this.friends.length > 0) {
      return "; " + this.friends.map((friend) => friend.name).join(", ");
    }
    return "; " + "no friends";
  }

  setFriends(newFriends) {
    this.friends = [...newFriends];
  }

  getSaying() {
    return "; " + this.phrase;
  }

  setSaying(newPhrase) {
    this.phrase = newPhrase;
  }

  addProporties(...newProporties) {
    this.proporties = [...this.proporties, ...newProporties];
  }

  getProportiesData() {
    return this.proporties.map((prop) => this[prop]).join("; ");
  }

  getInfo() {
    return this.getProportiesData() + this.getFriends() + this.getSaying();
  }
}

class Animal extends Creature {
  constructor(species, name, gender, phrase, legs) {
    super(species, name, gender, phrase);
    this.legs = legs;
    this.addProporties("legs");
  }
}

class Human extends Animal {
  constructor(name, gender, phrase) {
    super("human", name, gender, phrase, 2);
    this.hands = 2;
    this.addProporties("hands");
  }
}

class Dog extends Animal {
  constructor(name, gender, phrase) {
    super("dog", name, gender, phrase, 4);
  }
}

class Cat extends Animal {
  constructor(name, gender, phrase) {
    super("cat", name, gender, phrase, 4);
  }
}

class CatWoman extends Human {
  constructor(name, link) {
    super(name, "female");
    this.link = link;
    this.species = "cat-woman";
    this.phrase = link.phrase;
  }
}

const cat = new Cat("Sandra", "female", "meow!")
const dog = new Dog("Lego", "male", "woof!")
const woman = new Human("Anna", "female", "Hi!")
const man =new Human("Bob", "male", "Hello!")
const catWoman= new CatWoman("Marta", cat)

woman.setFriends([man, cat])
cat.setFriends([woman, dog])
catWoman.setFriends([man, cat])

man.setSaying("Goodbye!")

const inhabitants = [cat, dog, woman, man, catWoman]

inhabitants.forEach(creature => print(creature.getInfo()))
