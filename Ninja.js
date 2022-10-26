class Ninja {
    constructor(name, health = 10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strenght = 3
    }
    sayName(){
        console.log(`My Name Is ${this.name}`);
        return this;
    }
    showStats(){
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.health}`);
        return this;
    }
    drinkSake(){
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Leonardo");
ninja1.sayName().showStats().drinkSake().showStats()

class Sensei extends Ninja {
    constructor(name){
        super(name,health=200,speed=10,strenght=10,wisdom=10);
    }
    spealWisdom(){
        console.log('There is no try, only do.');
    }
}

const newSensei = new Sensei("Splinter");
newSensei.sayName().showStats().speakWisdom();