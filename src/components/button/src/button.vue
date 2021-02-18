<template>
	<button
		:type="nativeType"
		:class="classes"
		:disabled="disabled || loading"
		@click="handleClick"
	>
		<i v-if="type != 'link' && (icon || loading)" :class="iconClasses"></i>
		<span v-if="$slots.default" :class="`${cssPrefix}-btn-text`">
			<slot />
		</span>
	</button>
</template>

<script>
import { oneOf } from 'utils/helpers';
const defaultName = 'LpButton';

export default {
	name: 'LpButton',
	defaultName: defaultName,
	props: {
		variant: {
			type: String,
			default: 'default'
		},
		size: {
			type: String,
			validator: value => oneOf(value, ['xs', 'sm', 'lg', 'xl', 'xxl'])
		},
		shape: {
			type: String,
			default: 'square',
			validator: value => oneOf(value, ['circle', 'square'])
		},
		type: {
			type: String,
			validator: value =>
				oneOf(value, [
					'dashed',
					'outline',
					'default',
					'link',
					'ghost',
					'hollow',
					'hollow-hover',
					'dashed-hover'
				])
		},
		nativeType: {
			type: String,
			default: 'button'
		},
		icon: String,
		disabled: Boolean,
		loading: Boolean
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		},
		classes() {
			return [
				`${this.cssPrefix}-btn`,
				{
					[`${this.cssPrefix}-btn-${this.variant}`]: !this.type,
					[`${this.cssPrefix}-btn-${this.btnSize}`]: this.btnSize,
					[`${this.cssPrefix}-btn-link`]: this.type === 'link',
					[`${this.cssPrefix}-btn-${this.type}-${this.variant}`]: this
						.type,
					[`${this.cssPrefix}-btn-circle`]: this.shape === 'circle'
				}
			];
		},
		iconClasses() {
			return [
				`${this.cssPrefix}-icon`,
				{
					[`${this.cssPrefix}-icon-${this.icon}`]:
						this.icon && !this.loading,
					[`${this.cssPrefix}-icon-loading`]:
						this.loading && this.type != 'link'
				}
			];
		},
		btnSize() {
			return this.size || (this.$liphu || {}).size;
		}
	},
	methods: {
		handleClick(e) {
			this.$emit('click', e);
		}
	}
};
</script>
