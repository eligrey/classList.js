'use strict';

describe('.classList.toggle', function() {

  before(function() {
    browser.url('test/specs/toggle.html');
    if(
      browser.getAttribute('#native-on', 'class') === 'yo' &&
      browser.getAttribute('#native-off', 'class') === '' &&
      browser.getAttribute('#native-force-on', 'class') ==  'yo' &&
      browser.getAttribute('#native-force-off', 'class') ==  ''
    ) {
      browser.logger.info(`${agent} skipping .toggle`);
      this.skip();
    }
  });

  it('adds class "yo"', function() {
    const classStr = browser.getAttribute('#polyfilled-on', 'class');
    expect(classStr).to.equal('yo');
  });

  it('removes class "yo"', function() {
    const classStr = browser.getAttribute('#polyfilled-off', 'class');
    expect(classStr).to.equal('');
  });

  it('retains class "yo" when force is `true`', function() {
    const classStr = browser.getAttribute('#polyfilled-force-on', 'class');
    expect(classStr).to.equal('yo');
  });

  it('does not add a class when force is `false`', function() {
    const classStr = browser.getAttribute('#polyfilled-force-off', 'class');
    expect(classStr).to.equal('');
  });

});


describe('.classList.toggle return', function() {

  before(function() {
    browser.url('test/specs/toggle.html');
    const toggleOn = browser.execute('return window.nativeToggleOn').value;
    const toggleOff  = browser.execute('return window.nativeToggleOff').value;
    const toggleForceOn  = browser.execute('return window.nativeToggleForceOn').value;
    const toggleForceOff  = browser.execute('return window.nativeToggleForceOff').value;

    if(
      toggleOn === true &&
      toggleOff === false &&
      toggleForceOn === true &&
      toggleForceOff === false
    ) {
      browser.logger.info(`${agent} skipping .toggle return`);
      this.skip();
    }
  });

  it('is `true` when class is toggled on', function() {
    const returnVal = browser.execute('return window.polyfilledToggleOn').value;
    expect(returnVal).to.equal(true);
  });

  it('is `false` when class is toggled off', function() {
    const returnVal = browser.execute('return window.polyfilledToggleOff').value;
    expect(returnVal).to.equal(false);
  });

  it('is `true` when force is `true`', function() {
    const returnVal = browser.execute('return window.polyfilledToggleForceOn').value;
    expect(returnVal).to.equal(true);
  });

  it('is `false` when force is `false`', function() {
    const returnVal = browser.execute('return window.polyfilledToggleForceOff').value;
    expect(returnVal).to.equal(false);
  });

});
