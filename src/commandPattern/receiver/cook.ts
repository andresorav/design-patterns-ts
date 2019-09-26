import { Receiver } from './receiver';
import { Command } from '../commands/command';

export class Cook implements Receiver {
    public prepareMeal(order: Command): string {
        return `# Cook starts preparing meal: ${order.getMenu()}`;
    }
}
