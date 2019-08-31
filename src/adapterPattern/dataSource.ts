import { File } from './file';

export interface DataSource {
    readonly name: string;
    listAllFiles(): File[];
}
