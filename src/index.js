import { camelToHyphen } from 'utils/helpers';

import version from 'components/version';
import {
	LpLayout as Layout,
	LpHeader as Header,
	LpFooter as Footer,
	LpContent as Content,
	LpAside as Aside
} from 'components/layout';
import Row from 'components/row';
import Column from 'components/column';
import Container from 'components/container';
import {
	LpCard as Card,
	LpCardMeta as CardMeta,
	LpCardGroup as CardGroup,
	LpCardDeck as CardDeck
} from 'components/card';

const components = [
	Layout,
	Header,
	Footer,
	Content,
	Aside,
	Row,
	Column,
	Container,
	Card,
	CardMeta,
	CardGroup,
	CardDeck
];

const installOptions = options => {
	return {
		componentsPrefix: options.prefix || 'lp',
		cssPrefix: options.cssPrefix || 'lp',
		size: options.size || '',
		zIndex: options.zIndex || 2000,
		dropdownArrows: false,
		iconMap: {
			success: 'checkmark-circle',
			error: 'cross-circle',
			warning: 'warning',
			info: 'notification-circle',
			loading: 'loading'
		}
	};
};

const install = (Vue, options = {}) => {
	Vue.prototype.$liphu = installOptions(options);

	components.forEach(component => {
		component.name = camelToHyphen(
			Vue.prototype.$liphu.componentsPrefix + component.name.substr(2)
		);
		component.install(Vue);
	});
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export {
	Layout,
	Header,
	Footer,
	Content,
	Aside,
	Row,
	Column,
	Container,
	Card,
	CardMeta,
	CardGroup,
	CardDeck
};

export default {
	install,
	installOptions,
	version
};
