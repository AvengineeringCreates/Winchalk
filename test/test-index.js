const chai = require('chai');
const assert = chai.assert;
const Winchalk = require('../src/index');

describe('Winchalk Demonstration', function () {
	it('Critical level test', function () {
		Winchalk.critical("Critical outputs are logged at level 0.")
		assert.equal(
			typeof Winchalk.critical == "function",
			true, 'Winchalk.critical should exist as a function and output black on a red background in console.'
		);
	});
	it('Error level test', function () {
		Winchalk.error("Error outputs are logged at level 1.")
		assert.equal(
			typeof Winchalk.error == "function",
			true, 'Winchalk.error should exist as a function and output red in console.'
		);
	});
	it('Warn level test', function () {
		Winchalk.warn("Warning outputs are logged at level 2.")
		assert.equal(
			typeof Winchalk.warn == "function",
			true, 'Winchalk.warn should exist as a function and output yellow in console.'
		);
	});
	it('Connection level test', function () {
		Winchalk.connection("Connection outputs are logged at level 3.")
        assert.equal(
            typeof Winchalk.connection == "function",
            true, 'Winchalk.connection should exist as a function and output green in console.'
        );
	});
	it('Info level test', function () {
		Winchalk.info("Info outputs are logged at level 4.")
		assert.equal(
			typeof Winchalk.info == "function",
			true, 'Winchalk.info should exist as a function and output white in console.'
		);
	});
	it('Msgin level test', function () {
		Winchalk.msgin("Msgin outputs are logged at level 5.")
		assert.equal(
			typeof Winchalk.msgin == "function",
			true, 'Winchalk.msgin should exist as a function and output cyan in console.'
		);
	});
	it('Msgout level test', function () {
		Winchalk.msgout("Msgout outputs are logged at level 6.")
		assert.equal(
			typeof Winchalk.msgout == "function",
			true, 'Winchalk.msgout should exist as a function and output cyan in console.'
		);
	});
	it('Start level test', function () {
		Winchalk.start("Start outputs are logged at level 7.")
		assert.equal(
			typeof Winchalk.start == "function",
			true, 'Winchalk.start should exist as a function and output bright green in console.'
		);
	});
	it('Debug level test', function () {
		Winchalk.debug("Debug outputs are logged at level 8.")
		assert.equal(
			typeof Winchalk.debug == "function",
			true, 'Winchalk.debug should exist as a function and output gray in console.'
		);
	});
	it('Silly level test', function () {
		Winchalk.silly("Silly outputs are logged at level 9.")
		assert.equal(
			typeof Winchalk.silly == "function",
			true, 'Winchalk.silly should exist as a function and output magenta in console.'
		);
	});
});