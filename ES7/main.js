import div, { add } from './Module_Sample'; //requireJs
//OR
import * as mathLib from './Module_Sample';
//import div from './Module_Sample';

add(35, 30);
mathLib.sub(30, 35);
div(200, 66.6);


// npm install package-name
// npm install package-name@version
// npm install package-name - flag 
//[-g global level or system level installation]
//[-S Project level installation]
//[-D Project level development dependency]
// --unsafe-perm 