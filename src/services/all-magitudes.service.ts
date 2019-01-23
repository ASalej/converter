import { TemperatureMagnitudes } from '../temperature-converter/temperature-converter.model';
import { DistanceMagnitudes } from '../distance-converter/distance-converter.model';
import { MassMagnitudes } from '../mass-converter/mass-converters.model';

export enum Measures {
    TemperatureMagnitudes = 'TemperatureMagnitudes',
    MassMagnitudes = 'MassMagnitudes',
    DistanceMagnitudes = 'DistanceMagnitudes',
}

export class AllMagnitudesService {
    private allUnits: any[]  = [
        TemperatureMagnitudes,
        MassMagnitudes,
        DistanceMagnitudes,
    ];

    public getAllMagnitudes(): string[] {
        const allMagnitudes: string[] = [];
        this.allUnits
            .forEach(magnitudes => {
                Object.keys(magnitudes).filter(key => {
                    allMagnitudes.push(magnitudes[(key as any)])
                })
            });
        return allMagnitudes;
    }

    public getMeasureForUnits(unit1: string, unit2: string): string | null {
        const measure = this.allUnits.filter(unit => {
            return unit[unit1] && unit[unit2];
        })[0];
        return measure ? Object.keys(measure)[0] : null;
    }
}