import { IConverter } from '../model';

export class TemperatureConverter implements IConverter {
    public convert(value: number, from: string, to: string) {
        return 1;
    }
}