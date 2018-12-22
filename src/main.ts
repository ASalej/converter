import { AllMagnitudesService } from './services/all-magitudes.service';
import { generateUI } from './services/generate-ui.service';

document.addEventListener('DOMContentLoaded', ()=> {
    const allMagnitudesService = new AllMagnitudesService();
    const madnitudes = allMagnitudesService.getAllMagnitudes();
    generateUI(madnitudes);

    console.log(madnitudes);
}, false);
