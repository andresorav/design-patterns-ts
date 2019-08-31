import { NetworkDrive } from '../adaptee/networkDrive';
import { DataSource} from '../dataSource';
import { File } from '../file';

export class NetworkDriveAdapter implements DataSource {
    public readonly name: string;
    private readonly networkDrive: NetworkDrive;

    public constructor(networkDrive: NetworkDrive) {
        this.name = `Network drive: ${networkDrive.address}`;
        this.networkDrive = networkDrive;
    }

    public listAllFiles(): File[] {
        return this.networkDrive.listFiles();
    }
}