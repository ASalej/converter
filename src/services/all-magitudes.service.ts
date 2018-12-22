import { TemperatureMagnitudes } from '../temperature-converter/temperature-converter.model';
import { DistanceMagnitudes } from '../distance-converter/distance-converter.model';
import { MassMagnitudes } from '../mass-converters/mass-converters.model';

export class AllMagnitudesService {
    public getAllMagnitudes(): string[] {
        const allMagnitudes: string[] = [];
        [
            TemperatureMagnitudes,
            MassMagnitudes,
            DistanceMagnitudes,
        ]
            .forEach(magnitudes => {
                Object.keys(magnitudes).filter(key => {
                    allMagnitudes.push(magnitudes[(key as any)])
                })
            });
        return allMagnitudes;
    }
}