import { AbstractAnimal } from './abstractAnimal';
import { BirdGreeting } from '../abstraction/birdGreeting';

export class Bird extends AbstractAnimal {
    public constructor(greeting: BirdGreeting) {
        super(greeting);
    }
}
