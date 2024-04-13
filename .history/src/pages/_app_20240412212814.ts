import type { App } from 'vue';
import Popper from "vue3-popper"; 
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';

export default (app: App) => { 
    app.component("Popper", Popper);
    app.use( Vue3Toasity,
  {
    autoClose: 3000,
    theme: 'colored',
    
  } as ToastContainerOptions)
  
}

//import { NeatConfig, NeatGradient } from "@firecms/neat";

// Define your config
//export const config: NeatConfig = {
    colors: [
        {
            color: "#FF5373",
            enabled: true
        },
        {
            color: "#FFC858",
            enabled: true
        },
        {
            color: "#17E7FF",
            enabled: true
        },
        {
            color: "#6D3BFF",
            enabled: true
        },
        {
            color: "#f5e1e5",
            enabled: false
        }
    /* ],
  //  speed: 4,
  //  horizontalPressure: 4,
  //  verticalPressure: 5,
    waveFrequencyX: 2,
    waveFrequencyY: 3,
    waveAmplitude: 5,
    shadows: 0,
    highlights: 2,
    saturation: 7,
    wireframe: false,
    colorBlending: 6,
    backgroundColor: "#003FFF",
    backgroundAlpha: 1
};
 */
/* 
// define an element with id="gradient" in your html
const neat = new NeatGradient({
    ref: document.getElementById("gradient"),
    ...config
});
 */