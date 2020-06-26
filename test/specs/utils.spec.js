import * as utils from 'utils/helpers';

describe('Utils', () => {
	it('Camel to hyphen', () => {
		let text = utils.camelToHyphen('LoremIpsum');

		expect(text).to.equal('lorem-ipsum');
	});

	it('Hypen to camel', () => {
		let text = utils.hypenToCamel('lorem-ipsum-dolor');

		expect(text).to.equal('loremIpsumDolor');
	});

	it('Is integer', () => {
		expect(utils.isInteger(1)).to.be.true;
		expect(utils.isInteger(1.5)).to.be.false;
		expect(utils.isInteger('1.5')).to.be.false;
		expect(utils.isInteger('1')).to.be.true;
		expect(utils.isInteger('text')).to.be.false;
	});

	it('Is number', () => {
		expect(utils.isNumber(1)).to.be.true;
		expect(utils.isNumber(1.5)).to.be.true;
		expect(utils.isNumber('1.5')).to.be.true;
		expect(utils.isNumber('1')).to.be.true;
		expect(utils.isNumber('text')).to.be.false;
	});

	it('One of', () => {
		expect(utils.oneOf(1, [1, 2, 3])).to.be.true;
		expect(utils.oneOf(6, [1, 2, 3])).to.be.false;
		expect(utils.oneOf('1', ['1', 2, '3'])).to.be.true;
		expect(utils.oneOf('6', ['1', 2, '3'])).to.be.false;
		expect(utils.oneOf(null, ['1', 2, '3'])).to.be.true;
		expect(utils.oneOf(null, ['1', 2, '3'], false)).to.be.false;
	});

	it('Capitalize first letter', () => {
		let text = utils.capitalizeFirstLetter('loremIpsum');

		expect(text).to.equal('LoremIpsum');
	});

	it('Guid', () => {
		expect(utils.guid(true)).to.equal(
			'00000000-0000-0000-0000-000000000000'
		);
		expect(utils.guid()).not.to.equal(
			'00000000-0000-0000-0000-000000000000'
		);
	});

	it('Test regex', () => {
		expect(utils.testRegex('[a-z0-9]{5,}', 'abc1')).to.be.false;
		expect(utils.testRegex('[a-z0-9]{5,}', 'abc12')).to.be.true;
	});

	it('Has own', () => {
		let obj = { name: 'name', age: '26' };

		expect(utils.hasOwn(obj, 'age')).to.be.true;
		expect(utils.hasOwn(obj, 'height')).to.be.false;
	});
});
