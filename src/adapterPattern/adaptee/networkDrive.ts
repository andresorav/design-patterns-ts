import { File } from '../file';

export class NetworkDrive {
    public readonly address = '//192.168.1.111/music';

    public files: File[] = [{
        name: 'random-file.dot',
    }, {
        name: 'robert_miles_children.mp3',
        artist: 'Robert Miles',
        title: 'Children',
    }, {
        name: 'enya_caribbean_blue.mp3',
        artist: 'Enya',
        title: 'Caribbean Blue',
    }, {
        name: 'engima_sadness.mp3',
        artist: 'Enigma',
        title: 'Sadness',
    }, {
        name: 'todo.txt',
    }];

    public listFiles(): File[] {
        return this.files;
    }
}
