import { AllMagnitudesService } from './services/all-magitudes.service';
import { generateUI } from './services/generate-ui.service';

const calculateButton = document.getElementById('calculateButton');

document.addEventListener('DOMContentLoaded', ()=> {
    const allMagnitudesService = new AllMagnitudesService();
    const magnitudes = allMagnitudesService.getAllMagnitudes();
    generateUI(magnitudes);

    console.log(magnitudes);
    calculateButton.addEventListener('click', getResultValue);
}, false);

function getResultValue(): void {
    const startValue = getValue();
    const fromUnit = getFromUnit();
    const toUnit = getToUnit();
    console.log(startValue, fromUnit, toUnit);
}

function getValue(): number {
    return +(document.getElementById('value') as any).value;
}

function getFromUnit(): string {
    return document.getElementById('fromDropdown').innerText;
}

function getToUnit(): string {
    return document.getElementById('toDropdown').innerText;
}
