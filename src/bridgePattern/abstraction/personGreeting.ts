import { AbstractGreeting } from './abstractGreeting';

export class PersonGreeting extends AbstractGreeting {
    public greet(): string {
        return 'Hello friend';
    }
}