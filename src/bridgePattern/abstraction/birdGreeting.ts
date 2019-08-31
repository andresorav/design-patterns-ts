import { AbstractGreeting } from './abstractGreeting';

export class BirdGreeting extends AbstractGreeting {
    public greet(): string {
        return 'Tweet tweet';
    }
}