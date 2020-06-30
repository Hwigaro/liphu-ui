import Vue from 'vue';
import Router from 'vue-router';
import layout from './routes/layout.vue';
import icon from './routes/icon.vue';
import avatar from './routes/avatar.vue';
import card from './routes/card.vue';
import divider from './routes/divider.vue';
import style from './routes/style.vue';

const routesMap = [
	{
		path: '/layout',
		component: layout,
		meta: {
			title: 'Layout'
		}
	},
	{
		path: '/icon',
		component: icon,
		meta: {
			title: 'Icon'
		}
	},
	{
		path: '/avatar',
		component: avatar,
		meta: {
			title: 'Avatar'
		}
	},
	{
		path: '/card',
		component: card,
		meta: {
			title: 'Card'
		}
	},
	{
		path: '/divider',
		component: divider,
		meta: {
			title: 'divider'
		}
	},
	{
		path: '/guidelines/style',
		component: style,
		meta: {
			title: 'Style Guide',
			subtitle: 'Foundation',
			description:
				'These fundamental elements make up our visual design language'
		}
	}
];

// console.log('routes :', routes);

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: routesMap
});

export default router;
