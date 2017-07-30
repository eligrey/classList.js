'use strict';

describe('.classList.add', function() {

  before(function() {
    browser.url('test/specs/add.html');
    const ab = browser.getAttribute('#native-ab', 'class');
    if(
      browser.getAttribute('#native-simple', 'class') === 'supported' &&
      ab.includes('a') && ab.includes('b')
    ) {
      browser.logger.info(`${agent} skipping .add`);
      this.skip();
    }
  });

  it('adds class "all-good"', function() {
    const classStr = browser.getAttribute('#polyfilled-simple', 'class');
    expect(classStr).to.equal('all-good');
  });

  it('adds classes "a" and "b"', function() {
    const ab = browser.getAttribute('#polyfilled-ab', 'class');
    expect(ab).to.include('a');
    expect(ab).to.include('b');
  });
});
