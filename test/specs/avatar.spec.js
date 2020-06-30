import { mount } from '@vue/test-utils';
import { Avatar } from 'liphu-ui';

describe('Avatar', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Avatar);

		expect(wrapper.classes()).contains('lp-avatar');
	});

	it('Variant', () => {
		wrapper = mount(Avatar, {
			propsData: {
				variant: 'primary'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.classes()).contains('lp-avatar-primary');
		expect(wrapper.props().variant).to.equal('primary');
	});

	it('Size', () => {
		wrapper = mount(Avatar, {
			propsData: {
				size: 'sm'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.classes()).contains('lp-avatar-sm');

		wrapper.setProps({ size: 64 });

		return wrapper.vm.$nextTick().then(() => {
			expect(wrapper.element.style.width).to.equal('64px');
			expect(wrapper.element.style.height).to.equal('64px');
			expect(wrapper.element.style.lineHeight).to.equal('64px');
			expect(wrapper.element.style.fontSize).to.equal('32px');
		});
	});

	it('Shape', () => {
		wrapper = mount(Avatar, {
			propsData: {
				shape: 'square'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.classes()).contains('lp-avatar-square');
		expect(wrapper.vm.$options.props.shape.validator('diamond')).to.be
			.false;
	});

	it('Icon', () => {
		wrapper = mount(Avatar, {
			propsData: {
				icon: 'user'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.find('i').classes()).contains('lp-icon');
		expect(wrapper.find('i').classes()).contains('lp-icon-user');
	});

	it('Image', () => {
		wrapper = mount(Avatar, {
			propsData: {
				src: '/images/bodoque.png',
				alt: 'bodoque'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.classes()).contains('bg-transparent');
		expect(wrapper.find('img').attributes().src).to.equal(
			'/images/bodoque.png'
		);
		expect(wrapper.find('img').attributes().alt).to.equal('bodoque');
		expect(
			wrapper
				.findAll('div')
				.at(1)
				.classes()
		).contains('shadow');
	});

	it('Content', () => {
		wrapper = mount(Avatar, {
			slots: {
				default: 'Liphu'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.find('span.content').text()).to.equal('Liphu');
	});

	it('Random', async done => {
		wrapper = mount(Avatar, {
			propsData: {
				variant: 'random'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		await setTimeout(async () => {
			expect(wrapper.vm.innerVariant).not.to.equal('');
		}, 500);

		let variant = wrapper.vm.innerVariant;

		await setTimeout(async () => {
			expect(wrapper.vm.innerVariant).not.to.equal(variant);
			done();
		}, 500);
	});
});
