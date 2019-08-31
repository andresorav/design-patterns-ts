import { AbstractGreeting, Greeting } from '../abstraction/abstractGreeting';

interface Animal {
    greet(): string;
}

export abstract class AbstractAnimal implements Animal {
    private greeting: AbstractGreeting;

    protected constructor(greeting: Greeting) {
        this.greeting = greeting;
    }

    public greet(): string {
        return `${this.constructor.name} says: "${this.greeting.greet()}"`;
    }
}