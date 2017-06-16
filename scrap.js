var Nightmare = require('nightmare');
var nightmare = Nightmare({
  show: true
});

nightmare
  .goto(
    'http://www.putco.com/products.cfm?action=ProductView&Product=68308BE5-C204-E1B2-B125-8C8675A02F4A&Category=18E1733D-089E-9305-E1F9-2857B8966C09&partID=C57295B9-0C65-7640-A33A-ACDE617D2B4F&Avail=1'
  )
  .wait(2000)
  .type('div.homepageSearchSection input[name="Search"]', '9751221BP')
  // .click('div.homepageSearchSection input[class="searchSubmit"]')
  // .wait(2000)
  // .wait('.topLinks menuCart')
  .evaluate(function() {
    // return document.querySelector('#zero_click_wrapper.c
    -info__title a ').href;
    return document.querySelectorAll('td[style]')[1].innerHTML;
    // document.querySelector("div.user-panel.main
    input[name = 'login']
    ")
    // input[name="titleNo"]
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error('Search failed:',
      error);
  });
