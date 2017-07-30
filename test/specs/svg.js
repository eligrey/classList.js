'use strict';

describe('svgElement.classList', function() {

  before(function() {
    browser.url('test/specs/svg.html');
    if(browser.getAttribute('#native', 'class') == 'green') {
      browser.logger.info(`${agent} skipping svg .classList`);
      this.skip();
    }
  });

  it('has "red" removed and "green" toggled on', function() {
    const classStr = browser.getAttribute('#polyfilled', 'class');
    expect(classStr).to.equal('green');
  });

});
