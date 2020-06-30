<template>
	<div :class="classes">
		<span
			v-if="this.$slots.default && !vertical"
			:class="`${cssPrefix}-divider-inner`"
		>
			<slot />
		</span>
	</div>
</template>

<script>
import { oneOf } from 'utils/helpers';

const defaultName = 'LpDivider';

export default {
	name: 'LpDivider',
	defaultName: defaultName,
	props: {
		dashed: Boolean,
		vertical: Boolean,
		align: {
			type: String,
			default: 'center',
			validator: value => oneOf(value, ['left', 'center', 'right'])
		}
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		},
		classes() {
			return [
				`${this.cssPrefix}-divider`,
				{
					[`${this.cssPrefix}-divider-dashed`]: this.dashed,
					[`${this.cssPrefix}-divider-has-text`]: this.$slots.default,
					[`${this.cssPrefix}-divider-has-text-${this.align}`]:
						this.$slots.default &&
						(this.align == 'left' || this.align == 'right'),
					[`${this.cssPrefix}-divider-vertical`]: this.vertical
				}
			];
		}
	}
};
</script>
