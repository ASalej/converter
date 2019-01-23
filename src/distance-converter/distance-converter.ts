import { IConverter } from '../model';
import { DistanceMagnitudes } from './distance-converter.model';

// const DISTANCE_MAPPING = {
//     `${DistanceMagnitudes.Metre}-${DistanceMagnitudes.Mile}`: 5,
// };
//
// const labels = [
//     `${DistanceMagnitudes.Metre}-${DistanceMagnitudes.Mile}`,
//     `${DistanceMagnitudes.Metre}-${DistanceMagnitudes.Verst}`,
//     `${DistanceMagnitudes.Mile}-${DistanceMagnitudes.Verst}`,
//     `${DistanceMagnitudes.Mile}-${DistanceMagnitudes.Metre}`,
//     `${DistanceMagnitudes.Mile}-${DistanceMagnitudes.Metre}`,
// ];

export class DistanceConverter implements IConverter {
    public convert(value: number, from: string, to: string) {
        return 1;
    }
}