// ------------------- imports
import $ from 'jquery';
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady,	pageLoad } from 'utils';
import pageWidgetInit from './dev_vendors/dev_widget';
// ------------------- imports###

// ------------------  import components
import { header } from './components/header';
import { slider } from './components/slider';
import { search } from './components/search';
// ------------------  import components###

// // ------------------  import libs
// import './libs/slick.min';
// // ------------------  import libs###

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
	header(GLOBAL_VARS);
	slider(GLOBAL_VARS);
	search(GLOBAL_VARS);
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});
