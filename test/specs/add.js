'use strict';

describe('.classList.add', function() {

  before(function() {
    browser.url('test/specs/add.html');
    if(browser.getAttribute('#native', 'class') === 'supported') {
      browser.logger.info(`${agent} skipping .add`);
      this.skip();
    }
  });

  it('adds class "all-good"', function() {
    expect(browser.getAttribute('#polyfilled', 'class')).to.equal('all-good');
  });
});
