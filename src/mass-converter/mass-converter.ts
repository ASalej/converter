import { IConverter } from '../model';

export class MassConverter implements IConverter {
    public convert(value: number, from: string, to: string) {
        return 1;
    }
}