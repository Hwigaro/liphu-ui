import Vue from 'vue';
import liphu from '../src';

Vue.use(liphu);
Vue.config.devtools = false;

export function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
