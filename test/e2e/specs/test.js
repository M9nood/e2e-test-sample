// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
module.exports = {
  'sample login success': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 1000)
      .assert.containsText('h1', 'Login')
      .setValue('input[name=username]', 'toei')
      .pause(1000)
      .setValue('input[name=password]', '12345')
      .pause(1000)
      .click('button')
      .pause(3000)
      .assert.urlEquals(`${devServer}/home`)
      .assert.containsText('h2', 'Welcome to home page')
      .end()
  }
}
