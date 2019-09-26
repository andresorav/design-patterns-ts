export interface Command {
    execute(): string;
    getMenu(): string;
}
