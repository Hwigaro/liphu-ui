import Vue from 'vue';
import liphu from 'liphu-ui';

Vue.use(liphu);
Vue.config.devtools = false;

export function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
