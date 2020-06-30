import { mount } from '@vue/test-utils';
import { Divider } from 'liphu-ui';

describe('Divider', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Divider, {});

		expect(wrapper.classes()).contains('lp-divider');
	});

	it('Dashed', () => {
		wrapper = mount(Divider, {
			propsData: {
				dashed: true
			}
		});

		expect(wrapper.props().dashed).to.be.true;
		expect(wrapper.classes()).contains('lp-divider');
		expect(wrapper.classes()).contains('lp-divider-dashed');
	});

	it('Vertical', () => {
		wrapper = mount(Divider, {
			propsData: {
				vertical: true
			}
		});

		expect(wrapper.props().vertical).to.be.true;
		expect(wrapper.classes()).contains('lp-divider');
		expect(wrapper.classes()).contains('lp-divider-vertical');
	});

	it('Text', () => {
		wrapper = mount(Divider, {
			slots: {
				default: 'Liphu'
			}
		});

		expect(wrapper.classes()).contains('lp-divider');
		expect(wrapper.classes()).contains('lp-divider-has-text');
		expect(
			wrapper.find('span.lp-divider-inner').element.innerHTML
		).to.equal('Liphu');
	});

	it('Align', () => {
		wrapper = mount(Divider, {
			propsData: {
				align: 'left'
			},
			slots: {
				default: 'Liphu'
			}
		});

		expect(wrapper.props().align).to.equal('left');
		expect(wrapper.classes()).contains('lp-divider');
		expect(wrapper.classes()).contains('lp-divider-has-text');
		expect(wrapper.classes()).contains('lp-divider-has-text-left');
		expect(
			wrapper.find('span.lp-divider-inner').element.innerHTML
		).to.equal('Liphu');
		expect(wrapper.vm.$options.props.align.validator('string')).to.be.false;
		expect(wrapper.vm.$options.props.align.validator('left')).to.be.true;
		expect(wrapper.vm.$options.props.align.validator('center')).to.be.true;
		expect(wrapper.vm.$options.props.align.validator('right')).to.be.true;
	});
});
