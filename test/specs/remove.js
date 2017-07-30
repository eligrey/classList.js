'use strict';

describe('.classList.remove', function() {

  before(function() {
    browser.url('test/specs/remove.html');
    if(
      browser.getAttribute('#native-simple', 'class') === 'hi' &&
      browser.getAttribute('#native-repeat', 'class') === '' &&
      browser.getAttribute('#native-list', 'class').includes('yo') == false
    ) {
      browser.logger.info(`${agent} skipping .remove`);
      this.skip();
    }
  });

  it('removes "yo"', function() {
    expect(browser.getAttribute('#polyfilled-simple', 'class')).to.equal('hi');
  });

  it('removes all instances of "yo"', function() {
    expect(browser.getAttribute('#polyfilled-repeat', 'class')).to.equal('');
  });

  it('removes "yo" from a list of classes', function() {
    const classStr = browser.getAttribute('#polyfilled-list', 'class');
    expect(classStr).to.not.include('yo');
  });

});
