// ------------------- imports
import $ from 'jquery';
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import pageWidgetInit from './dev_vendors/dev_widget';
// ------------------- imports###

// ------------------  import components
import { documentListeners } from './components/documentListeners';
import { selectLanguage } from './components/header';
import { slider } from './components/slider';
// ------------------  import components###

window.jQuery = $;
window.$ = $;

const styles = ['color: #fff', 'background: #cf8e1f'].join(';');
const message = 'Developed by Glivera-team https://glivera-team.com/';
// eslint-disable-next-line no-console
console.info('%c%s', styles, message);

// -------------------  dev widget
// if (GLOBAL_VARS.projectDevStatus) {
// 	pageWidgetInit();
// 	console.log(process.env.NODE_ENV);
// }
// -------------------  dev widget###

// -------------------  global variables

const readyFunc = () => {
	console.log('ready');
};

const loadFunc = () => {
	documentListeners();
	selectLanguage();
	slider();
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});
