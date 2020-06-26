import Vue from 'vue';
import app from './app.vue';
import router from './router';
import liphu from '../src';

console.log('liphu :', liphu);
Vue.use(liphu);

Vue.config.debug = true;

new Vue({
	router,
	render: h => h(app)
}).$mount('#app');
