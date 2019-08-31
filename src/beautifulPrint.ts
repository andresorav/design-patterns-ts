import * as printMessage from 'print-message';

const printBox = (text: string[], messageOptions?: {}): void => {
    printMessage(text, {
        ...messageOptions,
        ...{
            border: true,
        }
    });
};

const printBlue = (text: string): void => {
    printBox([text], {
        borderColor: 'blue',
    });
};

const printYellow = (text: string[]): void => {
    printBox(text, {
        borderColor: 'yellow',
    });
};

export {
    printBlue,
    printYellow,
}
