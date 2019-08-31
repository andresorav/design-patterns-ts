import { File } from '../file';
import { DataSource } from '../dataSource';

export class MicroSd implements DataSource {
    public readonly name = 'MicroSd: favourite songs';

    public files: File[] = [{
        name: 'secret-file.jpg',
    }, {
        name: 'alphaville_forever_young.mp3',
        artist: 'Alphaville',
        title: 'Forever young',
    }, {
        name: 'queen_a_kind_of_magic.mp3',
        artist: 'Queen',
        title: 'A Kind of Magic',
    }, {
        name: 'the_rolling_stones_paint_it_black.mp3',
        artist: 'The Rolling Stones',
        title: 'Paint it, Black',
    }];

    public listAllFiles(): File[] {
        return this.files;
    }
}
