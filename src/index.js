import { getTime, sayHello } from './utils';
import './global_styles.css'

sayHello();
document.getElementById("app").innerHTML = getTime();