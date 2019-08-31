import { AbstractGreeting } from './abstractGreeting';

export class CatGreeting extends AbstractGreeting {
    public greet(): string {
        return 'Meow';
    }
}