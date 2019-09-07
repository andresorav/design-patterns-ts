import { printYellow } from '../beautifulPrint';
import { Person } from './implementor/person';
import { PersonGreeting } from './abstraction/personGreeting';
import { CatGreeting } from './abstraction/catGreeting';
import { BirdGreeting } from './abstraction/birdGreeting';
import { Bird } from './implementor/bird';
import { Cat } from './implementor/cat';

const patternExample = (): void => {
    const animals = [
        new Person(new PersonGreeting()),
        new Cat(new CatGreeting()),
        new Bird(new BirdGreeting()),
    ];

    const greetings = animals.map((animal): string => animal.greet());

    printYellow(greetings);
};

if (require.main === module) {
    patternExample();
}

export {
    patternExample,
}
