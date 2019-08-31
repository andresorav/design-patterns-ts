import { DataSource } from './dataSource';
import { File } from './file';
import { MicroSd } from './adaptee/microSd';

interface Mp3File extends File {
    name: string;
    artist: string;
    title: string;
}

export class Mp3Player {
    private readonly defaultSource = new MicroSd();
    private selectedFile: Mp3File;
    private source: DataSource;
    private playlist: Mp3File[];

    public constructor() {
        this.resetSource();
    }

    public resetSource(): this {
        this.setSource(this.defaultSource);
        return this;
    }

    public setSource(source: DataSource): this {
        this.source = source;
        this.updatePlaylist();

        return this;
    }

    public playRandomSong(): string {
        this.selectedFile = this.playlist[Math.floor(Math.random() * this.playlist.length)];
        return `${this.source.name} > ${this.selectedFile.artist} - ${this.selectedFile.title}`;
    }

    private updatePlaylist(): void {
        const allFiles = this.source.listAllFiles();

        this.playlist = allFiles.filter((file: File): boolean => {
            return file.name.endsWith('.mp3');
        }) as Mp3File[];
    }
}
