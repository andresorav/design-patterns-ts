export interface Greeting {
    greet(): string;
}

export abstract class AbstractGreeting implements Greeting{
    public abstract greet(): string;
}