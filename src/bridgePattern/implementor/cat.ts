import { AbstractAnimal } from './abstractAnimal';
import { CatGreeting } from '../abstraction/catGreeting';

export class Cat extends AbstractAnimal {
    public constructor(greeting: CatGreeting) {
        super(greeting);
    }
}
