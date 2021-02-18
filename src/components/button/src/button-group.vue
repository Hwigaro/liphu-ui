<template>
	<div :class="classes">
		<slot />
	</div>
</template>

<script>
import { oneOf } from 'utils/helpers';

const defaultName = 'LpButtonGroup';

export default {
	name: 'LpButtonGroup',
	defaultName: defaultName,
	props: {
		size: {
			type: String,
			validator: value => oneOf(value, ['xs', 'sm', 'lg', 'xl', 'xxl'])
		},
		vertical: Boolean
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		},
		classes() {
			return [
				[`${this.cssPrefix}-btn-group`],
				{
					[`${this.cssPrefix}-btn-group-vertical`]: this.vertical,
					[`${this.cssPrefix}-btn-group-${this.size}`]: this.size
				}
			];
		}
	}
};
</script>
