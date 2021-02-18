import LpButton from './src/button';
import LpButtonGroup from './src/button-group';

[LpButton, LpButtonGroup].forEach(component => {
	/* istanbul ignore next */
	component.install = Vue => {
		Vue.component(component.name, component);
	};
});

export { LpButton, LpButtonGroup };
