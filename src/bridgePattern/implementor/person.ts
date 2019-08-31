import { AbstractAnimal } from './abstractAnimal';
import { PersonGreeting } from '../abstraction/personGreeting';

export class Person extends AbstractAnimal {
    public constructor(greeting: PersonGreeting) {
        super(greeting);
    }
}
