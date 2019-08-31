import { Mp3Player } from './mp3Player';
import { NetworkDriveAdapter } from './adapter/networkDriveAdapter';
import { NetworkDrive } from './adaptee/networkDrive';
import { printBlue, printYellow } from '../beautifulPrint';

const patternExample = (): void => {
    printBlue('Adapter Pattern');

    const networkDriveAdapter = new NetworkDriveAdapter(new NetworkDrive());
    const mp3Player = new Mp3Player();

    printYellow([
        mp3Player.playRandomSong(),
        mp3Player.setSource(networkDriveAdapter).playRandomSong(),
        mp3Player.resetSource().playRandomSong(),
    ]);
};

if(require.main == module)
    patternExample();

export {
    patternExample,
}